import axios from "axios";

const getRequests = () => {
  const response = axios.get("http://localhost:3000/requests");
  return response;
};

export default getRequests;
