import { useState, useEffect } from 'react';
import axios from 'axios';

const useGitHubData = (username) => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!username) return;

    const fetchUserData = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await axios.get(`/api/users/${username}`);
        setUserData(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [username]);

  return { userData, loading, error };
};

export default useGitHubData;
