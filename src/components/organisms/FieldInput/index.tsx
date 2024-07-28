"use client"

import { Form } from "@/components/ui/form";
import { Separator } from "@radix-ui/react-separator";
import React, { FC, ReactNode } from "react";

interface FieldInputProps {
  children: ReactNode,
  title: string,
  subtitle: string,
}

const FieldInput: FC<FieldInputProps> = ({ children, subtitle, title }) => {
  return (
    <>

      <div className="flex flex-row items-start">
        <div className="w-[35%]">
          <div className="font-semibold">{ title }</div>
          <div className="text-gray-400">{ subtitle }</div>
        </div>
        { children }
      </div>
      <Separator />
    </>
  );
};

export default FieldInput ;