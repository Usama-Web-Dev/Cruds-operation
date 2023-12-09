
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Form from "./components/Form";
import Read from "./components/Read";
import Update from "./components/Update";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div className="App">
     
        <Router>
          <Navbar />
          <Routes>
          <Route exact path="/" element={<Form />} />
          <Route path="/read" element={<Read />} />
          <Route path="/update" element={<Update />} />
          </Routes>
        </Router>
     
    </div>
  );
}

export default App;
