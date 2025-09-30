import ArticlePage from '../pages/ArticlePage'
import HomePage from '../pages/HomePage'

describe('Hipertextual Home Page', () => {
    const homePage = new HomePage()
    const articlePage = new ArticlePage()

    beforeEach(() => {
        homePage.visit()
    })

     it('should load the home page successfully', () => {
        homePage.search();
        homePage.scrollToArticle();
        articlePage.printTitle();
        cy.url().should('eq', 'https://hipertextual.com/economia-empresas/reed-jobs-hijo-steve-jobs-yosemite-nuevos-tratamientos-cancer/')
    }) 

    it('should perform a search for Steve Jobs', () => {
        homePage.search();
        homePage.scrollToArticle();
        articlePage.suscribeNewsletter();
    } )  
})
