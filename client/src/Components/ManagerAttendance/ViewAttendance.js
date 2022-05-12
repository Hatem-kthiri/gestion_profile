import React from "react";

const ViewAttendance = () => {
    return (
        <div class="page-container">
            <div class="page-content-wrapper">
                <div class="page-content">
                    <div class="page-head">
                        <div class="page-title">
                            <h1>Attendance </h1>
                        </div>
                        <div class="page-toolbar">
                            <div class="btn-theme-panel">
                                <a
                                    onclick="loadView('https://hrm-saas.froid.works/admin/attendances')"
                                    class="btn active"
                                >
                                    <i class="fa fa-th"></i>
                                </a>
                                <a
                                    onclick="loadView('https://hrm-saas.froid.works/admin/attendances-employee')"
                                    class="btn"
                                >
                                    <i class="fa fa-bars"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="page-bar">
                        <ul class="page-breadcrumb breadcrumb">
                            <li>
                                <a onclick="loadView('https://hrm-saas.froid.works/admin/dashboard')">
                                    Dashboard
                                </a>
                                <i class="fa fa-circle"></i>
                            </li>
                            <li>
                                <span class="active">Attendance</span>
                            </li>
                        </ul>
                    </div>

                    <div class="row">
                        <div class="col-md-12">
                            <div class="portlet light bordered">
                                <div class="portlet-body">
                                    <div class="row filter-row">
                                        <div class="col-sm-3 col-xs-6">
                                            <div class="form-group form-focus">
                                                <label class="control-label">
                                                    Employee Name
                                                </label>
                                                <select
                                                    class="form-control select2me"
                                                    name="employee_id"
                                                >
                                                    <option value="all">
                                                        All
                                                    </option>
                                                    <option value="1">
                                                        Serena Littel (EmpId:
                                                        123456)
                                                    </option>
                                                    <option value="2">
                                                        Izaiah Heller (EmpId:
                                                        40004860)
                                                    </option>
                                                    <option value="3">
                                                        Orlando Mosciski (EmpId:
                                                        588125669)
                                                    </option>
                                                    <option value="4">
                                                        Janie Jacobi (EmpId:
                                                        749899867)
                                                    </option>
                                                    <option value="5">
                                                        Brionna McGlynn (EmpId:
                                                        613812990)
                                                    </option>
                                                    <option value="6">
                                                        Arielle Bahringer
                                                        (EmpId: 471269459)
                                                    </option>
                                                    <option value="7">
                                                        Golda Senger (EmpId:
                                                        881544132)
                                                    </option>
                                                    <option value="8">
                                                        Margarita Simonis
                                                        (EmpId: 925737530)
                                                    </option>
                                                    <option value="9">
                                                        Ralph Koelpin (EmpId:
                                                        586719526)
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="col-sm-3 col-xs-6">
                                            <div class="form-group form-focus">
                                                <label class="control-label">
                                                    Select Month
                                                </label>
                                                <select
                                                    class="form-control select floating"
                                                    name="month"
                                                >
                                                    <option value="1">
                                                        Jan{" "}
                                                    </option>
                                                    <option value="2">
                                                        Feb{" "}
                                                    </option>
                                                    <option value="3">
                                                        Mar{" "}
                                                    </option>
                                                    <option
                                                        value="4"
                                                        selected="selected"
                                                    >
                                                        Apr{" "}
                                                    </option>
                                                    <option value="5">
                                                        May{" "}
                                                    </option>
                                                    <option value="6">
                                                        June{" "}
                                                    </option>
                                                    <option value="7">
                                                        July{" "}
                                                    </option>
                                                    <option value="8">
                                                        Aug{" "}
                                                    </option>
                                                    <option value="9">
                                                        Sept{" "}
                                                    </option>
                                                    <option value="10">
                                                        Oct{" "}
                                                    </option>
                                                    <option value="11">
                                                        Nov{" "}
                                                    </option>
                                                    <option value="12">
                                                        Dec{" "}
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="col-sm-3 col-xs-6">
                                            <div class="form-group form-focus">
                                                <label class="control-label">
                                                    Select Year
                                                </label>
                                                <select
                                                    class="form-control select floating"
                                                    name="year"
                                                >
                                                    <option value="2015">
                                                        2015
                                                    </option>
                                                    <option value="2016">
                                                        2016
                                                    </option>
                                                    <option value="2017">
                                                        2017
                                                    </option>
                                                    <option value="2018">
                                                        2018
                                                    </option>
                                                    <option value="2019">
                                                        2019
                                                    </option>
                                                    <option value="2020">
                                                        2020
                                                    </option>
                                                    <option value="2021">
                                                        2021
                                                    </option>
                                                    <option
                                                        value="2022"
                                                        selected="selected"
                                                    >
                                                        2022
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="col-sm-3 col-xs-6">
                                            <div class="form-group form-focus">
                                                <label class="control-label">
                                                    &nbsp;
                                                </label>
                                                <a
                                                    href="javascript:;"
                                                    class="btn btn-success btn-block"
                                                    onclick="filter(); return false;"
                                                >
                                                    {" "}
                                                    Search{" "}
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <div
                                                class="table-responsive"
                                                id="attendance-sheet"
                                            ></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewAttendance;
