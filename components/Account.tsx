"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { signOut } from "@/lib/actions/auth.action";

const Account = ({ userName }: { userName: string }) => {
  const router = useRouter();

  const handleLogout = () => {
    signOut();
    console.log("User logged out");
    router.push("/sign-in");
  };

  return (
    <div className="flex justify-end gap-4">
      {/* Tên đăng nhập */}
      <span className="text-primary-50">Logged in as <strong>{userName}</strong></span>

      {/* Nút Logout */}
      <button
        className="text-red-500 hover:underline"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
};

export default Account;
