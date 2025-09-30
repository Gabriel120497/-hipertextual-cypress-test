class ArticlePage {
    elements = {
        continueReadingButton: () => cy.get('.tbl-read-more-btn.tbl-read-more-trecs-btn', { timeout: 15000 }),
        newsletterFrame: () => cy.get('[data-test-id="beehiiv-embed"]', { timeout: 20000 }),
        newsletterEmailInput: () => cy.get('input[type="email"]'),
        newsletterSubmitButton: () => cy.get('button').contains('Suscríbete'),
    }

    generateRandomEmail() {
        const timestamp = new Date().getTime();
        const randomString = Math.random().toString(36).substring(2, 8);
        return `test_${randomString}_${timestamp}@example.com`;
    }

    printTitle() {
        cy.title().then(title => {
            cy.log('Page Title:', title);
        });
    }

    suscribeNewsletter() {
        const email = this.generateRandomEmail();
        
        cy.intercept('POST', '**/submit*', {
            statusCode: 200,
            body: {
                success: true,
                message: 'Subscription successful'
            }
        }).as('submitRequest');
        
        // Hacer scroll al botón y hacer clic
        //this.elements.continueReadingButton().scrollIntoView().click();
        
        // Esperar a que el iframe esté disponible y hacer scroll
        this.elements.newsletterFrame()
            .scrollIntoView()
            .should('be.visible')
            .then($iframe => {
                // Esperar a que el iframe cargue completamente
                return new Cypress.Promise(resolve => {
                    $iframe.on('load', () => {
                        resolve($iframe.contents().find('body'));
                    });
                });
            })
            .within($body => {
                // Interactuar con los elementos dentro del iframe
                this.elements.newsletterEmailInput()
                    .should('be.visible')
                    .clear()
                    .type(email, { force: true });
                
                this.elements.newsletterSubmitButton()
                    .should('be.visible')
                    .click({ force: true });
            });
            
        // Esperar a cualquiera de las peticiones interceptadas
        cy.wait(['@submitRequest'], { timeout: 10000 })
            .then(() => {
                // Verificar varios posibles mensajes de éxito
                cy.get('[data-test-id="beehiiv-embed"]')
                    .should('be.visible')
                    .then($iframe => {
                        const $body = $iframe.contents().find('body');
                        // Buscar diferentes variaciones del mensaje de éxito
                        const successMessages = '¡Listo, estás suscrito!'
                        
                        const foundMessage = $body.text().includes(successMessages)
                        
                        expect(foundMessage, '¡Listo, estás suscrito!').to.be.true;
                    });
            });
    }
}

export default ArticlePage;
