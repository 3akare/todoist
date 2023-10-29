"use client";
import React, { useState } from "react";
import { Priority } from "./index";
import Image from "next/image";

import send from "../../public/send.svg";
import close from "../../public/close.svg";
import { updateDoc, doc, arrayUnion, getDoc } from "firebase/firestore";
import { database } from "../backend";

const Dialog = () => {
  const [data, setData] = useState({
    title: "",
    description: "",
    priority: "",
  });

  const priorityArray = ["high", "moderate", "low"];
  const handleChange = (event) => {
    setData((oldData) => {
      return { ...oldData, [event.target.id]: event.target.value };
    });
  };

  const handleClick = (event) => {
    setData((oldData) => {
      return { ...oldData, priority: event.target.id };
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const documentRef = doc(database, "todoist-test", "Nvg01m8MW7gCmqjAIpCH");

    // Fetch the document data
    const documentSnapshot = await getDoc(documentRef);
    const docData = documentSnapshot.data();

    // Calculate the new size by incrementing the current size by 1
    const newSize = docData.tasks.length + 1;

    // Create the new object
    const newObject = {
      id: newSize.toString(),
      view: true,
      priority: data.priority,
      description: data.description,
      task: data.title,
    };

    // Use updateDoc to add the new object to the 'tasks' array
    updateDoc(documentRef, {
      tasks: arrayUnion(newObject),
    });

    setData({ priority: "", description: "", title: "" });
  };

  return (
    <dialog
      id="dialogControl"
      className="w-[90%] outline outline-border rounded-md outline-1 max-w-2xl mt-24 transition"
    >
      <form
        className="container mx-auto flex flex-col items-start justify-center w-full p-2 space-y-2 md:space-y-4 max-w-3xl "
        onSubmit={handleSubmit}
        name="taskForm"
      >
        <label htmlFor="title" className="hidden">
          title
        </label>
        <input
          type="text"
          placeholder="Task Name"
          id="title"
          className="indent-1 focus-within:outline-none focus-visible:outline-none w-full h-6 text-xl"
          value={data.title}
          onChange={handleChange}
          autoFocus
          required
        />
        <label htmlFor="description" className="hidden">
          description
        </label>
        <textarea
          name="description"
          id="description"
          cols="1"
          rows="3"
          className="w-full resize-none box-border p-2 focus-within:outline-none focus-visible:outline-none font-light text-sm"
          placeholder="Description"
          value={data.description}
          onChange={handleChange}
          required
        ></textarea>
        <div className="flex w-full justify-between items-center">
          <div className="flex gap-3">
            {priorityArray.map((item) => {
              return (
                <Priority
                  key={item}
                  handleClick={handleClick}
                  priority={item}
                  current={data.priority}
                />
              );
            })}
          </div>
          <div>
            {data.description.length !== 0 && data.title.length !== 0 ? (
              <button
                className="w-8 h-8 rounded-md bg-primary text-secondary flex items-center justify-center"
                onClick={() => {
                  dialogControl.close();
                }}
              >
                <Image
                  src={send}
                  alt={"send"}
                  className="transition duration-300 hover:-rotate-12"
                />
              </button>
            ) : (
              <div
                className="w-8 h-8 rounded-md bg-secondary outline-[1px] outline-primary outline text-primary flex justify-center items-center cursor-pointer"
                onClick={() => {
                  setData({ priority: "", description: "", title: "" });
                  dialogControl.close();
                }}
              >
                <Image
                  src={close}
                  alt={"close"}
                  className="transition hover:rotate-90"
                />
              </div>
            )}
          </div>
        </div>
      </form>
    </dialog>
  );
};

export default Dialog;
