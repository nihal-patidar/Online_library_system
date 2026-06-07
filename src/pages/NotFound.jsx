import { useRouteError, Link } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  console.error(error);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-6">
      <h1 className="text-6xl font-bold text-red-500">
        {error?.status || "404"}
      </h1>

      <h2 className="text-2xl font-semibold mt-4">
        {error?.statusText || "Something went wrong"}
      </h2>

      <p className="text-gray-600 mt-2 text-center max-w-lg">
        {error?.data || error?.message || "An unexpected error occurred."}
      </p>

      <div className="mt-8 bg-white p-4 rounded-lg shadow w-full max-w-2xl">
        <h3 className="font-semibold mb-2">Error Details</h3>

        <pre className="bg-gray-100 p-3 rounded overflow-auto text-sm">
          {JSON.stringify(
            {
              status: error?.status,
              statusText: error?.statusText,
              message: error?.message,
              data: error?.data,
            },
            null,
            2
          )}
        </pre>
      </div>

      <Link
        to="/"
        className="mt-6 px-5 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Go Home
      </Link>
    </div>
  );
};

export default ErrorPage;