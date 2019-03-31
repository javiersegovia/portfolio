import { useState, useRef, useLayoutEffect } from 'react'
import ResizeObserver from 'resize-observer-polyfill'

// eslint-disable-next-line
export function useMeasure(index) {
  const ref = useRef(null)
  const [bounds, set] = useState({
    left: 0,
    top: 0,
    width: 0,
    height: 'auto'
  })

  useLayoutEffect(() => {
    const ro = new ResizeObserver(([entry]) => set(entry.contentRect))
    if (ref.current) {
      ro.observe(ref.current)
    }
    return () => ro.disconnect()
  }, [index])
  return [ref, bounds]
}
