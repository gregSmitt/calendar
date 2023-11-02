import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";

const FileDropArea = () => {
  return (
    <Box sx={(theme) => ({
      border: `2px ${theme.palette.info.light} dashed`,
      borderRadius: theme.shape.borderRadiusSm,
      p: 3,
      userSelect: 'none',
      cursor: 'pointer',
    })}>
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        gap={1}
      >
        <Typography variant="body2">Перетащите сюда файлы или</Typography>
        <Typography variant="subtitle2">выберите на устройстве</Typography>
      </Grid>
    </Box >
  );
};

export default FileDropArea;