"use client";
import TaskPage from "./TaskPage";
import { useEffect, useState } from "react";
import { onSnapshot } from "firebase/firestore";
import { databaseCollection } from "@/app/backend";

const PageHolder = ({ id }) => {
  const [data, setData] = useState([]);
  const num = id - 1;
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
  return <TaskPage data={data} num={num}></TaskPage>;
};

export default PageHolder;
