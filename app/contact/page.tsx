import { Resend } from "resend";
import EmailTemplate from "@/components/EmailTemplate";
import { redirect } from "next/navigation";
import { sendContactEmail } from "./actions";

export default async function Contact({
  searchParams,
}: {
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = searchParams ? await searchParams : {};
  const success = params.success === "1";

  return (
    <div className="flex items-center justify-center min-h-screen black transition-colors">
      {success ? (
        <div className="flex flex-col items-center justify-center bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg w-full max-w-md">
          <svg
            className="w-16 h-16 text-green-500 mb-4"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <circle
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="2"
              fill="white"
            />
            <path
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12l2 2 4-4"
            />
          </svg>
          <p className="text-lg font-semibold text-gray-800 dark:text-gray-100 text-center">
            Your Query has been sent
          </p>
        </div>
      ) : (
        <form
          action={sendContactEmail}
          className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg w-full max-w-md space-y-6 transition-colors"
        >
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4 text-center">
            Contact Us
          </h2>
          <div>
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              First Name
            </label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              placeholder="First Name"
              required
              className="border border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label
              htmlFor="lastName"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Last Name
            </label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              placeholder="Last Name"
              required
              className="border border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              required
              className="border border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label
              htmlFor="query"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Your Query
            </label>
            <textarea
              id="query"
              name="query"
              placeholder="Your Query"
              required
              rows={4}
              className="border border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors"
          >
            Send
          </button>
        </form>
      )}
    </div>
  );
}
