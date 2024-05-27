import './App.css';
import{ Card } from "./components/cards/card";
import { FoodData } from './interface/FoodData';


function App() {
  const data: FoodData[] = [];
  return (
    <div className="container">
      <h1>Cardápio</h1>
      <p>jovem deu ruim</p>
      <div className="card-grid">
        {data.map{ foodData=>{
            <Card
              price={foodData.price}
              title={foodData.title}
              image={foodData.image} 
            />
          }
        }};
      </div>
    </div>
  )
}

export default App
