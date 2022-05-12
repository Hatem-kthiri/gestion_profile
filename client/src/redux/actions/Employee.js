import {
    GET_EMPLOYEE,
    GET_DEPARTMENT,
    GET_POST_DETAIL,
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
        console.log(new_department);
        dispatch(get_Department());
    } catch (err) {
        console.log(err);
    }
};
