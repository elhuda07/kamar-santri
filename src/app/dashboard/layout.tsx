import { redirect } from "next/navigation";
import { getCurrentUser } from "@/lib/auth";
import { Sidebar } from "@/components/layout/Sidebar";
import { UserMenu } from "@/components/layout/UserMenu";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getCurrentUser();

  if (!user) {
    redirect("/login");
  }

  const userName =
    user.profile?.full_name ??
    user.user_metadata?.full_name ??
    user.email ??
    "Pengguna";
  const userRole = user.role;
  const initials = userName
    .split(" ")
    .map((n: string) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  return (
    <div className="flex h-screen bg-cream-50">
      <Sidebar />
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Header */}
        <header className="flex h-16 items-center justify-between border-b border-cream-200 bg-white px-4 sm:px-6">
          <div>
            <h1 className="text-lg font-semibold text-gray-900">Dashboard</h1>
          </div>
          <div className="flex items-center gap-3">
            {/* Notification bell */}
            <button
              type="button"
              className="relative rounded-lg p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600"
              aria-label="Notifications"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                <path d="M13.73 21a2 2 0 0 1-3.46 0" />
              </svg>
              <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-red-500" />
            </button>

            {/* Role badge */}
            <span className="hidden rounded-full bg-primary-50 px-2.5 py-0.5 text-xs font-medium text-primary-700 sm:inline-flex">
              {userRole}
            </span>

            {/* User menu */}
            <UserMenu
              userName={userName}
              userRole={userRole}
              userInitials={initials}
            />
          </div>
        </header>

        {/* Main content */}
        <main className="flex-1 overflow-y-auto p-4 pb-20 sm:p-6 md:pb-6">
          {children}
        </main>
      </div>
    </div>
  );
}
