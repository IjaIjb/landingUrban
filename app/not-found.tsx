import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-[70vh] w-screen flex flex-col items-center justify-center">
      <h2 className="text-2xl font-creato">Not Found on Urban</h2>
      <p>Could not find requested resource</p>
      <Link
        href="/"
        className="p-2 bg-urban-green text-white rounded-md font-creato mt-8"
      >
        Return Home
      </Link>
    </div>
  );
}
