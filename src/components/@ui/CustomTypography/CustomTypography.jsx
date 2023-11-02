import * as React from 'react';
import Box from '@mui/material/Box';
import { Typography } from "@mui/material";


export default function CustomTypography() {
  return (
    <Box>
      <Typography variant="h1" gutterBottom>
        h1. Headlines/Headliner 1
      </Typography>
      <Typography variant="h2" gutterBottom>
        h2. Headlines/Headliner 2
      </Typography>
      <Typography variant="h3" gutterBottom>
        h3. Basic/16-24-B
      </Typography>
      {/* <Typography variant="h4" gutterBottom>
        h4. Heading
      </Typography>
      <Typography variant="h5" gutterBottom>
        h5. Heading
      </Typography>
      <Typography variant="h6" gutterBottom>
        h6. Heading
      </Typography> */}
      <Typography variant="subtitle1" gutterBottom>
        subtitle1 = Inter/16-24-500-gray
      </Typography>
      <Typography variant="subtitle2" gutterBottom>
        subtitle2 = Inter/14-24-700-primary
      </Typography>
      {/* <Typography variant="subtitle2" gutterBottom>
        subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur
      </Typography> */}
      <Typography variant="body1" gutterBottom>
        body1 = Basic/14-24-R. Lorem ipsum dolor sit amet.
      </Typography>
      <Typography variant="body2" gutterBottom>
        body2 Basic/14-24-R-gray. Lorem ipsum dolor sit amet.
      </Typography>
      <Typography variant="button" display="block" gutterBottom>
        button text = Button
      </Typography>
      <Typography variant="caption" display="block" gutterBottom>
        caption text = Basic/12-16-R
      </Typography>
      {/* <Typography variant="overline" display="block" gutterBottom>
        overline text
      </Typography> */}
    </Box>
  );
}
