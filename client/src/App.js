import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => console.log(data.message));
  }, []);

  return <div className="App"></div>;
};

export default App;
