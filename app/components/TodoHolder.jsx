"use client";
import { TodoList } from ".";
import { databaseCollection } from "@/app/backend";
import { onSnapshot } from "firebase/firestore";
import { Fragment, useEffect, useState } from "react";

const TodoHolder = ({ child }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const unsubcribe = onSnapshot(databaseCollection, (snapshot) => {
      let newData = [];
      snapshot.forEach((doc) => {
        newData.push(doc.data());
      });
      setData(newData);
    });
    return () => {
      unsubcribe();
    };
  }, []);
  return (
    <Fragment>
      <TodoList data={data}/>
    </Fragment>
  );
};

export default TodoHolder;
