import React from "react";
import Link from "next/link";

import LogoSvg from "./LogoSvg";
import { Skeleton } from "./ui/skeleton";
import { ClientHydration } from "./providers/ClientHydration";
import { ThemeToggle } from "./providers/ThemeToggle";

export default async function Header() {
  return (
    <div className="font-Inter bg-background border-b-accent fixed z-20 w-full border-b-[1px] px-2 shadow md:px-3">
      <div className="mx-auto flex w-[98%] items-center justify-between py-2 pt-4">
        <div className="flex w-1/5">
            <Link href={`/`}>
              <LogoSvg />
            </Link>
        </div>

        <div className="flex w-1/5 items-center justify-end gap-2 xl:gap-3">
          <ClientHydration
            fallback={
              <div className="mr-2 flex gap-6">
                <Skeleton className="w-6 p-4" />
              </div>
            }
          >
            <ThemeToggle />
          </ClientHydration>
        </div>
      </div>
    </div>
  );
}
