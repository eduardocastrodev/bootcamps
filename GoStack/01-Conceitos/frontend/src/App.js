import React, { useState, useEffect } from 'react';
import api from './services/api';

import Header from "./components/Header";
import "./App.css";

function App() {
  const [projects, setProject] = useState([]);

  useEffect(() => {
    api.get('projects').then(response => {
      setProject(response.data);
    });
  }, []);

  async function handleAddProject() {
    // setProject([...projects, `Novo Projeto ${Date.now()}`]); 
    const response = await api.post('projects', {
      title: `Novo Projeto ${Date.now()}`,
      owner: `Eduardo Castro`
    })

    const project = response.data;

    setProject([...projects, project]);
  }

  return (<>

    <Header title="Homepage" />

    <ul>
      {projects.map(project => <li key={project.id}>{project.title}</li>)}
    </ul>

    <button type="button" onClick={handleAddProject}>Adicionar Projeto</button>

  </>);
}

export default App;