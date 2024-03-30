import * as ace from "ace-builds/src-noconflict/ace";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import ProblemDescription from "./pages/ProblemDescription/ProblemDescription";
ace.config.set("basePath", "/assets/ui/");
ace.config.set("modePath", "");
ace.config.set("themePath", "");

function App() {
  const markdownText = `
  #  Welcome to StackEdit!
  
  ![image](https://assets.leetcode.com/uploads/2018/10/12/knight.png)

  Hi! I'm your first Markdown file in **StackEdit**. If you want to learn about StackEdit, you can read me. If you want to play with Markdown, you can edit me. Once you have finished with me, you can create new files by opening the **file explorer** on the left corner of the navigation bar.
  `;
  return (
    <>
      <Navbar />
      <Sidebar />
      <ProblemDescription descriptionText={markdownText} />
    </>
  );
}

export default App;
