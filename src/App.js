import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} /> 
        <Route exact path="/projects" component={Projects} /> 
        <Route exact path="/about" component={About} /> 
      </Switch>
    </BrowserRouter>
  );
}

export default App;
