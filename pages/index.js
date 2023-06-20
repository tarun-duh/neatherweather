import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import axios from "axios";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(false);
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${process.env.NEXT_PUBLIC_PUBLIC_KEY}`;

  const fetchData = (e) => {
    e.preventDefault();
    setLoading(true);
    axios.get(url).then((response) => {
      setWeather(response.data);
      console.log(response.data);
    });
    setCity("");
    setLoading(false);
  };
  return (
    <>
      <Head>
        <title>WeatherApp</title>
      </Head>
      <div className="absolute top-0 bottom-0 left-0 right-0 bg-black/40 z-[1]"></div>
      {/*search*/}
      <div className="relative flex justify-between items-center max-w-[500px] w-full m-auto pt-4 text-white z-10 ">
        <form
          onSubmit={fetchData}
          className="flex justify-between items-center w-full m-auto p-3 bg-transparent border-white border text-white rounded-2xl
        "
        >
          <div>
            <input
              onChange={(e) => setCity(e.target.value)}
              className="bg-transparent border-none text-white focus:outline-none text-xl "
              type="text"
              placeholder="search city"
              name=""
              id=""
            />
          </div>
          <button onClick={fetchData}>
            <BsSearch size={20}></BsSearch>
          </button>
        </form>
      </div>
      {/*weather */}
    </>
  );
}
