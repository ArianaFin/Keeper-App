import React, { useState } from "react";
import { IoMdAdd } from "react-icons/io";
function Inputs(props) {
  const [istrue, setTrue] = useState(false);
  const [values, setValue] = useState({
    heading: "",
    paragraph: "",
  });

  function HandleValue(event) {
    const { name, value } = event.target;

    setValue((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  function HandleClick() {
    setTrue(true);
  }
  function ReHandleClick() {
    setTrue(false);
  }

  function Send(event) {
    event.preventDefault();
    props.onChecked(values);
    setValue({
      heading: "",
      paragraph: "",
    });
  }

  return (
    <div>
      <div className="w-50">
        <form className="form" onSubmit={Send}>
          <input
            onChange={HandleValue}
            name="heading"
            onClick={HandleClick}
            onDoubleClick={ReHandleClick}
            type="text"
            placeholder="Type Heading"
            className="inputDesign py-1 px-1"
            value={values.heading}
          />
          {istrue === true && (
            <textarea
              onChange={HandleValue}
              name="paragraph"
              typeof="text"
              placeholder="Type What to do?"
              className={`py-1 px-1 ${istrue && "textarea-transition"}`}
              rows={istrue ? "5" : "0"}
              value={values.paragraph}
            />
          )}
          <button type="submit" className="btn">
            <IoMdAdd />
          </button>
        </form>
      </div>
    </div>
  );
}

export default Inputs;
