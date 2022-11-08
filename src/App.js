import logo from './logo.svg';
import './App.css';
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import ProjectDetail from './pages/ProjectDetail';
import Scrolltotop from './utils/ScrollToTop';
const App = () => {
  return (
    <div className="App">
       <Scrolltotop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:name" element={<ProjectDetail />} />
      </Routes>
    </div>
  );
}

export default App;
