import {
  getRandomEntry,
  getRandomInt,
  getRandomNoun,
  getRandomNounCapitalized,
  getRandomVerb,
  getLogLines,
  getRandomSingleCharacter,
} from "./helpers";

export default class JavaScript {
  static getRandomInitializationVars() {
    return ["[]", "this", "self", "0", "1", "true", "false", "{}", "null", "undefined"];
  }

  static getRandomFunctionName() {
    return `${getRandomVerb()}${getRandomNounCapitalized()}`;
  }

  static getRandomVariableDeclaration() {
    const keyWords = ["let", "const", "var"];

    return `${getRandomEntry(keyWords)} ${getRandomNoun()} = ${getRandomEntry(
      JavaScript.getRandomInitializationVars()
    )};`;
  }

  static getRandomConsoleLog() {
    const options = getLogLines();
    return getRandomEntry(options);
  }

  static getRandomFillerLine() {
    const options = [
      `console.log(${JavaScript.getRandomConsoleLog()});`,
      JavaScript.getRandomVariableDeclaration(),
      `${JavaScript.getRandomFunctionName()}();`,
    ];
    return getRandomEntry(options);
  }

  static getRandomReturn() {
    return `    return ${getRandomEntry(JavaScript.getRandomInitializationVars())};`;
  }

  static getRandomForLoopAsArray() {
    const randomChar = getRandomSingleCharacter();
    const randomNoun = getRandomNoun();

    return [
      `    for (let ${randomChar} = 0; ${randomChar} <= ${randomNoun}.length; ${randomChar}++) {`,
      `        ${JavaScript.getRandomFunctionName()}(${randomChar})`,
      "    };",
    ];
  }
}
