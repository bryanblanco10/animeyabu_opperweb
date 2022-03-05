const API_URL = process.env.VUE_APP_API_URL;
const API_VERSION = process.env.VUE_APP_API_VERSION;

const API_ROUTES = {
  auth: {
    login: `${API_URL}/api/${API_VERSION}/login`,
    register: `${API_URL}/api/${API_VERSION}/register`,
  },
}

export { API_ROUTES }