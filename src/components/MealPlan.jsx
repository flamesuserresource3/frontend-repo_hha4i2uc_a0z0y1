export default function MealPlan() {
  return (
    <section id="plans" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            7-Day Indian Muscle Gain Plan
          </h2>
          <p className="mt-3 text-gray-600">
            Balanced, high-protein vegetarian and non-vegetarian options crafted for lean mass.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Day 1 */}
          <PlanCard
            day="Day 1"
            breakfast="Paneer bhurji (200g) with 2 multigrain rotis + 1 glass milk"
            snack1="Roasted chana + whey protein shake"
            lunch="Jeera rice (1 cup) + rajma (1.5 cups) + kachumber salad"
            snack2="Greek yogurt (200g) with jaggery + banana"
            dinner="Grilled chicken (200g) / tofu paneer (220g) + quinoa (1 cup) + sautéed veggies"
            calories="~2800 kcal | 160g protein"
          />

          {/* Day 2 */}
          <PlanCard
            day="Day 2"
            breakfast="Masala oats with milk + 3 whole eggs / tofu scramble + fruit"
            snack1="Peanut butter (2 tbsp) on whole wheat toast"
            lunch="Brown rice + chole (1.5 cups) + curd"
            snack2="Dry fruits (almonds, cashews) + buttermilk"
            dinner="Fish curry (200g) / soy chaap (220g) + 2 rotis + salad"
            calories="~2900 kcal | 165g protein"
          />

          {/* Day 3 */}
          <PlanCard
            day="Day 3"
            breakfast="Moong chilla (3) stuffed with paneer + mint chutney"
            snack1="Fruit + whey shake"
            lunch="Vegetable pulao + dal tadka + raita"
            snack2="Sprouts chaat with veggies"
            dinner="Chicken tikka (220g) / paneer tikka (220g) + brown rice"
            calories="~2850 kcal | 160g protein"
          />

          {/* Day 4 */}
          <PlanCard
            day="Day 4"
            breakfast="Poha with peanuts + 2 boiled eggs / tofu + milk"
            snack1="Cottage cheese cubes + fruit"
            lunch="Whole wheat roti (3) + palak paneer + dal + salad"
            snack2="Protein bar or homemade laddoo (oats + jaggery + nuts)"
            dinner="Egg curry (4 eggs) / chana masala + basmati rice + veggies"
            calories="~2800 kcal | 150g protein"
          />

          {/* Day 5 */}
          <PlanCard
            day="Day 5"
            breakfast="Idli (4) with sambar + extra dal for protein"
            snack1="Lassi or chaas + handful of peanuts"
            lunch="Lemon rice + rajma + salad"
            snack2="Paneer cubes sautéed with bell peppers"
            dinner="Mutton curry (180g) / soy nuggets (220g) + 2 rotis + salad"
            calories="~3000 kcal | 170g protein"
          />

          {/* Day 6 */}
          <PlanCard
            day="Day 6"
            breakfast="Paratha (2) with curd + egg white omelette / tofu"
            snack1="Dates (4-5) + milk"
            lunch="Khichdi (moong + rice) + ghee + curd + salad"
            snack2="Boiled chickpeas with onions and tomatoes"
            dinner="Fish fry (200g) / paneer butter masala + jeera rice"
            calories="~2900 kcal | 160g protein"
          />

          {/* Day 7 */}
          <PlanCard
            day="Day 7"
            breakfast="Uttapam (2) with sambar + egg bhurji / tofu"
            snack1="Fruit bowl + whey"
            lunch="Roti (3) + dal makhani + tawa chicken / soy chaap + salad"
            snack2="Milk + banana + peanut butter smoothie"
            dinner="Biryani (chicken/veg) with raita + salad"
            calories="~3000 kcal | 165g protein"
          />
        </div>

        <p className="mt-8 text-sm text-gray-500">
          Tip: Add 1-2 tsp ghee to meals for extra calories if weight gain stalls. Hydrate well and aim for 7-8 hours of sleep.
        </p>
      </div>
    </section>
  );
}

function PlanCard({ day, breakfast, snack1, lunch, snack2, dinner, calories }) {
  return (
    <div className="rounded-xl border border-gray-200 p-5 shadow-sm transition hover:shadow-md">
      <div className="mb-2 text-sm font-semibold text-orange-600">{day}</div>
      <ul className="space-y-2 text-gray-700">
        <li><span className="font-medium text-gray-900">Breakfast:</span> {breakfast}</li>
        <li><span className="font-medium text-gray-900">Snack 1:</span> {snack1}</li>
        <li><span className="font-medium text-gray-900">Lunch:</span> {lunch}</li>
        <li><span className="font-medium text-gray-900">Snack 2:</span> {snack2}</li>
        <li><span className="font-medium text-gray-900">Dinner:</span> {dinner}</li>
      </ul>
      <div className="mt-3 text-sm text-gray-500">{calories}</div>
    </div>
  );
}
