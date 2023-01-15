import { createContext, useState, useEffect, useCallback } from 'react';

// interface bpType

interface breakPointType {
  xs: boolean | number;
  sm: boolean | number;
  md: boolean | number;
  lg: boolean | number;
  xl: boolean | number;
  '2xl': boolean | number;
  '3xl': boolean | number;
  // DOWN
  smAndDown: boolean | number;
  mdAndDown: boolean | number;
  lgAndDown: boolean | number;
  xlAndDown: boolean | number;
  // UP
  smAndUp: boolean | number;
  mdAndUp: boolean | number;
  lgAndUp: boolean | number;
  xlAndUp: boolean | number;
}

// interface initialBreakpointType {
//   bp: breakPointType;
// }

const initialBreakpoint = (): any => ({
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
  },
});

const calculateBreakpoint = (width: number): breakPointType => {
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
  };
};

const breakpointContext = createContext(initialBreakpoint());

interface BreakpointProviderProps {
  children: React.ReactNode;
}

const BreakpointProvider: React.FC<BreakpointProviderProps> = ({
  children,
}) => {
  const [tm, setTm] = useState<any>(null);
  const [bp, setBp] = useState<any>(null);

  const onResize = useCallback(
    (e: Event) => {
      const { target } = e;
      if (tm) return;
      setTm(
        setTimeout(() => {
          setBp(calculateBreakpoint((target as Window).innerWidth));
          clearTimeout(tm);
          setTm(null);
        }, 300)
      );
    },
    [tm]
  );

  useEffect(() => {
    setBp(calculateBreakpoint(window.innerWidth));
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, [onResize]);

  return (
    <breakpointContext.Provider value={{ ...bp }}>
      {children}
    </breakpointContext.Provider>
  );
};

export { breakpointContext };
export default BreakpointProvider;
