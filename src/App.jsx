import { BrowserRouter as  Router ,Routes,Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Info from "./pages/Info.jsx";
function App() {
 return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/info" element={<Info/>}/>
        <Route path="/contact" element={<h1>Contact</h1>}/>
      </Routes>
    </Router>
  )
}

export default App
