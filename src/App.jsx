import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import "./Viewer.css";
import EditSection from "./components/editor/EditSection";
import EditGeneralInfo from "./components/editor/EditGeneralInfo";
import EditEducationItem from "./components/editor/EditEducationItem";
import EditJobCompany from "./components/editor/EditJobCompany";
import EditSkillsList from "./components/editor/EditSkillList";
import ViewerContainer from "./components/viewer/ViewerContainer";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className="editContainer">
        <h1>Resume Builder App</h1>
        <EditSection name="General Info">
          <EditGeneralInfo></EditGeneralInfo>
        </EditSection>

        <EditSection name="Education">
          <EditEducationItem></EditEducationItem>
        </EditSection>

        <EditSection name="Experience">
          <EditJobCompany></EditJobCompany>
        </EditSection>

        <EditSection name="Skills & Interests">
          <EditSkillsList></EditSkillsList>
        </EditSection>
      </div>
      <div className="renderContainer">
        <ViewerContainer></ViewerContainer>
      </div>
    </>
  );
}

export default App;
