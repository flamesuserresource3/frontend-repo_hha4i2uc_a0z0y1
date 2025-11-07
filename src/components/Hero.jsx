import { Dumbbell, Flame } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-orange-50 to-white">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:py-28">
        <div className="flex flex-col items-center text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-3 py-1 text-sm font-medium text-orange-700">
            <Flame className="h-4 w-4" />
            Indian Muscle Gain
          </span>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-6xl">
            Build Muscle with an Indian Diet Plan
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
            A practical, high-protein approach to weight gain and muscle building that celebrates Indian food. 
            Calculate your macros, follow curated meal plans, and start growing—strong and sustainably.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#calculator"
              className="inline-flex items-center gap-2 rounded-lg bg-orange-600 px-5 py-3 text-white shadow-lg shadow-orange-600/30 transition hover:bg-orange-700"
            >
              <Dumbbell className="h-5 w-5" />
              Calculate My Macros
            </a>
            <a
              href="#plans"
              className="inline-flex items-center gap-2 rounded-lg border border-gray-300 px-5 py-3 text-gray-800 transition hover:bg-gray-50"
            >
              View Indian Meal Plans
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
