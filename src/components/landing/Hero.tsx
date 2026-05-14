import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { APP_TAGLINE } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary-50 via-cream-50 to-cream-50">
      {/* Decorative elements */}
      <div className="absolute inset-0 islamic-pattern opacity-30" />
      <div className="absolute right-0 top-0 -mr-40 -mt-40 h-80 w-80 rounded-full bg-primary-200/30 blur-3xl" />
      <div className="absolute bottom-0 left-0 -mb-40 -ml-40 h-80 w-80 rounded-full bg-cream-300/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-36">
        <div className="mx-auto max-w-3xl text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-200 bg-white px-4 py-1.5 text-sm font-medium text-primary-700 shadow-sm">
            <span className="inline-block h-2 w-2 rounded-full bg-primary-500" />
            Platform Pesantren Digital
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            <span className="block">{APP_TAGLINE.split(",")[0]},</span>
            <span className="mt-2 block bg-gradient-to-r from-primary-700 to-primary-500 bg-clip-text text-transparent">
              {APP_TAGLINE.split(",")[1] || "Berakhlak Lebih Mulia"}
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600 sm:text-xl">
            Platform pembelajaran modern yang dirancang khusus untuk pesantren.
            Memudahkan manajemen kelas, materi, dan perkembangan santri dalam
            satu aplikasi terintegrasi.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/login">
              <Button size="lg" className="w-full sm:w-auto">
                Mulai Sekarang
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Button>
            </Link>
            <Link href="#features">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                Pelajari Lebih Lanjut
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom decorative arch */}
      <div className="absolute bottom-0 left-1/2 h-8 w-40 -translate-x-1/2 translate-y-4 rounded-t-full bg-cream-50" />
    </section>
  );
}
