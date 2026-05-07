import React from 'react'

const MealTypePage = ({params}: {params: {mealType: string}}) => {
  const {mealType} = params;
  console.log(mealType);
  return (
    <div>
      <h1>Meal Type Page</h1>
      {mealType}
    </div>
  )
}

export default MealTypePage