import "./App.css";
import Dashboard from "./Components/Manager Dashboard/Dashboard";
import ViewAttendance from "./Components/ManagerAttendance/ViewAttendance";
import Department from "./Components/ManagerDepartement/Department";
import AddEmployee from "./Components/ManagerEmployee/AddEmployee";
import Employee from "./Components/ManagerEmployee/Employee";
import Navigation from "./Components/Navigation/Navigation";
import Login from "./Pages/Login/Login";
import { Switch, Route, Redirect } from "react-router-dom";
import Leave from "./Components/EmployeeApplyLeave/Leave";
import DashboardE from "./Components/EmployeeDashboard/DashboardE";
import EmployeeNavigation from "./Components/EmployeeDashboard/EmployeeNavigation";
import { useDispatch, useSelector } from "react-redux";
// import { current } from "./redux/actions/user";
import { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import LeaveList from "./Components/ManagerLeaveList/LeaveList";
import MarkAttendance from "./Components/ManagerAttendance/MarkAttendance";
import MyLeave from "./Components/EmployeeApplyLeave/MyLeave";
import MyAttendance from "./Components/EmployeeAttendance/MyAttendance";
function App() {
    const dispatch = useDispatch();
    const { user, role } = useSelector((state) => state.userReducer);
    const [userLogged, setUserLogged] = useState("");
    const isLoggedIn = () => {
        return localStorage.getItem("token") ? true : false;
    };
    useEffect(() => {
        if (isLoggedIn()) {
            setUserLogged(jwt_decode(localStorage.getItem("token")).user.role);
        }
    }, [isLoggedIn()]);
    console.log(userLogged);
    return (
        <div>
            <Switch>
                <Route exact path="/">
                    {isLoggedIn() == false ? (
                        <Redirect to="/login" />
                    ) : userLogged && userLogged == "admin" ? (
                        <Redirect to="dashboardA" />
                    ) : userLogged == "Employee" ? (
                        <Redirect to="dashboardE" />
                    ) : null}
                </Route>
                <Route path="/login">
                    {userLogged && userLogged == "admin" ? (
                        <Redirect to="dashboardA" />
                    ) : userLogged == "Employee" ? (
                        <Redirect to="dashboardE" />
                    ) : (
                        <Login />
                    )}
                </Route>
                <Route path="/adminDepartment">
                    {userLogged && userLogged == "admin" ? (
                        <>
                            <Navigation />
                            <Department />
                        </>
                    ) : (
                        <Redirect to="/" />
                    )}
                </Route>
                <Route path="/adminEmployee">
                    {userLogged && userLogged == "admin" ? (
                        <>
                            <Navigation />
                            <Employee />
                        </>
                    ) : (
                        <Redirect to="/" />
                    )}
                </Route>
                <Route path="/adminAddEmployee">
                    {userLogged && userLogged == "admin" ? (
                        <>
                            <Navigation />
                            <AddEmployee />
                        </>
                    ) : (
                        <Redirect to="/" />
                    )}
                </Route>
                <Route path="/adminViewAttendance">
                    {userLogged && userLogged == "admin" ? (
                        <>
                            <Navigation />
                            <ViewAttendance />
                        </>
                    ) : (
                        <Redirect to="/" />
                    )}
                </Route>
                <Route path="/AdminLeaveList">
                    {userLogged && userLogged == "admin" ? (
                        <>
                            <Navigation />
                            <LeaveList />
                        </>
                    ) : (
                        <Redirect to="/" />
                    )}
                </Route>
                <Route path="/AdminMarkAttendance">
                    {userLogged && userLogged == "admin" ? (
                        <>
                            <Navigation />
                            <MarkAttendance />
                        </>
                    ) : (
                        <Redirect to="/" />
                    )}
                </Route>
                <Route path="/EmployeeApplyLeave">
                    {userLogged && userLogged == "Employee" ? (
                        <>
                            <EmployeeNavigation />
                            <Leave />
                        </>
                    ) : (
                        <Redirect to="/" />
                    )}
                </Route>
                <Route path="/EmployeemyLeave">
                    {userLogged && userLogged == "Employee" ? (
                        <>
                            <EmployeeNavigation />
                            <MyLeave />
                        </>
                    ) : (
                        <Redirect to="/" />
                    )}
                </Route>

                <Route path="/EmployeeMyAttendance">
                    {userLogged && userLogged == "Employee" ? (
                        <>
                            <EmployeeNavigation />
                            <MyAttendance />
                        </>
                    ) : (
                        <Redirect to="/" />
                    )}
                </Route>
                {isLoggedIn() ? (
                    <Route exact path="/dashboardE">
                        {userLogged && userLogged == "Employee" ? (
                            <>
                                <EmployeeNavigation />
                                <DashboardE />
                            </>
                        ) : (
                            <Redirect to="/" />
                        )}
                    </Route>
                ) : (
                    <Redirect to="/login" />
                )}
                {isLoggedIn() ? (
                    <Route exact path="/dashboardA">
                        {userLogged && userLogged == "admin" ? (
                            <>
                                <Navigation />
                                <Dashboard />
                            </>
                        ) : (
                            <Redirect to="/" />
                        )}
                    </Route>
                ) : (
                    <Redirect to="/login" />
                )}
            </Switch>
        </div>
    );
}

export default App;
