import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API_PATHS from "../utils/apiPaths";

const useUserInfo = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(API_PATHS.INFO, {
          credentials: "include",
        });

        if (response.status === 401) {
          navigate("/login");
          alert("로그인이 필요한 서비스입니다");
          setUser(null);
        } else if (!response.ok) {
          throw new Error("Failed to fetch user data");
        } else {
          const data = await response.json();
          setUser(data);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [navigate]);

  return { user, loading, error };
};

export default useUserInfo;
