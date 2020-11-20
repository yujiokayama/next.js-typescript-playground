import React from "react";
import { AppProps } from "next/app";
import { Provider } from "react-redux";
import { setupStore } from "~/store/store";
import { ThemeProvider } from "~/components/Context";

const store = setupStore();

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
