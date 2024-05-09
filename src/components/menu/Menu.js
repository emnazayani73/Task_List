import React from "react";
import { Link, NavLink } from "react-router-dom";

function Menu(props) {
  if (props.role === "teacher") {
    return (
      <div>
        <ul>
          <li>
            {/*<Link to="/tasks">My tasks List</Link>*/}
            <NavLink to="/teachers/tasks">My tasks List</NavLink>
          </li>
        </ul>
      </div>
    );
  } else
    return (
      <div>
        <ul>
          <li>
            {/*<Link to="/hello">Hello</Link>*/}
            <NavLink
              to="/students/hello"
              style={(params) =>
                params.isActive ? { color: "red" } : undefined
              }
            >
              Hello
            </NavLink>
          </li>
        </ul>
      </div>
    );
}

export default Menu;
