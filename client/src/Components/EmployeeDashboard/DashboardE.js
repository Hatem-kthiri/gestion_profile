import React from "react";
import { Link } from "react-router-dom";
const DashboardE = () => {
    return (
        <div class="wrapper">
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
                                    src="https://hrm-saas.froid.works/assets/admin/layout/img/hrm-logo-full.png"
                                    class="logo-default"
                                    id="logo-header"
                                    height="30px"
                                    alt="Logo"
                                />
                            </a>
                        </div>

                        <div class="collapse navbar-collapse navbar-responsive-collapse">
                            <ul class="nav navbar-nav">
                                <li class="active">
                                    <a href="#">Home</a>
                                </li>
                                <li class="dropdown ">
                                    <a
                                        href=""
                                        class="dropdown-toggle"
                                        data-toggle="dropdown"
                                    >
                                        Leaves
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li>
                                            <Link to="EmployeeApplyLeave">
                                                {" "}
                                                Apply Leave
                                            </Link>
                                        </li>
                                        <li>
                                            <a href="#"> My Leaves</a>
                                        </li>
                                    </ul>
                                </li>
                                {/* <li class="dropdown ">
                                    <a
                                        href="javascript:void(0);"
                                        class="dropdown-toggle"
                                        data-toggle="dropdown"
                                    >
                                        Self{" "}
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li>
                                            <a href="https://hrm-saas.froid.works/panel/salary">
                                                {" "}
                                                Salary Slips
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://hrm-saas.froid.works/panel/expenses">
                                                {" "}
                                                Expense Claims
                                            </a>
                                        </li>
                                    </ul>
                                </li> */}

                                {/* <li class="">
                                    <a href="https://hrm-saas.froid.works/panel/jobs">
                                        Job Vacancies
                                    </a>
                                </li> */}

                                <li class="">
                                    <a href="https://hrm-saas.froid.works/panel/front/attendance">
                                        Attendance
                                    </a>
                                </li>

                                <li class="dropdown ">
                                    <a
                                        href=""
                                        class="dropdown-toggle"
                                        data-toggle="dropdown"
                                    >
                                        My Account
                                    </a>

                                    <ul class="dropdown-menu">
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
                                            <a href="https://hrm-saas.froid.works/panel/logout">
                                                Logout
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div class="profile container content">
                <div class="row">
                    <div class="col-md-3 md-margin-bottom-40 ">
                        <img
                            src="https://www.gravatar.com/avatar/0500b2ab42f89e6307060d3f45458c97?d=mm&amp;s=250"
                            class="img-responsive profile-img margin-bottom-20"
                            style={{
                                border: "1px solid #ddd",
                                margin: "0 auto",
                            }}
                            alt="ProfileImage"
                        />

                        <p></p>
                        <h3 class="text-center">Employee Example</h3>
                        <h6 class="text-center">Fresher Android Developer</h6>
                        <h6
                            class="service-block-u"
                            style={{ textAlign: "center", padding: "10px" }}
                        >
                            <strong>At work for : </strong> 1 m 2 d
                        </h6>
                        <p></p>
                        <hr />
                        <div class="service-block-v3 service-block-u">
                            <div class="row profile-stat">
                                <div
                                    class="col-md-4 col-sm-4 col-xs-6"
                                    data-toggle="tooltip"
                                    data-placement="bottom"
                                    title=""
                                    data-original-title="May"
                                >
                                    <div class="uppercase profile-stat-title">
                                        0/26
                                    </div>
                                    <div class="uppercase profile-stat-text">
                                        Attendance
                                    </div>
                                </div>
                                <div
                                    class="col-md-4 col-sm-4 col-xs-6"
                                    data-toggle="tooltip"
                                    data-placement="bottom"
                                    title=""
                                    data-original-title="Leaves"
                                >
                                    <div class="uppercase profile-stat-title">
                                        0/10
                                    </div>
                                    <div class="uppercase profile-stat-text">
                                        Leaves
                                    </div>
                                </div>
                                {/* <div
                                    class="col-md-4 col-sm-4 col-xs-6"
                                    data-toggle="tooltip"
                                    data-placement="bottom"
                                    title=""
                                    data-original-title="Total Awards Won"
                                >
                                    <div class="uppercase profile-stat-title">
                                        0
                                    </div>
                                    <div class="uppercase profile-stat-text">
                                        Awards
                                    </div>
                                </div> */}
                            </div>
                        </div>

                        <div class="margin-bottom-50"></div>
                    </div>

                    <div class="col-md-9">
                        <div class="profile-body">
                            <div class="row margin-bottom-20">
                                <div class="col-sm-6">
                                    <div class="panel panel-profile no-bg">
                                        <div class="panel-heading overflow-h  service-block-u">
                                            <h2 class="panel-title heading-sm pull-left">
                                                <i class="fa fa-user"></i>
                                                Personal Details
                                            </h2>
                                        </div>
                                        <div class="panel-body panelHolder">
                                            <table class="table table-light margin-bottom-0">
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <span class="primary-link">
                                                                Name
                                                            </span>
                                                        </td>
                                                        <td>
                                                            Example Employee
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <span class="primary-link">
                                                                Last Name
                                                            </span>
                                                        </td>
                                                        <td>Malek</td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <span class="primary-link">
                                                                Date of Birth
                                                            </span>
                                                        </td>
                                                        <td>01-Jan-2000</td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <span class="primary-link">
                                                                Gender
                                                            </span>
                                                        </td>
                                                        <td>Male</td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <span class="primary-link">
                                                                Email
                                                            </span>
                                                        </td>
                                                        <td>
                                                            employee@example.com
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <span class="primary-link">
                                                                Phone
                                                            </span>
                                                        </td>
                                                        <td>+21612345678</td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <span class="primary-link">
                                                                Local Address
                                                            </span>
                                                        </td>
                                                        <td>Beja tunisia</td>
                                                    </tr>
                                                    {/* <tr>
                                                        <td>
                                                            <span class="primary-link">
                                                                Permanent
                                                                Address
                                                            </span>
                                                        </td>
                                                        <td>
                                                            9744 Balistreri
                                                            Ville Apt. 339 Port
                                                            Karinemouth, MN
                                                            95181
                                                        </td>
                                                    </tr> */}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>

                                    <div class="panel panel-profile no-bg margin-top-20">
                                        <div class="panel-heading overflow-h service-block-u">
                                            <h2 class="panel-title heading-sm pull-left">
                                                <i class="fa fa-briefcase"></i>
                                                Company Details
                                            </h2>
                                        </div>
                                        <div class="panel-body panelHolder">
                                            <table class="table table-light margin-bottom-0">
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <span class="primary-link">
                                                                Employee ID
                                                            </span>
                                                        </td>
                                                        <td>123456</td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <span class="primary-link">
                                                                Department
                                                            </span>
                                                        </td>
                                                        <td>
                                                            Android Developer
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <span class="primary-link">
                                                                Designation
                                                            </span>
                                                        </td>
                                                        <td>
                                                            Fresher Android
                                                            Developer
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <span class="primary-link">
                                                                Date of Joining
                                                            </span>
                                                        </td>
                                                        <td>10-Apr-2022</td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <span class="primary-link">
                                                                Salary ( TND )
                                                            </span>
                                                        </td>
                                                        {/* <td>
                                                            <p>
                                                                Basic : 700 TND{" "}
                                                            </p>
                                                            <p>
                                                                Hourly Rate : 8
                                                                TND{" "}
                                                            </p>
                                                        </td> */}
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>

                                    {/* <div class="panel panel-profile no-bg margin-top-20">
                                        <div class="panel-heading overflow-h service-block-u">
                                            <h2 class="panel-title heading-sm pull-left">
                                                <i class="fa fa-bank"></i>Bank
                                                Details
                                            </h2>
                                        </div>
                                        <div class="panel-body panelHolder">
                                            <table class="table table-light margin-bottom-0">
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <span class="primary-link">
                                                                Account Holder
                                                                Name
                                                            </span>
                                                        </td>
                                                        <td></td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <span class="primary-link">
                                                                Account Number
                                                            </span>
                                                        </td>
                                                        <td></td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <span class="primary-link">
                                                                Bank Name
                                                            </span>
                                                        </td>
                                                        <td></td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <span class="primary-link">
                                                                BSB
                                                            </span>
                                                        </td>
                                                        <td></td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <span class="primary-link">
                                                                Tax Payer Id
                                                            </span>
                                                        </td>
                                                        <td></td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <span class="primary-link">
                                                                Bank Identifier
                                                                Code
                                                            </span>
                                                        </td>
                                                        <td></td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <span class="primary-link">
                                                                Branch Location
                                                            </span>
                                                        </td>
                                                        <td></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div> */}
                                </div>

                                {/* <div class="col-sm-6 md-margin-bottom-20">
                                    <div class="panel panel-profile  margin-bottom-20">
                                        <div class="panel-heading overflow-h service-block-u">
                                            <h2 class="panel-title heading-sm pull-left">
                                                <i class="fa fa-bullhorn"></i>
                                                Notice Board
                                            </h2>
                                        </div>
                                        <div
                                            id="scrollbar2"
                                            class="panel-body contentHolder ps-container"
                                        >
                                            <div class="profile-event">
                                                <div class="date-formats">
                                                    <span>12</span>
                                                    <small>05, 2022</small>
                                                </div>
                                                <div class="overflow-h">
                                                    <h3 class="heading-xs">
                                                        <a
                                                            href=""
                                                            data-toggle="modal"
                                                            data-target=".show_notice"
                                                            onclick="show_notice(10);return false;"
                                                        >
                                                            Alice, that she
                                                            could not answer
                                                            without a.
                                                        </a>
                                                    </h3>
                                                    <p>
                                                        I get it home?' when it
                                                        had struck her foot! She
                                                        was a large plate came
                                                        skimming out, straight
                                                        at.
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="profile-event">
                                                <div class="date-formats">
                                                    <span>12</span>
                                                    <small>05, 2022</small>
                                                </div>
                                                <div class="overflow-h">
                                                    <h3 class="heading-xs">
                                                        <a
                                                            href=""
                                                            data-toggle="modal"
                                                            data-target=".show_notice"
                                                            onclick="show_notice(9);return false;"
                                                        >
                                                            Alice the moment how
                                                            large she had never
                                                            had to.
                                                        </a>
                                                    </h3>
                                                    <p>
                                                        Why, there's hardly room
                                                        to open her mouth; but
                                                        she saw in my life!' She
                                                        had just succeeded in.
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="profile-event">
                                                <div class="date-formats">
                                                    <span>12</span>
                                                    <small>05, 2022</small>
                                                </div>
                                                <div class="overflow-h">
                                                    <h3 class="heading-xs">
                                                        <a
                                                            href=""
                                                            data-toggle="modal"
                                                            data-target=".show_notice"
                                                            onclick="show_notice(8);return false;"
                                                        >
                                                            I shall see it
                                                            again, but it is.'
                                                            'Then you.
                                                        </a>
                                                    </h3>
                                                    <p>
                                                        Alice could not remember
                                                        ever having heard of
                                                        one,' said Alice, rather
                                                        alarmed at the Hatter,
                                                        it.
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="profile-event">
                                                <div class="date-formats">
                                                    <span>12</span>
                                                    <small>05, 2022</small>
                                                </div>
                                                <div class="overflow-h">
                                                    <h3 class="heading-xs">
                                                        <a
                                                            href=""
                                                            data-toggle="modal"
                                                            data-target=".show_notice"
                                                            onclick="show_notice(7);return false;"
                                                        >
                                                            Alice, a good
                                                            character, But said
                                                            I didn't!'.
                                                        </a>
                                                    </h3>
                                                    <p>
                                                        You gave us three or
                                                        more; They all returned
                                                        from him to be executed
                                                        for having missed their.
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="profile-event">
                                                <div class="date-formats">
                                                    <span>12</span>
                                                    <small>05, 2022</small>
                                                </div>
                                                <div class="overflow-h">
                                                    <h3 class="heading-xs">
                                                        <a
                                                            href=""
                                                            data-toggle="modal"
                                                            data-target=".show_notice"
                                                            onclick="show_notice(6);return false;"
                                                        >
                                                            Alice replied very
                                                            readily: 'but that's
                                                            because.
                                                        </a>
                                                    </h3>
                                                    <p>
                                                        No, there were three
                                                        little sisters,' the
                                                        Dormouse indignantly.
                                                        However, he consented to
                                                        go on.
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="profile-event">
                                                <div class="date-formats">
                                                    <span>12</span>
                                                    <small>05, 2022</small>
                                                </div>
                                                <div class="overflow-h">
                                                    <h3 class="heading-xs">
                                                        <a
                                                            href=""
                                                            data-toggle="modal"
                                                            data-target=".show_notice"
                                                            onclick="show_notice(5);return false;"
                                                        >
                                                            It's the most
                                                            curious thing I
                                                            know. Silence all.
                                                        </a>
                                                    </h3>
                                                    <p>
                                                        Cat, 'if you only walk
                                                        long enough.' Alice felt
                                                        a little hot tea upon
                                                        its forehead (the
                                                        position.
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="profile-event">
                                                <div class="date-formats">
                                                    <span>12</span>
                                                    <small>05, 2022</small>
                                                </div>
                                                <div class="overflow-h">
                                                    <h3 class="heading-xs">
                                                        <a
                                                            href=""
                                                            data-toggle="modal"
                                                            data-target=".show_notice"
                                                            onclick="show_notice(4);return false;"
                                                        >
                                                            After a minute or
                                                            two to think this a
                                                            very.
                                                        </a>
                                                    </h3>
                                                    <p>
                                                        After a while, finding
                                                        that nothing more
                                                        happened, she decided to
                                                        remain where she was,
                                                        and.
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="profile-event">
                                                <div class="date-formats">
                                                    <span>12</span>
                                                    <small>05, 2022</small>
                                                </div>
                                                <div class="overflow-h">
                                                    <h3 class="heading-xs">
                                                        <a
                                                            href=""
                                                            data-toggle="modal"
                                                            data-target=".show_notice"
                                                            onclick="show_notice(3);return false;"
                                                        >
                                                            First, she dreamed
                                                            of little birds and
                                                            animals.
                                                        </a>
                                                    </h3>
                                                    <p>
                                                        The only things in the
                                                        sea, some children
                                                        digging in the air: it
                                                        puzzled her a good deal
                                                        to come.
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="profile-event">
                                                <div class="date-formats">
                                                    <span>12</span>
                                                    <small>05, 2022</small>
                                                </div>
                                                <div class="overflow-h">
                                                    <h3 class="heading-xs">
                                                        <a
                                                            href=""
                                                            data-toggle="modal"
                                                            data-target=".show_notice"
                                                            onclick="show_notice(2);return false;"
                                                        >
                                                            Five! Don't go
                                                            splashing paint over
                                                            me like.
                                                        </a>
                                                    </h3>
                                                    <p>
                                                        White Rabbit was still
                                                        in sight, and no more of
                                                        it in a bit.' 'Perhaps
                                                        it hasn't one,' Alice.
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="profile-event">
                                                <div class="date-formats">
                                                    <span>12</span>
                                                    <small>05, 2022</small>
                                                </div>
                                                <div class="overflow-h">
                                                    <h3 class="heading-xs">
                                                        <a
                                                            href=""
                                                            data-toggle="modal"
                                                            data-target=".show_notice"
                                                            onclick="show_notice(1);return false;"
                                                        >
                                                            ME' beautifully
                                                            printed on it in her
                                                            life.
                                                        </a>
                                                    </h3>
                                                    <p>
                                                        Mock Turtle replied,
                                                        counting off the top of
                                                        its voice. 'Back to land
                                                        again, and made another.
                                                    </p>
                                                </div>
                                            </div>

                                            <div
                                                class="ps-scrollbar-x-rail"
                                                style={{
                                                    width: "389px",
                                                    display: "none",
                                                    left: "0px",
                                                    bottom: "3px",
                                                }}
                                            >
                                                <div
                                                    class="ps-scrollbar-x"
                                                    style={{
                                                        left: "0px",
                                                        width: "0px",
                                                    }}
                                                ></div>
                                            </div>
                                            <div
                                                class="ps-scrollbar-y-rail"
                                                style={{
                                                    top: "0px",
                                                    height: "255px",
                                                    display: "inherit",
                                                    right: "3px",
                                                }}
                                            >
                                                <div
                                                    class="ps-scrollbar-y"
                                                    style={{
                                                        top: "0px",
                                                        height: "47px",
                                                    }}
                                                ></div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="panel panel-profile">
                                        <div class="panel-heading overflow-h service-block-u">
                                            <h2 class="panel-title heading-sm pull-left">
                                                <i class="fa fa-send"></i>{" "}
                                                Upcoming Holidays
                                            </h2>
                                        </div>
                                        <div
                                            id="scrollbar3"
                                            class="panel-body contentHolder ps-container"
                                        >
                                            <div class="alert-blocks alert-blocks-info">
                                                <div class="overflow-h">
                                                    <strong class="color-blue">
                                                        Sunday
                                                        <small class="pull-right">
                                                            <em>15 May 2022</em>
                                                        </small>
                                                    </strong>
                                                </div>
                                            </div>

                                            <div class="alert-blocks alert-blocks-error">
                                                <div class="overflow-h">
                                                    <strong class="color-red">
                                                        Sunday
                                                        <small class="pull-right">
                                                            <em>22 May 2022</em>
                                                        </small>
                                                    </strong>
                                                </div>
                                            </div>

                                            <div class="alert-blocks alert-blocks-success">
                                                <div class="overflow-h">
                                                    <strong class="color-green">
                                                        Sunday
                                                        <small class="pull-right">
                                                            <em>29 May 2022</em>
                                                        </small>
                                                    </strong>
                                                </div>
                                            </div>

                                            <div class="alert-blocks alert-blocks-pending">
                                                <div class="overflow-h">
                                                    <strong class="color-yellow">
                                                        Sunday
                                                        <small class="pull-right">
                                                            <em>05 Jun 2022</em>
                                                        </small>
                                                    </strong>
                                                </div>
                                            </div>

                                            <div class="alert-blocks alert-blocks-">
                                                <div class="overflow-h">
                                                    <strong class="color-dark">
                                                        Sunday
                                                        <small class="pull-right">
                                                            <em>12 Jun 2022</em>
                                                        </small>
                                                    </strong>
                                                </div>
                                            </div>

                                            <div class="alert-blocks alert-blocks-info">
                                                <div class="overflow-h">
                                                    <strong class="color-blue">
                                                        Sunday
                                                        <small class="pull-right">
                                                            <em>19 Jun 2022</em>
                                                        </small>
                                                    </strong>
                                                </div>
                                            </div>

                                            <div class="alert-blocks alert-blocks-error">
                                                <div class="overflow-h">
                                                    <strong class="color-red">
                                                        Sunday
                                                        <small class="pull-right">
                                                            <em>26 Jun 2022</em>
                                                        </small>
                                                    </strong>
                                                </div>
                                            </div>

                                            <div class="alert-blocks alert-blocks-success">
                                                <div class="overflow-h">
                                                    <strong class="color-green">
                                                        Sunday
                                                        <small class="pull-right">
                                                            <em>03 Jul 2022</em>
                                                        </small>
                                                    </strong>
                                                </div>
                                            </div>

                                            <div class="alert-blocks alert-blocks-pending">
                                                <div class="overflow-h">
                                                    <strong class="color-yellow">
                                                        Sunday
                                                        <small class="pull-right">
                                                            <em>10 Jul 2022</em>
                                                        </small>
                                                    </strong>
                                                </div>
                                            </div>

                                            <div class="alert-blocks alert-blocks-">
                                                <div class="overflow-h">
                                                    <strong class="color-dark">
                                                        Sunday
                                                        <small class="pull-right">
                                                            <em>17 Jul 2022</em>
                                                        </small>
                                                    </strong>
                                                </div>
                                            </div>

                                            <div class="alert-blocks alert-blocks-info">
                                                <div class="overflow-h">
                                                    <strong class="color-blue">
                                                        Sunday
                                                        <small class="pull-right">
                                                            <em>24 Jul 2022</em>
                                                        </small>
                                                    </strong>
                                                </div>
                                            </div>

                                            <div class="alert-blocks alert-blocks-error">
                                                <div class="overflow-h">
                                                    <strong class="color-red">
                                                        Sunday
                                                        <small class="pull-right">
                                                            <em>31 Jul 2022</em>
                                                        </small>
                                                    </strong>
                                                </div>
                                            </div>

                                            <div class="alert-blocks alert-blocks-success">
                                                <div class="overflow-h">
                                                    <strong class="color-green">
                                                        Sunday
                                                        <small class="pull-right">
                                                            <em>07 Aug 2022</em>
                                                        </small>
                                                    </strong>
                                                </div>
                                            </div>

                                            <div class="alert-blocks alert-blocks-pending">
                                                <div class="overflow-h">
                                                    <strong class="color-yellow">
                                                        Sunday
                                                        <small class="pull-right">
                                                            <em>14 Aug 2022</em>
                                                        </small>
                                                    </strong>
                                                </div>
                                            </div>

                                            <div class="alert-blocks alert-blocks-">
                                                <div class="overflow-h">
                                                    <strong class="color-dark">
                                                        Sunday
                                                        <small class="pull-right">
                                                            <em>21 Aug 2022</em>
                                                        </small>
                                                    </strong>
                                                </div>
                                            </div>

                                            <div class="alert-blocks alert-blocks-info">
                                                <div class="overflow-h">
                                                    <strong class="color-blue">
                                                        Sunday
                                                        <small class="pull-right">
                                                            <em>28 Aug 2022</em>
                                                        </small>
                                                    </strong>
                                                </div>
                                            </div>

                                            <div class="alert-blocks alert-blocks-error">
                                                <div class="overflow-h">
                                                    <strong class="color-red">
                                                        Sunday
                                                        <small class="pull-right">
                                                            <em>04 Sep 2022</em>
                                                        </small>
                                                    </strong>
                                                </div>
                                            </div>

                                            <div class="alert-blocks alert-blocks-success">
                                                <div class="overflow-h">
                                                    <strong class="color-green">
                                                        Sunday
                                                        <small class="pull-right">
                                                            <em>11 Sep 2022</em>
                                                        </small>
                                                    </strong>
                                                </div>
                                            </div>

                                            <div class="alert-blocks alert-blocks-pending">
                                                <div class="overflow-h">
                                                    <strong class="color-yellow">
                                                        Sunday
                                                        <small class="pull-right">
                                                            <em>18 Sep 2022</em>
                                                        </small>
                                                    </strong>
                                                </div>
                                            </div>

                                            <div class="alert-blocks alert-blocks-">
                                                <div class="overflow-h">
                                                    <strong class="color-dark">
                                                        Sunday
                                                        <small class="pull-right">
                                                            <em>25 Sep 2022</em>
                                                        </small>
                                                    </strong>
                                                </div>
                                            </div>

                                            <div class="alert-blocks alert-blocks-info">
                                                <div class="overflow-h">
                                                    <strong class="color-blue">
                                                        Sunday
                                                        <small class="pull-right">
                                                            <em>02 Oct 2022</em>
                                                        </small>
                                                    </strong>
                                                </div>
                                            </div>

                                            <div class="alert-blocks alert-blocks-error">
                                                <div class="overflow-h">
                                                    <strong class="color-red">
                                                        Sunday
                                                        <small class="pull-right">
                                                            <em>09 Oct 2022</em>
                                                        </small>
                                                    </strong>
                                                </div>
                                            </div>

                                            <div class="alert-blocks alert-blocks-success">
                                                <div class="overflow-h">
                                                    <strong class="color-green">
                                                        Sunday
                                                        <small class="pull-right">
                                                            <em>16 Oct 2022</em>
                                                        </small>
                                                    </strong>
                                                </div>
                                            </div>

                                            <div class="alert-blocks alert-blocks-pending">
                                                <div class="overflow-h">
                                                    <strong class="color-yellow">
                                                        Sunday
                                                        <small class="pull-right">
                                                            <em>23 Oct 2022</em>
                                                        </small>
                                                    </strong>
                                                </div>
                                            </div>

                                            <div class="alert-blocks alert-blocks-">
                                                <div class="overflow-h">
                                                    <strong class="color-dark">
                                                        Sunday
                                                        <small class="pull-right">
                                                            <em>30 Oct 2022</em>
                                                        </small>
                                                    </strong>
                                                </div>
                                            </div>

                                            <div class="alert-blocks alert-blocks-info">
                                                <div class="overflow-h">
                                                    <strong class="color-blue">
                                                        Sunday
                                                        <small class="pull-right">
                                                            <em>06 Nov 2022</em>
                                                        </small>
                                                    </strong>
                                                </div>
                                            </div>

                                            <div class="alert-blocks alert-blocks-error">
                                                <div class="overflow-h">
                                                    <strong class="color-red">
                                                        Sunday
                                                        <small class="pull-right">
                                                            <em>13 Nov 2022</em>
                                                        </small>
                                                    </strong>
                                                </div>
                                            </div>

                                            <div class="alert-blocks alert-blocks-success">
                                                <div class="overflow-h">
                                                    <strong class="color-green">
                                                        Sunday
                                                        <small class="pull-right">
                                                            <em>20 Nov 2022</em>
                                                        </small>
                                                    </strong>
                                                </div>
                                            </div>

                                            <div class="alert-blocks alert-blocks-pending">
                                                <div class="overflow-h">
                                                    <strong class="color-yellow">
                                                        Sunday
                                                        <small class="pull-right">
                                                            <em>27 Nov 2022</em>
                                                        </small>
                                                    </strong>
                                                </div>
                                            </div>

                                            <div class="alert-blocks alert-blocks-">
                                                <div class="overflow-h">
                                                    <strong class="color-dark">
                                                        Sunday
                                                        <small class="pull-right">
                                                            <em>04 Dec 2022</em>
                                                        </small>
                                                    </strong>
                                                </div>
                                            </div>

                                            <div class="alert-blocks alert-blocks-info">
                                                <div class="overflow-h">
                                                    <strong class="color-blue">
                                                        Sunday
                                                        <small class="pull-right">
                                                            <em>11 Dec 2022</em>
                                                        </small>
                                                    </strong>
                                                </div>
                                            </div>

                                            <div class="alert-blocks alert-blocks-error">
                                                <div class="overflow-h">
                                                    <strong class="color-red">
                                                        Sunday
                                                        <small class="pull-right">
                                                            <em>18 Dec 2022</em>
                                                        </small>
                                                    </strong>
                                                </div>
                                            </div>

                                            <div class="alert-blocks alert-blocks-success">
                                                <div class="overflow-h">
                                                    <strong class="color-green">
                                                        Sunday
                                                        <small class="pull-right">
                                                            <em>25 Dec 2022</em>
                                                        </small>
                                                    </strong>
                                                </div>
                                            </div>

                                            <div
                                                class="ps-scrollbar-x-rail"
                                                style={{
                                                    width: "389px",
                                                    display: "none",
                                                    left: "0px",
                                                    bottom: "3px",
                                                }}
                                            >
                                                <div
                                                    class="ps-scrollbar-x"
                                                    style={{
                                                        left: "0px",
                                                        width: "0px",
                                                    }}
                                                ></div>
                                            </div>
                                            <div
                                                class="ps-scrollbar-y-rail"
                                                style={{
                                                    top: "0px",
                                                    height: "255px",
                                                    display: "inherit",
                                                    right: "3px",
                                                }}
                                            >
                                                <div
                                                    class="ps-scrollbar-y"
                                                    style={{
                                                        top: "0px",
                                                        height: "40px",
                                                    }}
                                                ></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="panel panel-profile margin-top-20">
                                        <div class="panel-heading overflow-h service-block-u">
                                            <h2 class="panel-title heading-sm pull-left">
                                                <i class="fa fa-trophy"></i>{" "}
                                                Awards
                                            </h2>
                                        </div>
                                        <div
                                            id="scrollbar3"
                                            class="panel-body contentHolder ps-container"
                                        >
                                            <p
                                                class="text-center"
                                                style={{
                                                    padding: "4px",
                                                    marginTop: "26%",
                                                }}
                                            >
                                                No Award
                                            </p>

                                            <div
                                                class="ps-scrollbar-x-rail"
                                                style={{
                                                    width: "389px",
                                                    display: "none",
                                                    left: "0px",
                                                    bottom: "3px",
                                                }}
                                            >
                                                <div
                                                    class="ps-scrollbar-x"
                                                    style={{
                                                        left: "0px",
                                                        width: "0px",
                                                    }}
                                                ></div>
                                            </div>
                                            <div
                                                class="ps-scrollbar-y-rail"
                                                style={{
                                                    top: "0px",
                                                    height: "255px",
                                                    display: "none",
                                                    right: "3px",
                                                }}
                                            >
                                                <div
                                                    class="ps-scrollbar-y"
                                                    style={{
                                                        top: "0px",
                                                        height: "0px",
                                                    }}
                                                ></div>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                            </div>

                            <hr />

                            {/* <div class="panel panel-profile">
                                <div class="panel-heading overflow-h service-block-u">
                                    <h2 class="panel-title heading-sm pull-left">
                                        <i class="fa fa-tasks"></i>Attendance
                                    </h2>
                                </div>
                                <div class="panel-body panelHolder">
                                    <div class="alert-blocks alert-blocks-info">
                                        <div class="overflow-h">
                                            <strong class="color-dark">
                                                Last Absent
                                                <small class="pull-right">
                                                    <em>
                                                        <span class="label label-danger">
                                                            Never
                                                        </span>
                                                    </em>
                                                </small>
                                            </strong>
                                            <small class="award-name">
                                                <span class="label label-danger">
                                                    Never
                                                </span>
                                            </small>
                                        </div>
                                    </div>

                                    <div
                                        id="calendar"
                                        class="fc fc-ltr fc-unthemed"
                                    >
                                         */}
                            {/* <div class="fc-toolbar">
                                            <div class="fc-left">
                                                <h2>May 2022</h2>
                                            </div>
                                            <div class="fc-right">
                                                <button
                                                    type="button"
                                                    class="fc-today-button fc-button fc-state-default fc-corner-left fc-corner-right fc-state-disabled"
                                                    disabled="disabled"
                                                >
                                                    today
                                                </button>
                                                <div class="fc-button-group">
                                                    <button
                                                        type="button"
                                                        class="fc-prev-button fc-button fc-state-default fc-corner-left"
                                                    >
                                                        <span class="fc-icon fc-icon-left-single-arrow"></span>
                                                    </button>
                                                    <button
                                                        type="button"
                                                        class="fc-next-button fc-button fc-state-default fc-corner-right"
                                                    >
                                                        <span class="fc-icon fc-icon-right-single-arrow"></span>
                                                    </button>
                                                </div>
                                            </div>
                                            <div class="fc-center"></div>
                                            <div class="fc-clear"></div>
                                        </div> */}
                            {/* <div class="fc-view-container" >
                                            <div
                                                class="fc-view fc-month-view fc-basic-view"
                                                
                                            >
                                                <table>
                                                    <thead>
                                                        <tr>
                                                            <td class="fc-widget-header">
                                                                <div class="fc-row fc-widget-header">
                                                                    <table>
                                                                        <thead>
                                                                            <tr>
                                                                                <th class="fc-day-header fc-widget-header fc-sun">
                                                                                    Sun
                                                                                </th>
                                                                                <th class="fc-day-header fc-widget-header fc-mon">
                                                                                    Mon
                                                                                </th>
                                                                                <th class="fc-day-header fc-widget-header fc-tue">
                                                                                    Tue
                                                                                </th>
                                                                                <th class="fc-day-header fc-widget-header fc-wed">
                                                                                    Wed
                                                                                </th>
                                                                                <th class="fc-day-header fc-widget-header fc-thu">
                                                                                    Thu
                                                                                </th>
                                                                                <th class="fc-day-header fc-widget-header fc-fri">
                                                                                    Fri
                                                                                </th>
                                                                                <th class="fc-day-header fc-widget-header fc-sat">
                                                                                    Sat
                                                                                </th>
                                                                            </tr>
                                                                        </thead>
                                                                    </table>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td class="fc-widget-content">
                                                                <div
                                                                    class="fc-day-grid-container"
                                                            
                                                                >
                                                                    <div class="fc-day-grid">
                                                                        <div
                                                                            class="fc-row fc-week fc-widget-content fc-rigid"
                                                                            style={{height: "92px"}}
                                                                        >
                                                                            <div class="fc-bg">
                                                                                <table>
                                                                                    <tbody>
                                                                                        <tr>
                                                                                            <td
                                                                                                class="fc-day fc-widget-content fc-sun fc-past"
                                                                                                data-date="2022-05-01"
                                                                                                style={{background: "rgb(255, 224, 205)"}}
                                                                                            ></td>
                                                                                            <td
                                                                                                class="fc-day fc-widget-content fc-mon fc-past"
                                                                                                data-date="2022-05-02"
                                                                                            ></td>
                                                                                            <td
                                                                                                class="fc-day fc-widget-content fc-tue fc-past"
                                                                                                data-date="2022-05-03"
                                                                                            ></td>
                                                                                            <td
                                                                                                class="fc-day fc-widget-content fc-wed fc-past"
                                                                                                data-date="2022-05-04"
                                                                                            ></td>
                                                                                            <td
                                                                                                class="fc-day fc-widget-content fc-thu fc-past"
                                                                                                data-date="2022-05-05"
                                                                                            ></td>
                                                                                            <td
                                                                                                class="fc-day fc-widget-content fc-fri fc-past"
                                                                                                data-date="2022-05-06"
                                                                                            ></td>
                                                                                            <td
                                                                                                class="fc-day fc-widget-content fc-sat fc-past"
                                                                                                data-date="2022-05-07"
                                                                                            ></td>
                                                                                        </tr>
                                                                                    </tbody>
                                                                                </table>
                                                                            </div>
                                                                            <div class="fc-content-skeleton">
                                                                                <table>
                                                                                    <thead>
                                                                                        <tr>
                                                                                            <td
                                                                                                class="fc-day-number fc-sun fc-past"
                                                                                                data-date="2022-05-01"
                                                                                            >
                                                                                                1
                                                                                            </td>
                                                                                            <td
                                                                                                class="fc-day-number fc-mon fc-past"
                                                                                                data-date="2022-05-02"
                                                                                            >
                                                                                                2
                                                                                            </td>
                                                                                            <td
                                                                                                class="fc-day-number fc-tue fc-past"
                                                                                                data-date="2022-05-03"
                                                                                            >
                                                                                                3
                                                                                            </td>
                                                                                            <td
                                                                                                class="fc-day-number fc-wed fc-past"
                                                                                                data-date="2022-05-04"
                                                                                            >
                                                                                                4
                                                                                            </td>
                                                                                            <td
                                                                                                class="fc-day-number fc-thu fc-past"
                                                                                                data-date="2022-05-05"
                                                                                            >
                                                                                                5
                                                                                            </td>
                                                                                            <td
                                                                                                class="fc-day-number fc-fri fc-past"
                                                                                                data-date="2022-05-06"
                                                                                            >
                                                                                                6
                                                                                            </td>
                                                                                            <td
                                                                                                class="fc-day-number fc-sat fc-past"
                                                                                                data-date="2022-05-07"
                                                                                            >
                                                                                                7
                                                                                            </td>
                                                                                        </tr>
                                                                                    </thead>
                                                                                    <tbody>
                                                                                        <tr>
                                                                                            <td class="fc-event-container">
                                                                                                <a
                                                                                                    class="fc-day-grid-event fc-event fc-start fc-end holiday"
                                                                                                    style={{backgroundColor:"grey",borderColor:'grey"}}
                                                                                                >
                                                                                                    <div class="fc-content">
                                                                                                        {" "}
                                                                                                        <span class="fc-title">
                                                                                                            Sunday
                                                                                                        </span>
                                                                                                    </div>
                                                                                                </a>
                                                                                            </td>
                                                                                            <td></td>
                                                                                            <td></td>
                                                                                            <td></td>
                                                                                            <td></td>
                                                                                            <td></td>
                                                                                            <td></td>
                                                                                        </tr>
                                                                                    </tbody>
                                                                                </table>
                                                                            </div>
                                                                        </div>
                                                                        <div
                                                                            class="fc-row fc-week fc-widget-content fc-rigid"
                                                                            style={{height: "92px"}}
                                                                        >
                                                                            <div class="fc-bg">
                                                                                <table>
                                                                                    <tbody>
                                                                                        <tr>
                                                                                            <td
                                                                                                class="fc-day fc-widget-content fc-sun fc-past"
                                                                                                data-date="2022-05-08"
                                                                                                style={{background: "rgb(255, 224, 205)"}}
                                                                                            ></td>
                                                                                            <td
                                                                                                class="fc-day fc-widget-content fc-mon fc-past"
                                                                                                data-date="2022-05-09"
                                                                                            ></td>
                                                                                            <td
                                                                                                class="fc-day fc-widget-content fc-tue fc-past"
                                                                                                data-date="2022-05-10"
                                                                                            ></td>
                                                                                            <td
                                                                                                class="fc-day fc-widget-content fc-wed fc-past"
                                                                                                data-date="2022-05-11"
                                                                                            ></td>
                                                                                            <td
                                                                                                class="fc-day fc-widget-content fc-thu fc-today fc-state-highlight"
                                                                                                data-date="2022-05-12"
                                                                                            ></td>
                                                                                            <td
                                                                                                class="fc-day fc-widget-content fc-fri fc-future"
                                                                                                data-date="2022-05-13"
                                                                                            ></td>
                                                                                            <td
                                                                                                class="fc-day fc-widget-content fc-sat fc-future"
                                                                                                data-date="2022-05-14"
                                                                                            ></td>
                                                                                        </tr>
                                                                                    </tbody>
                                                                                </table>
                                                                            </div>
                                                                            <div class="fc-content-skeleton">
                                                                                <table>
                                                                                    <thead>
                                                                                        <tr>
                                                                                            <td
                                                                                                class="fc-day-number fc-sun fc-past"
                                                                                                data-date="2022-05-08"
                                                                                            >
                                                                                                8
                                                                                            </td>
                                                                                            <td
                                                                                                class="fc-day-number fc-mon fc-past"
                                                                                                data-date="2022-05-09"
                                                                                            >
                                                                                                9
                                                                                            </td>
                                                                                            <td
                                                                                                class="fc-day-number fc-tue fc-past"
                                                                                                data-date="2022-05-10"
                                                                                            >
                                                                                                10
                                                                                            </td>
                                                                                            <td
                                                                                                class="fc-day-number fc-wed fc-past"
                                                                                                data-date="2022-05-11"
                                                                                            >
                                                                                                11
                                                                                            </td>
                                                                                            <td
                                                                                                class="fc-day-number fc-thu fc-today fc-state-highlight"
                                                                                                data-date="2022-05-12"
                                                                                            >
                                                                                                12
                                                                                            </td>
                                                                                            <td
                                                                                                class="fc-day-number fc-fri fc-future"
                                                                                                data-date="2022-05-13"
                                                                                            >
                                                                                                13
                                                                                            </td>
                                                                                            <td
                                                                                                class="fc-day-number fc-sat fc-future"
                                                                                                data-date="2022-05-14"
                                                                                            >
                                                                                                14
                                                                                            </td>
                                                                                        </tr>
                                                                                    </thead>
                                                                                    <tbody>
                                                                                        <tr>
                                                                                            <td class="fc-event-container">
                                                                                                <a
                                                                                                    class="fc-day-grid-event fc-event fc-start fc-end holiday"
                                                                                                    style={{backgroundColor:"grey",borderColor:'grey"}}
                                                                                                >
                                                                                                    <div class="fc-content">
                                                                                                        {" "}
                                                                                                        <span class="fc-title">
                                                                                                            Sunday
                                                                                                        </span>
                                                                                                    </div>
                                                                                                </a>
                                                                                            </td>
                                                                                            <td></td>
                                                                                            <td></td>
                                                                                            <td></td>
                                                                                            <td></td>
                                                                                            <td></td>
                                                                                            <td></td>
                                                                                        </tr>
                                                                                    </tbody>
                                                                                </table>
                                                                            </div>
                                                                        </div>
                                                                        <div
                                                                            class="fc-row fc-week fc-widget-content fc-rigid"
                                                                            style={{height: "92px"}}
                                                                        >
                                                                            <div class="fc-bg">
                                                                                <table>
                                                                                    <tbody>
                                                                                        <tr>
                                                                                            <td
                                                                                                class="fc-day fc-widget-content fc-sun fc-future"
                                                                                                data-date="2022-05-15"
                                                                                                style={{"background: rgb(255, 224, 205);"}}
                                                                                            ></td>
                                                                                            <td
                                                                                                class="fc-day fc-widget-content fc-mon fc-future"
                                                                                                data-date="2022-05-16"
                                                                                            ></td>
                                                                                            <td
                                                                                                class="fc-day fc-widget-content fc-tue fc-future"
                                                                                                data-date="2022-05-17"
                                                                                            ></td>
                                                                                            <td
                                                                                                class="fc-day fc-widget-content fc-wed fc-future"
                                                                                                data-date="2022-05-18"
                                                                                            ></td>
                                                                                            <td
                                                                                                class="fc-day fc-widget-content fc-thu fc-future"
                                                                                                data-date="2022-05-19"
                                                                                            ></td>
                                                                                            <td
                                                                                                class="fc-day fc-widget-content fc-fri fc-future"
                                                                                                data-date="2022-05-20"
                                                                                            ></td>
                                                                                            <td
                                                                                                class="fc-day fc-widget-content fc-sat fc-future"
                                                                                                data-date="2022-05-21"
                                                                                            ></td>
                                                                                        </tr>
                                                                                    </tbody>
                                                                                </table>
                                                                            </div>
                                                                            <div class="fc-content-skeleton">
                                                                                <table>
                                                                                    <thead>
                                                                                        <tr>
                                                                                            <td
                                                                                                class="fc-day-number fc-sun fc-future"
                                                                                                data-date="2022-05-15"
                                                                                            >
                                                                                                15
                                                                                            </td>
                                                                                            <td
                                                                                                class="fc-day-number fc-mon fc-future"
                                                                                                data-date="2022-05-16"
                                                                                            >
                                                                                                16
                                                                                            </td>
                                                                                            <td
                                                                                                class="fc-day-number fc-tue fc-future"
                                                                                                data-date="2022-05-17"
                                                                                            >
                                                                                                17
                                                                                            </td>
                                                                                            <td
                                                                                                class="fc-day-number fc-wed fc-future"
                                                                                                data-date="2022-05-18"
                                                                                            >
                                                                                                18
                                                                                            </td>
                                                                                            <td
                                                                                                class="fc-day-number fc-thu fc-future"
                                                                                                data-date="2022-05-19"
                                                                                            >
                                                                                                19
                                                                                            </td>
                                                                                            <td
                                                                                                class="fc-day-number fc-fri fc-future"
                                                                                                data-date="2022-05-20"
                                                                                            >
                                                                                                20
                                                                                            </td>
                                                                                            <td
                                                                                                class="fc-day-number fc-sat fc-future"
                                                                                                data-date="2022-05-21"
                                                                                            >
                                                                                                21
                                                                                            </td>
                                                                                        </tr>
                                                                                    </thead>
                                                                                    <tbody>
                                                                                        <tr>
                                                                                            <td class="fc-event-container">
                                                                                                <a
                                                                                                    class="fc-day-grid-event fc-event fc-start fc-end holiday"
                                                                                                    style="background-color:grey;border-color:grey"
                                                                                                >
                                                                                                    <div class="fc-content">
                                                                                                        {" "}
                                                                                                        <span class="fc-title">
                                                                                                            Sunday
                                                                                                        </span>
                                                                                                    </div>
                                                                                                </a>
                                                                                            </td>
                                                                                            <td></td>
                                                                                            <td></td>
                                                                                            <td></td>
                                                                                            <td></td>
                                                                                            <td></td>
                                                                                            <td></td>
                                                                                        </tr>
                                                                                    </tbody>
                                                                                </table>
                                                                            </div>
                                                                        </div>
                                                                        <div
                                                                            class="fc-row fc-week fc-widget-content fc-rigid"
                                                                            style="height: 92px;"
                                                                        >
                                                                            <div class="fc-bg">
                                                                                <table>
                                                                                    <tbody>
                                                                                        <tr>
                                                                                            <td
                                                                                                class="fc-day fc-widget-content fc-sun fc-future"
                                                                                                data-date="2022-05-22"
                                                                                                style="background: rgb(255, 224, 205);"
                                                                                            ></td>
                                                                                            <td
                                                                                                class="fc-day fc-widget-content fc-mon fc-future"
                                                                                                data-date="2022-05-23"
                                                                                            ></td>
                                                                                            <td
                                                                                                class="fc-day fc-widget-content fc-tue fc-future"
                                                                                                data-date="2022-05-24"
                                                                                            ></td>
                                                                                            <td
                                                                                                class="fc-day fc-widget-content fc-wed fc-future"
                                                                                                data-date="2022-05-25"
                                                                                            ></td>
                                                                                            <td
                                                                                                class="fc-day fc-widget-content fc-thu fc-future"
                                                                                                data-date="2022-05-26"
                                                                                            ></td>
                                                                                            <td
                                                                                                class="fc-day fc-widget-content fc-fri fc-future"
                                                                                                data-date="2022-05-27"
                                                                                            ></td>
                                                                                            <td
                                                                                                class="fc-day fc-widget-content fc-sat fc-future"
                                                                                                data-date="2022-05-28"
                                                                                            ></td>
                                                                                        </tr>
                                                                                    </tbody>
                                                                                </table>
                                                                            </div>
                                                                            <div class="fc-content-skeleton">
                                                                                <table>
                                                                                    <thead>
                                                                                        <tr>
                                                                                            <td
                                                                                                class="fc-day-number fc-sun fc-future"
                                                                                                data-date="2022-05-22"
                                                                                            >
                                                                                                22
                                                                                            </td>
                                                                                            <td
                                                                                                class="fc-day-number fc-mon fc-future"
                                                                                                data-date="2022-05-23"
                                                                                            >
                                                                                                23
                                                                                            </td>
                                                                                            <td
                                                                                                class="fc-day-number fc-tue fc-future"
                                                                                                data-date="2022-05-24"
                                                                                            >
                                                                                                24
                                                                                            </td>
                                                                                            <td
                                                                                                class="fc-day-number fc-wed fc-future"
                                                                                                data-date="2022-05-25"
                                                                                            >
                                                                                                25
                                                                                            </td>
                                                                                            <td
                                                                                                class="fc-day-number fc-thu fc-future"
                                                                                                data-date="2022-05-26"
                                                                                            >
                                                                                                26
                                                                                            </td>
                                                                                            <td
                                                                                                class="fc-day-number fc-fri fc-future"
                                                                                                data-date="2022-05-27"
                                                                                            >
                                                                                                27
                                                                                            </td>
                                                                                            <td
                                                                                                class="fc-day-number fc-sat fc-future"
                                                                                                data-date="2022-05-28"
                                                                                            >
                                                                                                28
                                                                                            </td>
                                                                                        </tr>
                                                                                    </thead>
                                                                                    <tbody>
                                                                                        <tr>
                                                                                            <td class="fc-event-container">
                                                                                                <a
                                                                                                    class="fc-day-grid-event fc-event fc-start fc-end holiday"
                                                                                                    style="background-color:grey;border-color:grey"
                                                                                                >
                                                                                                    <div class="fc-content">
                                                                                                        {" "}
                                                                                                        <span class="fc-title">
                                                                                                            Sunday
                                                                                                        </span>
                                                                                                    </div>
                                                                                                </a>
                                                                                            </td>
                                                                                            <td></td>
                                                                                            <td></td>
                                                                                            <td></td>
                                                                                            <td></td>
                                                                                            <td></td>
                                                                                            <td></td>
                                                                                        </tr>
                                                                                    </tbody>
                                                                                </table>
                                                                            </div>
                                                                        </div>
                                                                        <div
                                                                            class="fc-row fc-week fc-widget-content fc-rigid"
                                                                            style="height: 92px;"
                                                                        >
                                                                            <div class="fc-bg">
                                                                                <table>
                                                                                    <tbody>
                                                                                        <tr>
                                                                                            <td
                                                                                                class="fc-day fc-widget-content fc-sun fc-future"
                                                                                                data-date="2022-05-29"
                                                                                                style="background: rgb(255, 224, 205);"
                                                                                            ></td>
                                                                                            <td
                                                                                                class="fc-day fc-widget-content fc-mon fc-future"
                                                                                                data-date="2022-05-30"
                                                                                            ></td>
                                                                                            <td
                                                                                                class="fc-day fc-widget-content fc-tue fc-future"
                                                                                                data-date="2022-05-31"
                                                                                            ></td>
                                                                                            <td
                                                                                                class="fc-day fc-widget-content fc-wed fc-other-month fc-future"
                                                                                                data-date="2022-06-01"
                                                                                            ></td>
                                                                                            <td
                                                                                                class="fc-day fc-widget-content fc-thu fc-other-month fc-future"
                                                                                                data-date="2022-06-02"
                                                                                            ></td>
                                                                                            <td
                                                                                                class="fc-day fc-widget-content fc-fri fc-other-month fc-future"
                                                                                                data-date="2022-06-03"
                                                                                            ></td>
                                                                                            <td
                                                                                                class="fc-day fc-widget-content fc-sat fc-other-month fc-future"
                                                                                                data-date="2022-06-04"
                                                                                            ></td>
                                                                                        </tr>
                                                                                    </tbody>
                                                                                </table>
                                                                            </div>
                                                                            <div class="fc-content-skeleton">
                                                                                <table>
                                                                                    <thead>
                                                                                        <tr>
                                                                                            <td
                                                                                                class="fc-day-number fc-sun fc-future"
                                                                                                data-date="2022-05-29"
                                                                                            >
                                                                                                29
                                                                                            </td>
                                                                                            <td
                                                                                                class="fc-day-number fc-mon fc-future"
                                                                                                data-date="2022-05-30"
                                                                                            >
                                                                                                30
                                                                                            </td>
                                                                                            <td
                                                                                                class="fc-day-number fc-tue fc-future"
                                                                                                data-date="2022-05-31"
                                                                                            >
                                                                                                31
                                                                                            </td>
                                                                                            <td
                                                                                                class="fc-day-number fc-wed fc-other-month fc-future"
                                                                                                data-date="2022-06-01"
                                                                                            >
                                                                                                1
                                                                                            </td>
                                                                                            <td
                                                                                                class="fc-day-number fc-thu fc-other-month fc-future"
                                                                                                data-date="2022-06-02"
                                                                                            >
                                                                                                2
                                                                                            </td>
                                                                                            <td
                                                                                                class="fc-day-number fc-fri fc-other-month fc-future"
                                                                                                data-date="2022-06-03"
                                                                                            >
                                                                                                3
                                                                                            </td>
                                                                                            <td
                                                                                                class="fc-day-number fc-sat fc-other-month fc-future"
                                                                                                data-date="2022-06-04"
                                                                                            >
                                                                                                4
                                                                                            </td>
                                                                                        </tr>
                                                                                    </thead>
                                                                                    <tbody>
                                                                                        <tr>
                                                                                            <td class="fc-event-container">
                                                                                                <a
                                                                                                    class="fc-day-grid-event fc-event fc-start fc-end holiday"
                                                                                                    style="background-color:grey;border-color:grey"
                                                                                                >
                                                                                                    <div class="fc-content">
                                                                                                        {" "}
                                                                                                        <span class="fc-title">
                                                                                                            Sunday
                                                                                                        </span>
                                                                                                    </div>
                                                                                                </a>
                                                                                            </td>
                                                                                            <td></td>
                                                                                            <td></td>
                                                                                            <td></td>
                                                                                            <td></td>
                                                                                            <td></td>
                                                                                            <td></td>
                                                                                        </tr>
                                                                                    </tbody>
                                                                                </table>
                                                                            </div>
                                                                        </div>
                                                                        <div
                                                                            class="fc-row fc-week fc-widget-content fc-rigid"
                                                                            style="height: 92px;"
                                                                        >
                                                                            <div class="fc-bg">
                                                                                <table>
                                                                                    <tbody>
                                                                                        <tr>
                                                                                            <td
                                                                                                class="fc-day fc-widget-content fc-sun fc-other-month fc-future"
                                                                                                data-date="2022-06-05"
                                                                                                style="background: rgb(255, 224, 205);"
                                                                                            ></td>
                                                                                            <td
                                                                                                class="fc-day fc-widget-content fc-mon fc-other-month fc-future"
                                                                                                data-date="2022-06-06"
                                                                                            ></td>
                                                                                            <td
                                                                                                class="fc-day fc-widget-content fc-tue fc-other-month fc-future"
                                                                                                data-date="2022-06-07"
                                                                                            ></td>
                                                                                            <td
                                                                                                class="fc-day fc-widget-content fc-wed fc-other-month fc-future"
                                                                                                data-date="2022-06-08"
                                                                                            ></td>
                                                                                            <td
                                                                                                class="fc-day fc-widget-content fc-thu fc-other-month fc-future"
                                                                                                data-date="2022-06-09"
                                                                                            ></td>
                                                                                            <td
                                                                                                class="fc-day fc-widget-content fc-fri fc-other-month fc-future"
                                                                                                data-date="2022-06-10"
                                                                                            ></td>
                                                                                            <td
                                                                                                class="fc-day fc-widget-content fc-sat fc-other-month fc-future"
                                                                                                data-date="2022-06-11"
                                                                                            ></td>
                                                                                        </tr>
                                                                                    </tbody>
                                                                                </table>
                                                                            </div>
                                                                            <div class="fc-content-skeleton">
                                                                                <table>
                                                                                    <thead>
                                                                                        <tr>
                                                                                            <td
                                                                                                class="fc-day-number fc-sun fc-other-month fc-future"
                                                                                                data-date="2022-06-05"
                                                                                            >
                                                                                                5
                                                                                            </td>
                                                                                            <td
                                                                                                class="fc-day-number fc-mon fc-other-month fc-future"
                                                                                                data-date="2022-06-06"
                                                                                            >
                                                                                                6
                                                                                            </td>
                                                                                            <td
                                                                                                class="fc-day-number fc-tue fc-other-month fc-future"
                                                                                                data-date="2022-06-07"
                                                                                            >
                                                                                                7
                                                                                            </td>
                                                                                            <td
                                                                                                class="fc-day-number fc-wed fc-other-month fc-future"
                                                                                                data-date="2022-06-08"
                                                                                            >
                                                                                                8
                                                                                            </td>
                                                                                            <td
                                                                                                class="fc-day-number fc-thu fc-other-month fc-future"
                                                                                                data-date="2022-06-09"
                                                                                            >
                                                                                                9
                                                                                            </td>
                                                                                            <td
                                                                                                class="fc-day-number fc-fri fc-other-month fc-future"
                                                                                                data-date="2022-06-10"
                                                                                            >
                                                                                                10
                                                                                            </td>
                                                                                            <td
                                                                                                class="fc-day-number fc-sat fc-other-month fc-future"
                                                                                                data-date="2022-06-11"
                                                                                            >
                                                                                                11
                                                                                            </td>
                                                                                        </tr>
                                                                                    </thead>
                                                                                    <tbody>
                                                                                        <tr>
                                                                                            <td class="fc-event-container">
                                                                                                <a
                                                                                                    class="fc-day-grid-event fc-event fc-start fc-end holiday"
                                                                                                    style="background-color:grey;border-color:grey"
                                                                                                >
                                                                                                    <div class="fc-content">
                                                                                                        {" "}
                                                                                                        <span class="fc-title">
                                                                                                            Sunday
                                                                                                        </span>
                                                                                                    </div>
                                                                                                </a>
                                                                                            </td>
                                                                                            <td></td>
                                                                                            <td></td>
                                                                                            <td></td>
                                                                                            <td></td>
                                                                                            <td></td>
                                                                                            <td></td>
                                                                                        </tr>
                                                                                    </tbody>
                                                                                </table>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div> */}
                            {/* </div> */}
                            {/* </div> */}
                            {/* </div> */}
                        </div>
                    </div>

                    <div
                        class="modal fade show_notice in"
                        tabindex="-1"
                        role="dialog"
                        aria-labelledby="myModalLabel"
                        aria-hidden="true"
                    >
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <button
                                        aria-hidden="true"
                                        data-dismiss="modal"
                                        class="close"
                                        type="button"
                                    >
                                        ×
                                    </button>
                                    <h4
                                        id="myLargeModalLabel"
                                        class="modal-title show-notice-title"
                                    ></h4>
                                </div>
                                <div
                                    class="modal-body"
                                    id="show-notice-body"
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardE;
