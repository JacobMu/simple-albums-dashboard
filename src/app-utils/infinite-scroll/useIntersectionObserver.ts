import { MutableRefObject, useEffect, useRef } from 'react'

interface HookParam {
  threshold: number
  rootMargin?: string
  onCrossingThreshold: (observerEntries: IntersectionObserverEntry[]) => void
}

interface HookResult {
  observableNodeRef: MutableRefObject<HTMLDivElement | null>
}

export const useIntersectionObserver = ({ onCrossingThreshold, threshold, rootMargin }: HookParam): HookResult => {
  const observableNodeRef = useRef<null | HTMLDivElement>(null)
  const intersectionObserver = new IntersectionObserver(onCrossingThreshold, {
    threshold,
    rootMargin: rootMargin ?? '0px',
    root: null
  })

  useEffect(() => {
    if (observableNodeRef.current) {
      intersectionObserver.observe(observableNodeRef.current)
    }
  }, [observableNodeRef.current])

  useEffect(() => () => intersectionObserver.disconnect(), [])

  return {
    observableNodeRef
  }
}
