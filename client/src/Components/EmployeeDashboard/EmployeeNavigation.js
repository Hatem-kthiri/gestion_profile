import React from "react";
import { Link, useHistory } from "react-router-dom";
const EmployeeNavigation = () => {
    const history = useHistory();
    const logOut = () => {
        localStorage.removeItem("token");
        history.push("/login");
    };
    return (
        <div class="header">
            <div class="navbar navbar-default mega-menu" role="navigation">
                <div class="container">
                    <div class="navbar-header">
                        <button
                            type="button"
                            class="navbar-toggle"
                            data-toggle="collapse"
                            data-target=".navbar-responsive-collapse"
                        >
                            <span class="sr-only">Toggle navigation</span>
                            <span class="fa fa-bars"></span>
                        </button>
                        <a class="navbar-brand" href="#">
                            <img
                                src="https://cdn.pixabay.com/photo/2020/07/14/13/07/icon-5404125_640.png"
                                class="logo-default"
                                id="logo-header"
                                height="50px"
                                alt="Logo"
                            />
                        </a>
                    </div>

                    <div class="collapse navbar-collapse navbar-responsive-collapse">
                        <ul class="nav navbar-nav">
                            <li>
                                <Link
                                    style={{ color: "#000" }}
                                    to="/dashboardE"
                                >
                                    Home
                                </Link>
                            </li>
                            <li class="dropdown ">
                                <a
                                    style={{ color: "#000" }}
                                    class="dropdown-toggle"
                                    data-toggle="dropdown"
                                >
                                    Leaves
                                </a>
                                <ul
                                    class="dropdown-menu"
                                    style={{ transform: "translateY(-12px)" }}
                                >
                                    <li>
                                        <Link
                                            to="EmployeeApplyLeave"
                                            style={{ color: "#000" }}
                                        >
                                            {" "}
                                            Apply Leave
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/EmployeeMyLeave"
                                            style={{ color: "#000" }}
                                        >
                                            {" "}
                                            My Leaves
                                        </Link>
                                    </li>
                                </ul>
                            </li>

                            <li class="">
                                <Link
                                    style={{ color: "#000" }}
                                    to="/EmployeeMyAttendance"
                                >
                                    Attendance
                                </Link>
                            </li>

                            <li class="dropdown ">
                                <a
                                    href="#"
                                    class="dropdown-toggle"
                                    data-toggle="dropdown"
                                    style={{ color: "#000" }}
                                >
                                    My Account
                                </a>

                                <ul
                                    class="dropdown-menu"
                                    style={{ transform: "translateY(-12px)" }}
                                >
                                    <li>
                                        <a
                                            href=""
                                            data-toggle="modal"
                                            data-target=".change_password_modal"
                                            id="change_password_link"
                                        >
                                            {" "}
                                            Change Password
                                        </a>
                                    </li>
                                    <li>
                                        <a onClick={() => logOut()}>Logout</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EmployeeNavigation;
