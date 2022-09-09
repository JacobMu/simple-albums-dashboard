import { ImageListItem } from '@mui/material'
import { FC } from 'react'

interface Props {
  id: number
  title: string
  imageSrc: string
}

export const GalleryTile: FC<Props> = ({ id, title, imageSrc }) => {
  return (
        <ImageListItem>
            <img alt={title} loading="lazy" src={imageSrc} data-cy="image-tile"/>
        </ImageListItem>
  )
}
