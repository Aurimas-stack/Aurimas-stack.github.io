import React, { FC } from "react";

import { InitialState, Action } from "../../App/AppReducer/appReducer";

import "./Form.css";

interface FormProps {
  state: InitialState;
  dispatch: React.Dispatch<Action>;
  inputRef: React.MutableRefObject<HTMLInputElement | null>;
  handleAppCommands: (e: React.FormEvent) => void;
}

const Form: FC<FormProps> = ({
  state,
  dispatch,
  inputRef,
  handleAppCommands,
}) => {
  return (
    <form className="hidden_input_form" onSubmit={(e) => handleAppCommands(e)}>
      <input
        type="text"
        value={state.inputText}
        ref={inputRef}
        maxLength={40}
        onChange={(e) =>
          dispatch({
            type: "SET_INPUT_TEXT",
            value: e.target.value.toLocaleLowerCase(),
          })
        }
        className="terminal_input"
      />
      <button type="submit"></button>
    </form>
  );
};
export default Form;
