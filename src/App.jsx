import { useState } from "react";
import "./App.css";

import SignIn from "./pages/SignIn/index.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <SignIn />
    </div>
  );
}

export default App;
