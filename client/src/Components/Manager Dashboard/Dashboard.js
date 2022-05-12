import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
// import timeGridPlugin from "@fullcalendar/timegrid";

// import "@fullcalendar/core/main.css";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";
const Dashboard = () => {
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
                                    <div class="number count">9</div>
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
                                    <div class="number count">4</div>
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
                                    <div class="number count">8</div>
                                    <div class="desc">Total Awards</div>
                                </div>
                                <a class="more">
                                    View More{" "}
                                    <i class="m-icon-swapright m-icon-white"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-6">
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
                        </div>
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
                                        }}
                                    ></div>
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
