import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import './App.css';

//pages
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
    <Header></Header>
    <div className="gap">
      <h1>This is a gap</h1>
      <p>this is a gap</p>
    </div>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
