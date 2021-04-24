import { NavLink } from 'react-router-dom';

import './navigation.css';

function Navigation(props) {
  return (
    <div className="row mt-4 mb-4">
      <ul className="nav nav-pills nav-fill">
        <li className="nav-item">
          <NavLink
            className="nav-link"
            to="/todos"
            activeClassName="active bg-todosPage">
            Todos Page
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className="nav-link"
            to="/comments"
            activeClassName="active bg-commentsPage ">
            Comments
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;