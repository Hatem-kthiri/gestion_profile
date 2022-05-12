import React, { useState, useEffect } from "react";
import { register } from "../../redux/actions/user";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { get_Department } from "../../redux/actions/Employee";

const AddEmployee = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [newEmployee, setNewEmployee] = useState({});
    const handleChange = (e) => {
        setNewEmployee({ ...newEmployee, [e.target.name]: e.target.value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(register(newEmployee, history));
    };
    useEffect(() => {
        dispatch(get_Department());
    }, []);

    const { Department } = useSelector((state) => state.managementReducer);
    return (
        <div class="page-container">
            <div class="page-content-wrapper">
                <div class="page-content">
                    <div class="page-head" style={{ marginTop: "66px" }}>
                        <div class="page-title">
                            <h1>Add New Employee</h1>
                        </div>
                    </div>

                    <form class="form-horizontal ajax_form">
                        <input name="_token" type="hidden" />
                        <div class="row ">
                            <div class="col-md-12 col-sm-12">
                                <div class="portlet light bordered">
                                    <div class="portlet-title">
                                        <div class="caption font-purple-wisteria">
                                            <i class="fa fa-user font-purple-wisteria"></i>
                                            Personal Details
                                        </div>
                                    </div>
                                    <div class="portlet-body">
                                        <div class="form-body">
                                            <div class="form-group">
                                                <label class="col-md-3 control-label">
                                                    Name{" "}
                                                    <span class="required">
                                                        *{" "}
                                                    </span>
                                                </label>

                                                <div class="col-md-9">
                                                    <input
                                                        onChange={handleChange}
                                                        type="text"
                                                        class="form-control"
                                                        name="Name"
                                                        placeholder="Name"
                                                    />
                                                </div>
                                            </div>

                                            <div class="form-group">
                                                <label class="col-md-3 control-label">
                                                    Last Name{" "}
                                                    <span class="required">
                                                        *{" "}
                                                    </span>
                                                </label>

                                                <div class="col-md-9">
                                                    <input
                                                        onChange={handleChange}
                                                        type="text"
                                                        class="form-control"
                                                        name="lastName"
                                                        placeholder="Last Name"
                                                    />
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label class="control-label col-md-3">
                                                    Date of Birth
                                                </label>

                                                <div class="col-md-3">
                                                    <div
                                                        class="input-group input-medium date date-picker"
                                                        data-date-format="dd-mm-yyyy"
                                                        data-date-viewmode="years"
                                                    >
                                                        <input
                                                            onChange={
                                                                handleChange
                                                            }
                                                            type="date"
                                                            class="form-control"
                                                            name="DateOfBirth"
                                                            readonly
                                                        />
                                                        <span class="input-group-btn">
                                                            <button
                                                                class="btn default"
                                                                type="button"
                                                            >
                                                                <i class="fa fa-calendar"></i>
                                                            </button>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label class="col-md-3 control-label">
                                                    Gender
                                                </label>

                                                <div class="col-md-9">
                                                    <select
                                                        class="form-control"
                                                        name="gender"
                                                        onChange={handleChange}
                                                    >
                                                        <option value="male">
                                                            Male
                                                        </option>
                                                        <option value="female">
                                                            Female
                                                        </option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label class="col-md-3 control-label">
                                                    Departement
                                                </label>

                                                <div class="col-md-9">
                                                    <select
                                                        class="form-control"
                                                        name="department"
                                                        onChange={handleChange}
                                                    >
                                                        {Department.map(
                                                            (el) => {
                                                                return (
                                                                    <option
                                                                        value={
                                                                            el.Name
                                                                        }
                                                                    >
                                                                        {
                                                                            el.Name
                                                                        }
                                                                    </option>
                                                                );
                                                            }
                                                        )}
                                                    </select>
                                                </div>
                                            </div>

                                            <div class="form-group">
                                                <label class="col-md-3 control-label">
                                                    Phone
                                                </label>

                                                <div class="col-md-9">
                                                    <input
                                                        onChange={handleChange}
                                                        type="text"
                                                        class="form-control"
                                                        name="phone"
                                                        placeholder="Phone"
                                                    />
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label class="col-md-3 control-label">
                                                    Local Address
                                                </label>

                                                <div class="col-md-9">
                                                    <textarea
                                                        onChange={handleChange}
                                                        class="form-control"
                                                        name="address"
                                                        rows="3"
                                                    ></textarea>
                                                </div>
                                            </div>
                                            {/* <div class="form-group">
                                                <label class="col-md-3 control-label">
                                                    Permanent Address
                                                </label>

                                                <div class="col-md-9">
                                                    <textarea
                                                        class="form-control"
                                                        name="permanent_address"
                                                        rows="3"
                                                    ></textarea>
                                                </div>
                                            </div> */}

                                            <h4 class="block">Account Login</h4>

                                            <div class="form-group">
                                                <label class="col-md-3 control-label">
                                                    Email
                                                    <span class="required">
                                                        *{" "}
                                                    </span>
                                                </label>

                                                <div class="col-md-9">
                                                    <input
                                                        onChange={handleChange}
                                                        type="text"
                                                        name="email"
                                                        class="form-control"
                                                    />
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label class="col-md-3 control-label">
                                                    Password
                                                    <span class="required">
                                                        *{" "}
                                                    </span>
                                                </label>

                                                <div class="col-md-9">
                                                    <input
                                                        onChange={handleChange}
                                                        type="password"
                                                        name="password"
                                                        class="form-control"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <a
                                        // href="javascript: ;"
                                        class="btn green"
                                        onClick={handleSubmit}
                                        style={{
                                            transform: "translateX(600px)",
                                            width: "250px",
                                        }}
                                    >
                                        <span class="hidden-xs"> Submit </span>
                                        {/* <i class="fa fa-plus"></i> */}
                                    </a>
                                </div>
                            </div>
                            {/* <div class="col-md-6 col-sm-6">
                                <div class="portlet light bordered">
                                    <div class="portlet-title">
                                        <div class="caption font-red-sunglo">
                                            <i class="fa fa-industry font-red-sunglo"></i>{" "}
                                            Company Details
                                        </div>
                                    </div>
                                    <div class="portlet-body">
                                        <div class="form-body">
                                            <div class="form-group">
                                                <label class="col-md-3 control-label">
                                                    Employee ID
                                                    <span class="required">
                                                        *{" "}
                                                    </span>
                                                </label>

                                                <div class="col-md-9">
                                                    <input
                                                    onChange={handleChange}    
                                                    type="text"
                                                        class="form-control"
                                                        name="employeeID"
                                                        placeholder="Employee ID"
                                                        
                                                    />
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label class="col-md-3 control-label">
                                                    Department
                                                </label>

                                                <div class="col-md-9">
                                                    <select
                                                        class="form-control select2me"
                                                        id="department"
                                                        onchange="dept();return false;"
                                                        name="department"
                                                    >
                                                        <option value="1">
                                                            PHP Developer
                                                        </option>
                                                        <option value="2">
                                                            Android Developer
                                                        </option>
                                                        <option value="3">
                                                            Laravel Developer
                                                        </option>
                                                        <option value="4">
                                                            Human Resource
                                                        </option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label class="col-md-3 control-label">
                                                    Designation
                                                </label>

                                                <div class="col-md-9">
                                                    <select
                                                        class="select2me form-control"
                                                        name="designation"
                                                        id="designation"
                                                    ></select>
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label class="col-md-3 control-label">
                                                    {" "}
                                                    Credit Leaves{" "}
                                                    <span
                                                        class="badge badge-danger popovers"
                                                        data-html="true"
                                                        data-container="body"
                                                        data-trigger="hover"
                                                        data-placement="right"
                                                        data-content="Extra leaves given on per employee basis."
                                                        data-original-title="Credit Leaves"
                                                        title=""
                                                    >
                                                        <i class="fa fa-question"></i>
                                                    </span>
                                                </label>

                                                <div class="col-md-9">
                                                    <input
                                                        type="text"
                                                        name="annual_leave"
                                                        class="form-control"
                                                        value="0"
                                                    />
                                                </div>
                                            </div>

                                            <div class="form-group">
                                                <label class="control-label col-md-3">
                                                    Date of Joining
                                                </label>

                                                <div class="col-md-3">
                                                    <div
                                                        class="input-group input-medium date date-picker"
                                                        data-date-format="dd-mm-yyyy"
                                                        data-date-viewmode="years"
                                                    >
                                                        <input
                                                            type="text"
                                                            class="form-control"
                                                            name="joining_date"
                                                            readonly
                                                            value=" 17-04-2022"
                                                        />
                                                        <span class="input-group-btn">
                                                            <button
                                                                class="btn default"
                                                                type="button"
                                                            >
                                                                <i class="fa fa-calendar"></i>
                                                            </button>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label class="col-md-3 control-label">
                                                    Basic Salary (₹)
                                                </label>

                                                <div class="col-md-9">
                                                    <input
                                                        type="text"
                                                        class="form-control"
                                                        name="basicSalary"
                                                        placeholder="Basic Salary"
                                                        value="0"
                                                    />
                                                    <span class="help-block">
                                                        This salary will be used
                                                        for calculation in
                                                        payroll{" "}
                                                    </span>
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label class="col-md-3 control-label">
                                                    Hourly Rate (₹)
                                                </label>

                                                <div class="col-md-9">
                                                    <input
                                                        type="text"
                                                        class="form-control"
                                                        name="hourlyRate"
                                                        placeholder="Hourly Rate"
                                                        value="0"
                                                    />
                                                    <span class="help-block">
                                                        Hourly Rate (₹ per hour)
                                                    </span>
                                                    <span class="help-block">
                                                        This salary will be used
                                                        for calculation in
                                                        payroll{" "}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 col-sm-6">
                                <div class="portlet light bordered">
                                    <div class="portlet-title">
                                        <div class="caption font-red-sunglo">
                                            <i class="fa fa-money font-red-sunglo"></i>
                                            Bank Details
                                        </div>
                                    </div>
                                    <div class="portlet-body">
                                        <div class="form-body">
                                            <div class="form-group">
                                                <label class="col-md-3 control-label">
                                                    Account Holder Name
                                                </label>

                                                <div class="col-md-9">
                                                    <input
                                                        type="text"
                                                        class="form-control"
                                                        name="account_name"
                                                        placeholder="Account Holder Name"
                                                        
                                                    />
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label class="col-md-3 control-label">
                                                    Account Number
                                                </label>

                                                <div class="col-md-9">
                                                    <input
                                                        type="text"
                                                        class="form-control"
                                                        name="account_number"
                                                        placeholder="Account Number"
                                                        
                                                    />
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label class="col-md-3 control-label">
                                                    Bank Name
                                                </label>

                                                <div class="col-md-9">
                                                    <input
                                                        type="text"
                                                        class="form-control"
                                                        name="bank"
                                                        placeholder="Bank Name"
                                                        
                                                    />
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label class="col-md-3 control-label">
                                                    Bank Identifier Code{" "}
                                                    <span
                                                        class="badge badge-danger popovers"
                                                        data-html="true"
                                                        data-container="body"
                                                        data-trigger="hover"
                                                        data-placement="right"
                                                        data-content="A unique code to identify a bank in your country. For example, IFSC code in India, SWIFT code in United Kingdom, etc."
                                                        data-original-title="Bank Identifier Code"
                                                        title=""
                                                    >
                                                        <i class="fa fa-question"></i>
                                                    </span>
                                                </label>

                                                <div class="col-md-9">
                                                    <input
                                                        type="text"
                                                        class="form-control"
                                                        name="bin"
                                                        placeholder="Bank Identifier Code"
                                                        
                                                    />
                                                </div>
                                            </div>

                                            <div class="form-group">
                                                <label class="col-md-3 control-label">
                                                    Branch Location
                                                </label>

                                                <div class="col-md-9">
                                                    <input
                                                        type="text"
                                                        class="form-control"
                                                        name="branch"
                                                        placeholder="Branch Location"
                                                        
                                                    />
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label class="col-md-3 control-label">
                                                    Tax Payer Id{" "}
                                                    <span
                                                        class="badge badge-danger popovers"
                                                        data-html="true"
                                                        data-container="body"
                                                        data-trigger="hover"
                                                        data-placement="right"
                                                        data-content="Taxpayer Identification Number used in your country. For example, PAN Number in India, Taxpayer Identification Number in USA, etc."
                                                        data-original-title="Taxpayer ID"
                                                        title=""
                                                    >
                                                        <i class="fa fa-question"></i>
                                                    </span>
                                                </label>

                                                <div class="col-md-9">
                                                    <input
                                                        type="text"
                                                        class="form-control"
                                                        name="tax_payer_id"
                                                        placeholder="Tax Payer Id"
                                                        
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddEmployee;
