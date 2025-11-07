import { CheckCircle2 } from 'lucide-react';

const tips = [
  'Train 3-5 days/week focusing on compound lifts: squats, deadlifts, presses, rows.',
  'Progressive overload: add 2.5-5 kg or extra reps weekly while maintaining form.',
  'Rest 60-90s for hypertrophy sets; 2-3 mins for heavy compounds.',
  'Aim 1.8-2.2 g protein/kg bodyweight from paneer, dal, soy, eggs, chicken, fish.',
  'Divide calories across 4-6 meals; include ghee/peanut butter for extra calories.',
  'Hydrate, sleep 7-9 hours, and walk daily for recovery and appetite.'
];

export default function TrainingTips() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center">
          Training & Recovery Essentials
        </h2>
        <ul className="mx-auto mt-8 max-w-3xl space-y-3">
          {tips.map((t, i) => (
            <li key={i} className="flex items-start gap-3 rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
              <CheckCircle2 className="mt-0.5 h-5 w-5 text-green-600" />
              <p className="text-gray-700">{t}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
