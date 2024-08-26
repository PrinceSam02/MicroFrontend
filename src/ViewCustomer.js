
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";


function ViewCustomer() {
  const [columns, setColumns] = useState([]);
  const [records, setRecords] = useState([]);
  const navigate = useNavigate();

  useEffect(() => { 
    axios
      .get("http://16.171.22.143:2002/patient/all")
      .then((response) => {
        setColumns(Object.keys(response.data[0]));
        setRecords(response.data);
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  let handleSubmit = (id) => {
    const conf = window.confirm("Do you want to delete");
    if (conf) {
      axios
        .delete("http://16.171.22.143:2002/patient/" + id)
        .then((res) => {
          alert("record has deleted");
          navigate("/");
          window.location.reload();
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <><div id="nav">

    </div><div id="body">
        <div className="container ">
        {/* <lable htmlFor="onlinehandicraftstore" id="value" role="heading">Online HandiCraft Store</lable> */}
        <h1 id="app2" className="text-center " role="heading" >Patient Management System</h1>

          <div className="text-end">
            <Link to="/addcustomer" className="btn btn-primary">
              Add +
            </Link>
          </div>
          <br />
          <table className="table table-bordered  table-striped w-100 border bg-white shadow px-5 pb-5 rounded ">
            <thead>
              <tr>
                {columns.map((c, i) => (
                  <th key={i}>{c}</th>
                ))}
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {records.map((d, i) => (
                <tr key={i}>
                  <td>{d.id}</td>
                  <td>{d.name}</td>
                  <td>{d.disease}</td>
                
                  

                  <td>
                    <Link
                      to={`/editcustomer/${d.id}`}
                      className="btn btn-sm btn-success "
                      id="value1"
                    >
                      Update
                    </Link>
                    <button
                      onClick={(e) => handleSubmit(d.id)}
                      className="btn btn-sm ms-1 btn-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div></>
  );
}

export default ViewCustomer;

