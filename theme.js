import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    deri: {
      blue: "#003049",
      red: "#D62828",
      orange: "#F77F00",
      yellowRed: "#FFB21C",
      floralWhite: "#FAF9EF",
      msuGreen: "#2D4E44",
    },
  },
  styles: {
    global: {
      body: {
        bg: "deri.floralWhite"
      }
    }
  },
  components: {
    Link: {
      variants: {
        navigationActive: {
          bg: "deri.yellowRed",
          color: "deri.blue",
          borderRadius: "25px",
          p: "0.2em 0.8em",
          m: "1em 0",
          fontWeight: "semibold",
          textAlign: "center",
        },
        navigation: {
          color: "deri.blue",
          p: "0.2em 0.8em",
          m: "1em 0",
          fontWeight: "semibold",
          textAlign: "center",
        },
      },
    },
  },
});

export default theme;
