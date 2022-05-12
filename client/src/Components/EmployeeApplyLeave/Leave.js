import React, { useState } from "react";
import "./style.css";
const Leave = () => {
    const [newLeave, setNewLeave] = useState({});
    const handleChange = (e) => {
        setNewLeave({ ...newLeave, [e.target.name]: e.target.value });
    };

    return (
        <div
            style={{
                background: "white",
                margin: "130px auto auto",
                padding: "10px 20px",
                width: "97%",
            }}
            id="leave"
        >
            <div class="page-title" style={{ marginBottom: "20px" }}>
                <h1>Apply Leave</h1>
            </div>
            <div class="dateRange" style={{ marginBottom: "20px" }}>
                <label style={{ marginRight: "25px", marginBottom: "20px" }}>
                    Date Start
                </label>
                <input
                    type="date"
                    class="form-control"
                    name="LeaveD"
                    onChange={handleChange}
                />
            </div>
            <div class="dateRange" style={{ marginBottom: "20px" }}>
                <label style={{ marginRight: "25px", marginBottom: "20px" }}>
                    Date End
                </label>
                <input
                    class="form-control"
                    type="date"
                    name="LeaveEnd"
                    onChange={handleChange}
                />
            </div>
            <div style={{ padding: "0px 0px 30px 0px" }}>
                {/* <div class="form_label" style={{ marginBottom: "20px" }}>
                    <label style={{ width: "100px" }}>Selected Days</label>
                    <span>0</span>
                </div> */}
                <div
                    class="form_label"
                    style={{ display: "flex", marginBottom: "20px" }}
                >
                    <label style={{ width: "100px" }}>Leave Types</label>
                    <select
                        class="form-control"
                        id="date_range_leaveType"
                        name="LeaveType"
                        onChange={handleChange}
                    >
                        <option value="sick">sick</option>
                        <option value="casual">casual</option>
                        <option value="maternity">maternity</option>
                        <option value="annual">annual</option>
                        <option value="unpaid">unpaid</option>
                        <option value="others">others</option>
                    </select>
                </div>
                <div class="form_label" style={{ marginBottom: "20px" }}>
                    <label>Reason</label>
                    <textarea
                        class="form-control"
                        name="Reason"
                        onChange={handleChange}
                    ></textarea>
                </div>
                <div class="col-md-offset-4 col-md-8">
                    <button type="submit" class="btn-u btn-u-sea">
                        <i class="fa fa-check"></i> Submit
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Leave;
