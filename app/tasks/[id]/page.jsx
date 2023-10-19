import { fetchData } from "@/app/components";
import descImg from "./description.svg";
import Image from "next/image";

const Page = async ({ params: { id } }) => {
  const data = await fetchData(`${id}`, 20);
  return (
    <main className="space-y-8 md:space-y-16">
      <section className="flex items-center justify-between h-fit">
        <h1 className="text-3xl max-md:text-2xl">{data.task}</h1>
        <div
          className={`w-16 p-1 text-xs font-normal outline outline-[1.5px] rounded-md text-center ${String(
            data.priority
          )}`}
        >
          <p>{data.priority}</p>
        </div>
      </section>
      <section className="font-light">
        <div className="flex items-center gap-1">
          <Image src={descImg} alt="description" className="rotate-180" />
          <h2 className="text-slate-500 text-sm">Description</h2>
        </div>
        <div className="h-32 min-h-[128px] max-h-fit">
          <p className="p-2 m-2">{data.description}</p>
        </div>
      </section>
    </main>
  );
};

export default Page;
