import React from 'react';

const defaultErrorState = {
  error: false,
  title: '',
  subtitle: '',
};

const useFileValidation = (
  // {
    // maxQuantity = 12,
    // maxSize = 20,
  // }
) => {
  const [error, setError] = React.useState(defaultErrorState);

  const handleCloseAlert = () => {
    setError(defaultErrorState);
  }

  const checkMaxQuantity = (files) => {
    const max_quantity = 10;

    if (files.length > max_quantity) return `Текущее количество составляет ${files.length} файлов.`;

    return false;
  }

  const checkMaxSize = (files) => {
    const max_size = 20;
    const mb = 1024;

    const sizes = files.reduce((prev, current) => prev + current.size / mb / mb, 0);

    if (sizes > max_size) return `Текущий размер файлов составляет ${sizes.toLocaleString('ru-RU')} мб.`;

    return false;
  }

  return {
    error,
    setError,
    handleCloseAlert,
    checkMaxQuantity,
    checkMaxSize,
  };
};

export default useFileValidation;