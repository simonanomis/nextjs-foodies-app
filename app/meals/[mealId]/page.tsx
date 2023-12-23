
export interface MealDetailsProps {
    mealId: string;
}

export default function MealDetailsMeal({params} : {params: MealDetailsProps}) {
  return (
      <main>
          <h1 style={{color: 'white', textAlign: 'center'}}>
              Specific Meal : {params.mealId}
          </h1>
      </main>
  )
}
