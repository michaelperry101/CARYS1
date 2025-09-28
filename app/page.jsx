"use client";
import { signIn } from "next-auth/react";

export const metadata = { title: "Login — Carys" };

const providers = [
  { id: "google", label: "Continue with Google" },
  { id: "facebook", label: "Continue with Facebook" },
  { id: "email", label: "Continue with Email" },
];

export default function LoginPage() {
  const trySignIn = async (provider) => {
    try {
      await signIn(provider, { callbackUrl: "/" });
    } catch (e) {
      alert("Sign-in not yet configured. Add provider keys in .env.");
    }
  };

  return (
    <div className="space-y-6 max-w-md">
      <h1 className="text-2xl font-semibold">Create account / Sign in</h1>
      <div className="rounded-2xl bg-white p-6 shadow-soft border space-y-3">
        {providers.map((p) => (
          <button
            key={p.id}
            onClick={() => trySignIn(p.id)}
            className="w-full rounded-xl border px-4 py-2 hover:bg-neutral-50"
          >
            {p.label}
          </button>
        ))}
        <p className="text-xs text-neutral-500">
          Tip: add provider keys in <code>.env</code> and redeploy.
        </p>
      </div>
    </div>
  );
}