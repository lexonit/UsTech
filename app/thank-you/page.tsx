import Link from "next/link";

const ThankYou: React.FC = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-6">
      <div className="max-w-md rounded-2xl bg-white p-8 shadow-lg text-center">
        <h1 className="text-3xl font-bold text-gray-800">Thank You! 🎉</h1>
        <p className="mt-4 text-gray-600">
          We appreciate your support. Your submission has been received.
        </p>
        <div className="mt-6">
          <Link
            href="/"
            className="px-8 mb-5 py-4 text-blue hover:bg-blue-600 rounded-md font-medium"
          >
            Go Back Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
