import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BASE_AZURE_URL } from './config';

function App() {
  const [projects, addProject] = useState([]);
  
  useEffect(() => {
    const consultarAPI = async () => {
      const url = `${BASE_AZURE_URL}/projects`;
      const result = await axios.get(url, { headers: { Authorization: `Basic PAT` } });

      console.log(result.data.value);

      addProject(result.data.value)
    };

    consultarAPI();
  }, []);

  return (
    <div>
      <ul>
        {
          projects.map(project => (<li key={project.id}>{project.name}</li>))
        }
      </ul>
    </div>
  );
}

export default App;
