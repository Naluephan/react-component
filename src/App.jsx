import React from 'react'
import BeverageCard from './BeverageCard';
const App = () => {
  const beverageList = [
    {
    image: "butter-chicken-Chicken-Makhani.jpg",
    name: "butter-chicken-Chicken-Makhani",
    description: "Espresso diluted with hot water, topped with a creamy foam.",
    price: "$3.50"
    },
    {
    image: "garlic-naam.jpg",
    name: "garlic-naam",
    description: "Deep and decadent chocolatey drink, perfect for chocolate lovers.",
    price: "$4.00"
    },
    {
    image: "Indian-Cauliflower-Potatoe.jpg",
    name: "Indian-Cauliflower-Potatoe",
    description: "Refreshing blend of seasonal fruits, perfect for a healthy boost.",
    price: "$4.50"
    },
    {
    image: "Matar-Paneer-Peas-and-Cooked-Cottage-Cheese.jpg",
    name: "Matar-Paneer-Peas-and-Cooked-Cottage-Cheese",
    description: "Warm and comforting hot chocolate, made with real Belgian chocolate.",
    price: "$3.00"
    },
    {
    image: "top-10-indian-dishes-samosas.jpg",
    name: "top-10-indian-dishes-samosas",
    description: "Tropical blend of orange and coconut milk, perfect for a summer day.",
    price: "$4.50"
    },
    ];
return (
<>
<h1>Indian Food</h1>
<hr />
{
beverageList.map((b)=>(
<BeverageCard key={b.name} {...b} />
))
}
</>
)
}
export default App