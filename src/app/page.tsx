import { PDFForm } from "@/components/forms/invoice-form";
import { GeneratedItems } from "@/components/generated-items";

export default function Home() {
  return (
    <main className="flex min-h-screen  w-full gap-x-4 ">
      <PDFForm />
      <GeneratedItems />
    </main>
  );
}
