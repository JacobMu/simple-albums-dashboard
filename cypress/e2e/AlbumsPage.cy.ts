import { ALBUMS } from '../fixtures/AlbumPage.json'

describe('AlbumsPage', () => {
  it('Shows albums page when I visit the index page', () => {
    cy.visit('/')

    cy.get(ALBUMS.PAGE_TITLE).should('be.visible')
    cy.get(ALBUMS.LIST).should('be.visible')
    cy.get(ALBUMS.ALBUM_TITLE).should('be.visible').and('have.length', 25)
  })

  it('Filters albums by user id', () => {
    cy.visit('/')

    cy.get(ALBUMS.FILTER_INPUT).click().get(ALBUMS.DROPDOWN_OPTION).click()
    cy.get(ALBUMS.ALBUM_TITLE).should('have.length', 10)
  })
})
