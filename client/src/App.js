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

    return (
        <div>
            <Switch>
                <Route exact path="/">
                    {isLoggedIn() == false ? <Login /> : null}
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/adminDepartment">
                    <Navigation />
                    <Department />
                </Route>
                <Route path="/adminEmployee">
                    <Navigation />
                    <Employee />
                </Route>
                <Route path="/adminAddEmployee">
                    <Navigation />
                    <AddEmployee />
                </Route>
                <Route path="/adminViewAttendance">
                    <Navigation />
                    <ViewAttendance />
                </Route>
                <Route path="/EmployeeApplyLeave">
                    <EmployeeNavigation />
                    <Leave />
                </Route>
                <Route path="/EmployeemyLeave">
                    <EmployeeNavigation />
                    <MyLeave />
                </Route>
                <Route path="/AdminLeaveList">
                    <Navigation />
                    <LeaveList />
                </Route>
                <Route path="/AdminMarkAttendance">
                    <Navigation />
                    <MarkAttendance />
                </Route>
                <Route path="/EmployeeMyAttendance">
                    <EmployeeNavigation />
                    <MyAttendance />
                </Route>
                {isLoggedIn() ? (
                    <Route exact path="/dashboardE">
                        <>
                            <EmployeeNavigation />
                            <DashboardE />
                        </>
                    </Route>
                ) : (
                    <Redirect to="/login" />
                )}
                {isLoggedIn() ? (
                    <Route exact path="/dashboardA">
                        <>
                            <Navigation />
                            <Dashboard />
                        </>
                    </Route>
                ) : (
                    <Redirect to="/login" />
                )}
            </Switch>
        </div>
    );
}

export default App;
