import { useEffect, useState } from "react";
import styles from "./App.module.css";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Experience } from "./components/Experience/Experience";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { Projects } from "./components/Projects/Projects";
import { Player } from "@lottiefiles/react-lottie-player";
import Rocket from "../assets/lottie/Rockets.json";

function App() {
  const time = 70000;
  const [load, setLoad] = useState(true);
  const [topPos, settopPos] = useState(70);
  const [width, setwidth] = useState(30);
  const [left, setleft] = useState(35);
  const [height, setheight] = useState(35);
  useEffect(function () {
    const myInterval = setInterval(function () {
      settopPos((topPos) => topPos - 5);
      setwidth((width) => width + 1);
      setleft((left) => left - 0.5);
      setheight(height=>height+1.55);
    }, 30);

    const timer = setTimeout(function () {
      setLoad(false);
    }, 1800);
    return () => {
      clearInterval(myInterval);
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      {load ? (
        <div
          style={{
            backgroundColor: "#09101A",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
          }}
        >
          <Player
            src={Rocket}
            className="player"
            loop
            autoplay
            style={{
              position: "absolute",
              width: `${width}%`,
              // height: "40%",
              height: `${height}%`,
              top: `${topPos}%`,
              left: `${left}%`,
            }}
          />
        </div>
      ) : (
        <div className={styles.App}>
          <Navbar />

          <Hero />
          <About />
          <Experience />
          <Projects />
          <Contact />
        </div>
      )}
    </>
  );
}

export default App;
