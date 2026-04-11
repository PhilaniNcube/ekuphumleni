import Link from "next/link";

export default function AdminPage() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <Link
          href="/admin/gallery"
          className="block rounded-lg border bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
        >
          <h3 className="font-semibold text-lg mb-2">Gallery Manager</h3>
          <p className="text-sm text-gray-600">
            Select which images appear on the public gallery page.
          </p>
        </Link>
      </div>
    </div>
  );
}
