import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { alpha } from "@mui/material/styles";
// src/theme/theme.ts
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";

declare module "@mui/material/styles" {
  interface Palette {
    neutral: Palette["primary"];
    tertiary: Palette["primary"];
  }
  interface PaletteOptions {
    neutral?: PaletteOptions["primary"];
    tertiary?: PaletteOptions["primary"];
  }
  interface Theme {
    appRadius: number;
  }
  interface ThemeOptions {
    appRadius?: number;
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    neutral: true;
    tertiary: true;
  }
}

const baseTheme = (mode: "light" | "dark") => {
  const isDark = mode === "dark";

  return createTheme({
    appRadius: 16,
    palette: {
      mode,
      primary: {
        main: "#E4C59E",
        contrastText: "#322C2B",
      },
      secondary: {
        main: "#AF8260",
        contrastText: "#FFFFFF",
      },
      tertiary: {
        main: "#803D3B",
        contrastText: "#FFFFFF",
      },
      neutral: {
        main: isDark ? "#BFAFA5" : "#8C7E75",
        dark: "#6D5E55",
        light: "#E1D6CE",
        contrastText: isDark ? "#0B0F14" : "#FFFFFF",
      },
      background: {
        default: "#322C2B",
        paper: isDark ? alpha("#322C2B", 0.95) : "#FFFFFF",
      },
      text: {
        primary: "#FFFFFF",
        secondary: alpha("#FFFFFF", 0.7),
      },
      divider: alpha("#FFFFFF", 0.12),
    },
    shape: {
      borderRadius: 16,
    },
    typography: {
      fontFamily: `'Motley Forces', 'Roboto', 'Helvetica', 'Arial', sans-serif`,
      allVariants: { color: "#FFFFFF" },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            margin: 0,
            padding: 0,
            backgroundColor: "#322C2B",
          },
        },
      },
    },
  });
};

export const getAppTheme = (mode: "light" | "dark" = "dark") =>
  responsiveFontSizes(baseTheme(mode));
