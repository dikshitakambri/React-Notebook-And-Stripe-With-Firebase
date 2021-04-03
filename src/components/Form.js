import React from "react";
import UseInput from "./useInput";

function Form() {
  const [title, bindTitle, resetTitle] = UseInput();
  const [content, bindContent, resetContent] = UseInput();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ title, content });
    resetTitle();
    resetContent();
  };

  return (
    <div className="section container">
      <form action="" onSubmit={handleSubmit}>
        <h5 className="grey-text text-darken-3">New Note</h5>
        <div className="input-field">
          <label htmlfor="note_title">Notes Title</label>
          <input
            type="text"
            id="note_title"
            className="validate"
            {...bindTitle}
          ></input>
        </div>
        <div className="input-field">
          <label htmlfor="note_content">Note Content</label>
          <textarea
            id="note_content"
            className="materialize-textarea"
            {...bindContent}
          ></textarea>
        </div>
        <button className="btn" type="submit">
          Add
        </button>
      </form>
    </div>
  );
}

export default Form;
