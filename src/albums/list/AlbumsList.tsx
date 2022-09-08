import { Datagrid, FunctionField, List, ReferenceInput, TextField } from 'react-admin'
import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { getSpecificAlbumPhotosRoute } from '../../NavigationService'

export const AlbumList: FC = () => {
  const navigate = useNavigate()
  const handleRowClick = (id: number | string): void => navigate(getSpecificAlbumPhotosRoute(id))

  return (
    <List
        title={<span data-cy="albums-list-title">List of albums</span>}
        data-cy="albums-list"
        resource="albums"
        actions={false}
        perPage={25}
        filters={[
            <ReferenceInput
                label="User"
                source="userId"
                reference="users"
                name="search-user-id"
                key="search-user-id"
                alwaysOn
                open
            />
        ]}>
        <Datagrid stickyHeader bulkActionButtons={false} style={{ paddingTop: '20px' }}>
            <TextField source="userId" />
            <TextField source="id" />
            <FunctionField
                data-cy="album-title"
                label="Title"
                style={{ cursor: 'pointer' }}
                render={(record: {title: string, id: string | number}) => <div onClick={() => handleRowClick(record.id)}>{record.title}</div>}
            />;
        </Datagrid>
    </List>
  )
}
