import React, { useState, useEffect } from "react";
import { Button, Badge } from "react-bootstrap";

const TimerOne = ({ flag, setTimer }) => {
  console.log("inside TimerOne")
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div style={{ marginBottom: "16px" }}>
        <Badge bg="dark" style={{ fontSize: "24px" }}>
          {flag[3]}
        </Badge>
      </div>
      <Button
        variant="dark"
        size="lg"
        onClick={() => {
          if (flag[0]) {
            setTimer(false, true, false, 4, 3);
          }
        }}
      >
        next
      </Button>
    </div>
  );
};

export default TimerOne;
