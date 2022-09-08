import { Admin, Resource } from 'react-admin'
import { createDataProvider } from '../ApiDataProvider'
import { AlbumList } from './list/AlbumsList'
import { FC, ReactNode } from 'react'

interface Props {
  children?: ReactNode
}

export const AlbumsAdminPage: FC<Props> = ({ children }) => (
    <Admin dataProvider={createDataProvider()}><Resource name="albums" list={AlbumList} />{children}</Admin>
)
