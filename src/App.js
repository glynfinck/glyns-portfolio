import { Redirect, Route, Switch, BrowserRouter } from 'react-router-dom';
import { NavMenu, Footer, SmoothScroll } from './components';
import { HomePage, ProjectsPage, ContactPage, AboutPage } from './pages';

export default function App() {
  return (
    <BrowserRouter>
      <NavMenu />
      <SmoothScroll>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/home" />
          </Route>
          <Route path="/home" exact>
            <HomePage />
          </Route>
          <Route path="/about" exact>
            <AboutPage />
          </Route>
          <Route path="/projects" exact>
            <ProjectsPage />
          </Route>
          <Route path="/contact" exact>
            <ContactPage />
          </Route>
          <Route path="*">
            <Redirect to="/home" />
          </Route>
        </Switch>
        <Footer />
      </SmoothScroll>
    </BrowserRouter>
  );
}
