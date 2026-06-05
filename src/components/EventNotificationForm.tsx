import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useState, type ChangeEvent, type FormEvent } from "react";

type FormStatus = "idle" | "success";

export default function EventNotificationForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!email.trim()) return;

    // TODO: 串接實際的訂閱 API（如 Mailchimp、Buttondown、自建 endpoint）
    setStatus("success");
    setEmail("");
  }

  return (
    <div>
      <Typography variant="subtitle2" component="h3" gutterBottom>
        活動通知訂閱
      </Typography>
      {status === "success" ? (
        <Typography variant="body2" color="primary" role="status">
          感謝訂閱！我們會在下一場活動開放報名時通知你。
        </Typography>
      ) : (
        <Stack
          component="form"
          onSubmit={handleSubmit}
          direction={{ xs: "column", sm: "row" }}
          spacing={1}
        >
          <TextField
            type="email"
            name="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
            required
            autoComplete="email"
            aria-label="電子郵件"
            size="small"
            fullWidth
          />
          <Button type="submit" variant="contained" sx={{ flexShrink: 0 }}>
            訂閱通知
          </Button>
        </Stack>
      )}
    </div>
  );
}
