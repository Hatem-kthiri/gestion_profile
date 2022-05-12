import "./App.css";
import Dashboard from "./Components/Manager Dashboard/Dashboard";
import ViewAttendance from "./Components/ManagerAttendance/ViewAttendance";
import Department from "./Components/ManagerDepartement/Department";
import AddEmployee from "./Components/ManagerEmployee/AddEmployee";
import Employee from "./Components/ManagerEmployee/Employee";
import Navigation from "./Components/Navigation/Navigation";
import Login from "./Pages/Login/Login";
import { Switch, Route } from "react-router-dom";
import Leave from "./Components/EmployeeApplyLeave/Leave";
import DashboardE from "./Components/EmployeeDashboard/DashboardE";
function App() {
    return (
        <div>
            <Switch>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/admin">
                    <Navigation />
                    <Dashboard />
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
                <Route path="/adminViewAttendace">
                    <Navigation />
                    <ViewAttendance />
                </Route>
                <Route path="/EmployeeApplyLeave">
                    <Navigation />
                    <Leave />
                </Route>
                <Route path="/employee">
                    <DashboardE />
                </Route>
            </Switch>
        </div>
    );
}

export default App;
