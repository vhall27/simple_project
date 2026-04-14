import { FormEvent, useState } from "react";
import { useMutation, useQuery } from "convex/react";
import { api } from "../convex/_generated/api";

type Quote = {
  _id: string;
  text: string;
};

export default function App() {
  const [text, setText] = useState("");
  const addQuote = useMutation(api.quotes.addQuote);
  const quotes = useQuery(api.quotes.getQuotes) as Quote[] | undefined;

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const trimmed = text.trim();
    if (!trimmed) return;

    await addQuote({ text: trimmed });
    setText("");
  };

  return (
    <main className="min-h-screen bg-slate-950 px-4 py-10 text-slate-100">
      <div className="mx-auto flex max-w-3xl flex-col gap-8">
        <section className="rounded-3xl border border-slate-800 bg-slate-900/80 p-8 shadow-2xl">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
            Track 1 Demo
          </p>
          <h1 className="text-4xl font-bold tracking-tight">Favorite Quotes App</h1>
          <p className="mt-3 max-w-2xl text-slate-300">
            Type a quote, save it to Convex, and watch it appear below. Refresh the page and
            your data will still be there.
          </p>

          <form className="mt-6 flex flex-col gap-4 sm:flex-row" onSubmit={handleSubmit}>
            <input
              type="text"
              value={text}
              onChange={(event) => setText(event.target.value)}
              placeholder="Enter a quote..."
              className="flex-1 rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-base text-slate-100 outline-none transition focus:border-cyan-400"
            />
            <button
              type="submit"
              className="rounded-2xl bg-cyan-400 px-6 py-3 text-base font-semibold text-slate-950 transition hover:scale-[1.01] hover:bg-cyan-300"
            >
              Save Quote
            </button>
          </form>
        </section>

        <section className="rounded-3xl border border-slate-800 bg-slate-900/80 p-8 shadow-2xl">
          <div className="mb-5 flex items-center justify-between gap-4">
            <h2 className="text-2xl font-semibold">Saved Quotes</h2>
            <span className="rounded-full border border-slate-700 px-3 py-1 text-sm text-slate-300">
              {quotes?.length ?? 0} total
            </span>
          </div>

          {!quotes ? (
            <p className="text-slate-400">Loading quotes...</p>
          ) : quotes.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-slate-700 p-6 text-slate-400">
              No quotes yet. Add your first one above.
            </div>
          ) : (
            <ul className="space-y-3">
              {quotes.map((quote) => (
                <li
                  key={quote._id}
                  className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4 text-lg text-slate-100"
                >
                  “{quote.text}”
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>
    </main>
  );
}
