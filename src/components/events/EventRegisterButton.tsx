import Button from "@mui/material/Button";
import { ExternalLink } from "lucide-react";

import { withMuiProvider } from "@/lib/with-mui-provider";

interface EventRegisterButtonProps {
  href: string;
  label: string;
}

function EventRegisterButton({ href, label }: EventRegisterButtonProps) {
  return (
    <Button
      component="a"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      variant="contained"
      endIcon={<ExternalLink className="size-4" />}
    >
      {label}
    </Button>
  );
}

export default withMuiProvider(EventRegisterButton);
