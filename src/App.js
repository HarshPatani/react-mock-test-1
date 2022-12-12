import "./App.css";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";

function App() {
  const [data, setData] = useState([]);
  const [singleCardData, setSingleCardData] = useState([]);
  useEffect(() => {
    (async () => {
      const response = await fetch("https://kontests.net/api/v1/all");
      const res = await response.json();
      setData(res);
      console.log(res);
    })();
  }, []);

  return (
    <Routes>
      <Route
        path="/"
        element={<Home setSingleCardData={setSingleCardData} data={data} />}
      />
      <Route
        path="/detail"
        element={<Detail singleCardData={singleCardData} />}
      />
    </Routes>
  );
}

export default App;
