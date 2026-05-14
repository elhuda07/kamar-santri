"use client";

import { Suspense, useState, useTransition } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Logo } from "@/components/icons/Logo";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { signIn, signUp, signInWithGoogle } from "./actions";

export default function LoginPage() {
  return (
    <Suspense>
      <LoginContent />
    </Suspense>
  );
}

function LoginContent() {
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();
  const searchParams = useSearchParams();
  const authError = searchParams.get("error");

  function handleSubmit(formData: FormData) {
    setError(null);
    startTransition(async () => {
      const result = isLogin
        ? await signIn(formData)
        : await signUp(formData);
      if (result?.error) {
        setError(result.error);
      }
    });
  }

  function handleGoogleSignIn() {
    setError(null);
    startTransition(async () => {
      const result = await signInWithGoogle();
      if (result?.error) {
        setError(result.error);
      }
    });
  }

  return (
    <div className="flex min-h-screen">
      {/* Left panel — decorative (hidden on mobile) */}
      <div className="relative hidden w-1/2 overflow-hidden bg-gradient-to-br from-primary-700 to-primary-900 lg:block">
        <div className="absolute inset-0 islamic-pattern opacity-10" />
        <div className="absolute right-0 top-0 -mr-20 -mt-20 h-60 w-60 rounded-full bg-primary-500/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 h-60 w-60 rounded-full bg-primary-400/20 blur-3xl" />

        <div className="relative flex h-full flex-col items-center justify-center px-12 text-center">
          <div className="mb-8 h-24 w-48 rounded-t-full border-2 border-white/20" />

          <h2 className="text-3xl font-bold text-white">
            Selamat Datang di Kamar Santri
          </h2>
          <p className="mt-4 max-w-md text-lg text-primary-200">
            Platform pembelajaran modern yang menghubungkan santri, ustadz, dan
            ilmu dalam satu tempat.
          </p>

          <div className="mt-12 grid grid-cols-3 gap-6 text-center">
            <div>
              <p className="text-2xl font-bold text-white">500+</p>
              <p className="text-sm text-primary-200">Pesantren</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-white">50K+</p>
              <p className="text-sm text-primary-200">Santri</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-white">5K+</p>
              <p className="text-sm text-primary-200">Ustadz</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right panel — form */}
      <div className="flex w-full items-center justify-center bg-cream-50 px-4 py-12 sm:px-6 lg:w-1/2 lg:px-8">
        <div className="w-full max-w-md">
          <div className="mb-8 text-center lg:text-left">
            <Logo className="justify-center lg:justify-start" />
            <h1 className="mt-6 text-2xl font-bold text-gray-900">
              {isLogin ? "Masuk ke Akun Anda" : "Daftar Akun Baru"}
            </h1>
            <p className="mt-2 text-sm text-gray-500">
              {isLogin
                ? "Masukkan email dan kata sandi untuk melanjutkan"
                : "Buat akun untuk memulai perjalanan belajar"}
            </p>
          </div>

          {(error || authError) && (
            <div className="mb-4 rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700">
              {error || "Terjadi kesalahan saat autentikasi. Silakan coba lagi."}
            </div>
          )}

          <form action={handleSubmit} className="space-y-5">
            {!isLogin && (
              <Input
                label="Nama Lengkap"
                name="full_name"
                type="text"
                placeholder="Masukkan nama lengkap"
                required
              />
            )}

            <Input
              label="Email"
              name="email"
              type="email"
              placeholder="nama@pesantren.id"
              required
            />

            <Input
              label="Kata Sandi"
              name="password"
              type="password"
              placeholder="Masukkan kata sandi"
              minLength={6}
              required
            />

            {isLogin && (
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 text-sm text-gray-600">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                  />
                  Ingat saya
                </label>
                <a
                  href="#"
                  className="text-sm font-medium text-primary-600 hover:text-primary-700"
                >
                  Lupa kata sandi?
                </a>
              </div>
            )}

            <Button type="submit" className="w-full" disabled={isPending}>
              {isPending ? "Memproses..." : isLogin ? "Masuk" : "Daftar"}
            </Button>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-cream-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-cream-50 px-4 text-gray-400">atau</span>
              </div>
            </div>

            <button
              type="button"
              onClick={handleGoogleSignIn}
              disabled={isPending}
              className="mt-4 flex w-full items-center justify-center gap-3 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <svg width="20" height="20" viewBox="0 0 24 24">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
              Lanjutkan dengan Google
            </button>
          </div>

          <p className="mt-8 text-center text-sm text-gray-500">
            {isLogin ? "Belum punya akun?" : "Sudah punya akun?"}{" "}
            <button
              type="button"
              onClick={() => {
                setIsLogin(!isLogin);
                setError(null);
              }}
              className="font-semibold text-primary-600 hover:text-primary-700"
            >
              {isLogin ? "Daftar sekarang" : "Masuk di sini"}
            </button>
          </p>

          <p className="mt-4 text-center">
            <Link
              href="/"
              className="text-sm text-gray-400 hover:text-gray-600"
            >
              &larr; Kembali ke beranda
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
