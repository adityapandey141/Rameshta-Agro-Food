// app/not-found.jsx

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center  text-white px-6">
      <h1 className="text-7xl font-bold text-lg drop-shadow-md mb-4">404</h1>
      <h2 className="text-2xl md:text-3xl font-semibold text-br mb-2">
        Oops! Page not found.
      </h2>
      <p className="text-ltext text-center max-w-md mb-6">
        The page you’re looking for doesn’t exist or has been moved. Don’t
        worry, let’s get you back on track.
      </p>
      <Link
        href="/"
        className="inline-block px-6 py-3 bg-lg text-white font-medium rounded hover:bg-br transition-all duration-300"
      >
        Go back home
      </Link>
    </div>
  );
}
