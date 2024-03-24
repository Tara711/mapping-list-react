import React from "react";
import DessertsList from "./Components/DessertsList";

const desserts = [
  {
    name: "Chocolate Cake",
    Calories: 400,
    CreatedAt: "2022-02-02",
  },
  {
    name: "Bisccuit",
    Calories: 300,
    CreatedAt: "2022-02-03",
  },

  {
    name: "Cake",
    Calories: 1000,
    CreatedAt: "2022-02-04",
  },
  {
    name: "Chocolate",
    Calories: 600,
    CreatedAt: "2022-02-05",
  },
  {
    name: "Ice Cream",
    Calories: 700,
    CreatedAt: "2022-02-06",
  },
  {
    name: "Tiramisu",
    Calories: 300,
    CreatedAt: "2022-02-07",
  },
  {
    name: "Cheesecake",
    Calories: 1200,
    CreatedAt: "2022-02-08",
  },
  {
    name: "Chau- Chau",
    Calories: 450,
    CreatedAt: "2022-02-09",
  },
  {
    name: "Kurukure",
    Calories: 500,
    CreatedAt: "2022-02-10",
  },
];

const App = () => {
  return (
    <>
      <h1>List of Low Calorie Desserts : </h1>
      <DessertsList data={desserts} />
    </>
  );
};

export default App;
