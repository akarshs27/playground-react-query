import axios from "axios";
import { useQuery } from "react-query";

function fetchUserByEmail(userId) {
  return axios.get(`http://localhost:4000/users/${userId}`);
}

function fetchContentByChannelId(channelId) {
  return axios.get(`http://localhost:4000/channels/${channelId}`);
}

const DependentQueries = ({ email }) => {
  const { data: user } = useQuery(["user", email], () =>
    fetchUserByEmail(email)
  );

  const channelId = user?.data.channelId;
  const { data: channelData } = useQuery(
    ["content", channelId],
    () => fetchContentByChannelId(channelId),
    {
      enabled: !!channelId,
    }
  );

  return (
    <div>
      <p>DependentQueries</p>
    </div>
  );
};

export default DependentQueries;
