import { BrowserRouter as  Router ,Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
function App() {
 return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<h1>About</h1>}/>
        <Route path="/contact" element={<h1>Contact</h1>}/>
      </Routes>
    </Router>
  )
}

export default App
