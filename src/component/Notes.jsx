import React from "react";
import { MdDelete } from "react-icons/md";

function Notes(props) {
  return (
    <div className="note">
      <div className="px-1 py-1 inside_note">
        <h1>{props.heading}</h1>
        <p>{props.para}</p>

        <div className="end">
          <button
            className="btn2"
            onClick={() => {
              props.onChecked(props.id);
            }}
          >
            <MdDelete />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Notes;
