type World = "world";
type Greeting = `hello ${World}`;

//

type Color = "red" | "blue";
type Quantity = "one" | "two";
type SeussFish = `${Quantity | Color} fish`;

//

type VerticalAlignment = "top" | "middle" | "bottom";
type HorizontalAlignment = "left" | "center" | "right";

// Takes
//   | "top-left"    | "top-center"    | "top-right"
//   | "middle-left" | "middle-center" | "middle-right"
//   | "bottom-left" | "bottom-center" | "bottom-right"
declare function setAlignment(value: `${VerticalAlignment}-${HorizontalAlignment}`): void;

type EnthusiasticGreeting<T extends string> = `${Uppercase<T>} - ${Lowercase<T>} - ${Capitalize<T>} - ${Uncapitalize<T>}`;
type HELLO = EnthusiasticGreeting<"heLLo">;
// same as
//   type HELLO = "HELLO - hello - Hello - heLLo";