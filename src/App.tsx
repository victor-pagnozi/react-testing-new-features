import { useState } from "react";

interface ButtonProps {
  text?: string;
}

function Button(props: ButtonProps) {
  return (
    <button className="button hover:bg-[#000] transition-colors">
      {props.text ?? "Default"}
    </button>
  );
}

function App() {
  return (
    <>
      <div className="flex gap-5">
        <Button text="Save" />
        <Button />
        <Button text="Cancel" />
      </div>
    </>
  );
}

export default App;
