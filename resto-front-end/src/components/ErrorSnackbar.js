import { useDispatch, useSelector } from "react-redux";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from '@material-ui/lab/Alert';

import { errorClearAction } from "../actions/errorAction";

function ErrorSnackbar() {
  const dispatch = useDispatch();

  const errorState = useSelector(
    state => state.errorReducer
  );

  function handleClose() {
    dispatch(errorClearAction());
  }

  return (
    <Snackbar
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center"
      }}
      open={errorState.info.open}
      autoHideDuration={5000}
      onClose={handleClose}
      aria-describedby="client-snackbar"
    >
        <Alert onClose={handleClose} severity="error">{errorState.info.message}</Alert>
    </Snackbar>
  );
}

export default ErrorSnackbar;
