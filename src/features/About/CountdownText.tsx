import { Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";

export function CountdownText() {
  const [contdown, setContdown] = useState(9);
  const intervalRef = useRef<any>();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setContdown((value) => value - 1);
    }, 1000);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  useEffect(() => {
    if (contdown === 0) {
      clearInterval(intervalRef.current);
    }
  }, [contdown]);

  return (
    <Typography variant="h4" align="center">
      Coming soon: {contdown}
    </Typography>
  );
}
