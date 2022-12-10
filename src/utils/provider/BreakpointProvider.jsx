import { createContext, useState, useEffect } from "react"

const initialBreakpoint = () => ({
  bp: {
    // EXACT
    xs: false,
    sm: false,
    md: false,
    lg: false,
    xl: false,
    '2xl': false,
    '3xl': false,
    // DOWN
    smAndDown: false,
    mdAndDown: false,
    lgAndDown: false,
    xlAndDown: false,
    // UP
    smAndUp: false,
    mdAndUp: false,
    lgAndUp: false,
    xlAndUp: false,
  }
})

const calculateBreakpoint = width => {
  return {
    // EXACT
    xs: width < 576,
    sm: width >= 576 && width < 768,
    md: width >= 768 && width < 992,
    lg: width >= 992 && width < 1200,
    xl: width >= 1200 && width < 1536,
    '2xl': width >= 1400,
    '3xl': width >= 1600,
    // DOWN
    smAndDown: width < 768,
    mdAndDown: width < 992,
    lgAndDown: width < 1200,
    xlAndDown: width < 1400,
    // UP
    smAndUp: width >= 640,
    mdAndUp: width >= 768,
    lgAndUp: width >= 992,
    xlAndUp: width >= 1200,
  }
}

const breakpointContext = createContext(initialBreakpoint())

const BreakpointProvider = ({ children }) => {

  const [tm, setTm] = useState(null)
  const [bp, setBp] = useState(null)

  const onResize = e => {
    if (tm) return;
    setTm(setTimeout(() => {
      setBp(calculateBreakpoint(e.target.innerWidth))
      clearTimeout(tm)
      setTm(null)
    }, 300))
  }

  useEffect(() => {
    setBp(calculateBreakpoint(window.innerWidth));
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize)
    }
  }, [])


  return (
    <breakpointContext.Provider value={{ ...bp }}>
      {children}
    </breakpointContext.Provider>
  )
}

export { breakpointContext }
export default BreakpointProvider


