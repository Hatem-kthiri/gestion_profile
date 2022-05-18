import React, { useEffect, useState } from "react";
import { MDBDataTableV5 } from "mdbreact";
// import "./Employee.css";
import {
    get_Employees,
    addAttendance,
    getAttendance,
} from "../../redux/actions/Employee";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
const MarkAttendance = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(get_Employees());
        dispatch(getAttendance());
    }, []);

    const { Employees, Attendance } = useSelector(
        (state) => state.managementReducer
    );
    const [attendance, setAttendance] = useState([]);
    const [situation, setSituation] = useState("");
    const handleChange = (e) => {
        setSituation(e.target.value);
    };

    var today = new Date();
    var date =
        today.getFullYear() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getDate();

    const handleSave = (id, index) => {
        setAttendance([
            ...attendance,
            { Employee: id, situation: situation, date },
        ]);
        document.querySelector(`#button${index}`).disabled = true;
    };
    const handleSend = () => {
        dispatch(addAttendance(attendance));
    };
    var attendanceRegistred = Attendance.filter((el) => el.date == date);
    return (
        <div class="page-container">
            <div class="page-content-wrapper">
                <div class="page-content">
                    <div class="page-head">
                        <div class="page-head" style={{ marginTop: "66px" }}>
                            <div class="page-title">
                                <h1>Mark Attendance </h1>
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
                                            <h2
                                                style={{ textAlign: "center" }}
                                            >{`Today ${date}`}</h2>
                                            <table class="table table-striped table-bordered table-hover">
                                                <thead>
                                                    <tr>
                                                        <th>Employee Name </th>
                                                        <th>Attendance</th>
                                                        <th>Save</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {Employees.map(
                                                        (el, index) => {
                                                            return (
                                                                <tr id="row1">
                                                                    <td>
                                                                        {`${el.Name} ${el.lastName}`}
                                                                    </td>
                                                                    <td>
                                                                        {attendanceRegistred.length ==
                                                                        0 ? (
                                                                            <select
                                                                                class="form-control"
                                                                                id="date_range_leaveType"
                                                                                name="Decision"
                                                                                onChange={
                                                                                    handleChange
                                                                                }
                                                                            >
                                                                                <option>
                                                                                    Choose
                                                                                </option>
                                                                                <option value="Present">
                                                                                    Present
                                                                                </option>
                                                                                <option value="Absent">
                                                                                    Absent
                                                                                </option>
                                                                                <option value="Leave">
                                                                                    Leave
                                                                                </option>
                                                                            </select>
                                                                        ) : (
                                                                            <p>
                                                                                Attendance
                                                                                for
                                                                                Today
                                                                                Registred
                                                                            </p>
                                                                        )}
                                                                    </td>

                                                                    <td class=" ">
                                                                        <>
                                                                            {attendanceRegistred.length ==
                                                                            0 ? (
                                                                                <button
                                                                                    class="btn red btn-sm margin-bottom-10"
                                                                                    style={{
                                                                                        width: "94px",
                                                                                    }}
                                                                                    id={`button${index}`}
                                                                                    onClick={() =>
                                                                                        handleSave(
                                                                                            el._id,
                                                                                            index
                                                                                        )
                                                                                    }
                                                                                >
                                                                                    Save
                                                                                </button>
                                                                            ) : null}
                                                                        </>
                                                                    </td>
                                                                </tr>
                                                            );
                                                        }
                                                    )}
                                                </tbody>
                                            </table>
                                            {attendanceRegistred.length == 0 ? (
                                                <button
                                                    class="btn red btn-sm margin-bottom-10"
                                                    style={{
                                                        width: "94px",
                                                    }}
                                                    onClick={handleSend}
                                                >
                                                    Send
                                                </button>
                                            ) : null}
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

export default MarkAttendance;
