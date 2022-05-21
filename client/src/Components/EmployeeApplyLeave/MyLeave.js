import React, { useEffect, useState } from "react";
import { MDBDataTableV5 } from "mdbreact";
// import "./Employee.css";
import { getLeave, updateDecision } from "../../redux/actions/Employee";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import jwt_decode from "jwt-decode";

const MyLeave = () => {
    const dispatch = useDispatch();
    const { Leaves } = useSelector((state) => state.managementReducer);
    useEffect(() => {
        dispatch(getLeave());
    }, []);

    var id = jwt_decode(localStorage.getItem("token")).user._id;
    var LeavesReversed = [...Leaves].reverse();
    var ValidEmployee = LeavesReversed.filter((el) => el.Employee !== null);

    var myLeaves = ValidEmployee.filter((el) => el.Employee._id == id);
    return (
        <div class="page-container">
            <div class="page-content-wrapper">
                <div class="page-content">
                    <div class="page-head">
                        <div class="page-head" style={{ marginTop: "16px" }}>
                            <div class="page-title">
                                <h1>My Leave </h1>
                            </div>
                        </div>

                        <div id="load"></div>

                        <div class="row">
                            <div class="col-md-12">
                                <div class="portlet light bordered">
                                    <div class="portlet-body">
                                        <div class="table-toolbar">
                                            <div class="row">
                                                <div class="col-md-6"></div>
                                                <div class="col-md-6"></div>
                                            </div>
                                        </div>
                                        <div class="table-responsive">
                                            <table class="table table-striped table-bordered table-hover">
                                                <thead>
                                                    <tr>
                                                        <th>Employee Name </th>
                                                        <th>Leave Start</th>
                                                        <th>Leave End</th>
                                                        <th>Leave Type</th>
                                                        <th>Reason</th>
                                                        <th>Decision</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {myLeaves.map(
                                                        (el, index) => {
                                                            return (
                                                                <tr id="row1">
                                                                    <td>
                                                                        {`${el.Employee.Name} ${el.Employee.lastName}`}
                                                                    </td>
                                                                    <td>
                                                                        {el.LeaveD.substr(
                                                                            0,
                                                                            10
                                                                        )}
                                                                    </td>
                                                                    <td>
                                                                        {el.LeaveEnd.substr(
                                                                            0,
                                                                            10
                                                                        )}
                                                                    </td>
                                                                    <td>
                                                                        {
                                                                            el.LeaveType
                                                                        }
                                                                    </td>
                                                                    <td>
                                                                        {
                                                                            el.Reason
                                                                        }
                                                                    </td>
                                                                    <td>
                                                                        {
                                                                            el.Decision
                                                                        }
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
                </div>
            </div>
        </div>
    );
};

export default MyLeave;
