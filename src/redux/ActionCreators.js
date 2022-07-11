import * as ActionTypes from "./ActionTypes";
import { baseUrl } from "../shared/baseUrl";

//Them nhan vien moi

export const addStaff = (staff) => ({
  type: ActionTypes.ADD_STAFF_SUCCESS,
  payload: staff,
});

export const postStaff =
  (name, doB, startDate, department, salaryScale, annualLeave, overTime) =>
  (dispatch) => {
    const newStaff = {
      name: name,
      doB: doB,
      startDate: startDate,
      department: department ? department : "Sale",
      salaryScale: salaryScale,
      annualLeave: annualLeave,
      overTime: overTime,
    };

    switch (newStaff.department) {
      case "Sale":
        newStaff.departmentId = "Dept01";
        break;
      case "HR":
        newStaff.departmentId = "Dept02";
        break;
      case "Marketing":
        newStaff.departmentId = "Dept03";
        break;
      case "IT":
        newStaff.departmentId = "Dept04";
        break;
      case "Finance":
        newStaff.departmentId = "Dept05";
        break;
      default:
        newStaff.departmentId = "Dept01";
    }
    newStaff.image = "/assets/images/alberto.png";
    return fetch(baseUrl + "staffs", {
      method: "POST",
      body: JSON.stringify(newStaff),
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "same-origin",
    })
      .then(
        (response) => {
          if (response.ok) {
            return response;
          } else {
            var error = new Error(
              "Error" + response.status + ": " + response.statusText
            );
            error.response = response;
            throw error;
          }
        },
        (error) => {
          var errmess = new Error(error.message);
          throw errmess;
        }
      )
      .then((response) => response.json())
      .then((response) => dispatch(addStaff(response)))
      .catch((error) => {
        console.log("Add staff", error.message);
        alert("You could not be add\nError: " + error.message);
      });
  };

//xóa nhân viên
export const deleteStaff = (id) => ({
  type: ActionTypes.DELETE_STAFF,
  payload: id,
});

export const removeStaff = (id) => (dispatch) => {
  if (window.confirm("Are you sure?")) {
    return fetch(baseUrl + `staffs/${id}`, {
      method: "DELETE",
    })
      .then(
        (response) => {
          if (response.ok) {
            return response;
          } else {
            var error = new Error(
              "Error" + response.status + ": " + response.statusText
            );
            error.response = response;
            throw error;
          }
        },
        (error) => {
          var errmess = new Error(error.message);
          throw errmess;
        }
      )
      .then((response) => response.json())
      .then(() => dispatch(deleteStaff(id)))
      .catch((error) => {
        console.log("Delete staff", error.message);
        alert("You could not be delete\nError: " + error.message);
      });
  }
};

//update nhan vien
export const updateStaff = (staff) => ({
  type: ActionTypes.UPDATE_STAFF,
  payload: staff,
});

export const patchStaff = (staff) => (dispatch) => {
  return fetch(baseUrl + "staffs", {
    method: "PATCH",
    body: JSON.stringify(staff),
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "same-origin",
  })
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error(
            "Error" + response.status + ": " + response.statusText
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        var errmess = new Error(error.message);
        throw errmess;
      }
    )
    .then((response) => response.json())
    .then((response) => dispatch(updateStaff(response)))
    .catch((error) => {
      console.log("Update staff", error.message);
      alert("You could not be update\nError: " + error.message);
    });
};

//fetch Nhan vien
export const fetchStaffs = () => (dispatch) => {
  dispatch(staffsLoading(true));
  return fetch(baseUrl + "staffs")
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error(
            "Error" + response.status + ": " + response.statusText
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        var errmess = new Error(error.message);
        throw errmess;
      }
    )
    .then((response) => response.json())
    .then((staffs) => dispatch(addStaffs(staffs)))
    .catch((error) => dispatch(staffsFailed(error.message)));
};

export const staffsLoading = () => ({
  type: ActionTypes.STAFFS_LOADING,
});

export const staffsFailed = (errmess) => ({
  type: ActionTypes.STAFFS_FAILED,
  payload: errmess,
});

export const addStaffs = (staffs) => ({
  type: ActionTypes.ADD_STAFFS,
  payload: staffs,
});

//fetch phong ban
export const fetchDepartments = () => (dispatch) => {
  dispatch(departmentsLoading(true));
  return fetch(baseUrl + "departments")
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error(
            "Error" + response.status + ": " + response.statusText
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        var errmess = new Error(error.message);
        throw errmess;
      }
    )
    .then((response) => response.json())
    .then((departments) => dispatch(addDepartments(departments)))
    .catch((error) => dispatch(departmentsFailed(error.message)));
};

export const departmentsLoading = () => ({
  type: ActionTypes.DEPARTS_LOADING,
});

export const departmentsFailed = (errmess) => ({
  type: ActionTypes.DEPARTS_FAILED,
  payload: errmess,
});

export const addDepartments = (departments) => ({
  type: ActionTypes.ADD_DEPARTS,
  payload: departments,
});

//fetch Bang luong
export const fetchSalary = () => (dispatch) => {
  dispatch(salaryLoading(true));
  return fetch(baseUrl + "staffsSalary")
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error(
            "Error" + response.status + ": " + response.statusText
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        var errmess = new Error(error.message);
        throw errmess;
      }
    )
    .then((response) => response.json())
    .then((staffsSalary) => dispatch(addSalary(staffsSalary)))
    .catch((error) => dispatch(salaryFailed(error.message)));
};

export const salaryLoading = () => ({
  type: ActionTypes.SALARY_LOADING,
});

export const salaryFailed = (errmess) => ({
  type: ActionTypes.SALARY_FAILED,
  payload: errmess,
});

export const addSalary = (staffsSalary) => ({
  type: ActionTypes.ADD_SALARY,
  payload: staffsSalary,
});
