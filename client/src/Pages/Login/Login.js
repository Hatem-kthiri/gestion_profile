import React, { useState } from "react";
import { employee_login } from "../../redux/actions/user";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
const Login = () => {
    const handleEmployee = () => {
        var Manager = document.getElementById("Manager");
        var Employee = document.getElementById("Employee");
        var manager = document.getElementById("manager");
        var employee = document.getElementById("employee");

        Manager.classList.remove("active");
        Employee.classList.add("active");
        manager.classList.remove("active");
        employee.classList.add("active");
    };
    const handleManager = () => {
        var manager = document.getElementById("Manager");
        var employee = document.getElementById("Employee");
        var Manager = document.getElementById("manager");
        var Employee = document.getElementById("employee");
        Manager.classList.add("active");
        Employee.classList.remove("active");
        manager.classList.add("active");
        employee.classList.remove("active");
    };
    const [login, setLogin] = useState({});
    const dispatch = useDispatch();
    const history = useHistory();
    const handleChange = (e) => {
        setLogin({ ...login, [e.target.name]: e.target.value });
    };
    const handleSubmit = () => {
        dispatch(employee_login(login, history));
    };
    return (
        <div class="container">
            <div class="reg-block">
                <div class="reg-block-header">
                    <h2>
                        <img
                            src="https://cdn.pixabay.com/photo/2020/07/14/13/07/icon-5404125_640.png"
                            height="80px"
                        />
                    </h2>
                    {/* <div id="iframe" style={{ display: "none" }}>
                        <div class="alert alert-danger">
                            Please Click on cross icon at top right corner to
                            work this application efficiently
                        </div>
                    </div> */}
                </div>
                <div class="tab-v2">
                    <ul class="nav nav-tabs">
                        <li class="" id="Employee" onClick={handleEmployee}>
                            <a>
                                <i
                                    class="fa fa-user"
                                    style={{ paddingRight: "10px" }}
                                ></i>
                                Employee
                            </a>
                        </li>
                        <li class="active" id="Manager" onClick={handleManager}>
                            <a>
                                <i
                                    class="fa fa-lock"
                                    style={{ paddingRight: "10px" }}
                                ></i>
                                Manager
                            </a>
                        </li>
                    </ul>
                    <div class="tab-content">
                        <div class="tab-pane fade active in" id="employee">
                            <div id="login-form" class="login-form">
                                <input name="_token" type="hidden" />
                                <div class="form-group rem margin-bottom-20">
                                    <div>
                                        <div class="input-group">
                                            <span class="input-group-addon">
                                                <i class="fa fa-envelope"></i>
                                            </span>
                                            <input
                                                type="email"
                                                class="form-control"
                                                name="email"
                                                placeholder="Email"
                                                required
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div class="form-group rem margin-bottom-20">
                                    <div>
                                        <div class="input-group">
                                            <span class="input-group-addon">
                                                <i class="fa fa-lock"></i>
                                            </span>
                                            <input
                                                type="password"
                                                class="form-control"
                                                name="password"
                                                onChange={handleChange}
                                                placeholder="Password"
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* <label
                                    style={{ fontWeight: "normal" }}
                                    class="margin-bottom-20 rem"
                                >
                                    <input type="checkbox" name="remember" />
                                    Always stay signed in
                                </label> */}

                                <div class="row">
                                    <div class="col-md-10 col-md-offset-1">
                                        <button
                                            type="submit"
                                            class="btn-u btn-block input-group"
                                            id="submitbutton"
                                            onClick={handleSubmit}
                                        >
                                            Login
                                        </button>
                                    </div>
                                </div>

                                <hr />
                                <div class="forget-password">
                                    <h4>Forgot your password?</h4>

                                    <p>
                                        no worries, click{" "}
                                        <a
                                            style={{ color: "#F44336" }}
                                            id="forget-password"
                                        >
                                            here{" "}
                                        </a>
                                        front To Reset Your Password
                                    </p>
                                </div>
                            </div>

                            {/* <form
                                 
                                class="forget-form"
                                style={{ display: "none" }}
                            >
                                <input name="_token" type="hidden" />
                                <h3>Forgot your password?</h3>

                                <p>
                                    Enter your e-mail address below to reset
                                    your password.
                                </p>

                                <div id="alert_forget"></div>
                                <div class="form-group">
                                    <div>
                                        <div class="input-group ">
                                            <span class="input-group-addon">
                                                <i class="fa fa-envelope"></i>
                                            </span>
                                            <input
                                                type="email"
                                                class="form-control"
                                                name="email"
                                                placeholder="Email"
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div class="form-actions rem">
                                    <button
                                        type="button"
                                        id="back-btn"
                                        class="btn"
                                    >
                                        <i class="m-icon-swapleft"></i> Back
                                    </button>
                                    <button
                                        type="submit"
                                        class="btn-u blue pull-right"
                                        id="submitbutton_forget"
                                    >
                                        Submit{" "}
                                        <i class="m-icon-swapright m-icon-white"></i>
                                    </button>
                                </div>
                            </form>
                            <div class="form-actions rem">
                                <h3 class="box-title">Demo account login by</h3>
                                <table
                                    class="table table-bordered"
                                    style={{ fontSize: "10px" }}
                                >
                                    <thead>
                                        <tr>
                                            <th>Account</th>
                                            <th>Email</th>
                                            <th>Password</th>
                                            <th>#</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Employee</td>
                                            <td>employee@example.com</td>
                                            <td>123456</td>
                                            <td>
                                                <a
                                                    href="javascript:;"
                                                    data-email="employee@example.com"
                                                    data-password="123456"
                                                    class="text-muted copy-login"
                                                >
                                                    <i class="fa fa-clipboard"></i>
                                                </a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div> */}
                        </div>

                        <div class="tab-pane fade in" id="manager">
                            <form
                                class="login-form-admin"
                                id="login-form-admin"
                            >
                                <input name="_token" type="hidden" />
                                <div class="form-group rem margin-bottom-20">
                                    <div>
                                        <div class="input-group">
                                            <span class="input-group-addon">
                                                <i class="fa fa-envelope"></i>
                                            </span>
                                            <input
                                                type="email"
                                                class="form-control"
                                                name="email"
                                                id="email"
                                                placeholder="Email"
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group rem margin-bottom-20">
                                    <div>
                                        <div class="input-group">
                                            <span class="input-group-addon">
                                                <i class="fa fa-lock"></i>
                                            </span>
                                            <input
                                                type="password"
                                                class="form-control"
                                                name="password"
                                                id="password"
                                                placeholder="Password"
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* <label
                                    style={{ fontWeight: "normal" }}
                                    class="margin-bottom-20"
                                >
                                    <input type="checkbox" name="remember" />{" "}
                                    Always stay signed in
                                </label> */}

                                <div class="row">
                                    <div class="col-md-10 col-md-offset-1">
                                        <button
                                            type="submit"
                                            class="btn-u btn-block input-group"
                                            id="submitbuttonAdmin"
                                        >
                                            Login
                                        </button>
                                    </div>
                                </div>
                                <hr />
                                <div class="forget-password">
                                    <h4>Forgot your password?</h4>
                                    <p>
                                        no worries, click{" "}
                                        <a
                                            style={{ color: "#F44336" }}
                                            id="forget-password-admin"
                                        >
                                            here{" "}
                                        </a>
                                        front.ToResetYourPassword
                                    </p>
                                </div>
                            </form>
                            {/* <div
                            <h3 class="box-title">Demo account login by</h3>
                                class="table-responsive"
                                style={{ fontSize: "10px" }}
                            >
                                <table class="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th>Account</th>
                                            <th>Email</th>
                                            <th>Password</th>
                                            <th>#</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Admin</td>
                                            <td>admin@example.com</td>
                                            <td>123456</td>
                                            <td>
                                                <a
                                                    data-email="admin@example.com"
                                                    data-password="123456"
                                                    class="text-muted copy-admin"
                                                >
                                                    <i class="fa fa-clipboard"></i>
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Superadmin</td>
                                            <td>superadmin@example.com</td>
                                            <td>123456</td>
                                            <td>
                                                <a
                                                    href="javascript:;"
                                                    data-email="superadmin@example.com"
                                                    data-password="123456"
                                                    class="text-muted copy-admin"
                                                >
                                                    <i class="fa fa-clipboard"></i>
                                                </a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div> */}
                        </div>
                    </div>

                    {/* <form class="forget-form-admin" style={{ display: "none" }}>
                        <input name="_token" type="hidden" />
                        <h3>Forgot your password?</h3>

                        <p>
                            Enter your e-mail address below to reset your
                            password.
                        </p>
                        <div class="form-group">
                            <div>
                                <div class="input-group margin-bottom-20">
                                    <span class="input-group-addon">
                                        <i class="fa fa-envelope"></i>
                                    </span>
                                    <input
                                        type="email"
                                        class="form-control"
                                        name="email"
                                        placeholder="Email"
                                        required
                                    />
                                </div>
                            </div>
                        </div>
                        <div class="form-actions">
                            <button
                                type="button"
                                id="back-btn-admin"
                                class="btn"
                            >
                                <i class="m-icon-swapleft"></i> Back
                            </button>
                            <button
                                type="button"
                                class="btn-u blue pull-right"
                                id="submitbutton_forget_admin"
                            >
                                Submit{" "}
                                <i class="m-icon-swapright m-icon-white"></i>
                            </button>
                        </div>
                    </form> */}
                </div>
                {/* <div class="form-actions rem">
                    <a
                        href="/"
                        class="btn btn-sm btn-block btn-rounded btn-primary text-uppercase"
                    >
                        Go to Frontend Site
                    </a>
                </div> */}
            </div>
        </div>
    );
};

export default Login;
