//import DigimonList from "./Components/Digimon/DigimonList";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ProjectsList from "./Components/Projects/ProjectsList";
import ProjectView from "./Pages/ProjectView";
import PageNotFound from "./Pages/PageNotFound";
import HomePage from './Pages/HomePage';

function App() {
 
  return (
    <div className="App">
      <BrowserRouter>
        <h1>Hola Soy el APP</h1>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsList />} />
          <Route path="/projects/:id" element={<ProjectView />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
      
    </div>

    
  );
}

export default App;
