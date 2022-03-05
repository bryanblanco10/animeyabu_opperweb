import axios from "axios";
axios.defaults.headers.common["Accept"] = "application/json";


axios.interceptors.request.use(config => {
  let access_token = localStorage.getItem( "access_token")
  if (access_token) {
    config.headers.Authorization = `Bearer ${access_token}`
  } 

  return config;
});

axios.interceptors.response.use(
  res => res,
  err => {
    switch (err.response.status) {
      case 419:
        // localStorage.clear();
        // window.location.reload();
        break;

      //Server errors
      case 500:
      case 501:
      case 502:
      case 503:
      case 504:
      case 505:
      case 506:
      case 507:
      case 508:
      case 509:
      case 510:
      case 511:
        break;
    }

    return Promise.reject(err.response);
  }
);

export default axios;