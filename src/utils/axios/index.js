import Axios from 'axios';

let baseURL = "https://itunes.apple.com/us/rss/";

/**
 * @function AxiosCall
 * @params requestObj Array of request parameters
 * @return response from api call.
 */
//  : { path, method, data?, contentType?, version?, }
const AxiosCall = async (requestObj) => {
  const { path, data, method, contentType, version } = requestObj;
  /**
   * The request header
   */
  const headers = {
    'Accept': 'application/json',
    'Content-Type': contentType ? contentType : 'application/json;charset=UTF-8',
  };

  const url = version ? `${baseURL}${version}/${path}` : `${baseURL}/${path}`;
    /***
     * make request to the specified endpoint and return data back to the user
     */
    // if (token){
    const response = await Axios({ url, method, headers, data });
    /***
   * store the return data in result variable
   */

    if (response.status === 200) {
      const result = response && response.data;
      // return result to the user
      return result;
    }

};

export default AxiosCall; // export the component
