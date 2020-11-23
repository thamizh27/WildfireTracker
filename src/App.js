import { useState, useEffect } from "react";
import Map from "./components/Map";
import Loader from "./Loader";
import Header from "./components/Header";

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const res = await fetch(
        "https://eonet.sci.gsfc.nasa.gov/api/v2.1/events"
      );
      const { events } = await res.json();

      setData(events);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  //console.log(data);

  return (
    <div>
      <Header />
      {isLoading ? <Loader /> : <Map data={data} />}
    </div>
  );
}

export default App;
