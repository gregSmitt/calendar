import { useSelector } from "react-redux";
import CustomBackdropLoader from "../../components/@ui/CustomBackdropLoader";

const AppLoading = () => {
  const { loading } =  useSelector(state => state.app);

  return (
    <>
      { loading ? <CustomBackdropLoader /> : null }
    </>
  )
}

export default AppLoading;