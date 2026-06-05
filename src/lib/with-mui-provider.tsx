import type { ComponentType } from "react";

import MuiProvider from "@/components/MuiProvider";

export function withMuiProvider<P extends object>(Component: ComponentType<P>) {
  return function WithMuiProvider(props: P) {
    return (
      <MuiProvider>
        <Component {...props} />
      </MuiProvider>
    );
  };
}
