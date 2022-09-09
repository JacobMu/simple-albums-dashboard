import { CardHeader, CardContent } from '@mui/material'
import { FC, ReactNode } from 'react'

interface Props {
  children?: ReactNode
}

export const PhotosGalleryCardBody: FC<Props> = ({ children }) => {
  return (
        <>
            <CardHeader title={<span data-cy="gallery-title">Gallery of photos</span>} />
            <CardContent>{children}</CardContent>
        </>
  )
}
