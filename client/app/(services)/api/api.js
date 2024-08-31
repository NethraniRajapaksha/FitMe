import axios from "axios";

const BASE_URL = "https://major-mice-behave.loca.lt";

export const registerUser = async (user) => {
  console.log(user);
  const response = await axios.post(
    `${BASE_URL}/api/users/register`,
    user,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return response.data;
};
export const loginUser = async (user) => {
  const response = await axios.post(
    `${BASE_URL}/api/users/login`,
    user,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return response.data;
};