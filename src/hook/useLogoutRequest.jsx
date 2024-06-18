import { useState } from "react";
import API_PATHS from "../utils/apiPaths";

const useLogoutRequest = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const logout = async () => {
    setLoading(true);
    setError(null);

    try {
      const options = {
        method: "POST",
        credentials: 'include',
        headers: {
          "Content-Type": "text/plain",
        },
        body: 'logout',
      };

      const response = await fetch(API_PATHS.LOGOUT, options);

      if (!response.ok) {
        const errorData = await response.text();
        throw new Error(errorData || response.statusText);
      }

      const data = await response.text();
      setData(data);
      return data;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, logout };
};

export default useLogoutRequest;
