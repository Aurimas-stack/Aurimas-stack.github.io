import React, { FC } from "react";

import { InitialState, Action } from "../App/AppReducer/appReducer";
import Description from "./Description/Description";
import Form from "./Form/Form";
import InitialText from "./InitialText/InitialText";
import Contact from "./Contact/Contact";
import Commands from "./Commands/Commands";
import Error from "./Error";

import "./About.css";

interface AboutProps {
  state: InitialState;
  dispatch: React.Dispatch<Action>;
  inputRef: React.MutableRefObject<HTMLInputElement | null>;
  handleInputFocus: () => void;
  handleAppCommands: (e: React.FormEvent) => void;
}

const About: FC<AboutProps> = ({
  state,
  dispatch,
  inputRef,
  handleInputFocus,
  handleAppCommands
}) => {
  return (
    <div className="section_cont about" onClick={handleInputFocus}>
      <div className="about_window_top"></div>
      <div className="about_window">
        <p className="text not_final">Not final build</p>
        {state.initial_text && <InitialText /> }
        {(state.show_portfolio || state.show_all) && <p className="text not_final">Not all projects included</p>}
        <Error state={state}/>
        {state.show_commands && <Commands state={state}/>}
        {(state.show_about || state.show_all) && <Description />}
        {(state.show_contacts || state.show_all) && <Contact />}
        <div className="about_end">
          <Form
            state={state}
            dispatch={dispatch}
            inputRef={inputRef}
            handleAppCommands={handleAppCommands}
          />
          <p className="text">
            <span className="right_arrow">&gt;</span> {state.inputText}
            {state.show_blinker &&<span className="about_underscore">_</span>}
          </p>
        </div>
      </div>
    </div>
  );
};
export default About;
