"use client";
import axios from "axios";
import { FormEvent, useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

export const InvoiceForm = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    description: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!data.firstName || !data.lastName || !data.description) return;
    setIsLoading(true);
    await axios.post("/api", data);
    setIsLoading(false);

    window.location.reload();
  };
  return (
    <form
      onSubmit={async (e) => await handleSubmit(e)}
      className="w-[40%] flex flex-col gap-y-4 p-8  h-[500px] "
    >
      <h1 className="text-lg font-medium text-gray-500 ">
        Please Complete The Form{" "}
      </h1>
      <Label>first name</Label>
      <Input
        onChange={(e) => setData({ ...data, firstName: e.target.value })}
      />

      <Label>last name</Label>
      <Input onChange={(e) => setData({ ...data, lastName: e.target.value })} />

      <Label>Description</Label>
      <Textarea
        onChange={(e) => setData({ ...data, description: e.target.value })}
      />

      <Button disabled={isLoading}>
        {" "}
        {isLoading ? "generating..." : "generate my pdf"}
      </Button>
    </form>
  );
};
