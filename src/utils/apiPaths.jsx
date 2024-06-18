const API_BASE_URL = '/api';

const API_PATHS = {
  PRODUCTS: `${API_BASE_URL}/product`,
  ADMIN_PRODUCTS: `${API_BASE_URL}/admin/products`,
  BRANDS: `${API_BASE_URL}/brand`,
  CATEGORIES: `${API_BASE_URL}/category`,
  REGISTER: `${API_BASE_URL}/register`,
  LOGIN: `${API_BASE_URL}/login/login`,
  LOGOUT: `${API_BASE_URL}/login/logout`,
  USER: `${API_BASE_URL}/users/user/me`,
  INFO: `${API_BASE_URL}/users/me`, 
  ORDER: `${API_BASE_URL}/orders/`,
};

export default API_PATHS;