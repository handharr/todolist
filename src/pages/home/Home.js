import React, { useEffect } from "react";
import styles from "../../style/home.module.scss";
import { TodoInput, Todo } from "../../components";
import { Button } from "antd";
import { StepForwardFilled, StepBackwardFilled } from "@ant-design/icons";
import Axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import * as Actions from "../../config/action";

const fetchData = async (dispatch) => {
  try {
    const res = await Axios.get(
      "https://virtserver.swaggerhub.com/hanabyan/todo/1.0.0/to-do-list"
    );
    console.log("cek res", res);
    if (res.data) {
      dispatch(Actions.setData(res.data));
    }
  } catch (error) {}
};

const Home = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state);
  useEffect(() => {
    fetchData(dispatch);
  }, [dispatch]);
  console.log("cek", todos);
  return (
    <div className={styles.container}>
      <h1>Welcome To TodoList</h1>
      <div className={styles.content}>
        <div className={styles.wrapper}>
          <h1 className={styles.wrapperHeader}>Here's your plans!</h1>
          <TodoInput />
          <Todo todos={todos.filter((val) => val.status === 0)} />
        </div>
        <div className={styles.action}>
          <Button
            icon={<StepForwardFilled />}
            size="large"
            className={styles.iconButton}
            disabled
          />
          <Button
            icon={<StepBackwardFilled />}
            size="large"
            className={styles.iconButton}
            disabled
          />
        </div>
        <div className={styles.wrapper}>
          <h1 className={styles.wrapperHeader}>Yayy you have done this!!</h1>
          <Todo todos={todos.filter((val) => val.status === 1)} />
        </div>
      </div>
    </div>
  );
};

export default Home;
