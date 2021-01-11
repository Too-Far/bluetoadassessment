import { useState } from "react";
import Header from "./components/Header/Header";
import "./App.css";
import PhotoDisplay from "./components/PhotoDisplay/PhotoDisplay";

function App() {
  const [photos, setPhotos] = useState();
  return (
    <div className="App">
      <Header setPhotos={setPhotos} />
      <div>
        <PhotoDisplay photos={photos} />
      </div>
    </div>
  );
}

export default App;
