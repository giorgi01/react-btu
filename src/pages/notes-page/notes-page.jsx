import AddNoteForm from '../../components/forms/add-note-form';
import NotesList from '../../components/list/notes-list';

function NotesPage(props) {
  return (
    <div className="row">
      <div className="column">
        <h2>Todos Page</h2>
        <div className="col-4">
          <AddNoteForm />
        </div>
      </div>
      <div className="column">
        <div className="row">
          <NotesList />
        </div>
      </div>
    </div>
  );
}

export default NotesPage;
