import { generatePdf } from "@/lib/generatePdf";
import { pdfTemplate } from "@/lib/pdfTemplate";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { utapi } from "uploadthing/server";

export async function POST(req: Request) {
  const { firstName, lastName, description } = await req.json();

  const myPdf = await generatePdf(
    pdfTemplate({ firstName, lastName, description })
  );

  // Create a Blob from the ArrayBuffer
  const blob = new Blob([myPdf], { type: "application/pdf" });

  // Create a File from the Blob (you can specify the desired filename here)
  const file = new File([blob], firstName + "_" + lastName + ".pdf", {
    type: "application/pdf",
  });

  const response = await utapi.uploadFiles(file);

  await prisma.item.create({
    data: {
      description,
      firstName,
      lastName,
      pdfUrl: response.data?.url || "",
    },
  });
  return NextResponse.json({ response: "here we go" });
}
