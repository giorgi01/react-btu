import './App.css';
import { Switch, Route } from 'react-router';
import NotesProvider from './contexts/NotesProvider';
import NotesPage from './pages/notes-page';
import Navigation from './components/navigation/navigation'


function App() {
  return (
    <div className="container">
        <Navigation />

        <Switch>
          <Route path="/todos">
            <NotesProvider>
              <NotesPage />
            </NotesProvider>
          </Route>

          <Route path="/comments">
            
          </Route>

        </Switch>
    </div>
  );
}

export default App;
