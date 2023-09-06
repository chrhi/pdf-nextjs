import { prisma } from "@/lib/prisma";
import Item from "./item";

const getItems = async () => {
  const data = await prisma.item.findMany();

  return data;
};

export const GeneratedItems = async () => {
  const items = await getItems();
  return (
    <div className="w-[60%] h-[500px] p-8 overflow-y-auto flex flex-col items-center gap-y-4">
      {items.map((item) => {
        return <Item firstName={item.firstName} url={item.pdfUrl} />;
      })}
    </div>
  );
};
