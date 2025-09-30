class HomePage {
    elements = {
        searchToggle: () => cy.get('[id=search-toggle]'),
        headerSearch: () => cy.get('#header-search'),
        searchInput: () => cy.get('#search-form-2'),
        articleLink: () => cy.contains('h2', 'Reed')
    }

    visit() {
        cy.visit('/')
    }

    search() {
        this.elements.searchToggle()
            .should('be.visible')
            .click();
        this.elements.headerSearch()
            .then($el => {
                $el.css('display', 'block');
            });
        this.elements.searchInput()
            .should('be.visible')
            .clear()
            .type('Steve Jobs{enter}', { delay: 100 });
    }

    scrollToArticle() {
        this.elements.articleLink()
            .scrollIntoView({ duration: 2000 })
            .should('be.visible').click();
    }
}

export default HomePage;
