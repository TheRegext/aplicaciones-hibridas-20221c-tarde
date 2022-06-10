//import DigimonList from "./Components/Digimon/DigimonList";
import ProjectsList from "./Components/Projects/ProjectsList";
import ProjectView from "./Pages/ProjectView";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProjectsList />} />
          <Route path="/:id" element={<ProjectView />} />
        </Routes>
      </BrowserRouter>
      
    </div>

    
  );
}

export default App;
