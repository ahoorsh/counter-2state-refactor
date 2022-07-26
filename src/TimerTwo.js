import React, { useState, useEffect } from "react";
import { Button, Badge } from "react-bootstrap";

const TimerTwo = ({ flag, setTimer }) => {
  console.log("inside TimerTwo")
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div style={{ marginBottom: "16px" }}>
        <Badge bg="dark" style={{ fontSize: "24px" }}>
          {flag[4]}
        </Badge>
      </div>
      <div>
        <Button
          variant="dark"
          size="lg"
          onClick={() => {
            if (flag[1]) {
            setTimer(true, false, false, 3, 4 );
            }
          }}
        >
          prev
        </Button>
        <Button
          variant="dark"
          size="lg"
          onClick={() => {
            if (flag[1]) {
            setTimer(false, false, true, 5, 4);
            }
          }}
        >
          next
        </Button>
      </div>
    </div>
  );
};

export default TimerTwo;
