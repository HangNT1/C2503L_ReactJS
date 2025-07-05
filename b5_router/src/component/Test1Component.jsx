import TestComponent from "./TestComponent";

export default function Test1Component() {
  const test = "aaaaaa";
  return (
    <>
      <h1>Con</h1>
      <TestComponent a={test}></TestComponent>
    </>
  );
}
