export const APP_NAME = "Kamar Santri";
export const APP_DESCRIPTION =
  "Platform pembelajaran modern untuk pesantren. Menghubungkan santri, ustadz, dan ilmu dalam satu tempat.";
export const APP_TAGLINE = "Belajar Lebih Baik, Berakhlak Lebih Mulia";

export const NAV_LINKS = [
  { href: "#features", label: "Fitur" },
  { href: "#about", label: "Tentang" },
  { href: "#contact", label: "Kontak" },
] as const;

export const DASHBOARD_NAV = [
  { href: "/dashboard", label: "Beranda", icon: "home" },
  { href: "/dashboard/courses", label: "Pelajaran", icon: "book" },
  { href: "/dashboard/schedule", label: "Jadwal", icon: "calendar" },
  { href: "/dashboard/grades", label: "Nilai", icon: "chart" },
  { href: "/dashboard/settings", label: "Pengaturan", icon: "settings" },
] as const;

export const FEATURES = [
  {
    title: "Manajemen Kelas",
    description:
      "Kelola kelas, jadwal, dan materi pelajaran dengan mudah dalam satu platform terintegrasi.",
    icon: "book",
  },
  {
    title: "Pantau Perkembangan",
    description:
      "Lacak kemajuan belajar santri secara real-time dengan laporan yang komprehensif.",
    icon: "chart",
  },
  {
    title: "Perpustakaan Digital",
    description:
      "Akses ribuan kitab dan referensi Islam secara digital kapan saja dan di mana saja.",
    icon: "library",
  },
  {
    title: "Komunikasi Mudah",
    description:
      "Hubungkan santri, ustadz, dan orang tua dalam satu platform komunikasi yang aman.",
    icon: "message",
  },
] as const;

export const STATS = [
  { value: "500+", label: "Pesantren" },
  { value: "50.000+", label: "Santri" },
  { value: "5.000+", label: "Ustadz" },
  { value: "10.000+", label: "Materi" },
] as const;
