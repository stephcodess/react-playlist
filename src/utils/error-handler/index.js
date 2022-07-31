import { RoutePaths } from "../routes/routePaths";

/**
 * @const function ErrorHandler
 * @param e 
 * @returns error from due to unknown issues e.g from poor network
 */
const ErrorHandler = (e) => {
  // declare the error variable
  let errorResponse;
  try {
    const { response } = e;
    const { request, ...errorObject } = response; // take everything but 'request'

    if (response.data === undefined) errorResponse = 'Something went wrong';
    const { detail } = response.data;
    if (detail){
      errorResponse = detail
    }else{
      const { message } = response.data;
      errorResponse = message;
    }
    setTimeout(() => {
      if (errorObject.status === 401) {
        window.location.href = RoutePaths.SIGN_UP;
      }
    }, 3000)
  } catch (e) {
    errorResponse = 'Network Error';
  }
  // Return the error value to the user
  return errorResponse;
};

export default ErrorHandler; // export the component to other components
