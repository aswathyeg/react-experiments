import { HelpOutline } from "@material-ui/icons";
import {  } from "module";
function stringify123(callback?: (num: number) => string) {
    if (callback === undefined) {
      callback = String;
    }
    return callback(123);
  }
  export default HelpOutline;
  