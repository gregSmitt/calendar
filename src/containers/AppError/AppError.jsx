import { useSelector } from "react-redux";
import CustomAlertDialog from "../../components/@ui/CustomAlertDialog/CustomAlertDialog"
import { obApp } from "../../redux/actions/model";

const AppError = () => {
  const { app } = useSelector(state => state);
  const { error, error_description } = app;

  const handleCloseAlert = () => {
    obApp.unsetError();
  };

  return (
    <CustomAlertDialog
      open={error}
      onClose={handleCloseAlert}
      title="Ошибка"
      description={error_description}
    />
  )
};

export default AppError;