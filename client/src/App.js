import { useEffect } from "react";

const App = () => {
  console.log('Fetch data in /api');
  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => console.log(data.message));
  }, []);

  return <div className="App">App</div>;
};

export default App;
