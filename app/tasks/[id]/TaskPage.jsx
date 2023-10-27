import descImg from "./description.svg";
import Image from "next/image";
const TaskPage = ({ data, num }) => {
  return (
    <main className="space-y-8 md:space-y-16">
      <section className="flex items-center justify-between h-fit">
        <h1 className="text-3xl max-md:text-2xl">{data[0]?.tasks[num].task}</h1>
        <div
          className={`w-16 p-1 text-xs font-normal outline outline-[1.5px] rounded-md text-center ${String(
            data[0]?.tasks[num].priority
          )}`}
        >
          <p>{data[0]?.tasks[num].priority}</p>
        </div>
      </section>
      <section className="font-light">
        <div className="flex items-center gap-1">
          <Image src={descImg} alt="description" className="rotate-180" />
          <h2 className="text-slate-500 text-sm">Description</h2>
        </div>
        <div className="h-32 min-h-[128px] max-h-fit">
          <p className="p-2 m-2 break-words">
            {data[0]?.tasks[num].description}
          </p>
          <div className="h-24 invisible text-black"></div>
        </div>
      </section>
    </main>
  );
};

export default TaskPage;
