"use client";

import { useState, useRef, useEffect } from "react";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";

interface UserMenuProps {
  userName: string;
  userRole: string;
  userInitials: string;
}

const roleLabels: Record<string, string> = {
  admin: "Administrator",
  ustadz: "Ustadz",
  santri: "Santri",
};

export function UserMenu({ userName, userRole, userInitials }: UserMenuProps) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  async function handleSignOut() {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push("/");
    router.refresh();
  }

  return (
    <div className="relative" ref={menuRef}>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 rounded-lg p-1 transition-colors hover:bg-gray-100"
      >
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-100 text-sm font-semibold text-primary-700">
          {userInitials}
        </div>
        <div className="hidden text-left sm:block">
          <p className="text-sm font-medium text-gray-700">{userName}</p>
          <p className="text-xs text-gray-400">{roleLabels[userRole] ?? userRole}</p>
        </div>
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="hidden text-gray-400 sm:block"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-56 rounded-lg border border-cream-200 bg-white py-1 shadow-lg">
          <div className="border-b border-cream-200 px-4 py-3">
            <p className="text-sm font-medium text-gray-900">{userName}</p>
            <p className="text-xs text-gray-500">
              {roleLabels[userRole] ?? userRole}
            </p>
          </div>
          <a
            href="/dashboard/settings"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
          >
            Pengaturan
          </a>
          <button
            type="button"
            onClick={handleSignOut}
            className="block w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-red-50"
          >
            Keluar
          </button>
        </div>
      )}
    </div>
  );
}
