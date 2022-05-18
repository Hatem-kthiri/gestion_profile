import React, { useEffect } from "react";
import { getAttendance } from "../../redux/actions/Employee";
import jwt_decode from "jwt-decode";
import { useDispatch, useSelector } from "react-redux";
const MyAttendance = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAttendance());
    }, []);
    var id = jwt_decode(localStorage.getItem("token")).user._id;

    const { Attendance } = useSelector((state) => state.managementReducer);
    var MyAttendance = Attendance.filter((el) => el.Employee._id == id);

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
                                                        <th>Employee</th>
                                                        <th>Date</th>
                                                        <th>Situation</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {MyAttendance.map(
                                                        (el, index) => {
                                                            return (
                                                                <tr id="row1">
                                                                    <td>{`${el.Employee.Name} ${el.Employee.lastName}`}</td>
                                                                    <td>
                                                                        {
                                                                            el.date
                                                                        }
                                                                    </td>
                                                                    <td>
                                                                        {
                                                                            el.situation
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

export default MyAttendance;
