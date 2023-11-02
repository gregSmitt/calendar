import { Box } from "@mui/system";

const FileImagePreview = ({ file }) => {
  return (
    <Box sx={(theme) => ({
      borderRadius: theme.shape.borderRadiusSm,
      bgcolor: theme.palette.info.main,
      backgroundImage: `url(${URL.createObjectURL(file)})`,
      width: 96,
      height: 96,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    })}
    />
  );
};

export default FileImagePreview;
