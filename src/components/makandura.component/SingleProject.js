import React from "react";
import { convertToRaw, convertFromRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
import { useEffect } from "react";
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const SingleProject = (props) => {
  console.log(props.content);

  // const [editorState, setEditorState] = React.useState([]);

  // const [contentState, setContentState] = React.useState([]);
  const contentState = convertFromRaw(JSON.parse(props.content));
  const editorState = EditorState.createWithContent(contentState);

  useEffect(() => {
    console.log("ahgsd")
  });

  return (
    <div className="container mb-5">
      <h1 className="text-center text-3xl">{props.title_project_m}</h1>
      <p className="my-5 text-lg">{props.summery_project_m}</p>
      {/* <Image width={100} height={100} src={props.image} /> */}
      <div className="row">
        <div className="col-md-12">
          <Editor
            editorState={editorState}
            readOnly={true}
            toolbar={{
              options: [],
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default SingleProject;
