"use server";

import { cookies } from "next/headers";

const cookieStore = cookies();

export const hasPermission = async () => {
  const getPermission = async () => {
    const permission = cookieStore.has("permission");
    return permission;
  };

  const hasCookiePermission = await getPermission();
  return hasCookiePermission;
};

export const handleAcceptPermission = async () => {
  cookieStore.set("permission", "allowed");
};

export const handleRejectPermission = () => {
  "use server";
  cookieStore.set("permission", "denied");
};
