import { FC } from "react";

import { InitialState } from "../App/AppReducer/appReducer";

interface ErrorProps {
  state: InitialState;
}

const Error: FC<ErrorProps> = ({ state }) => {
  return (
    <div>
      {state.show_error.map((string, index) => {
        return (
          <p className="text" key={index}>
            {string}    
          </p>
        );
      })}
    </div>
  );
};

export default Error;
