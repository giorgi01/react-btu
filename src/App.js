import './App.css';
import NotesProvider from './contexts/NotesProvider';
import HomePage from './pages/home-page'
import NotesPage from './pages/notes-page';

function App() {
  return (
    <div className="container">
        <NotesProvider>
          <NotesPage />
        </NotesProvider>
    </div>
  );
}

export default App;
