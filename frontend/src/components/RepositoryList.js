import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RepositoryList = ({ username }) => {
  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchRepositories = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`https://api.github.com/users/${username}/repos`);
        setRepositories(response.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    if (username) fetchRepositories();
  }, [username]);

  if (loading) return <p>Loading repositories...</p>;

  return (
    <div>
      <h3>Repositories:</h3>
      <ul>
        {repositories.map((repo) => (
          <li key={repo.id}>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
              {repo.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RepositoryList;
