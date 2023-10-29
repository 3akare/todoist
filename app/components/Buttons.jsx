"use client";
import Image from "next/image";
import plus from "../../public/plus.svg";
import search from "../../public/search.svg";
import trash from "../../public/trash.svg";

import { updateDoc, doc, Transaction, getDoc } from "firebase/firestore";
import { database } from "../backend";

export const NavBarButton = () => {
  return (
    <div className="p-[4px] rounded-sm hover:bg-black/20 transition duration-400 cursor-pointer">
      <Image
        src={plus}
        alt="Add Task"
        width={28}
        onClick={() => dialogControl.showModal()}
        className="hidden md:block"
      />
      <Image
        src={search}
        alt="search"
        width={28}
        className="md:hidden"
        onClick={() => {
          console.log("hello world");
        }}
      />
    </div>
  );
};

export const DeleteButton = ({ id }) => {
  const handleDelete = async () => {
    console.log(id);
    const documentRef = doc(database, "todoist-test", "Nvg01m8MW7gCmqjAIpCH");
    const documentSnapshot = await getDoc(documentRef);

    const tasks = documentSnapshot.data().tasks;
    const copiedTasks = [...tasks];

    const task = copiedTasks.find((task) => task.id === id);
    task.view = false;

    updateDoc(documentRef, { tasks: copiedTasks });
  };

  return (
    <button
      className="self-start flex gap-1 p-2 m-1 pt-0"
      onClick={handleDelete}
    >
      <Image src={trash} alt="trash" className="h-6 w-6"></Image>
    </button>
  );
};
