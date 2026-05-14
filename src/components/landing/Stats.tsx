import { STATS } from "@/lib/constants";

export function Stats() {
  return (
    <section className="bg-primary-800 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Dipercaya oleh Pesantren di Seluruh Indonesia
          </h2>
          <p className="mt-4 text-lg text-primary-200">
            Bergabung bersama ribuan pesantren yang telah bertransformasi digital.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-8 lg:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-extrabold text-white sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm font-medium text-primary-200">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
