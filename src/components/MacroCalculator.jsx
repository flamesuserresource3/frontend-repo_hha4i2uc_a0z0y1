import { useMemo, useState } from 'react';

export default function MacroCalculator() {
  const [form, setForm] = useState({
    gender: 'male',
    age: 24,
    height: 175,
    weight: 70,
    activity: 'moderate',
    diet: 'mixed',
  });

  const bmr = useMemo(() => {
    const w = Number(form.weight);
    const h = Number(form.height);
    const a = Number(form.age);
    if (form.gender === 'male') return 10 * w + 6.25 * h - 5 * a + 5;
    return 10 * w + 6.25 * h - 5 * a - 161;
  }, [form]);

  const tdee = useMemo(() => {
    const factors = {
      sedentary: 1.2,
      light: 1.375,
      moderate: 1.55,
      active: 1.725,
      very: 1.9,
    };
    return Math.round(bmr * (factors[form.activity] ?? 1.55));
  }, [bmr, form.activity]);

  const goalCalories = useMemo(() => Math.round(tdee + 300), [tdee]);

  const macros = useMemo(() => {
    // Protein: 1.8g/kg, Fat: 25% calories, Carbs: rest
    const proteinG = Math.round(1.8 * Number(form.weight));
    const fatCals = Math.round(goalCalories * 0.25);
    const fatG = Math.round(fatCals / 9);
    const proteinCals = proteinG * 4;
    const carbsCals = Math.max(goalCalories - proteinCals - fatCals, 0);
    const carbsG = Math.round(carbsCals / 4);
    return { proteinG, fatG, carbsG };
  }, [form.weight, goalCalories]);

  const handle = (e) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  };

  return (
    <section id="calculator" className="bg-orange-50/40">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Calorie & Macro Calculator
          </h2>
          <p className="mt-2 text-gray-600">
            Estimate your daily needs for lean muscle gain. Values are a guide—adjust by 100-200 kcal based on progress.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <form className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2">
                <label className="mb-1 block text-sm font-medium">Gender</label>
                <select name="gender" value={form.gender} onChange={handle} className="w-full rounded-md border-gray-300">
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium">Age</label>
                <input name="age" type="number" value={form.age} onChange={handle} className="w-full rounded-md border-gray-300" />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium">Height (cm)</label>
                <input name="height" type="number" value={form.height} onChange={handle} className="w-full rounded-md border-gray-300" />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium">Weight (kg)</label>
                <input name="weight" type="number" value={form.weight} onChange={handle} className="w-full rounded-md border-gray-300" />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium">Activity</label>
                <select name="activity" value={form.activity} onChange={handle} className="w-full rounded-md border-gray-300">
                  <option value="sedentary">Sedentary</option>
                  <option value="light">Light (1-3 d/wk)</option>
                  <option value="moderate">Moderate (3-5 d/wk)</option>
                  <option value="active">Active (6-7 d/wk)</option>
                  <option value="very">Very Active</option>
                </select>
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium">Diet Preference</label>
                <select name="diet" value={form.diet} onChange={handle} className="w-full rounded-md border-gray-300">
                  <option value="mixed">Mixed</option>
                  <option value="vegetarian">Vegetarian</option>
                  <option value="eggetarian">Eggetarian</option>
                </select>
              </div>
            </div>
          </form>

          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="mb-2 text-lg font-semibold text-gray-900">Daily Targets</h3>
            <div className="grid grid-cols-2 gap-4 text-gray-700">
              <Stat label="BMR" value={`${Math.round(bmr)} kcal`} />
              <Stat label="TDEE" value={`${Math.round(tdee)} kcal`} />
              <Stat label="Goal Calories" value={`${goalCalories} kcal`} />
              <Stat label="Protein" value={`${macros.proteinG} g`} />
              <Stat label="Carbs" value={`${macros.carbsG} g`} />
              <Stat label="Fat" value={`${macros.fatG} g`} />
            </div>
            <div className="mt-6 text-sm text-gray-600">
              Use these targets to portion Indian staples: dal, roti, rice, paneer, eggs, chicken, fish, soy, and legumes.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }) {
  return (
    <div className="rounded-lg bg-orange-50 p-3 text-center">
      <div className="text-sm text-gray-500">{label}</div>
      <div className="text-lg font-semibold text-gray-900">{value}</div>
    </div>
  );
}
