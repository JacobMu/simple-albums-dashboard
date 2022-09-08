import { useParams } from 'react-router-dom'
import { MutableRefObject, useEffect, useRef, useState } from 'react'
import { useGetList } from 'react-admin'
import { Photo } from '../types'
import { useIntersectionObserver } from '../../app-utils/infinite-scroll/useIntersectionObserver'

interface HookResult {
  observableNodeRef: MutableRefObject<HTMLDivElement | null>
  isLoading: boolean
  error: Error | null
  collection: Photo[]
}

export const usePhotosGallery = (): HookResult => {
  const { userId } = useParams()
  const [page, setPage] = useState(1)
  const { data: photos = [], isLoading, error, total, isFetched } = useGetList<Photo>(
    'photos', {
      pagination: { perPage: 25, page },
      filter: { albumId: userId },
      sort: { order: 'ASC', field: 'id' }
    },
    {
      staleTime: 10000
    }
  )
  const collectionRef = useRef<Photo[]>([])

  useEffect(() => {
    if (isFetched && photos) {
      collectionRef.current = [...collectionRef.current, ...photos]
    }
  })

  const onCrossingThreshold = (entries: IntersectionObserverEntry[]): void => {
    if (entries[0].isIntersecting) {
      setPage((previousPage) => previousPage + 1)
    }
  }
  console.log(total, collectionRef.current.length)

  const { observableNodeRef } = useIntersectionObserver({
    onCrossingThreshold,
    threshold: 0
  })

  return {
    observableNodeRef,
    isLoading,
    error,
    collection: collectionRef.current
  }
}
