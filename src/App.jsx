import Hero from './components/Hero';
import MacroCalculator from './components/MacroCalculator';
import MealPlan from './components/MealPlan';
import TrainingTips from './components/TrainingTips';

function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-gray-500">© {new Date().getFullYear()} Indian Muscle Gain. Built for strength.</p>
        <nav className="text-sm text-gray-600">
          <a href="#calculator" className="hover:text-gray-900">Macros</a>
          <span className="mx-3 text-gray-300">•</span>
          <a href="#plans" className="hover:text-gray-900">Meal Plans</a>
        </nav>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Hero />
      <MacroCalculator />
      <MealPlan />
      <TrainingTips />
      <Footer />
    </div>
  );
}
