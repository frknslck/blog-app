import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const toastWarnNotify = (msg) => {
  toast.warn(msg, {
    autoClose: 1000,
    position: "top-center",
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark"
  });
};

export const toastSuccessNotify = (msg) => {
  toast.success(msg, {
    autoClose: 1500,
    position: "top-center",
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark"
  });
};

export const toastErrorNotify = (msg) => {
  toast.error(msg, {
    autoClose: 2000,
    position: "top-center",
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark"
  });
};
