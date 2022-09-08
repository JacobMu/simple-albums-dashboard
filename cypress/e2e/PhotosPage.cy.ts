import { GALLERY } from '../fixtures/PhotosPage.json'
import { ALBUMS } from '../fixtures/AlbumPage.json'

function visitPhotosPage(): void {
  cy.visit('/')

  cy.get(ALBUMS.ALBUM_TITLE).first().click()
}

describe('PhotosPage', () => {
  it('Shows gallery page with photos when I visit the photos page', () => {
    visitPhotosPage()

    cy.get(GALLERY.TITLE).should('be.visible')
    cy.url().should('include', '/1/photos')
    cy.get(GALLERY.PHOTO_TILE).should('be.visible').should('have.length', 50)
  })
})
