import ResumeSectionContainer from "./ResumeSectionContainer";
import ResumeEducationItem from "./ResumeEducationItem";

function ResumeEducationContainer({ name, data }) {
  const educationIDs = data?.["educationData"]["children"];

  const educationData = Object.values(data)
    .filter((item) => educationIDs.includes(item.id))
    .sort((a, b) => educationIDs.indexOf(a.id) - educationIDs.indexOf(b.id));

  if (educationData.length === 0) return null;

  return (
    <ResumeSectionContainer name="Education">
      {Object.keys(educationData).length > 0
        ? educationData.map((item) => (
            <ResumeEducationItem
              key={item?.["id"] ?? ""}
              name={item?.["educationInstitution"] ?? ""}
              location={item?.["educationLocation"] ?? ""}
              degree={item?.["educationDegree"] ?? ""}
              graduation={item?.["educationDates"] ?? ""}
              major={item?.["educationMajors"] ?? ""}
              gpa={item?.["educationGPA"] ?? ""}
            ></ResumeEducationItem>
          ))
        : ""}

      <span className="spacer"></span>
    </ResumeSectionContainer>
  );
}

export default ResumeEducationContainer;
