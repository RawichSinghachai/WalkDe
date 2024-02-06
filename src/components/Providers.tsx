"use client";

import { ThemeProvider } from "@mui/material/styles";
import { MuiTheme } from "../components/MuiTheme";
import { Provider } from "react-redux";
import { store } from "@/stores/store";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={MuiTheme}>
      <Provider store={store}>
        {children}
      </Provider>
    </ThemeProvider>
  );
}
