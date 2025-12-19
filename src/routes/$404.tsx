import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/$404")({
  component: NotFound,
});

function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-linear-to-br from-slate-950 via-slate-900 to-slate-950">
      <h1 className="text-4xl font-bold text-slate-100 mb-4">
        404 — Page not found
      </h1>

      <p className="text-slate-400 mb-6">
        The page you’re looking for doesn’t exist.
      </p>

      <Link
        to="/"
        className="px-4 py-2 rounded-lg bg-linear-to-r from-cyan-500 to-blue-600 text-white cursor-pointer"
      >
        Go home
      </Link>
    </div>
  );
}
