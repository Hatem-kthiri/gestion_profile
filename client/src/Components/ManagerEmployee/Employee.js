import React, { useEffect } from "react";
import { MDBDataTableV5 } from "mdbreact";
import "./Employee.css";
import { get_Employees } from "../../redux/actions/Employee";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Employee = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(get_Employees());
    }, []);

    const { Employees } = useSelector((state) => state.managementReducer);
    const Edit = () => {
        return (
            <>
                <a
                    class="btn purple btn-sm margin-bottom-10"
                    data-toggle="modal"
                    href="#edit_static"
                >
                    <i class="fa fa-edit"></i> View/Edit
                </a>

                <a
                    class="btn red btn-sm margin-bottom-10"
                    style={{
                        width: "94px",
                    }}
                    href=""
                >
                    <i class="fa fa-trash"></i> Delete
                </a>
            </>
        );
    };
    var EmployeeRows = Employees.map((el) => {
        const data = {
            name: `${el.Name} ${el.lastName}`,
            department: `${el.department}`,
            phone: `${el.phone}`,
            action: <Edit />,
        };
        return data;
    });
    const [datatable, setDatatable] = React.useState({
        columns: [
            {
                label: "Name",
                field: "name",
                width: 150,
                attributes: {
                    "aria-controls": "DataTable",
                    "aria-label": "Name",
                },
            },
            {
                label: "Department",
                field: "department",
                width: 270,
            },
            {
                label: "Phone",
                field: "phone",
                width: 200,
            },
            {
                label: "Action",
                field: "action",
                width: 100,
            },
        ],
        rows: EmployeeRows,
    });

    return (
        <div class="page-container">
            <div class="page-content-wrapper">
                <div class="page-content">
                    <div class="page-head" style={{ marginTop: "66px" }}>
                        <div class="page-title">
                            <h1>Employees</h1>
                        </div>
                    </div>
                    {/* <div class="page-bar">
                        <ul class="page-breadcrumb breadcrumb">
                            <li>
                                <a onclick="loadView('https://hrm-saas.froid.works/admin/dashboard')">
                                    Dashboard
                                </a>
                                <i class="fa fa-circle"></i>
                            </li>
                            <li>
                                <span class="active">Employees</span>
                            </li>
                        </ul>
                    </div> */}

                    <div class="row">
                        <div class="col-md-12">
                            <div class="portlet light bordered">
                                <div class="portlet-body">
                                    <div class="table-toolbar">
                                        <div class="row">
                                            <div class="col-xs-6">
                                                <div class="btn-group">
                                                    <Link
                                                        to="/adminAddEmployee"
                                                        class="btn green"
                                                    >
                                                        <span class="hidden-xs">
                                                            {" "}
                                                            Add New Employee{" "}
                                                        </span>
                                                        <i class="fa fa-plus"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                            {/* <div class="col-xs-6">
                                                <div class="pull-right">
                                                    <a
                                                        href="https://hrm-saas.froid.works/admin/employees/export"
                                                        class="btn red"
                                                    >
                                                        <i class="fa fa-file-excel-o"></i>{" "}
                                                        <span class="hidden-xs">
                                                            Export
                                                        </span>
                                                    </a>
                                                    <a
                                                        href="javascript:;"
                                                        onclick="loadView('https://hrm-saas.froid.works/admin/employees/import')                  "
                                                        class="btn blue"
                                                    >
                                                        <i class="fa fa-upload"></i>{" "}
                                                        <span class="hidden-xs">
                                                            Import Employees
                                                        </span>
                                                    </a>
                                                </div>{" "}
                                            </div> */}
                                        </div>
                                    </div>

                                    <MDBDataTableV5
                                        hover
                                        entriesOptions={[5, 20, 25]}
                                        entries={5}
                                        pagesAmount={4}
                                        data={datatable}
                                        pagingTop
                                        searchTop
                                        searchBottom={false}
                                        barReverse
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        id="deleteModal"
                        class="modal fade"
                        tabindex="-1"
                        data-backdrop="static"
                        data-keyboard="false"
                    >
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <button
                                        type="button"
                                        class="close"
                                        data-dismiss="modal"
                                        aria-hidden="true"
                                    ></button>
                                    <h4 class="modal-title">Confirmation</h4>
                                </div>
                                <div class="modal-body" id="info">
                                    <p></p>
                                </div>
                                <div class="modal-footer">
                                    <button
                                        type="button"
                                        data-dismiss="modal"
                                        class="btn dark btn-outline"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="button"
                                        data-dismiss="modal"
                                        class="btn red"
                                        id="delete"
                                    >
                                        <i class="fa fa-trash"></i> Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        id="empAddWarningModal"
                        class="modal fade"
                        tabindex="-1"
                        data-backdrop="static"
                        data-keyboard="false"
                    >
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <button
                                        type="button"
                                        class="close"
                                        data-dismiss="modal"
                                        aria-hidden="true"
                                    ></button>
                                    <h4 class="modal-title">Confirmation</h4>
                                </div>
                                <div class="modal-body" id="addEmployeeInfo">
                                    <p>
                                        Adding new employee will convert your
                                        license from Free license to Paid
                                        version. Are you sure you want to
                                        continue?
                                    </p>
                                </div>
                                <div class="modal-footer">
                                    <button
                                        type="button"
                                        data-dismiss="modal"
                                        class="btn dark btn-outline"
                                    >
                                        Cancel
                                    </button>
                                    <a
                                        href="javascript: ;"
                                        onclick="confirmAddEmployee()"
                                        class="btn green"
                                    >
                                        <span class="hidden-xs"> Confirm </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Employee;
