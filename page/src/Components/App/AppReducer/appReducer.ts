import React from "react";

export type Action =
  | { type: "FADE_OUT"; value: boolean }
  | { type: "PUFF_IN"; value: boolean }
  | { type: "SET_INPUT_TEXT"; value: string }
  | { type: "SHOW_ERROR"; value: string }
  | { type: "SHOW_COMMANDS"; value: boolean }
  | { type: "SHOW_PORTFOLIO"; value: boolean }
  | { type: "SHOW_ABOUT"; value: boolean }
  | { type: "SHOW_CONTACTS"; value: boolean }
  | { type: "SHOW_ALL"; value: boolean }
  | { type: "START"; value: boolean }
  | { type: "SHOW_BLINKER"; value: boolean }
  | { type: "INITIAL_TEXT"; value: boolean }
  | { type: "CLEAR" }
  | { type: "EXIT" };

export interface InitialState {
  fade_out: boolean;
  puff_in: boolean;
  inputText: string;
  commands: string[];
  show_error: string[];
  show_commands: boolean;
  show_portfolio: boolean;
  show_about: boolean;
  show_contacts: boolean;
  show_all: boolean;
  start: boolean;
  show_blinker: boolean;
  initial_text: boolean;
}

export const defaultState: InitialState = {
  fade_out: false,
  puff_in: false,
  inputText: "",
  commands: [
    "help",
    "run portfolio",
    "run about",
    "run contacts",
    "run all",
    "copy email",
    "open github",
    "open linkedIn",
    "clear",
    "exit",
  ],
  show_error: [],
  show_commands: false,
  show_portfolio: false,
  show_about: false,
  show_contacts: false,
  show_all: false,
  start: false,
  show_blinker: false,
  initial_text: true,
};

export const appReducer: React.Reducer<InitialState, Action> = (
  state: InitialState,
  action: Action
): InitialState => {
  switch (action.type) {
    case "FADE_OUT":
      return { ...state, fade_out: action.value };
    case "PUFF_IN":
      return { ...state, puff_in: action.value };
    case "SET_INPUT_TEXT":
      return { ...state, inputText: action.value };
    case "SHOW_COMMANDS":
      return { ...state, show_commands: action.value };
    case "SHOW_PORTFOLIO":
      return { ...state, show_portfolio: action.value };
    case "SHOW_ABOUT":
      return { ...state, show_about: action.value };
    case "SHOW_CONTACTS":
      return { ...state, show_contacts: action.value };
    case "SHOW_ALL":
      return { ...state, show_all: action.value };
    case "SHOW_ERROR":
      return { ...state, show_error: [...state.show_error, action.value] };
    case "SHOW_BLINKER":
      return { ...state, show_blinker: action.value };
    case "INITIAL_TEXT":
      return { ...state, initial_text: action.value };
    case "START":
      return { ...state, start: action.value };
    case "CLEAR":
      return {
        ...state,
        start: true,
        initial_text: false,
        show_commands: false,
        show_about: false,
        show_contacts: false,
        show_all: false,
        inputText: "",
        show_error: [],
      };
    case "EXIT":
      return defaultState;
    default:
      return defaultState;
  }
};
