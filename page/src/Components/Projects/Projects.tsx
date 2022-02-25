import { FC } from "react";

import { Action, InitialState } from "../App/AppReducer/appReducer";

import CountryList from "./images/country_list.png";
import Inspirational from "./images/inspirational.png";
import BoxShadow from "./images/box_shadow.png";
import WikiViewer from "./images/wikipedia_viewer.png";
import LightBright from "./images/light_bright.png";
import GameOfLife from "./images/Game_of_life.png";

import "./Projects.css";

interface ProjectsProps {
  state: InitialState;
  dispatch: React.Dispatch<Action>;
}

const Projects: FC<ProjectsProps> = ({ state, dispatch }) => {
  return (
    <div
      className={
        state.puff_in
          ? "section_cont project_cont puff-in-center"
          : "section_cont project_cont"
      }
      onAnimationEnd={() => dispatch({type:"PUFF_IN", value: false})}
    >
      <div className="project_window">
        <h4>Game of life</h4>
        <a
          href="https://aurimas-stack.github.io/React-project-6-FCC_game_of_life_app/"
          target="_blank"
          className="image_link"
        >
          <img className="project_pic" src={GameOfLife} alt="Game of Life" />
        </a>
      </div>
      <div className="project_window">
        <h4>List of countries</h4>
        <a
          href="https://aurimas-stack.github.io/React-Typescript-project-countryl_list_app/"
          target="_blank"
          className="image_link"
        >
          <img className="project_pic" src={CountryList} alt="Country List" />
        </a>
      </div>
      <div className="project_window">
        <h4>Inspirational page</h4>
        <a
          href="https://aurimas-stack.github.io/React-Redux-Project-2-CA_inspirational_homepage"
          target="_blank"
          className="image_link"
        >
          <img
            className="project_pic"
            src={Inspirational}
            alt="Inspirational"
          />
        </a>
      </div>
      <div className="project_window">
        <h4>Box Shadow app</h4>
        <a
          href="https://aurimas-stack.github.io/Textbox_shadow_app/"
          target="_blank"
          className="image_link"
        >
          <img className="project_pic" src={BoxShadow} alt="Box Shadow" />
        </a>
      </div>
      <div className="project_window">
        <h4>Wikipedia Viewer</h4>
        <a
          href="https://aurimas-stack.github.io/React-project-3-FCC-Wikipedia-Viewer/"
          target="_blank"
          className="image_link"
        >
          <img className="project_pic" src={WikiViewer} alt="Wiki" />
        </a>
      </div>
      <div className="project_window">
        <h4>Light bright app</h4>
        <a
          href="https://aurimas-stack.github.io/React-project-4-FCC_light-bright_app/"
          target="_blank"
          className="image_link"
        >
          <img className="project_pic" src={LightBright} alt="Light Bright" />
        </a>
      </div>
    </div>
  );
};
export default Projects;
