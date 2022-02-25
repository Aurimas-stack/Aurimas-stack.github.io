import { FC } from "react";

import { InitialState } from "../../App/AppReducer/appReducer";

interface CommandsProps {
  state: InitialState;
}

const Commands: FC<CommandsProps> = ({ state }) => {
  return (
    <div className="text">
      $ List of commands:
      {state.commands.map((command, key) => {
        return (
          <p className="text" key={key}>
            {command}
          </p>
        );
      })}
    </div>
  );
};

export default Commands;
