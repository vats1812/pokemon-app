import React, { useState } from "react";

import ReactSwitch from "react-switch";
import { IoMdSunny, IoMdMoon } from "react-icons/io";

import "./App.css";
import Body from "./components/Body/Body";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const [checked, setChecked] = useState(false);
  const [theme, setTheme] = useState("light");

  const handleChange = (nextChecked) => {
    setChecked(nextChecked);
    if (!checked) {
      setTheme("dark");
    } else if (checked) {
      setTheme("light");
    }
  };
  return (
    <div className="App" data-theme={theme}>
      <Navbar
        switches={
          <ReactSwitch
            onChange={handleChange}
            checked={checked}
            height={25}
            width={50}
            handleDiameter={30}
            onColor="#FDB813"
            offColor="#1d1f2f"
            offHandleColor="#FDB813"
            onHandleColor="#1d1f2f"
            uncheckedHandleIcon={
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                }}
              >
                <IoMdSunny />
              </div>
            }
            checkedHandleIcon={
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                  color: "white",
                }}
              >
                <IoMdMoon />
              </div>
            }
            checkedIcon={false}
            uncheckedIcon={false}
          />
        }
      />
      <Body />
    </div>
  );
}

export default App;
