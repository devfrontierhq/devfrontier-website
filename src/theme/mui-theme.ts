import { createTheme, type PaletteMode } from "@mui/material/styles";

import { MUI_PALETTE } from "@/theme/mui-palette";

export function getMuiTheme(mode: PaletteMode) {
  const palette = MUI_PALETTE[mode];

  return createTheme({
    palette: {
      mode,
      ...palette,
    },
    typography: {
      fontFamily: '"Geist Variable", sans-serif',
    },
    shape: {
      borderRadius: 10,
    },
    components: {
      MuiButton: {
        defaultProps: {
          disableElevation: true,
        },
      },
    },
  });
}
