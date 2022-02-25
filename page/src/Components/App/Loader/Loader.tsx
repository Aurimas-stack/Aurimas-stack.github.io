import { FC } from "react";
import { Action, InitialState } from "../AppReducer/appReducer";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPowerOff } from "@fortawesome/free-solid-svg-icons";

import "./Loader.css";

interface LoaderProps {
  dispatch: React.Dispatch<Action>;
  state: InitialState;
}

const Loader: FC<LoaderProps> = ({ dispatch, state }) => {
  return (
    <>
      <FontAwesomeIcon
        icon={faPowerOff}
        className={state.fade_out ? "power_button fade-out" : "power_button"}
        onClick={() => {
          dispatch({ type: "FADE_OUT", value: true });
        }}
        onAnimationEnd={() => {
          dispatch({ type: "FADE_OUT", value: false });
          dispatch({ type: "START", value: true });
        }}
      />
    </>
  );
};
export default Loader;
