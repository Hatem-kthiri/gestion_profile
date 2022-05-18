import {
    GET_EMPLOYEE,
    GET_DEPARTMENT,
    GET_LEAVE,
    GET_ATTENDANCE,
} from "../constants/actions-types";
import axios from "axios";

export const get_Employees = () => async (dispatch) => {
    try {
        let result = await axios.get("api/getEmployee");
        dispatch({ type: GET_EMPLOYEE, payload: result.data });
    } catch (error) {
        console.log(error);
    }
};

export const get_Department = () => async (dispatch) => {
    try {
        let department = await axios.get("api/getDepartment");
        dispatch({ type: GET_DEPARTMENT, payload: department });
    } catch (error) {
        console.log(error);
    }
};

export const add_Department = (newDepartment) => async (dispatch) => {
    try {
        let new_department = await axios.post(
            "api/addDepartment",
            newDepartment
        );

        dispatch(get_Department());
    } catch (err) {
        console.log(err);
    }
};

export const getLeave = () => async (dispatch) => {
    try {
        let allLeaves = await axios.get("api/getLeave");

        dispatch({ type: GET_LEAVE, payload: allLeaves.data });
    } catch (err) {
        console.log(err);
    }
};
export const addLeave = (newLeave) => async (dispatch) => {
    try {
        let new_Leave = await axios.post("api/addLeave", newLeave);
        console.log(new_Leave);
        dispatch(getLeave());
    } catch (err) {
        console.log(err);
    }
};

export const updateDecision =
    ({ id, Decision }) =>
    async (dispatch) => {
        try {
            let update_Decision = await axios.put(
                `api/updateDecision/${id}`,
                Decision
            );
            console.log(update_Decision);
            dispatch(getLeave());
        } catch (err) {
            console.log(err);
        }
    };
export const addAttendance = (attendance) => async (dispatch) => {
    try {
        let Attendance = await axios.post(`api/addAttendance/`, attendance);
        console.log(Attendance);
    } catch (err) {
        console.log(err);
    }
};

export const getAttendance = () => async (dispatch) => {
    try {
        let allAttendance = await axios.get("/api/allAttendance");
        dispatch({ type: GET_ATTENDANCE, payload: allAttendance.data });
    } catch (err) {
        console.log(err);
    }
};
