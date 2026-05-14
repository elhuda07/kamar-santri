import { Card } from "@/components/ui/Card";

const stats = [
  {
    label: "Total Pelajaran",
    value: "24",
    change: "+3 bulan ini",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
  },
  {
    label: "Tugas Selesai",
    value: "18/24",
    change: "75% selesai",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
  },
  {
    label: "Rata-rata Nilai",
    value: "87.5",
    change: "+2.3 dari bulan lalu",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
  },
  {
    label: "Kehadiran",
    value: "95%",
    change: "Sangat baik",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
  },
];

const courses = [
  {
    name: "Fiqih Ibadah",
    instructor: "Ust. Ahmad",
    progress: 80,
    lessons: "16/20",
  },
  {
    name: "Nahwu Shorof",
    instructor: "Ust. Ibrahim",
    progress: 65,
    lessons: "13/20",
  },
  {
    name: "Tafsir Al-Quran",
    instructor: "Ust. Muhammad",
    progress: 45,
    lessons: "9/20",
  },
  {
    name: "Hadits Arbain",
    instructor: "Ust. Abdullah",
    progress: 90,
    lessons: "18/20",
  },
];

const schedule = [
  { time: "05:00", subject: "Tahfidz Al-Quran", location: "Masjid" },
  { time: "07:30", subject: "Nahwu Shorof", location: "Kelas A1" },
  { time: "09:00", subject: "Fiqih Ibadah", location: "Kelas A2" },
  { time: "13:00", subject: "Tafsir Al-Quran", location: "Aula Utama" },
  { time: "15:30", subject: "Hadits Arbain", location: "Kelas A1" },
];

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Welcome */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900">
          Assalamualaikum, Ahmad! 👋
        </h2>
        <p className="mt-1 text-gray-500">
          Berikut ringkasan aktivitas belajar Anda hari ini.
        </p>
      </div>

      {/* Stats grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.label} variant="bordered">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">
                  {stat.label}
                </p>
                <p className="mt-1 text-2xl font-bold text-gray-900">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs text-primary-600">{stat.change}</p>
              </div>
              <div className="rounded-lg bg-primary-50 p-2 text-primary-600">
                {stat.icon}
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Courses */}
        <Card variant="bordered" className="lg:col-span-2">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900">
              Pelajaran Aktif
            </h3>
            <a
              href="/dashboard/courses"
              className="text-sm font-medium text-primary-600 hover:text-primary-700"
            >
              Lihat semua
            </a>
          </div>
          <div className="space-y-4">
            {courses.map((course) => (
              <div
                key={course.name}
                className="flex items-center gap-4 rounded-lg border border-cream-200 p-4 transition-colors hover:bg-cream-50"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-100 text-sm font-bold text-primary-700">
                  {course.name.charAt(0)}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-medium text-gray-900">{course.name}</p>
                  <p className="text-sm text-gray-500">{course.instructor}</p>
                  <div className="mt-2 flex items-center gap-3">
                    <div className="h-2 flex-1 overflow-hidden rounded-full bg-cream-200">
                      <div
                        className="h-full rounded-full bg-primary-500 transition-all"
                        style={{ width: `${course.progress}%` }}
                      />
                    </div>
                    <span className="shrink-0 text-xs font-medium text-gray-500">
                      {course.lessons}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Today's Schedule */}
        <Card variant="bordered">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900">
              Jadwal Hari Ini
            </h3>
            <a
              href="/dashboard/schedule"
              className="text-sm font-medium text-primary-600 hover:text-primary-700"
            >
              Lihat semua
            </a>
          </div>
          <div className="space-y-3">
            {schedule.map((item, i) => (
              <div
                key={i}
                className="flex gap-3 rounded-lg border border-cream-200 p-3 transition-colors hover:bg-cream-50"
              >
                <div className="shrink-0 text-center">
                  <p className="text-sm font-bold text-primary-700">
                    {item.time}
                  </p>
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-medium text-gray-900">
                    {item.subject}
                  </p>
                  <p className="text-xs text-gray-500">{item.location}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
