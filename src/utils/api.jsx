export const apiRequest = async (url, method = 'GET', data = null) => {
    const options = {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
    };
  
    if (data) {
      options.body = JSON.stringify(data);
    }
  
    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Something went wrong');
      }
      return await response.json();
    } catch (error) {
      console.error('API request error:', error);
      throw error;
    }
  };
  

  export const deleteProduct = async (id) => {
    return await apiRequest(`/api/product/${id}`, 'DELETE');
  };
  
  export const deleteUserAccount = async () => {
    return await apiRequest('/api/users/me', 'DELETE');
  };
  


  