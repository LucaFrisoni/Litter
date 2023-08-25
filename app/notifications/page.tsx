"use client";
import React from "react";
import Header from "../components/Header";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import NotificationsFeed from "../components/NotificationsFeed";

const NotificationsView = () => {
  const router = useRouter();
  const { data: session, status } = useSession();

  if (!session) {
    router.push("/");
  }

  return (
    <>
      <Header label="Notifications" showBackArrow />
      <NotificationsFeed/>
    </>
  );
};

export default NotificationsView;
