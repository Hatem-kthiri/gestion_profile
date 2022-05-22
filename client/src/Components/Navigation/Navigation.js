import React from "react";
import "./Navigations.css";
import { Link, useHistory } from "react-router-dom";
const Navigation = () => {
    const history = useHistory();
    const logOut = () => {
        localStorage.removeItem("token");
        history.push("/login");
        history.go(0);
    };
    return (
        <div class="page-header navbar navbar-fixed-top">
            <div class="page-header-inner">
                <div class="page-logo">
                    <a href="">
                        <img
                            src="https://cdn.pixabay.com/photo/2020/07/14/13/07/icon-5404125_640.png"
                            height="50px"
                        />
                    </a>
                    <div class="menu-toggler sidebar-toggler"></div>
                </div>

                <div class="page-actions hidden-xs"></div>

                <div class="page-top">
                    <div class="top-menu">
                        <ul class="nav navbar-nav pull-right">
                            {/* <li
                                class="dropdown dropdown-extended dropdown-notification"
                                id="header_notification_bar"
                            >
                                <a
                                    href=""
                                    class="dropdown-toggle"
                                    data-toggle="dropdown"
                                    data-hover="dropdown"
                                    data-close-others="true"
                                >
                                    <i class="icon-bell"></i>
                                </a>

                                <ul class="dropdown-menu">
                                    <li class="external">
                                        <h3>
                                            <span class="bold">0 pending</span>{" "}
                                            notifications
                                        </h3>
                                    </li>
                                </ul>
                            </li> */}

                            <li class="dropdown dropdown-user">
                                <a href="#" class="dropdown-toggle">
                                    <span
                                        class="username hidden-sm hidden-xs"
                                        style={{ marginRight: "3px" }}
                                    >
                                        Admin
                                    </span>
                                    <i class="fa fa-angle-down"></i>
                                </a>
                                <ul class="dropdown-menu dropdown-menu-default">
                                    {/* <li>
                                        <a href="#">
                                            <i class="icon-user"></i> My Profile
                                        </a>
                                    </li> */}

                                    <li class="divider"></li>

                                    <li>
                                        <a id="logout-form" onClick={logOut}>
                                            <i class="icon-logout"></i> Logout{" "}
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="page-header-menu">
                <div class="container-fluid">
                    <div class="hor-menu ">
                        <ul class="nav navbar-nav">
                            <li class="nav-item  start  active">
                                <Link class="nav-link" to="/dashboardA">
                                    <i class="icon-home"></i>
                                    <span class="title">Dashboard</span>
                                    <span class="selected"></span>
                                </Link>
                            </li>

                            <li class="menu-dropdown classic-menu-dropdown ">
                                <a href=" ">
                                    <i class="icon-user"></i> People{" "}
                                    <i class="fa fa-angle-down"></i>
                                </a>
                                <ul class="dropdown-menu pull-left">
                                    <li class=" ">
                                        <Link
                                            class="nav-link"
                                            to="/adminDepartment"
                                        >
                                            <i class="fa fa-bookmark"></i>
                                            Departments
                                        </Link>
                                    </li>

                                    <li class="nav-item ">
                                        <Link
                                            class="nav-link"
                                            to="/adminEmployee"
                                        >
                                            <i class="fa fa-user"></i>
                                            <span class="title">Employees</span>
                                            <span class="selected"></span>
                                        </Link>
                                    </li>
                                </ul>
                            </li>

                            <li class="menu-dropdown classic-menu-dropdown ">
                                <a
                                    href="javascript:;"
                                    class="nav-link nav-toggle"
                                >
                                    <i class="icon-users"></i>
                                    <span class="title">Attendance</span>
                                    <i class="fa fa-angle-down"></i>
                                </a>
                                <ul class="dropdown-menu">
                                    <li class="nav-item ">
                                        <Link
                                            class="nav-link"
                                            to="/AdminMarkAttendance"
                                        >
                                            <i class="fa  fa-check"></i>
                                            Mark Attendance
                                        </Link>
                                    </li>
                                    <li class="nav-item ">
                                        <Link
                                            class="nav-link"
                                            to="/adminViewAttendance"
                                        >
                                            <i class="fa fa-eye"></i>
                                            View Attendance
                                        </Link>
                                    </li>
                                    {/* <li class="nav-item ">
                                        <a class="nav-link" href=" ">
                                            <i class="fa fa-sitemap"></i>
                                            Leave Types
                                        </a>
                                    </li> */}

                                    {/* <li class="nav-item ">
                                        <Link
                                            class="nav-link"
                                            to="/AdminLeaveList"
                                        >
                                            <i class="fa fa-rocket"></i>
                                            <span class="title">
                                                Leave List
                                            </span>
                                            <span class="selected "></span>
                                        </Link>
                                    </li> */}
                                </ul>
                            </li>

                            <li class="menu-dropdown  ">
                                <Link
                                    to="/AdminLeaveList"
                                    class="nav-link nav-toggle"
                                >
                                    <i class="fa fa-rocket"></i>
                                    <span class="title">Leave List</span>
                                    {/* <i class="fa fa-angle-down"></i> */}
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navigation;
