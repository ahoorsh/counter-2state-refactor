import React, { useState, useEffect } from "react";
import { Button, Badge } from "react-bootstrap";

const TimerThree = ({ flag, setTimer }) => {
  console.log("inside TimerThree");
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div style={{ marginBottom: "16px" }}>
        <Badge bg="dark" style={{ fontSize: "24px" }}>
          {flag[5]}
        </Badge>
      </div>
      <Button
        variant="dark"
        size="lg"
        onClick={() => {
          if (flag[2]) {
            setTimer(false, true, false, 4, 5 );
          }
        }}
      >
        prev
      </Button>
    </div>
  );
};

export default TimerThree;
