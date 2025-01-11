import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FollowersList = ({ username }) => {
  const [followers, setFollowers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchFollowers = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`https://api.github.com/users/${username}/followers`);
        setFollowers(response.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    if (username) fetchFollowers();
  }, [username]);

  if (loading) return <p>Loading followers...</p>;

  return (
    <div>
      <h3>Followers:</h3>
      <ul>
        {followers.map((follower) => (
          <li key={follower.id}>
            <img src={follower.avatar_url} alt="Follower Avatar" style={{ width: '30px' }} />
            {follower.login}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FollowersList;
