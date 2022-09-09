import { FC } from 'react'
import { Card, CircularProgress, Alert, ImageListItem, ImageList, Stack } from '@mui/material'
import { usePhotosGallery } from './usePhotosGallery'
import { PhotosGalleryCardBody } from './PhotosGalleryCardBody'
import { GalleryTile } from './gallery-tile/GalleryTile'

export const PhotosGallery: FC = () => {
  const { error, isLoading, observableNodeRef, collection } = usePhotosGallery()

  if (isLoading && collection.length === 0) {
    return (
            <Card>
                <PhotosGalleryCardBody>
                    <CircularProgress />
                </PhotosGalleryCardBody>
            </Card>
    )
  }

  if (error !== null) {
    return (
            <Card>
                <PhotosGalleryCardBody>
                    <Alert severity="error">There was an error</Alert>
                </PhotosGalleryCardBody>
            </Card>
    )
  }

  return (
      <Stack spacing={2} style={{ marginTop: '20px' }}>
          <Card>
              <div>
                  <PhotosGalleryCardBody>
                      <ImageList
                          sx={{ width: '100%', minHeight: '10%' }}
                          cols={3}
                      >
                          {collection.map(({ id, title, url }) => (
                              <GalleryTile id={id} title={title} imageSrc={url} key={id}/>
                          ))}
                      </ImageList>
                  </PhotosGalleryCardBody>
                  <div
                      ref={observableNodeRef}
                      style={{
                        margin: '40px 10px',
                        width: '100%',
                        height: '30px'
                      }}
                  >
                      {isLoading && <CircularProgress />}
                  </div>
              </div>
          </Card>
      </Stack>

  )
}
