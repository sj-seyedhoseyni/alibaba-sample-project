"use client";

import Link from "next/link";

export default function Error() {
  return (
    <div className="flex flex-col items-center justify-center p-16 gap-2">
      <div>Something went wrong!</div>
      <Link href="/" className="font-extrabold">
        Back to Home
      </Link>
    </div>
  );
}
