import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import './UploadButton.css';

const Input = styled('input')({
  display: 'none',
});

export default function UploadButtons() {
  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      <label htmlFor="contained-button-file">
        <Input accept="image/*" id="contained-button-file" multiple type="file" />
        <Button 
         style={{
            width: 120,
            height: 60,
            textAlign: "center", 
            fontFamily:"Perpetua Titling MT Light",
          }}
        variant="contained" component="span">
          Upload
        </Button>
      </label>
    </Stack>
  );
}
