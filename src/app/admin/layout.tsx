import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin - Gallery Manager",
  robots: { index: false, follow: false },
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="border-b bg-white">
        <div className="mx-auto max-w-7xl px-4 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold">Ekuphumleni Admin</h1>
          <a href="/" className="text-sm text-blue-600 hover:underline">
            ← Back to site
          </a>
        </div>
      </header>
      <main className="mx-auto max-w-7xl px-4 py-8">{children}</main>
    </div>
  );
}
