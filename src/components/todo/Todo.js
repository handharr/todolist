import React, { useState } from "react";
import { Button, Modal } from "antd";
import styles from "../../style/todo.module.scss";
import {
  CloseOutlined,
  StepBackwardOutlined,
  StepForwardOutlined,
  EditOutlined,
} from "@ant-design/icons";
import { TodoInput } from "../../components";
import { useDispatch } from "react-redux";
import * as Actions from "../../config/action";

const Todo = ({ todos }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [display, setDisplay] = useState({});
  const dispatch = useDispatch();

  const handleOk = () => {
    setIsModalVisible(false);
    setIsEdit(false);
    setDisplay({});
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setIsEdit(false);
    setDisplay({});
  };

  const handleDelete = (id) => {
    dispatch(Actions.deleteData(id));
  };

  const handleStatus = (id, status) => {
    dispatch(Actions.setStatus(id, status));
    console.log("idnya", id);
  };
  return (
    <>
      {todos.map((val, index) => (
        <div className={styles.todoRow} key={index}>
          <div
            className={styles.info}
            key={val.id}
            onClick={() => {
              setIsModalVisible(true);
              setDisplay(val);
            }}
          >
            <b>{val.title}</b>
          </div>
          {val.status === 0 && (
            <div className={styles.icons}>
              <Button
                icon={<CloseOutlined />}
                type="ghost"
                shape="circle"
                className={styles.iconButton}
                onClick={() => handleDelete(val.id)}
              />
              <Button
                icon={<StepForwardOutlined />}
                type="ghost"
                shape="circle"
                className={styles.iconButton}
                onClick={() => handleStatus(val.id, 1)}
              />
            </div>
          )}
        </div>
      ))}
      <Modal
        footer={null}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        centered
        closeIcon={<CloseOutlined className={styles.closeIcon} />}
      >
        <div className={styles.modalContent}>
          <div className={styles.content1} key={display.id}>
            {isEdit ? (
              <TodoInput
                edit
                judul={display.title}
                desk={display.description}
                id={display.id}
                setIsEdit={setIsEdit}
                setIsModalVisible={setIsModalVisible}
              />
            ) : (
              <>
                <span>
                  <b>{display.title}</b>
                </span>
                <p>{display.description}</p>
                <span>Created : {display.createdAt}</span>
              </>
            )}
          </div>
          <div className={styles.iconsModal}>
            {display.status === 1 ? (
              <Button
                icon={<StepBackwardOutlined />}
                type="ghost"
                shape="circle"
                className={styles.iconButton}
                onClick={() => {
                  handleStatus(display.id, 0);
                  setIsModalVisible(false);
                  setIsEdit(false);
                }}
              />
            ) : (
              <Button
                icon={<StepForwardOutlined />}
                type="ghost"
                shape="circle"
                className={styles.iconButton}
                onClick={() => {
                  handleStatus(display.id, 1);
                  setIsModalVisible(false);
                  setIsEdit(false);
                }}
              />
            )}
            <Button
              icon={isEdit ? <CloseOutlined /> : <EditOutlined />}
              type="ghost"
              shape="circle"
              className={styles.iconButton}
              onClick={() => {
                isEdit ? setIsEdit(false) : setIsEdit(true);
              }}
            />
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Todo;
