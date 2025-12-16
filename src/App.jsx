import { useState } from "react";
import Navbar from "./Component/Navbar";
import NewsBord from "./Component/NewsBord";

const App = () => {
  const [category, setCategory] = useState("general");

  return (
    <div>
      <Navbar setCategory={setCategory} />
      <NewsBord category={category} />
    </div>
  );
};

export default App;
