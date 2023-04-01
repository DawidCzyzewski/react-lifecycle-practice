// import { Component } from "react";
// import LoginForm from "./Components/LoginForm";
// import SignUpForm from "./Components/SignUpForm";
// import { ValueIndicator } from "./Components/ValueIndicator";
import { Container } from "./Components/Container";
import { ErrorBoundary } from "./Components/ErrorBoundary";

function App() {
  return (
    <>
      {/* <LoginForm onSubmit={(values) => console.log(values)} /> */}
      {/* <SignUpForm onSubmit={(values) => console.log(values)} /> */}
      {/* <Container /> */}
      <ErrorBoundary />
    </>
  );
}

export default App;
