import { prisma } from "@/lib/prisma";
import Item from "./item";

export const GeneratedItems = async () => {
  return (
    <div className="w-[60%] h-[500px] p-8 overflow-y-auto flex flex-col items-center gap-y-4"></div>
  );
};
