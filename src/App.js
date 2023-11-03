import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import DetallePage from './pages/DetallePage';


function App() {
  return (
    
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} /> 
        <Route exact path="/projects" component={Projects} /> 
        <Route exact path="/about" component={About} /> 
        <Route exact path="/project/:id" component={DetallePage} /> 
      </Switch>
    </BrowserRouter>
    
  );
}

export default App;
