import React from "react";
import End from "./components/End";
import Gap from "./components/Gap";
import Provide from "./components/Provide";
import Question from "./components/Question";
import Why from "./components/Why";

export default function App() {
  return (
    <div>
      <Why></Why>
      <Gap></Gap>
      <Question></Question>
      <Provide></Provide>
      <End></End>
    </div>
  );
}
