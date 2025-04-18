import Link from "next/link";
import React from "react";
import Image from "next/image";
import { isAuthenticated } from "@/lib/actions/auth.action";
import { redirect } from "next/navigation";
import Account from "@/components/Account";
import { getCurrentUser } from "@/lib/actions/auth.action";

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  const isUserAuthenticated = await isAuthenticated();
  !isUserAuthenticated && redirect("/sign-in");
  return (
    <div className="root-layout">
      <nav className="flex justify-between items-center p-4">
        <div className="flex items-center">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.svg" alt="MockMate Logo" width={38} height={32} />
            <h2 className="text-primary-100">PrepWise</h2>
          </Link>
        </div>
        <div>
          <Account userName={(await getCurrentUser())?.name || ""} />
        </div>
      </nav>

      {children}
    </div>
  );
};

export default RootLayout;
