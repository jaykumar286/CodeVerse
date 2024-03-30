/* eslint-disable simple-import-sort/imports */

import { useState } from "react";
import AceEditor from "react-ace";
import ReactMarkdown from "react-markdown";

import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/ace";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/ext-language_tools";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/theme-github_dark";
import "ace-builds/src-noconflict/theme-tomorrow";
import "ace-builds/src-noconflict/theme-kuroir";
import "ace-builds/src-noconflict/theme-twilight";
import "ace-builds/src-noconflict/theme-xcode";
import "ace-builds/src-noconflict/theme-textmate";
import "ace-builds/src-noconflict/theme-solarized_dark";
import "ace-builds/src-noconflict/theme-solarized_light";
import "ace-builds/src-noconflict/theme-terminal";
import DOMPurify from "dompurify";
import rehypeRaw from "rehype-raw";
import Languages from "../../constants/Language";
import Themes from "../../constants/Theme";

type languageSupport = {
  languageName: string;
  value: string;
};

type themeStyle = {
  themeName: string;
  value: string;
};

function Description({ descriptionText }: { descriptionText: string }) {
  const sanitizedMarkdown = DOMPurify.sanitize(descriptionText);

  const [activeTab, setActiveTab] = useState("statement");
  const [leftWidth, setLeftWidth] = useState(40);
  const [isDragging, setIsDragging] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("javascript");
  const [selectedTheme, setSelectedTheme] = useState("monokai");

  const startDragging = (e: { preventDefault: () => void }) => {
    setIsDragging(true);
    e.preventDefault();
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const stopDragging = () => {
    if (isDragging) {
      setIsDragging(false);
    }
  };

  const onDrag = (e: { clientX: number }) => {
    if (!isDragging) return;

    const newLeftWidth = (e.clientX / window.innerWidth) * 100;
    if (newLeftWidth > 10 && newLeftWidth < 90) {
      setLeftWidth(newLeftWidth);
    }
  };

  const isActiveTab = (tabName: string) => {
    if (activeTab === tabName) {
      return "tab tab-active";
    } else {
      return "tab";
    }
  };

  return (
    <div
      className="flex w-screen h-screen"
      onMouseMove={onDrag}
      onMouseUp={stopDragging}
    >
      <div
        className="leftPanel h-full overflow-y-auto"
        style={{ width: `${leftWidth}%` }}
      >
        <div role="tablist" className="tabs tabs-boxed w-3/5">
          <a
            onClick={() => setActiveTab("statement")}
            role="tab"
            className={isActiveTab("statement")}
          >
            Problem Statement
          </a>
          <a
            onClick={() => setActiveTab("editorial")}
            role="tab"
            className={isActiveTab("editorial")}
          >
            Editorial
          </a>
          <a
            onClick={() => setActiveTab("submissions")}
            role="tab"
            className={isActiveTab("submissions")}
          >
            Submissions
          </a>
        </div>

        <div className="markdownViewer h-full p-[20px] basis-1/2">
          <ReactMarkdown rehypePlugins={[rehypeRaw]}>
            {sanitizedMarkdown}
          </ReactMarkdown>
        </div>
      </div>

      <div
        className="divider cursor-col-resize w-[5px] bg-slate-200 h-full"
        onMouseDown={startDragging}
      ></div>

      <div
        className="rightPanel h-full overflow-auto"
        style={{ width: `${100 - leftWidth}%` }}
      >
        <div className="flex ml-2 mb-2 gap-2">
          <div>
            <button className="btn btn-success btn-sm  rounded-xl">Run</button>
          </div>

          <div>
            <button className="btn btn-warning btn-sm rounded-xl">
              Submit
            </button>
          </div>

          <div>
            <select
              className="select select-info  select-sm  rounded-xl  w-full max-w-xs"
              value={selectedLanguage}
              onChange={(e) => setSelectedLanguage(e.target.value)}
            >
              {Languages.map((language: languageSupport) => (
                <option key={language.value} value={language.value}>
                  {" "}
                  {language.languageName}{" "}
                </option>
              ))}
            </select>
          </div>

          <div>
            <select className="select select-info  select-sm  rounded-xl  w-full max-w-xs"  value={selectedTheme} onChange={(e)=>setSelectedTheme(e.target.value)}>
              {Themes.map((theme: themeStyle) => (
                <option key={theme.value} value={theme.value}>
                  {" "}
                  {theme.themeName}{" "}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="editorContainer">
          <AceEditor
            mode={selectedLanguage}
            theme={selectedTheme}
            name="codeEditor"
            className="editor"
            style={{ width: "95%" }}
            setOptions={{
              enableBasicAutocompletion: true,
              enableLiveAutocompletion: true,
              showLineNumbers: true,
              fontSize: 16,
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Description;
