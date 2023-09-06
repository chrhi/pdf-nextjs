import Link from "next/link";
import { Button } from "./ui/button";

type Props = {
  firstName: string;
  url: string;
};

export default function Item({ firstName, url }: Props) {
  return (
    <div className="w-full h-[50px] bg-gray-100 px-4 rounded-lg shadow-lg flex items-center justify-between">
      <p className="font-bold text-xl text-gray-900">{firstName}</p>

      <Link
        href={url}
        target="_blank"
        rel="noreferrer"
        download={"abdullah.pdf"}
      >
        <Button>download pdf</Button>
      </Link>
    </div>
  );
}
