"use client";
import SettingsForm from "@/components/SettingsForm";

export const metadata = { title: "Settings — Carys" };

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Settings</h1>
      <SettingsForm />
    </div>
  );
}