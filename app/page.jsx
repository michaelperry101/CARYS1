export const dynamic = "force-static";

export default function PrivacyPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Privacy Policy</h1>
      <div className="rounded-2xl bg-white p-6 shadow-soft border space-y-3 text-neutral-700">
        <p>This is a template privacy policy for your Carys deployment. Replace with your legal text.</p>
        <ul className="list-disc ml-6">
          <li>We store your account data for authentication.</li>
          <li>We retain chats to improve service when you opt in to memory.</li>
          <li>You can delete data at any time via Settings.</li>
        </ul>
      </div>
    </div>
  );
}