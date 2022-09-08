import { FC } from 'react'
import { CustomRoutes } from 'react-admin'
import { Route } from 'react-router-dom'
import { AlbumsAdminPage } from './albums/AlbumsAdminPage'
import { PhotosGallery } from './photos/gallery/PhotosGallery'
import { ROUTE } from './NavigationService'

export const App: FC = () => {
  return (
      <AlbumsAdminPage>
          <CustomRoutes>
              <Route path={`/${ROUTE.ALBUMS}/:userId/${ROUTE.PHOTOS}`} element={<PhotosGallery />} />
          </CustomRoutes>
      </AlbumsAdminPage>
  )
}
