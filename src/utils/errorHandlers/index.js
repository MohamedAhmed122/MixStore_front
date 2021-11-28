import { toast } from "react-toastify";

export const errorHandlers = (error) => {
  const errorMessage =
    error.response && error.response.data.message
      ? error.response.data.message
      : error.message;
      
  toast.error(`Oops, ${errorMessage} `);
};