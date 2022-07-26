import React, { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import axios from "axios";
import TimerOne from "./TimerOne";
import TimerTwo from "./TimerTwo";
import TimerThree from "./TimerThree";

function App() {
  const [flag, setFlag] = useState([true, false, false,0,0,0]);
  // const [counter, setCounter] = useState([0, 0, 0]);

  useEffect(() => {
    const time = flag[0]
      ? setInterval(() => {
          setFlag((last) => {
            const help = [...last];
            help[3] += 1;
            return [...help];
          });
        }, 200)
      : flag[1]
      ? setInterval(() => {
          setFlag((last) => {
            const help = [...last];
            help[4] += 1;
            return [...help];
          });
        }, 200)
      : flag[2] &&
        setInterval(() => {
          setFlag((last) => {
            const help = [...last];
            help[5] += 1;
            return [...help];
          });
        }, 200);
    return () => {
      clearInterval(time);
    };
  }, [flag]);

  const setTimer = (flag1, flag2, flag3, num1, num2) => {
    flag.map(obj =>{
     flag[0]=flag1;
     flag[1]=flag2;
     flag[2]=flag3;
    })
    setFlag((last) => {
      const help = [...last];
      help[num1] = help[num2];
      return [...help];
    });
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        marginTop: "50px",
      }}
    >
      <TimerOne flag={flag} setTimer={setTimer} />
      <TimerTwo flag={flag} setTimer={setTimer} />
      <TimerThree flag={flag} setTimer={setTimer} />
      <Button
        variant="danger"
        onClick={() => {
          setFlag([false, false, false , 0,0,0]);
          // setCounter([0, 0, 0]);
        }}
      >
        reset
      </Button>
      <Button
        variant="danger"
        onClick={() => {
          setFlag([true, false, false,0,0,0]);
          // setCounter([0, 0, 0]);
        }}
      >
        start
      </Button>
    </div>
  );
}
export default App;