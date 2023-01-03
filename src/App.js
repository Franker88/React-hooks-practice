import "./App.css";
import React from "react";
import { Header } from "./components/Header/Header";
import { Characters } from "./components/Characters/Characters";
import { Main } from "./components/Main/Main";
import { AppProvider } from "./context/AppContext";

function App() {
  return (
    <React.Fragment>
      <AppProvider>
        <Main>
          <Header />
          <Characters />
        </Main>
      </AppProvider>
    </React.Fragment>
  );
}

export default App;
