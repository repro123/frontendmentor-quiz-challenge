// import bgDesktopDark from "@/assets/images/pattern-background-desktop-dark.svg";
// import bgDesktopLight from "@/assets/images/pattern-background-desktop-light.svg";
// import bgMobileDark from "@/assets/images/pattern-background-mobile-dark.svg";
// import bgMobileLight from "@/assets/images/pattern-background-mobile-light.svg";
// import bgTabletDark from "@/assets/images/pattern-background-tablet-dark.svg";
// import bgTabletLight from "@/assets/images/pattern-background-tablet-light.svg";
// import { useMediaQuery } from "@/hooks";
// import { useTheme } from "@/hooks/useTheme";

// function Background() {
//   const { isDark } = useTheme();

//   const isDesktop = useMediaQuery("(min-width:1024px)");
//   const isTablet = useMediaQuery("(min-width:768px)");

//   let bg;

//   if (isDark) {
//     bg = isDesktop ? bgDesktopDark : isTablet ? bgTabletDark : bgMobileDark;
//   } else {
//     bg = isDesktop ? bgDesktopLight : isTablet ? bgTabletLight : bgMobileLight;
//   }

//   return (
//     <div
//       className="fixed inset-0 -z-10 bg-no-repeat bg-cover"
//       style={{ backgroundImage: `url("${bg}")` }}
//     />
//   );
// }

// export default Background;

import bgDesktopDark from "@/assets/images/pattern-background-desktop-dark.svg";
import bgDesktopLight from "@/assets/images/pattern-background-desktop-light.svg";
import bgMobileDark from "@/assets/images/pattern-background-mobile-dark.svg";
import bgMobileLight from "@/assets/images/pattern-background-mobile-light.svg";
import bgTabletDark from "@/assets/images/pattern-background-tablet-dark.svg";
import bgTabletLight from "@/assets/images/pattern-background-tablet-light.svg";
import { useMediaQuery } from "@/hooks";
import { useTheme } from "@/hooks/useTheme";

function Background() {
  const { isDark } = useTheme();

  const isDesktop = useMediaQuery("(min-width:1024px)");
  const isTablet = useMediaQuery("(min-width:768px)");

  const lightBg = isDesktop
    ? bgDesktopLight
    : isTablet
      ? bgTabletLight
      : bgMobileLight;

  const darkBg = isDesktop
    ? bgDesktopDark
    : isTablet
      ? bgTabletDark
      : bgMobileDark;

  return (
    <div className="fixed inset-0 -z-10">
      {/* Light layer */}
      <div
        className="absolute inset-0 bg-cover bg-no-repeat transition-all duration-300 ease-in-out"
        style={{
          backgroundImage: `url("${lightBg}")`,
          opacity: isDark ? 0 : 1,
        }}
      />

      {/* Dark layer */}
      <div
        className="absolute inset-0 bg-cover bg-no-repeat transition-all duration-300 ease-in-out"
        style={{
          backgroundImage: `url("${darkBg}")`,
          opacity: isDark ? 1 : 0,
        }}
      />
    </div>
  );
}

export default Background;
