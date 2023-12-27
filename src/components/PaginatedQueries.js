import axios from "axios";
import { useState } from "react";
import { useQuery } from "react-query";

async function fetchColors(pageNumber) {
  return axios.get(`http://localhost:4000/colors?_limit=2&_page=${pageNumber}`);
}
const PaginatedQueries = () => {
  const [pageNumber, setPageNumber] = useState(1);

  const { isLoading, data, isError, error, isFetching } = useQuery(
    ["colors", pageNumber],
    () => fetchColors(pageNumber)
  );

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>{error.message}</p>;
  }
  return (
    <div>
      {data?.data.map((each) => (
        <p key={each.id}>{each.color}</p>
      ))}
      <div>
        <button
          onClick={() => setPageNumber((page) => page - 1)}
          disabled={pageNumber === 1}
        >
          Prev page
        </button>
        <button
          onClick={() => setPageNumber((page) => page + 1)}
          disabled={pageNumber === 4}
        >
          Next page
        </button>
      </div>
    </div>
  );
};

export default PaginatedQueries;
