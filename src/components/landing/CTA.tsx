import Link from "next/link";
import { Button } from "@/components/ui/Button";

export function CTA() {
  return (
    <section id="contact" className="relative overflow-hidden bg-cream-50 py-20 sm:py-28">
      <div className="absolute inset-0 islamic-pattern opacity-20" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl rounded-2xl bg-gradient-to-br from-primary-700 to-primary-900 px-6 py-16 text-center shadow-xl sm:px-12">
          {/* Decorative arch */}
          <div className="mx-auto mb-8 h-16 w-32 rounded-t-full border-2 border-primary-400/30" />

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Siap Memulai Perjalanan Digital?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-primary-200">
            Daftarkan pesantren Anda sekarang dan rasakan kemudahan mengelola
            pembelajaran dengan teknologi modern.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/login">
              <Button
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto"
              >
                Daftar Gratis
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Button>
            </Link>
            <Link href="#features">
              <Button
                variant="outline"
                size="lg"
                className="w-full border-white/30 text-white hover:bg-white/10 sm:w-auto"
              >
                Lihat Demo
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
