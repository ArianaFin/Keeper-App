import React, { useState } from "react";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Inputs from "./component/Inputs";
import Notes from "./component/Notes";
function App() {
  const [Note, setNotes] = useState([]);
  console.log(Note);
  function HandleNotes(value) {
    setNotes((prev) => {
      return [...prev, value];
    });
  }

  function Delete(id) {
    setNotes((prev) => {
      return prev.filter((valuee, index) => {
        return index !== id;
      });
    });
  }

  return (
    <section>
      <section>
        <Header />
      </section>
      <section>
        <Inputs onChecked={HandleNotes} />

        <section className="px-5 py-1 flex">
          {Note.map((item, index) => {
            return (
              <Notes
                heading={item.heading}
                para={item.paragraph}
                key={index}
                id={index}
                onChecked={Delete}
              />
            );
          })}
        </section>
      </section>
      <section>
        <Footer />
      </section>
    </section>
  );
}

export default App;
