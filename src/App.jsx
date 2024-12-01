import { useLoaderData } from "react-router-dom";
import "./App.css";
import { useState } from "react";
import CoffeeCard from "./Components/CoffeeCard";

function App() {
  const loaderData = useLoaderData();
  console.log(loaderData);
  const [coffee, setCoffee] = useState(loaderData || []);

  return (
    <>
    <h2 className="py-5 text-2xl font-bold">Total data length : {loaderData.length}{" "}</h2>
      
      <div className="space-y-3">
        {coffee.map((cof) => (
          <CoffeeCard
            key={cof._id}
            cof={cof}
            setCoffee={setCoffee}
            coffee={coffee}
          />
        ))}
      </div>
    </>
  );
}

export default App;
