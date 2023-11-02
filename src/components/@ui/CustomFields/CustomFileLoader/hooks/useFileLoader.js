import React from 'react';
import useFileValidation from './useFileValidation';

const useFileLoader = ({
  onChange,
  setError,
}) => {
  const {
    checkMaxQuantity,
    checkMaxSize,
  } = useFileValidation();

  const [files, setFiles] = React.useState([]);

  async function encodeFilesToBase64(fileList) {
    const promises = [];
    
    for (let i = 0; i < fileList.length; i++) {
      const file = fileList[i];
      const promise = new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => {
          const base64String = reader.result.split(',')[1]; // отсекаем data:application/...;base64,
          resolve({
            name: file.name,
            type: file.type,
            size: file.size,
            base64: base64String
          });
        };
        reader.onerror = reject;
        reader.readAsDataURL(file);
      });
      promises.push(promise);
    }
    
    return Promise.all(promises);
  }

  const handleChange = async (file) => {
    const encodedFiles = await encodeFilesToBase64(file);
    const exceedsMaxSize = checkMaxSize(encodedFiles);
    const exceedsMaxQuantity = checkMaxQuantity(encodedFiles);

    if (exceedsMaxSize) {
      setError({
        error: true,
        title: 'Вы пытаетесь загрузить файлы более 20 мегабайт',
        subtitle: `Попробуйте уменьшить размер файлов путем сжатия или оптимизации.
        ${exceedsMaxSize}
        `,
      });
    } else if (exceedsMaxQuantity) {
      setError({
        error: true,
        title: 'Вы пытаетесь загрузить более 10 файлов',
        subtitle: `${exceedsMaxQuantity} Уменьшите их до 10.`,
      });
    }else {
      console.log({ exceedsMaxSize, exceedsMaxQuantity });
      setFiles(Array.from(file));
      console.log({ encodedFiles });
      onChange(encodedFiles);
    }
  };

  const handleRemoveFile = async (index) => {
    let newFiles = files;
    newFiles.splice(index, 1);

    setFiles(newFiles);
    const encodedFiles = await encodeFilesToBase64(newFiles);
    console.log({ encodedFiles });
    onChange(encodedFiles);
  }

  return {
    handleChange,
    handleRemoveFile,
    files,
  }
};

export default useFileLoader;
