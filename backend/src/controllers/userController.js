const axios = require('axios');
const User = require('../models/userModel');

// Fetch and save user data
const saveUser = async (req, res) => {
  try {
    const { username } = req.params;

    const existingUser = await User.findOne({ where: { username } });
    if (existingUser) return res.status(200).json(existingUser);

    const { data } = await axios.get(`https://api.github.com/users/${username}`);
    const newUser = await User.create({
      username: data.login,
      bio: data.bio,
      location: data.location,
      public_repos: data.public_repos,
      public_gists: data.public_gists,
      followers: data.followers,
      following: data.following,
      avatar_url: data.avatar_url,
    });

    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Search user data
const searchUsers = async (req, res) => {
  try {
    const { query } = req.query;
    const users = await User.findAll({
      where: {
        username: { $like: `%${query}%` },
        soft_deleted: false,
      },
    });
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Other functions (soft delete, update, etc.) would go here
module.exports = { saveUser, searchUsers };
