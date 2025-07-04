import { useEffect, useState } from "react";

export default function DemoGioComponent() {
  // Luu tru so s chuong trinh chay
  const [second, setSecond] = useState(0);
  // Trang thai cua dong ho dem hoac dung
  const [isRun, setIsRun] = useState(false);
  // useEffect => second
  useEffect(() => {
    // dem s
    let interval;
    if (isRun) {
      interval = setInterval(() => {
        // cu 1 s
        // console.log("aaaaaa");
        setSecond((p) => p + 1);
      }, 1000);
    }
    // Muon time dung lai khi nao: setTimeOut
    // Clean up
    return () => {
      clearInterval(interval);
    };
  }, [isRun]);

  const startTime = () => {
    setIsRun(true);
  };

  const pauseTime = () => {
    setIsRun(false);
  };

  const resetTime = () => {
    setIsRun(false);
    setSecond(0);
  };

  return (
    <>
      <h1>Dem gio</h1>
      <h1>Timer: {second} </h1>
      <button onClick={startTime}>Start</button>
      <button onClick={pauseTime}>Pause</button>
      <button onClick={resetTime}>Reset</button>
    </>
  );
}
