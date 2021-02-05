import { useRef, useEffect } from "react"

export const onFirstRender = (cb: Function) => {
  const isFirstRef = useRef(true)
  useEffect(() => {
    if (isFirstRef.current) {
      cb()
      isFirstRef.current = false
    }
  })
}
export default onFirstRender
