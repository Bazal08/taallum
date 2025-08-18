"use client";
import AdminLayout from "@/components/shared/admin/AdminLayout";
// import AuthWrapper from "@/components/shared/RoutesCheckAuth";
import React from "react";

const layout = ({ children }) => {
  return <AdminLayout>{children}</AdminLayout>;
};

export default (layout);