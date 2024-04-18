import * as ace from "ace-builds/src-noconflict/ace";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import MainRoutes from "./routes/MainRoutes";
ace.config.set("basePath", "/assets/ui/");
ace.config.set("modePath", "");
ace.config.set("themePath", "");

function App() {

  return (
    <div className="h-[100vh] overflow-hidden">
      <Navbar />
      <Sidebar />
      <MainRoutes />
    </div>
  );
}

export default App;
