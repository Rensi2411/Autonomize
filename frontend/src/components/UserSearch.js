import React, { useState } from 'react';
import useGitHubData from '../hooks/useGitHubData';
import RepositoryList from './RepositoryList';
import FollowersList from './FollowersList';

const UserSearch = () => {
  const [username, setUsername] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const { userData, loading, error } = useGitHubData(searchTerm);

  const handleSearch = () => {
    setSearchTerm(username);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}

      {userData && (
        <>
          <div>
            <img src={userData.avatar_url} alt="Avatar" style={{ width: '100px' }} />
            <h2>{userData.username}</h2>
            <p>Location: {userData.location || 'N/A'}</p>
            <p>Bio: {userData.bio || 'N/A'}</p>
          </div>
          <RepositoryList username={userData.username} />
          <FollowersList username={userData.username} />
        </>
      )}
    </div>
  );
};

export default UserSearch;
