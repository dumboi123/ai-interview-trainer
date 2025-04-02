import { isAuthenticated } from "@/lib/actions/auth.action";
import { redirect } from "next/navigation";
import React from "react";
// import "./globals.css"
const AuthLayout = async ({ children }: { children: React.ReactNode }) => {
    const isUserAuthenticated = await isAuthenticated();
    isUserAuthenticated && redirect("/");

  return <div className="auth-layout">{children}</div>;
};

export default AuthLayout;
