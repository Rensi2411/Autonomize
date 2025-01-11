import React, { useEffect, useState } from 'react';
import axios from 'axios';

const RepositoryDetails = ({ repoUrl }) => {
  const [repository, setRepository] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRepositoryDetails = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await axios.get(repoUrl);
        setRepository(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (repoUrl) {
      fetchRepositoryDetails();
    }
  }, [repoUrl]);

  if (loading) return <p>Loading repository details...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    repository && (
      <div>
        <h2>{repository.name}</h2>
        <p>
          <strong>Description:</strong> {repository.description || 'No description available'}
        </p>
        <p>
          <strong>Stars:</strong> {repository.stargazers_count}
        </p>
        <p>
          <strong>Forks:</strong> {repository.forks_count}
        </p>
        <p>
          <strong>Language:</strong> {repository.language || 'Not specified'}
        </p>
        <p>
          <strong>Created At:</strong> {new Date(repository.created_at).toLocaleDateString()}
        </p>
        <p>
          <strong>Last Updated:</strong> {new Date(repository.updated_at).toLocaleDateString()}
        </p>
        <a href={repository.html_url} target="_blank" rel="noopener noreferrer">
          View on GitHub
        </a>
      </div>
    )
  );
};

export default RepositoryDetails;
