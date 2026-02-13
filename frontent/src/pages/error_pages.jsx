import { useRouteError, Link } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <section className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      
      <div className="text-center max-w-xl">
        
        {/* Error Code */}
        <h1 className="text-8xl font-extrabold text-green-400 mb-4">
          404
        </h1>

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Oops! Page Not Found
        </h2>

        {/* Message */}
        <p className="text-gray-400 mb-6">
          Sorry, an unexpected error has occurred. The page you’re
          looking for doesn’t exist or was moved.
        </p>

        {/* Error Text */}
        <p className="text-red-400 italic mb-8">
          {error.statusText || error.message}
        </p>

        {/* Button */}
        <Link
          to="/"
          className="bg-green-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-green-500 transition"
        >
          Go Back Home
        </Link>

      </div>
    </section>
  );
}

