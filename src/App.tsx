import TestCube from "./components/TestCube";
import { Canvas } from "@react-three/fiber";
import "./App.css";

function App() {

  return (
    <>
      <Canvas>
        <ambientLight intensity={0.25} />
        <pointLight position={[10, 10, 10]} decay={0} intensity={0.5} />
        <TestCube position = {[0, 0, 0]} />
      </Canvas>
    </>
  );
}

export default App;
