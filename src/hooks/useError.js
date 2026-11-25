import { useState } from "react";

function useError() {
    const [errorMsg, setErrorMsg] = useState("");
    const showError = () => setErrorMsg(msg);
    const removeError = () => setErrorMsg("");

  return {
    errorMsg,
    showError,
    removeError
  };
}

export default useError