
import * as React from "react"

// Define the breakpoints to match your tailwind.config.ts
const breakpoints = {
  xs: 475,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
}

type Breakpoint = keyof typeof breakpoints
type BreakpointState = Record<Breakpoint, boolean>

export function useResponsive() {
  const [state, setState] = React.useState<BreakpointState>({
    xs: false,
    sm: false,
    md: false,
    lg: false,
    xl: false,
    "2xl": false,
  })

  React.useEffect(() => {
    // Create media query lists for each breakpoint
    const mediaQueries = Object.entries(breakpoints).map(([key, value]) => {
      return {
        key: key as Breakpoint,
        mql: window.matchMedia(`(min-width: ${value}px)`),
      }
    })

    // Update state based on initial match
    const initialState = mediaQueries.reduce<BreakpointState>(
      (acc, { key, mql }) => {
        acc[key] = mql.matches
        return acc
      },
      { ...state }
    )
    setState(initialState)

    // Add listeners for changes
    const handlers = mediaQueries.map(({ key, mql }) => {
      const handler = (e: MediaQueryListEvent) => {
        setState((prev) => ({
          ...prev,
          [key]: e.matches,
        }))
      }
      mql.addEventListener("change", handler)
      return { mql, handler }
    })

    // Cleanup listeners
    return () => {
      handlers.forEach(({ mql, handler }) => {
        mql.removeEventListener("change", handler)
      })
    }
  }, [])

  // Utility getters for easy access
  const isMobile = !state.md
  const isTablet = state.md && !state.lg
  const isDesktop = state.lg
  
  return {
    breakpoints: state,
    isMobile,
    isTablet,
    isDesktop,
  }
}
