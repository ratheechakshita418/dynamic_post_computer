import Header from "./components/Header";
import PlatformSelector from "./components/PlatformSelector";
import PostComposer from "./components/PostComposer";
import CharacterCounter from "./components/CharacterCounter";
import ValidationMessage from "./components/ValidationMessage";

import "./styles/App.css";

function App() {
  return (
    <div className="app">
      <Header />

      <PlatformSelector />

      <PostComposer />

      <CharacterCounter />

      <ValidationMessage />
    </div>
  );
}

export default App;
