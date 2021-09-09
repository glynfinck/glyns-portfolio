import { Redirect, Route, Switch, BrowserRouter } from 'react-router-dom';
import { NavMenu, Footer } from './components';
import { HomePage, ProjectsPage, ContactPage, ResumePage } from './pages';

export default function App() {
  return (
    <BrowserRouter>
      <NavMenu />
      <Switch>
        <Route path="/" exact>
          <Redirect to="/home" />
        </Route>
        <Route path="/home" exact>
          <HomePage />
        </Route>
        <Route path="/projects" exact>
          <ProjectsPage />
        </Route>
        <Route path="/resume" exact>
          <ResumePage />
        </Route>
        <Route path="/contact" exact>
          <ContactPage />
        </Route>
        <Route path="*">
          <Redirect to="/home" />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}
