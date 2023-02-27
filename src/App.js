import "./App.css";
import { CardProvider } from "./componets/CardProvider";
import { DragArea } from "./componets/part/DragArea";
import { DropArea } from "./componets/part/DropArea";

function App() {
  return (
    <div className="App">
      <CardProvider>
        <div className="container">
          <DragArea />
          <DropArea />
        </div>
      </CardProvider>
    </div>
  );
}

export default App;
