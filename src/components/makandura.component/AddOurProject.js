import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import { API_URL } from "../../config/index";
import { EditorState } from "draft-js";
import { convertFromRaw, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
// import Editor from '@draft-js-plugins/editor';

//////////image file add/////////
// function uploadImageCallBack(file) {
//   return new Promise((resolve, reject) => {
//     const xhr = new XMLHttpRequest();
//     xhr.open("POST", "#");
//     xhr.setRequestHeader("Authorization", "Client-ID ##clientid###");
//     const data = new FormData();
//     data.append("image", file);
//     xhr.send(data);
//     xhr.addEventListener("load", () => {
//       const response = JSON.parse(xhr.responseText);
//       console.log(response);
//       resolve(response);
//     });
//     xhr.addEventListener("error", () => {
//       const error = JSON.parse(xhr.responseText);
//       console.log(error);
//       reject(error);
//     });
//   });
// }
///////////////////////////////////

const AddPastEvents = () => {
  const [validated, setValidated] = useState(false);

  const [title_project_m, setTitle] = useState("");
  const [summery_project_m, setSummery] = useState("");
  const [editorState, setEditorState] = React.useState(() =>
    EditorState.createEmpty()
  );
  const [image_project_m, setImage] = useState("");
  const [status, setStatus] = useState(true);

  function addEvents(e) {
    // the raw state, stringified
    const content_project_m = JSON.stringify(
      convertToRaw(editorState.getCurrentContent())
    );
    // convert the raw state back to a useable ContentState object
    // const content = convertFromRaw(JSON.parse(rawDraftContentState));
    console.log(content_project_m);
    const form = e.currentTarget;

    if (form.checkValidity() === false) {
      e.preventDefault();

      setValidated(true);
      e.stopPropagation();
    } else {
      e.preventDefault();

      const ourProject = {
        title_project_m,
        summery_project_m,
        content_project_m,
        image_project_m,
        // status,
      };

      axios
        .post(`${API_URL}/api/projectmakandura/`, ourProject)
        .then(() => {
          alert("New Event Added");
          setTitle("");
          setSummery("");
          setEditorState("");
          setImage("");
          setStatus(true);
          setValidated(false);
        })
        .catch((err) => {
          alert(err);
        });
    }
  }

  // const router = useRouter();

  // const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  // const user = useSelector((state) => state.auth.user);
  // const loading = useSelector((state) => state.auth.loading);

  // if (typeof window !== "undefined" && !loading && !isAuthenticated)
  //   router.push("/login");

  return (
    <>
      <div className="body">
        <div className="container1">
          <div className="col-md-8 mt-4 mx-auto">
            <h2 className="h3 mb-3 font-weight-normal text-center">
              Add OurProject
            </h2>
            <Form noValidate validated={validated} onSubmit={addEvents}>
              <div className="form-group" style={{ marginBottom: "15px" }}>
                <label className="form-label" style={{ marginBottom: "5px" }}>
                  {" "}
                  Project Title{" "}
                </label>
                <input
                  type="text"
                  required
                  minLength="2"
                  value={title_project_m}
                  className="form-control"
                  placeholder="Enter Event Title"
                  id="newsTitle"
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a Item Name
                </Form.Control.Feedback>
              </div>
              <div className="form-group" style={{ marginBottom: "15px" }}>
                <label className="form-label" style={{ marginBottom: "5px" }}>
                  {" "}
                  Summery{" "}
                </label>
                <input
                  type="text"
                  required
                  className="form-control"
                  placeholder="Summarize your Event"
                  id="summery"
                  value={summery_project_m}
                  onChange={(e) => {
                    setSummery(e.target.value);
                  }}
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a Price
                </Form.Control.Feedback>
              </div>
              <div className="row">
                <div
                  className="form-group col-md-8"
                  style={{ marginBottom: "15px" }}
                >
                  <label className="form-label" style={{ marginBottom: "5px" }}>
                    {" "}
                    Image{" "}
                  </label>
                  <input
                    type="text"
                    required
                    className="form-control"
                    placeholder="Enter Image Url"
                    id="image"
                    value={image_project_m}
                    onChange={(e) => {
                      setImage(e.target.value);
                    }}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a Image Url
                  </Form.Control.Feedback>
                </div>
                <div
                  className="form-group col-md-4 text-center m-auto"
                  style={{ marginBottom: "15px" }}
                >
                  <select
                    className=" btn btn-secondary btn-sm dropdown-toggle rounded-3 bg-color-white"
                    value={status}
                    onChange={(e) => {
                      setStatus(e.target.value);
                    }}
                  >
                    <option disabled hidden>
                      Select your option
                    </option>
                    <option value={true}>Active</option>
                    <option value={false}>Inactive</option>
                  </select>
                </div>
              </div>

              <div className="form-group" style={{ marginBottom: "15px" }}>
                <label className="form-label" style={{ marginBottom: "5px" }}>
                  {" "}
                  Add Event Content{" "}
                </label>
              </div>
              <div className="editor">
                <Editor
                  editorState={editorState}
                  onEditorStateChange={setEditorState}
                  toolbar={{
                    inline: { inDropdown: true },
                    list: { inDropdown: true },
                    textAlign: { inDropdown: true },
                    link: { inDropdown: true },
                    history: { inDropdown: true },
                    //   image: {
                    //     uploadCallback: uploadImageCallBack,
                    //     alt: { present: true, mandatory: true },
                    //   },
                  }}
                />
                {/* show convert draft to html markup */}
              </div>

              <button
                type="submit"
                className="btn btn-blue btn-block"
                style={{ marginTop: "15px", marginBottom: "15px" }}
              >
                <i className="far fa-check-square"></i>
                &nbsp; Save
              </button>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddPastEvents;
