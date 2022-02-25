import { Action } from "../App/AppReducer/appReducer";

export const checkCommand = (command: string, dispatch: React.Dispatch<Action>) => {
  if (command === "help") {
    dispatch({type: "CLEAR"});
    dispatch({ type: "SHOW_COMMANDS", value: true });   
  }
  if (command === "run portfolio") {
    dispatch({type: "CLEAR"});
    dispatch({type: "PUFF_IN", value: true})
    dispatch({ type: "SHOW_PORTFOLIO", value: true });
  
  }
  if (command === "run about") {
    dispatch({type: "CLEAR"});
    dispatch({ type: "SHOW_ABOUT", value: true });
  }
  if (command === "run contacts") {
    dispatch({type: "CLEAR"});
    dispatch({ type: "SHOW_CONTACTS", value: true });
  }
  if (command === "run all") {
    dispatch({type: "CLEAR"});
    dispatch({type: "PUFF_IN", value: true})
    dispatch({ type: "SHOW_ALL", value: true });
  }
  if(command === "clear") {
    dispatch({type: "CLEAR"});
  }
  if(command === "exit") {
    dispatch({type: "EXIT"});
  }
  if(command === "open github") {
    const url = "https://github.com/Aurimas-stack";
    window.open(url, "_blank");
    dispatch({type: "CLEAR"});
  }
  if(command === "open linkedIn") {
    const url = "https://www.linkedin.com/in/aurimas-%C5%BE-b09b0221a/";
    window.open(url, "_blank");
    dispatch({type: "CLEAR"});
  }
  if(command === "copy email") {
    const email = "aurimas.stack.z@gmail.com";
    navigator.clipboard.writeText(email);
    dispatch({type: "CLEAR"});
    dispatch({type: "SHOW_ERROR", value: "Copied email."})
  }
}