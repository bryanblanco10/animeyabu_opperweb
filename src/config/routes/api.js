const API_URL = process.env.VUE_APP_API_URL;
const API_VERSION = process.env.VUE_APP_API_VERSION;

const API_ROUTES = {
  auth: {
    login: `${API_URL}/api/${API_VERSION}/login`,
    register: `${API_URL}/api/${API_VERSION}/register`,
  },
  category: {
    get: `${API_URL}/api/${API_VERSION}/categoria`,
    save: `${API_URL}/api/${API_VERSION}/categoria/create`,
    update: `${API_URL}/api/${API_VERSION}/categoria/update`,
  },
  user: {
    find: `${API_URL}/api/${API_VERSION}/me`,
  }
}

export { API_ROUTES }