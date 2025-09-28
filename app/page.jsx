"use client";
import ChatBox from "@/components/ChatBox";

export const metadata = { title: "Chat — Carys" };

export default function ChatPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Chat</h1>
      <ChatBox />
    </div>
  );
}