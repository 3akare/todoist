"use client";
import { PhFlag } from "../components";

const Priority = ({ handleClick, priority, current }) => {
  let color = current;
  if (color === priority && color !== "") {
    color = `${color}-create`;
  } else {
    color = priority;
  }
  return (
    <div
      className={`w-6 h-6 outline outline-[1px] rounded-md flex items-center justify-center z-1 ${color}`}
      id={priority}
    >
      <PhFlag className={`text-inherit`} onClick={handleClick} id={priority} />
    </div>
  );
};
export default Priority;
