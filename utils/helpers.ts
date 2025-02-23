import toast from "react-hot-toast";

export const handleErrors = (error: any, message?: string) => {
  if (!error.response) {
    toast.error("Network error. Please check your connection.");
    return;
  }

  const { status, data } = error.response;

  switch (status) {
    case 400:
      toast.error(
        message || data?.message || "Bad Request! Please check your input."
      );
      break;
    case 401:
      toast.error(message || "Unauthorized! Please log in.");
      break;
    case 403:
      toast.error(message || "Forbidden! You do not have permission.");
      break;
    case 404:
      toast.error(message || "Resource not found.");
      break;
    case 500:
      toast.error(message || "Internal Server Error. Please Try again.");
      break;
    default:
      toast.error(
        message || data?.message || "Something went wrong. Please try again."
      );
  }
};
