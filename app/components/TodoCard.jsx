import Link from "next/link";
import { PhFlag } from ".";
import { cutText } from ".";

const TodoCard = ({ todo: { task, priority, id, description } }) => {
  return (
    <div className="w-64 max-md:w-full h-fit min-h-[5rem] max-h-[7rem] p-2 m-2 bg-transparent rounded-lg flex items-center justify-center outline-border outline-[1px] outline hover:outline-[#7e7e7e] hover:shadow-lg transition-all duration-300 relative z-10">
      <Link href={`/tasks/${id}`} className="w-4/5 h-full space-y-2">
        <div className="h-full space-y-1">
          <h1 className="text-sm h-1/4">
            {task.slice(0, 40)}
            {cutText(task, 40) ? "..." : ""}
          </h1>
          <p className="h-3/4 font-[400] text-xs">
            {description.slice(0, 60)}
            {cutText(description, 60) ? "..." : ""}
          </p>
        </div>
        <div>
          <small className={`flex items-center gap-1 ${priority}`}>
            <PhFlag />
            <h3>{priority}</h3>
          </small>
        </div>
      </Link>
      <button className="self-start flex gap-1 p-2 m-1 pt-0">
        <div className="w-1 h-1 bg-primary rounded-full"></div>
        <div className="w-1 h-1 bg-primary rounded-full"></div>
        <div className="w-1 h-1 bg-primary rounded-full"></div>
      </button>
    </div>
  );
};

export default TodoCard;
