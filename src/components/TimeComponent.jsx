import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

export default function TimeComponent() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const hours = time.getHours();
  const isDaytime = hours >= 6 && hours < 18;

  return (
    <div className="md:flex md:mr-0 lg:mr-6 items-center justify-center hidden">
      <div className="flex flex-row justify-center items-center gap-3 p-1 px-2 bg-white rounded-2xl shadow-xl">
        <div className="">{isDaytime ? <Sun size={50} color="orange" /> : <Moon size={30} color="blue" />}</div>
        <div className="text-xl font-bold">{time.toLocaleTimeString()}</div>
      </div>
    </div>
  );
}
