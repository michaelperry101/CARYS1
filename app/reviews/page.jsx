export const dynamic = "force-static";

const items = [
  { name: "Amelia R.", text: "Carys feels fast and helpful. Switched from ChatGPT and love the slick UI."},
  { name: "Jordan K.", text: "Pinned projects + chat history saved my launch week."},
  { name: "Priya D.", text: "Image + web search in one place keeps me focused."},
  { name: "Chris M.", text: "The voice mode actually makes brainstorming fun."},
];

export default function ReviewsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Reviews</h1>
      <div className="grid md:grid-cols-2 gap-4">
        {items.map((r, i)=>(
          <div key={i} className="rounded-2xl bg-white p-6 shadow-soft border">
            <div className="font-semibold mb-1">{r.name}</div>
            <div className="text-neutral-700">{r.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
