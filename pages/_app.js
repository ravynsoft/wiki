// import "@code-hike/mdx/dist/index.css"
import { useEffect, useState } from "react";
import Head from "next/head";
import { useTheme } from "next-themes";
import {
  Box,
  ColorSchemeProvider,
  Global,
  MantineProvider,
} from "@mantine/core";
import { useColorScheme } from "@mantine/hooks";
import { theme as mantineTheme } from "../theme/extendTheme";
import { styles } from "../theme/styles";
// import "@code-hike/mdx/styles"
import "nextra-theme-docs/style.css";
import "../styles.css";

function MantineTheme({ children }) {
  let { theme: themeValue, setTheme, systemTheme } = useTheme();
  let theme = themeValue === "system" ? systemTheme : themeValue;

  return (
    <ColorSchemeProvider colorScheme={theme} toggleColorScheme={setTheme}>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{ colorScheme: theme, ...mantineTheme }}
        emotionOptions={{ key: "mantine", prepend: false }}
        defaultProps={(oTheme) => ({
          Input: { size: "md" },
          TextInput: { size: "md" },
          PasswordInput: { size: "md" },
          NumberInput: { size: "md" },
        })}
        styles={styles}
      >
        {children}
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default function App(props) {
  const { Component, pageProps } = props;
  const [show, setShow] = useState(true);
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(
    <>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <MantineTheme>
        <Component {...pageProps} />
      </MantineTheme>
    </>
  );
}