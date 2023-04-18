import { BrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";

const App = () => {
  return (
    <div className="home">
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </div>
  );
};

export default App;
