import * as ace from "ace-builds/src-noconflict/ace";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import SampleProlbem1 from "./constants/SampleProlbem1";
import ProblemDescription from "./pages/ProblemDescription/ProblemDescription";
ace.config.set("basePath", "/assets/ui/");
ace.config.set("modePath", "");
ace.config.set("themePath", "");

function App() {

  return (
    <div className="overflow-hidden">
      <Navbar />
      <Sidebar />
      <ProblemDescription descriptionText={SampleProlbem1.problemStatement} />
    </div>
  );
}

export default App;
