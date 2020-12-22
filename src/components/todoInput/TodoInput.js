import React, { useState, useEffect, useRef } from "react";
import styles from "../../style/todoinput.module.scss";
import { useDispatch } from "react-redux";
import * as Actions from "../../config/action";

const TodoInput = ({ edit, judul, desk, id, setIsEdit, setIsModalVisible }) => {
  const [title, setTitle] = useState(judul || "");
  const [desc, setDesc] = useState(desk || "");
  const inputRef = useRef(null);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(Actions.addData(title, desc));
  };

  const handleEdit = (e) => {
    e.preventDefault();
    dispatch(Actions.editData(id, title, desc));
    setIsEdit(false);
    setIsModalVisible(false);
  };

  return (
    <form
      onSubmit={edit ? handleEdit : handleSubmit}
      className={styles.container}
    >
      <>
        <input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          name="text"
          required
          className={`${styles.todoInput}`}
        />
        <input
          placeholder="Description"
          value={desc}
          required
          onChange={(e) => setDesc(e.target.value)}
          name="desc"
          className={`${styles.todoInput}`}
        />
        <button type="submit" className={`${styles.todoButton}`}>
          {edit ? "Save" : "Add todo"}
        </button>
      </>
    </form>
  );
};

export default TodoInput;
