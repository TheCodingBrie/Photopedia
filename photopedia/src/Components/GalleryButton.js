import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import "./GalleryWithDescription.css";



export default function BasicButtons() {
  return (
    <Stack spacing={2} direction="row">
      <div className="gallery_button">
        <Button variant="contained">Gallery</Button>
        <Button variant="contained">
          <LocationOnIcon />
        </Button>
      </div>
    </Stack>
  );
}
