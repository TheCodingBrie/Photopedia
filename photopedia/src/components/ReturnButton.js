import * as React from "react"
import Button from "@mui/material/Button"
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn"
import Stack from "@mui/material/Stack"
import "./ReturnButton.css"

export default function ReturnButton() {
  return (
    <div className="return_button">
      <Stack direction="row" spacing={2}>
        <Button variant="outlined" startIcon={<KeyboardReturnIcon />}>
          Return
        </Button>
      </Stack>
    </div>
  )
}
