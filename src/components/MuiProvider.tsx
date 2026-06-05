import { ThemeProvider } from "@mui/material/styles";
import { useEffect, useMemo, useState, type ReactNode } from "react";

import { getMuiTheme } from "@/theme/mui-theme";

function useHtmlDarkMode() {
  const [mode, setMode] = useState<"light" | "dark">("light");

  useEffect(() => {
    const root = document.documentElement;
    const read = () => setMode(root.classList.contains("dark") ? "dark" : "light");
    read();
    const observer = new MutationObserver(read);
    observer.observe(root, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  return mode;
}

export default function MuiProvider({ children }: { children: ReactNode }) {
  const mode = useHtmlDarkMode();
  const theme = useMemo(() => getMuiTheme(mode), [mode]);

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
