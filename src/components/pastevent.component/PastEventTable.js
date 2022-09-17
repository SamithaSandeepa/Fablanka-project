import React from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { data } from "../data";
import { API_URL } from "../../config/index";

const EventsTable = () => {
  const [events, setEvents] = useState([]);
  // const [status, setStatus] = useState("");

  //check setStatus using console.log(status)

  // const [status, setStatus] = useState(isChacked);

  const getEvents = async () => {
    try {
      const response = await axios.get(`${API_URL}/api/pastevent/`);
      setEvents(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getEvents();
  }, []);

  // using isCheck function and update the status in database
  const onChange = (id, status) => {
    console.log(id, status);
    //if status is true then set status to false
    //if status is false then set status to true
    axios
      .patch(`http://localhost:8000/api/pastevent/${id}/`, { status: status })
      .then((res) => {
        console.log(res);
        //alert for change status successfully
        alert("Change status successfully");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onDelete = async (id) => {
    if (
      window.confirm(
        "Are you sure you want to delete this news? This action cannot be undone."
      )
    ) {
      try {
        await axios.delete(`http://localhost:8000/api/pastevent/${id}`);
        getEvents();
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="container mb-10">
      <div className="table-responsive">
        <h1 className="text-center">Events</h1>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Image</th>
              <th scope="col">Event Title</th>
              <th scope="col">Summery</th>
              <th scope="col">Status</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {events.map((curElem) => {
              console.log(curElem.title_pastevent);
              return (
                <tr key={curElem.id}>
                  <th scope="row">{curElem.id}</th>
                  <td className="text-center">
                    <img
                      src={curElem.image_project_m}
                      width={100}
                      height={100}
                    />
                  </td>
                  <td>{curElem.title_pastevent}</td>
                  <td>{curElem.summery_pastevent}</td>
                  <td>
                    <select
                      onChange={(e) => onChange(curElem.id, e.target.value)}
                      defaultValue={curElem.status}
                    >
                      <option value={true}>Active</option>
                      <option value={false}>Inactive</option>
                    </select>
                  </td>
                  <td className="text-center">
                    <div className="btn-group-vertical">
                      <Link href={"/admin/pastevents/" + curElem.id}>
                        <button className="btn btn-warning">Edit</button>
                      </Link>
                      <button
                        className="btn btn-danger"
                        onClick={() => {
                          onDelete(curElem.id);
                        }}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EventsTable;
