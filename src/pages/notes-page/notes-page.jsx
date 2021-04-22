import AddNoteForm from '../../components/forms/add-note-form';
import NotesList from '../../components/list/notes-list';

function NotesPage(props) {
  return (
    <div className="row">
      <h2>Notes Page</h2>
      <div className="col-4">
        <AddNoteForm />
      </div>
      <div className="col-6">
        <NotesList />
      </div>
    </div>
  );
}

export default NotesPage;