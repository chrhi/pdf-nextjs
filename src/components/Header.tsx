import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { buttonVariants } from "./ui/button";
import { currentUser } from "@clerk/nextjs";
import type { User } from "@clerk/nextjs/api";

import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import UserDropDown from "./UserDropDown";

const Navbar = async () => {
  const user: User | null = await currentUser();

  return (
    <nav className="sticky h-20 inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-20 items-center justify-between border-b border-zinc-200">
          <Link
            href="/"
            className="flex z-40 text-2xl text-rose-500 font-bold "
          >
            <span>Sochna</span>
          </Link>

          {/* <MobileNav isAuth={!!user} /> */}

          <div className="hidden items-center space-x-4 sm:flex">
            {!user ? (
              <>
                <Link
                  href="/signup"
                  className={cn(buttonVariants({ variant: "secondary" }))}
                >
                  Create my account
                </Link>
                <Link
                  href="/signin"
                  className={cn(buttonVariants({ variant: "default" }))}
                >
                  Log in
                </Link>
              </>
            ) : (
              <UserDropDown user={user} />
            )}
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
