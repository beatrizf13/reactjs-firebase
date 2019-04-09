import React from "react";

const Form = ({ name, comment, onChangeName, onChangeComment, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <div>
        <label>Nome</label>
        <br />
        <input required value={name} onChange={onChangeName} />
      </div>
      <div>
        <label>Comentáro</label>
        <br />
        <input required value={comment} onChange={onChangeComment} />
      </div>
      <div>
        <button>Salvar</button>
      </div>
    </form>
  );
};

export default Form;
