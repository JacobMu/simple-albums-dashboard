import { FC } from 'react'
import { Card, CardHeader, CardContent, CircularProgress, Alert, ImageListItem, ImageList, Stack } from '@mui/material'
import { usePhotosGallery } from './usePhotosGallery'

export const PhotosGallery: FC = () => {
  const { error, isLoading, observableNodeRef, collection } = usePhotosGallery()

  if (isLoading && collection.length === 0) {
    return (
            <Card>
                <CardHeader title={<span data-cy="gallery-title">Gallery of photos</span>} />
                <CardContent>
                    <CircularProgress />
                </CardContent>
            </Card>
    )
  }

  if (error !== null) {
    return (
            <Card>
                <CardHeader title={<span data-cy="gallery-title">Gallery of photos</span>} />
                <CardContent>
                    <Alert severity="error">There was an error</Alert>
                </CardContent>
            </Card>
    )
  }

  return (
      <Stack spacing={2} style={{ marginTop: '20px' }}>
          <Card>
              <div>
                  <CardHeader title={<span data-cy="gallery-title">Gallery of photos</span>} />
                  <CardContent>
                      <ImageList
                          sx={{ width: '100%', minHeight: '10%' }}
                          cols={3}
                      >
                          {collection.map(({ id, title, url }) => (
                              <ImageListItem key={id} >
                                  <img alt={title} loading="lazy" src={url} data-cy="image-tile"/>
                              </ImageListItem>
                          ))}
                      </ImageList>
                  </CardContent>
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
