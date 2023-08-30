import Scene from "./components/Cube/Scene";

const App = () => {
  return (
    <div
      id="canvas-container"
      style={{
        width: "100vw",
        height: "100vh",
      }}
    >
      <Scene />
    </div>
  );
};

export default App;
