import { GET_EMPLOYEE, GET_DEPARTMENT } from "../constants/actions-types";
const initialState = {
    Employees: [],
    Department: [],
};

const managementReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case GET_EMPLOYEE:
            return { ...state, Employees: payload.data };
        case GET_DEPARTMENT:
            return { ...state, Department: payload.data.data };
        default:
            return state;
    }
};

export default managementReducer;
