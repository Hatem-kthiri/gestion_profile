import React, { useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
// import timeGridPlugin from "@fullcalendar/timegrid";

// import "@fullcalendar/core/main.css";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";
import { useSelector, useDispatch } from "react-redux";
import {
    getLeave,
    get_Department,
    get_Employees,
} from "../../redux/actions/Employee";
const Dashboard = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getLeave());
        dispatch(get_Department());
        dispatch(get_Employees());
    }, []);
    const { Leaves, Department, Employees } = useSelector(
        (state) => state.managementReducer
    );
    var Employee = Leaves.filter((el) => el.Employee !== null);
    var PendingLeaves = Employee.filter((el) => el.Decision == "Pending");
    var reverseLeaves = [...PendingLeaves].reverse();

    return (
        <div class="page-container">
            {" "}
            <div class="page-content-wrapper">
                <div class="page-content">
                    <div class="page-head" style={{ marginTop: "66px" }}>
                        <div class="page-title">
                            <h1>
                                <b style={{ fontWeight: "400" }}></b> Dashboard
                            </h1>
                        </div>
                    </div>
                    {/* <div class="page-bar">
                        <ul class="page-breadcrumb breadcrumb">
                            <li>
                                <span class="active">Dashboard</span>
                            </li>
                        </ul>
                    </div> */}

                    <div class="row">
                        <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                            <div class="dashboard-stat blue-madison">
                                <div class="visual">
                                    <i class="fa fa-users"></i>
                                </div>
                                <div class="details">
                                    <div class="number count">
                                        {Employees.length}
                                    </div>
                                    <div class="desc">Total Employees</div>
                                </div>
                                <a class="more">
                                    View More{" "}
                                    <i class="m-icon-swapright m-icon-white"></i>
                                </a>
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                            <div class="dashboard-stat red-intense">
                                <div class="visual">
                                    <i class="fa fa-briefcase"></i>
                                </div>
                                <div class="details">
                                    <div class="number count">
                                        {Department.length}
                                    </div>
                                    <div class="desc">Total Departments</div>
                                </div>
                                <a class="more">
                                    View More{" "}
                                    <i class="m-icon-swapright m-icon-white"></i>
                                </a>
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                            <div class="dashboard-stat green-haze">
                                <div class="visual">
                                    <i class="fa fa-shopping-cart"></i>
                                </div>
                                <div class="details">
                                    <div class="number count">
                                        {PendingLeaves.length}
                                    </div>
                                    <div class="desc">Total Leave</div>
                                </div>
                                <a class="more">
                                    View More{" "}
                                    <i class="m-icon-swapright m-icon-white"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        {/*<div class="col-md-6">
                            <div class="portlet light bordered">
                                <div class="portlet-title">
                                    <div class="caption font-red">
                                        <i class="icon-users font-red"></i>{" "}
                                        Attendance
                                    </div>
                                </div>
                                  <div class="portlet-body">
                                     <FullCalendar
                                         defaultView="dayGridMonth"
                                         header={{
                                             left: "prev,next",
                                             center: "title",
                                             right: "dayGridMonth,timeGridWeek,timeGridDay",
                                         }}
                                         themeSystem="Simplex"
                                         plugins={[dayGridPlugin]}
                                         events={[]}
                                    />
                                 </div> 
                            </div>
                                        </div>*/}
                        <div class="col-md-6">
                            <div class="portlet light bordered">
                                <div class="portlet-title">
                                    <div class="caption font-blue">
                                        Leaves Request
                                    </div>
                                </div>
                                <div class="portlet-body">
                                    <div
                                        id="expenseChart"
                                        style={{
                                            width: "100%",
                                            height: "400px",
                                            margin: "0 auto",
                                            overflow: "auto",
                                        }}
                                    >
                                        {reverseLeaves.length > 0 ? (
                                            reverseLeaves.map((el) => {
                                                return (
                                                    <p>{`The Employee ${el.Employee.Name} ${el.Employee.lastName} send a new Leave Request `}</p>
                                                );
                                            })
                                        ) : (
                                            <p>Waiting for new Leaves ..</p>
                                        )}
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

export default Dashboard;
