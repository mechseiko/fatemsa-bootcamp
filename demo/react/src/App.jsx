// FILE: src/App.jsx | SESSION 7
// THIS IS A COMPONENT: a function that returns JSX (HTML-looking code inside JavaScript). Names start with a capital letter.
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Playground from "./pages/Playground.jsx";

function App() {
  return (
    <div>
      <Navbar />
      {/* A ROUTE connects a URL path to a page component. "/" is the home page. */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/playground" element={<Playground />} />
      </Routes>
    </div>
  );
}

export default App;
