import React, { useState } from "react";

const Select = (props) => {
  // const [listOfNotes, setListOfNotes] = useState(null);

  return (
    <div>
      <h3>Select an octave</h3>
      <form>
        <label>Select</label>
        <input type="select" />
      </form>
    </div>
  );
};

export default Select;
