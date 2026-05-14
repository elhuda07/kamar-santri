"use client";

import { useState } from "react";
import Link from "next/link";
import { Logo } from "@/components/icons/Logo";
import { Button } from "@/components/ui/Button";
import { NAV_LINKS } from "@/lib/constants";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-cream-200 bg-white/90 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Logo />

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-600 transition-colors hover:text-primary-700"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <Link href="/login">
            <Button variant="ghost" size="sm">
              Masuk
            </Button>
          </Link>
          <Link href="/login">
            <Button size="sm">Daftar Sekarang</Button>
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="md:hidden rounded-lg p-2 text-gray-600 hover:bg-gray-100"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 12h18M3 6h18M3 18h18" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="border-t border-cream-200 bg-white px-4 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-gray-600 hover:bg-primary-50 hover:text-primary-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <hr className="border-cream-200" />
            <Link href="/login" onClick={() => setMobileMenuOpen(false)}>
              <Button variant="outline" className="w-full">
                Masuk
              </Button>
            </Link>
            <Link href="/login" onClick={() => setMobileMenuOpen(false)}>
              <Button className="w-full">Daftar Sekarang</Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
