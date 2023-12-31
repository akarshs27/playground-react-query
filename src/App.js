import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import Homepage from "./components/Homepage";
import SuperHeroes from "./components/SuperHeroes";
import RQSuperHeroes from "./components/RQSuperHeroes";
import AxiosSuperHeroes from "./components/AxiosSuperHeroes";
import ARQSuperHeroes from "./components/ARQSuperHeroes";
import RQHero from "./components/RQHero";
import ParallelQueries from "./components/ParallelQueries";
import RQDynamicQueries from "./components/RQDynamicQueries";
import DependentQueries from "./components/DependentQueries";
import PaginatedQueries from "./components/PaginatedQueries";
import InfiniteQueries from "./components/InfiniteQueries";
import MutationQueries from "./components/MutationQueries";
import "./App.css";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/axios-super-heroes">Axios SuperHeroes</Link>
              </li>
              <li>
                <Link to="/super-heroes">SuperHeroes</Link>
              </li>
              <li>
                <Link to="/rq-super-heroes">RQ SuperHeroes</Link>
              </li>
              <li>
                <Link to="/arq-super-heroes">ARQ SuperHeroes</Link>
              </li>
              <li>
                <Link to="/rp-queries">Parallel Queries</Link>
              </li>
              <li>
                <Link to="/dynamic-p-queries">Dynamic Parallel Queries</Link>
              </li>
              <li>
                <Link to="/dependent-queries">Dependent Queries</Link>
              </li>
              <li>
                <Link to="/paginated-queries">Paginated Queries</Link>
              </li>
              <li>
                <Link to="/infinite-queries">Infinite Queries</Link>
              </li>
              <li>
                <Link to="/mutation-queries">Mutation Queries</Link>
              </li>
            </ul>
          </nav>
        </div>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/paginated-queries" element={<PaginatedQueries />} />
          <Route path="/infinite-queries" element={<InfiniteQueries />} />
          <Route path="/mutation-queries" element={<MutationQueries />} />
          <Route path="/axios-super-heroes" element={<AxiosSuperHeroes />} />
          <Route path="/super-heroes" element={<SuperHeroes />} />
          <Route path="/rq-super-heroes" element={<RQSuperHeroes />} />
          <Route path="/rq-super-heroes/:heroId" element={<RQHero />} />
          <Route path="/arq-super-heroes" element={<ARQSuperHeroes />} />
          <Route path="/rp-queries" element={<ParallelQueries />} />
          <Route
            path="/dynamic-p-queries"
            element={<RQDynamicQueries heroIds={[1, 3]} />}
          />
          <Route
            path="/dependent-queries"
            element={<DependentQueries email="akarshs27@gmail.com" />}
          />
        </Routes>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}

export default App;
