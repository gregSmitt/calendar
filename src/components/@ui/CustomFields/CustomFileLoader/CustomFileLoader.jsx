import React from "react";
import { Grid } from "@mui/material";
import { FileUploader } from "react-drag-drop-files";
import CustomAlertDialog from "../../CustomAlertDialog/CustomAlertDialog";
import { useFileLoader, useFileValidation } from "./hooks";
import FileDropArea from "./FileDropArea";
import FilePreview from "./FilePreview";

// const fileTypes = ["JPG", "PNG", "GIF"];

function CustomFileLoader({
  onChange,
  // maxQuantity = 12,
  // maxSize = 20,
  fileTypes,
}) {
  const {
    error,
    setError,
    handleCloseAlert,
  } = useFileValidation(
    // {
      // maxQuantity,
      // maxSize,
    // }
  );

  const {
    handleChange,
    handleRemoveFile,
    files,
  } = useFileLoader({
    onChange,
    setError,
  });

  return (
    <>
      <CustomAlertDialog
        open={error.error}
        onClose={handleCloseAlert}
        title={error.title}
        description={error.subtitle}
      />
      <FileUploader
        handleChange={handleChange}
        name='file'
        // types={fileTypes}
        multiple
        hoverTitle=' '
        classes='drop_area'
        children={<FileDropArea />}
      />
      < Grid
        container
        gap={2}
        marginTop={files && files.length ? 3 : 0}
        marginBottom={files && files.length ? 1 : 0}
      >
        {
          files ? files.map((file, index) => (
            <FilePreview
              key={`${file.name}${file.lastModified}`}
              file={file}
              index={index}
              onRemove={handleRemoveFile}
            />
          )) : null}
      </Grid >
    </>
  );
}

export default CustomFileLoader;