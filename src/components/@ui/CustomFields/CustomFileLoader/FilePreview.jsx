import { Badge, IconButton, darken } from "@mui/material";
import { CloseIcon} from "../../../../assets/icons";
import FileImagePreview from "./FileImagePreview";
import FileDocPreview from "./FileDocPreview";

const FilePreview = ({ file, index, onRemove }) => {
  const handleRemove = () => {
    onRemove(index);
  }

  return (
    <Badge
      badgeContent={(
        <IconButton
          onClick={handleRemove}
          sx={(theme) => ({
            bgcolor: theme.palette.primary.contrastText,
            '&:hover': {
              bgcolor: darken(theme.palette.primary.contrastText, 0.05),
            },
          })}>
          <CloseIcon />
        </IconButton>
      )}
    >
      {file.type.startsWith('image/') ? (
        <FileImagePreview file={file} />
      ) : (
        <FileDocPreview file={file} />
      )}
    </Badge>
  )
};

export default FilePreview;

// if (file.type.startsWith('image/')) {
//   return
// } else if (file.type.startsWith('audio/')) {
//   return <audio controls src={URL.createObjectURL(file)} />;
// } else if (file.type.startsWith('video/')) {
//   return <video controls src={URL.createObjectURL(file)} />;
// }