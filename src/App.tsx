// src/App.tsx
import React from "react";
import Header from "./components/Header";
import BillFrom from "./components/BillFrom";
import BillTo from "./components/BillTo";
import ItemsList from "./components/ItemsList";
import Preview from "./components/Preview";

const App: React.FC = () => {
  return (
    <div className="min-h-screen max-w-7xl w-full mx-auto">
      <Header />
      <div className="container mx-auto p-6 grid grid-cols-2 gap-6">
        <div>
          <BillFrom />
          <BillTo />
          <ItemsList />
        </div>
        <Preview />
      </div>
    </div>
  );
};

export default App;
