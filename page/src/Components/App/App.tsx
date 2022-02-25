import React, { useReducer, useRef } from "react";

import { appReducer, defaultState } from "./AppReducer/appReducer";
import About from "../About/About";
import Projects from "../Projects/Projects";
import Loader from "./Loader/Loader";

import { checkCommand } from "../utils/commands";

import "./App.css";

function App() {
  const [state, dispatch] = useReducer(appReducer, defaultState);

  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleInputFocus = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
    dispatch({ type: "SHOW_BLINKER", value: true });
  };

  const handleAppCommands = (e: React.FormEvent) => {
    e.preventDefault();

    if (state.inputText.length === 0) {
      dispatch({ type: "SHOW_ERROR", value: "d: Input a command" });
      dispatch({ type: "SET_INPUT_TEXT", value: "" });
      dispatch({ type: "SHOW_COMMANDS", value: false });
    }

    if (state.inputText.length > 40) {
      dispatch({ type: "SHOW_ERROR", value: "d: Command too long" });
      dispatch({ type: "SET_INPUT_TEXT", value: "" });
      dispatch({ type: "SHOW_COMMANDS", value: false });
    }

    if (!state.commands.includes(state.inputText)) {
      dispatch({ type: "SHOW_ERROR", value: `$ ${state.inputText}` });
      dispatch({ type: "SHOW_ERROR", value: "d: Command does not exist" });
      dispatch({ type: "SET_INPUT_TEXT", value: "" });
      dispatch({ type: "SHOW_COMMANDS", value: false });
    }

    checkCommand(state.inputText, dispatch);
  };

  return (
    <div className="app">
      {!state.start && <Loader dispatch={dispatch} state={state} />}
      {state.start && (
        <>
          <About
            state={state}
            dispatch={dispatch}
            inputRef={inputRef}
            handleInputFocus={handleInputFocus}
            handleAppCommands={handleAppCommands}
          />
          {(state.show_portfolio || state.show_all) && <Projects state={state} dispatch={dispatch}/>}
        </>
      )}
    </div>
  );
}

export default App;
