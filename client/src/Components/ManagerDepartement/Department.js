import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    get_Department,
    add_Department,
    AdminDeleteDepartment,
} from "../../redux/actions/Employee";
const Department = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(get_Department());
    }, []);

    const { Department } = useSelector((state) => state.managementReducer);

    const [show, setShow] = useState(false);
    const [newDepartment, setNewDepartment] = useState("");
    const handleShow = (e) => {
        e.preventDefault();
        setShow(!show);
    };

    const handleChange = (e) => {
        setNewDepartment({ [e.target.name]: e.target.value });
    };
    const handleAddDepartment = () => {
        dispatch(add_Department(newDepartment));
    };
    const handleDelete = (id) => {
        dispatch(AdminDeleteDepartment(id));
    };
    return (
        <div class="page-container">
            <div class="page-content-wrapper">
                <div class="page-content">
                    <div class="page-head">
                        <div class="page-head" style={{ marginTop: "66px" }}>
                            <div class="page-title">
                                <h1>Departments</h1>
                            </div>
                        </div>

                        <div id="load"></div>

                        <div class="row">
                            <div class="col-md-12">
                                <div class="portlet light bordered">
                                    <div class="portlet-body">
                                        <div class="table-toolbar">
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <div class="btn-group">
                                                        <a
                                                            class="btn green"
                                                            onClick={handleShow}
                                                        >
                                                            Add New Department
                                                            <i class="fa fa-plus"></i>{" "}
                                                        </a>
                                                    </div>
                                                </div>
                                                <div class="col-md-6"></div>
                                            </div>
                                        </div>
                                        <div class="table-responsive">
                                            <table class="table table-striped table-bordered table-hover">
                                                <thead>
                                                    <tr>
                                                        <th>Sr No. </th>
                                                        <th>Department Name</th>
                                                        <th>Actions</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {Department.map(
                                                        (el, index) => {
                                                            return (
                                                                <tr id="row1">
                                                                    <td>
                                                                        {index +
                                                                            1}
                                                                    </td>
                                                                    <td>
                                                                        {
                                                                            el.Name
                                                                        }
                                                                    </td>

                                                                    <td class=" ">
                                                                        <a
                                                                            class="btn red btn-sm margin-bottom-10"
                                                                            style={{
                                                                                width: "94px",
                                                                            }}
                                                                            onClick={() =>
                                                                                handleDelete(
                                                                                    el._id
                                                                                )
                                                                            }
                                                                        >
                                                                            <i class="fa fa-trash"></i>{" "}
                                                                            Delete
                                                                        </a>
                                                                    </td>
                                                                </tr>
                                                            );
                                                        }
                                                    )}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {show ? (
                        <div
                            class="modal-dialog"
                            style={{
                                position: "absolute",
                                top: "143px",
                                left: "365px",
                            }}
                        >
                            <div class="modal-content">
                                <div class="modal-header">
                                    <button
                                        type="button"
                                        class="close"
                                        data-dismiss="modal"
                                        aria-hidden="true"
                                        onClick={handleShow}
                                    ></button>
                                    <h4 class="modal-title">Add Department</h4>
                                </div>
                                <div
                                    class="modal-body"
                                    id="info"
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                    }}
                                >
                                    <label style={{ marginRight: "10px" }}>
                                        Department Name:{" "}
                                    </label>
                                    <input
                                        style={{
                                            outline: "none",
                                            border: "1px solid #000ff",
                                            width: "250px",
                                            height: "30px",
                                        }}
                                        type="text"
                                        name="Name"
                                        class="form-control"
                                        placeholder="Department Name ..."
                                        onChange={handleChange}
                                    />
                                </div>
                                <div class="modal-footer">
                                    <button
                                        type="button"
                                        data-dismiss="modal"
                                        class="btn purple btn-sm margin-bottom-10 "
                                        onClick={handleAddDepartment}
                                    >
                                        Submit
                                    </button>
                                    <button
                                        type="button"
                                        data-dismiss="modal"
                                        class="btn purple btn-sm margin-bottom-10 "
                                        onClick={() => setShow(false)}
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        </div>
                    ) : null}
                </div>
            </div>
        </div>
    );
};

export default Department;
