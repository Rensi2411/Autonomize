import axios from "axios";

export const fetchGitHubUser = async (username: string) => {
    const url = `https://api.github.com/users/${username}`;
    const response = await axios.get(url);
    return response.data;
};