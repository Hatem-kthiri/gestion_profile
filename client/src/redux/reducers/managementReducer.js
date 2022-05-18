import {
    GET_EMPLOYEE,
    GET_DEPARTMENT,
    GET_LEAVE,
    GET_ATTENDANCE,
} from "../constants/actions-types";
const initialState = {
    Employees: [],
    Department: [],
    Leaves: [],
    Attendance: [],
};

const managementReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case GET_EMPLOYEE:
            return { ...state, Employees: payload.data };
        case GET_DEPARTMENT:
            return { ...state, Department: payload.data.data };
        case GET_LEAVE:
            return { ...state, Leaves: payload.data };
        case GET_ATTENDANCE:
            return { ...state, Attendance: payload.data };
        default:
            return state;
    }
};

export default managementReducer;
