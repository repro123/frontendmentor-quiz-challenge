// import { createContext, useEffect, useState } from "react";

// export const ThemeContext = createContext();

// export function ThemeProvider({ children }) {
//   const [dark, setDark] = useState(false);

//   useEffect(() => {
//     document.documentElement.classList.toggle("dark", dark);
//   }, [dark]);

//   return (
//     <ThemeContext.Provider value={{ dark, setDark }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// }

import { createContext } from "react";

export const ThemeContext = createContext();
