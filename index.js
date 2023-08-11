import  getArgs from "./helpers/args.js";
import {printError, printSuccess, printHelp} from "./services/log.service.js";

const startCli = () => {
  const args = getArgs(process.argv);

  if (args.h) {
    //help
    printHelp();
  }

  if (args.s) {
    //save city
  }

  if (args.t) {
    //save token
  }

  //result
}

startCli();