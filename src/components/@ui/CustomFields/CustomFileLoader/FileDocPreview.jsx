import React from 'react';
import { DOCIcon, FileIcon, PDFIcon, XLSIcon } from "../../../../assets/icons";
import { Box } from '@mui/system';
import { Grid, Typography } from '@mui/material';


const Icon = ({ type }) => {
  if (type.includes('word'))
    return <DOCIcon />
  if (type.includes('spreadsheet'))
    return <XLSIcon />
  if (type.includes('pdf'))
    return <PDFIcon />

  return <FileIcon />
}

const FileDocPreview = ({ file }) => {
  const { name: label, type } = file;
  const SLICE_ON = 24;

  const displayLabel = React.useMemo(() => {
    return label && label.length > SLICE_ON ? (
      `${label.slice(0, SLICE_ON / 2)}...${label.slice((label.length - SLICE_ON / 2), label.length)}`
    ) : label;
  }, [label]);

  return (
    <Box sx={(theme) => ({
      borderRadius: theme.shape.borderRadiusSm,
      bgcolor: theme.palette.info.main,
      // backgroundImage: `url(${URL.createObjectURL(file)})`,
      width: 96,
      height: 96,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      wordBreak: 'break-all',
      p: 1,
    })}
    >
      <Grid
        container
        gap={1}
        alignItems="center"
        justifyContent="center"
        direction="column"
      >
        <Icon type={type} />
        <Typography variant="caption">{displayLabel}</Typography>
      </Grid>
    </Box>
  );
};

export default FileDocPreview;