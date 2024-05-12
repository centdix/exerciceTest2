'use client';
import { useEffect, useState } from "react";

export default function Home() {

  // const [color, setColor] = useState('red');
  const [status, setStatus] = useState("init");

  const colors = {
    init: "red",
    started: "blue",
    finished: "green"
  }

  const text = {
    init: "Click to start",
    started: "Started",
    finished: "Restart"
  }

  // click on start
  function onStart() {
    console.log('clicked');
    if (status === "init") {
      setStatus("started");
    } else if (status === "started") {
      setStatus("finished");
    } else {
      setStatus("init")
    }

    // setTimeout(() => {
    //   console.log('on timeout');
    // }, 2000);
    // setColor('yellow');
  }

  // useEffect(() => {

  // }, []);



  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div
        className={`flex h-20 w-1/2 items-center justify-center`}
        style={{backgroundColor: colors[status]}}
        onClick={() => onStart()}
      >
        <p>{text[status]}</p>
      </div>
    </main>
  );
}