import { useState } from "react";
import ShowHideBtn from "./ShowHideBtn";
import AddItemBtn from "./AddItemBtn";
import DeleteItemBtn from "./DeleteItemBtn";
import EditJobRole from "./EditJobRole";

function EditJobCompany({ children }) {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className="editJobCompany">
      <div className="editItemHeader">
        <h3>Company 1</h3>
        <div>
          <AddItemBtn></AddItemBtn>
          <DeleteItemBtn></DeleteItemBtn>
          <ShowHideBtn
            isVisible={isVisible}
            toggle={() => setIsVisible(!isVisible)}
          ></ShowHideBtn>
        </div>
      </div>
      {isVisible && (
        <div className="editCompanyBody">
          <div className="editInputContainer">
            <label>Company Name</label>
            <input type="text" name="jobCompany" required></input>

            <label>Location</label>
            <input type="text" name="jobLocation" required></input>
          </div>

          <EditJobRole></EditJobRole>
          <EditJobRole></EditJobRole>
          {children}
        </div>
      )}
    </div>
  );
}

export default EditJobCompany;
