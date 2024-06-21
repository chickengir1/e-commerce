import { useState } from "react";

export const useUpdate = () => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const updateRequest = async (id, body) => {
    setLoading(true);
    try {
      const res = await fetch(`/api/orders/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || res.statusText);
      }

      setResponse(data);
      return data;
    } catch (err) {
      setError(err.message);
      return { message: err.message };
    } finally {
      setLoading(false);
    }
  };

  return { response, error, loading, updateRequest };
};
