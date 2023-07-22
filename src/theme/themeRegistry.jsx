import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
  direction: "rtl",
  palette: {
    mode: "light",
    background: {
        default: "#F1F1F1",
    },
  },
  typography: {
    fontFamily: "shabnam, roboto",
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
});

export const darkTheme = createTheme({
  direction: "rtl",
  palette: {
    mode: "dark",
    background: {
        default: "#22273b",
    },
  },
  typography: {
    fontFamily: "shabnam, roboto",
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: "#1C2331",
        },
      },
    },
  },
});
