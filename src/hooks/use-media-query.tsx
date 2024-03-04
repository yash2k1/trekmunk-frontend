'use client'
import * as React from "react"
//This is for media query porpuse for shadcn components. 
export function useMediaQuery(query: string) {
  const [value, setValue] = React.useState<boolean>(false)

  React.useEffect(() => {
    function onChange(event: MediaQueryListEvent) {
      setValue(event.matches)
    }

    const result = matchMedia(query)
    result.addEventListener("change", onChange)
    setValue(result.matches)

    return () => result.removeEventListener("change", onChange)
  }, [query])

  return value
}