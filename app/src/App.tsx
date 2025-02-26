import { Button } from "@me/shared";

function App() {
  return (
    <div>
      <div>App</div>
      <hr />
      <Button label={"My Button"} onClick={() => alert("clicked")} />
    </div>
  );
}

export default App;
