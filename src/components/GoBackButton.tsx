"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { ArrowLeftToLine } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";
import { Button } from "./ui/button";

export default function GoBackButton() {
  const router = useRouter();

  return (
    <TooltipProvider>
      <Tooltip delayDuration={300}>
        <TooltipTrigger asChild>
          <Button
            variant={"ghost"}
            className="flex h-fit w-fit items-center gap-1 p-1 md:p-2"
            onClick={() => router.back()}
          >
            <ArrowLeftToLine className="h-7 w-7 md:h-5 md:w-5 lg:h-6 lg:w-6" />
          </Button>
        </TooltipTrigger>
        <TooltipContent
          side="bottom"
          className="bg-accent text-foreground font-OpenSans cursor-help font-normal"
        >
          Назад
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
