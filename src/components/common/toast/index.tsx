import React from "react";
import toast, { Toaster } from "react-hot-toast";

function Toast() {
  return (
    <div>
      <Toaster position="top-right" />
    </div>
  );
}

export const SucessToast = (alertMessage = "Sucessfully done") => {
  return toast.success(alertMessage, {
    id: "sucess_id",
    style: {
      border: "none",
      background: "#fff",
      padding: "16px",
      color: "#333",
    },
    iconTheme: {
      primary: "#73DC2E",
      secondary: "#fff",
    },
  });
};

export const ErrorToast = (alertMessage = "Something went wrong") => {
  return toast.error(alertMessage, {
    id: "error_id",
    style: {
      border: "none",
      background: "#fff",
      padding: "16px",
      color: "#333",
    },
    iconTheme: {
      primary: "#ff4b4b",
      secondary: "#fff",
    },
  });
};

export default Toast;
