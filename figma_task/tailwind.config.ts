import { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        container: "1440px",
      },

      colors: {
        background: "#ffffff",
        foreground: "#171717",
        mypink: "#F85E9F",
        mypurple: "#5D50C6",
        myorange: "#FF5722",
        mygray: "#6b7280",
        mydarkgray: "#030712",
        myhovergray: "#222831",
      },

      backgroundImage: {
        "custom-gradient":
          "linear-gradient(to bottom right, rgba(255,218,206,1), rgba(255,255,255,0.65), rgba(254,248,232,1))",
      },


      spacing: {
        "container-sm": "16px",
        "container-md": "32px",
        "container-lg": "165px",
        "gap-sm": "16px",
        "gap-md": "32px",
        "gap-lg": "64px",
      },

      fontSize: {
        "text-xs": "10px",
        "text-sm": "12px",
        "text-base": "14px",
        "text-lg": "16px",
        "text-md": "18px",
        "text-xl": "20px",
        "text-2xl": "24px",
        "text-3xl": "32px",
        "text-6xl": "64px",
      },

      fontWeight: {
        "font-bold": "700",
        "font-semibold": "900",
      },

      borderRadius: {
        "btn-rounded": "100px",
      },

    },
  },
  plugins: [
    plugin(function ({ addComponents, theme }) {
      addComponents({
        //  ************* classes for Header *************

        ".headergenel": {
          mx: "auto",
        },
        ".mybutton": {
          fontSize: theme("fontSize.text-base"),
          fontWeight: theme("fontWeight.font-bold"),
          color: "rgba(25, 24, 37, 0.5)",
          transition: "color 0.3s ease-in-out",
          py: "8px",
          "&:hover": {
            color: theme("colors.myhovergray"),
          },
          "@screen sm": {
            fontSize: theme("fontSize.text-sm"),
          },
          "@screen md": {
            fontSize: theme("fontSize.text-base"),
          },
          "@screen lg": {
            fontSize: theme("fontSize.text-lg"),
          },
        },

        ".purplebutton": {
          fontSize: theme("fontSize.text-base"),
          width: "115px",
          height: "49px",
          padding: "16px 32px",
          gap: "8px",
          py: "8px",
          borderRadius: theme("borderRadius.btn-rounded"),
          backgroundColor: theme("colors.mypurple"),
          color: theme("colors.background"),
          fontWeight: theme("fontWeight.font-bold"),
          textAlign: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          "@screen sm": {
            fontSize: theme("fontSize.text-sm"),
          },
          "@screen md": {
            fontSize: theme("fontSize.text-base"),
          },
          "@screen lg": {
            fontSize: theme("fontSize.text-lg"),
          },
        },

        ".header-container": {
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: theme("height.header-height"),
          marginBottom: theme("spacing.container-md"),
          paddingLeft: theme("spacing.container-sm"),
          paddingRight: theme("spacing.container-sm"),
          "@screen sm": {
            paddingLeft: theme("spacing.container-md"),
            paddingRight: theme("spacing.container-md"),
          },
          "@screen md": {
            paddingLeft: "48px",
            paddingRight: "48px",
          },
          "@screen lg": {
            paddingLeft: "64px",
            paddingRight: "64px",
          },
          "@screen xl": {
            paddingLeft: "96px",
            paddingRight: "96px",
          },
          "@screen 2xl": {
            paddingLeft: "112px",
            paddingRight: "112px",
          },
        },

        ".logo-container": {
          display: "flex",
          alignItems: "center",
          gap: theme("spacing.gap-sm"),
          "@screen sm": {
            gap: theme("spacing.gap-md"),
          },
        },

        ".Travlog-container": {
          color: theme("colors.mydarkgray"),
          fontWeight: theme("fontWeight.font-bold"),
          fontSize: theme("fontSize.text-xs"),
          "@screen sm": {
            fontSize: theme("fontSize.text-base"),
          },
          "@screen md": {
            fontSize: theme("fontSize.text-xl"),
          },
          "@screen lg": {
            fontSize: theme("fontSize.text-2xl"),
          },
        },

        ".auth-container": {
          display: "none",
          "@screen sm": {
            display: "flex",
            alignItems: "center",
            height: "113px",
            gap: theme("spacing.gap-sm"),
          },
        },
        ".hamburger-menu": {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: theme("spacing.10"),
          height: theme("spacing.10"),
          "@screen sm": {
            display: "none",
          },
          "@screen md": {
            display: "none",
          },
        },

        ".navigation-container": {
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: theme("spacing.gap-sm"),
          position: "absolute",
          top: "113px",
          left: "0",
          right: "0",
          padding: theme("spacing.container-sm"),
          flexDirection: "column",
          backgroundColor: theme("colors.background"),
          zIndex: "100",
          transition: "all 0.3s ease",

          "@screen sm": {
            position: "static",
            flexDirection: "row",
            gap: theme("spacing.gap-lg"),
            backgroundColor: "transparent",
          },
          "@screen md": {
            gap: theme("spacing.gap-md"),
          },
          "@screen lg": {
            gap: theme("spacing.gap-lg"),
          },
        },

        ".navigation-container.open": {
          display: "flex",
        },

        ".navigation-container.closed": {
          display: "none",
        },


        //  ************* classes for Footer *************

        ".footerbaslik": {
          fontWeight: theme("fontWeight.font-bold"),
          color: "black",
        },

        ".footericerik": {
          color: theme("colors.mygray"),
          "@screen sm": {
            fontSize: theme("fontSize.text-sm"),
          },
          "@screen lg": {
            fontSize: theme("fontSize.text-base"),
          },
        },

        ".footerdiv-container": {
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "flex-start",
          gap: theme("spacing.12"),
          padding: `${theme("spacing.8")} ${theme("spacing.28")}`,
          backgroundColor: theme("colors.white"),

          "@screen sm": {
            padding: `${theme("spacing.6")} ${theme("spacing.8")}`,
            fontSize: theme("fontSize.text-sm"),
          },
          "@screen md": {
            fontSize: theme("fontSize.text-base"),
          },
          "@screen lg": {
            fontSize: theme("fontSize.text-base"),
          },
          "@screen xl": {
            fontSize: theme("fontSize.text-xl"),
          },
        },

        ".ilksutun-container": {
          flex: "1 1 25%",
          display: "flex",
          flexDirection: "column",
          gap: theme("spacing.4"),

          "@screen sm": {
            fontSize: theme("fontSize.text-sm"),
          },
          "@screen md": {
            fontSize: theme("fontSize.text-base"),
          },
          "@screen lg": {
            fontSize: theme("fontSize.text-base"),
          },
          "@screen xl": {
            fontSize: theme("fontSize.text-xl"),
          },
        },

        ".digersutunlar-container": {
          flex: "1 1 60%",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: theme("spacing.8"),

          "@screen sm": {
            fontSize: theme("fontSize.text-sm"),
          },
          "@screen md": {
            fontSize: theme("fontSize.text-base"),
          },
          "@screen lg": {
            fontSize: theme("fontSize.text-base"),
          },
          "@screen xl": {
            fontSize: theme("fontSize.text-xl"),
          },
        },

        //  ************* classes for Hero2 *************
        '.Hero2-container': {
          position: 'relative',
          maxWidth: '1440px',
          marginLeft: 'auto',
          marginRight: 'auto',
          space: '24px',
        },

        '.Gorseller': {
          position: 'relative',
          display: 'flex',
          flexWrap: 'wrap',
          top: theme('spacing.100'),
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: theme('zIndex.3'),
          width: theme('width.full'),
          justifyContent: 'center',
          '@screen sm': {
            gap: theme('spacing.6'),
          },
          '@screen md': {
            gap: theme('spacing.8'),
          },
          '@screen lg': {
            gap: theme('spacing.10'),
          },
          '@screen xl': {
            gap: theme('spacing.12'),
          },
        },
        '.group-image': {
          objectFit: 'contain',
          width: theme('width.50%'),

          '@screen sm': {
            width: theme('width.100%'),
          },
          '@screen md': {
            width: theme('width.30%'),
          },
          '@screen lg': {
            width: theme('width.20%'),
          },
          '@screen xl': {
            width: theme('width.15%'),
          },
        },


        //  ************* classes for Hero *************

        ".herogenel": {
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: `${theme("spacing.container-lg")} ${theme("spacing.container-sm")}`,
          gap: theme("spacing.gap-lg"),
          maxWidth: theme("maxWidth.container"),
          marginLeft: "auto",
          marginRight: "auto",
          "@screen lg": {
            flexDirection: "row",
            padding: `${theme("spacing.container-lg")} ${theme("spacing.container-md")}`,
            gap: theme("spacing.gap-xl"),
          },
        },

        ".buyukbaslik": {
          fontSize: theme("fontSize.text-3xl"),
          fontWeight: theme("fontWeight.font-bold"),
          lineHeight: "1.25",
          color: theme("colors.foreground"),
          "@screen md": {
            fontSize: theme("fontSize.text-4xl"),
            lineHeight: "1.25",
          },
          "@screen lg": {
            fontSize: theme("fontSize.text-5xl"),
          },
        },

        ".altbaslik": {
          fontSize: theme("fontSize.text-sm"),
          color: theme("colors.mygray"),
          lineHeight: "1.75",
          "@screen md": {
            fontSize: theme("fontSize.text-base"),
          },
        },

        ".herogorseller": {
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: theme("spacing.gap-lg"),
          position: "relative",
        },




      });
    }),
  ],
};

export default config;
