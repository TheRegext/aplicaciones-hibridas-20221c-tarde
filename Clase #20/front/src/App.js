//import DigimonList from "./Components/Digimon/DigimonList";
import { Routes, Route, useNavigate} from 'react-router-dom'
import ProjectsList from "./Components/Projects/ProjectsList";
import ProjectView from "./Pages/ProjectView";
import PageNotFound from "./Pages/PageNotFound";
import HomePage from './Pages/HomePage';
import PageLogin from './Pages/PageLogin';
import { useEffect, useState } from 'react';
import PageSocket from './Pages/PageSocket';

function App() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setUser(JSON.parse(localStorage.getItem('user')));
      //navigate('/projects');
    }
    else{
      navigate('/login');
    }
  }, []);

  function onLogin(user, token){
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
    setUser(user);
    navigate('/projects');
  }
 
  return (
    <div className="App">
        <h1>Hola Soy el APP {user?.name}</h1>
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<PageLogin onLogin={onLogin} />} />
          <Route path="/projects" element={<ProjectsList />} />
          <Route path="/projects/:id" element={<ProjectView />} />
          <Route path="/socket" element={<PageSocket />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
    </div>

    
  );
}

export default App;
