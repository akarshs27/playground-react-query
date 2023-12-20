import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import Homepage from "./components/Homepage";
import SuperHeroes from "./components/SuperHeroes";
import RQSuperHeroes from "./components/RQSuperHeroes";
import AxiosSuperHeroes from "./components/AxiosSuperHeroes";
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
            </ul>
          </nav>
        </div>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/axios-super-heroes" element={<AxiosSuperHeroes />} />
          <Route path="/super-heroes" element={<SuperHeroes />} />
          <Route path="/rq-super-heroes" element={<RQSuperHeroes />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
