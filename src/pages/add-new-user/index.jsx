import { useState } from "react";
import "./index.css";

var ROLE = ["Admin", "Editor", "Viewer"];
var STATUS = ["Active", "Inactive", "Pending"];

var CloseIcon = function () {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
};

var AlertIcon = function () {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="8" x2="12" y2="12" />
      <line x1="12" y1="16" x2="12.01" y2="16" />
    </svg>
  );
};

function AddNewUser({ onClose, onSave }) {
  var [fullName, setFullName] = useState("");
  var [email, setEmail] = useState("");
  var [role, setRole] = useState("");
  var [status, setStatus] = useState("Active");
  var [errors, setErrors] = useState({});

  function validateForm() {
    var errs = {};
    if (!fullName.trim()) {
      errs.fullName = "Full name is required.";
    } else if (fullName.trim().length < 2) {
      errs.fullName = "Name is too short.";
    }
    if (!email.trim()) {
      errs.email = "Email is required.";
    } else if (!email.includes("@") || !email.includes(".")) {
      errs.email = "Please enter a valid email.";
    }
    if (!role) {
      errs.role = "Please select a role.";
    }
    return errs;
  }

  function handleSave() {
    var validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    onSave({
      name: fullName.trim(),
      email: email.trim(),
      role: role,
      status: status,
    });
  }

  function clearError(field) {
    setErrors(function (prev) {
      var updated = Object.assign({}, prev);
      delete updated[field];
      return updated;
    });
  }

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal"
        onClick={function (e) {
          e.stopPropagation();
        }}
      >
        <div className="modal__header">
          <div>
            <h3 className="modal__title">Add New User</h3>
            <p className="modal__subtitle">
              Fill in the details to add a new team member.
            </p>
          </div>
          <button className="modal__close-btn" onClick={onClose}>
            <CloseIcon />
          </button>
        </div>

        <div className="modal__form">
          <div className="modal__field">
            <label className="modal__label">Full Name</label>
            <input
              type="text"
              placeholder="e.g. Robert Fox"
              value={fullName}
              onChange={function (e) {
                setFullName(e.target.value);
                clearError("fullName");
              }}
              className={`modal__input ${errors.fullName ? "modal__input--err" : ""}`}
            />
            {errors.fullName && (
              <p className="modal__err-text">
                <AlertIcon /> {errors.fullName}
              </p>
            )}
          </div>

          <div className="modal__field">
            <label className="modal__label">Email Address</label>
            <input
              type="email"
              placeholder="robert@company.com"
              value={email}
              onChange={function (e) {
                setEmail(e.target.value);
                clearError("email");
              }}
              className={`modal__input ${errors.email ? "modal__input--err" : ""}`}
            />
            {errors.email && (
              <p className="modal__err-text">
                <AlertIcon /> {errors.email}
              </p>
            )}
          </div>

          <div className="modal__field">
            <label className="modal__label">System Role</label>
            <select
              value={role}
              onChange={function (e) {
                setRole(e.target.value);
                clearError("role");
              }}
              className={`modal__select ${errors.role ? "modal__input--err" : ""} ${!role ? "modal__select--placeholder" : ""}`}
            >
              <option value="">Select a role...</option>
              {ROLE.map(function (r) {
                return (
                  <option key={r} value={r}>
                    {r}
                  </option>
                );
              })}
            </select>
            {errors.role && (
              <p className="modal__err-text">
                <AlertIcon /> {errors.role}
              </p>
            )}
          </div>

          <div className="modal__field">
            <label className="modal__label">Initial Status</label>
            <select
              value={status}
              onChange={function (e) {
                setStatus(e.target.value);
              }}
              className="modal__select"
            >
              {STATUS.map(function (s) {
                return (
                  <option key={s} value={s}>
                    {s}
                  </option>
                );
              })}
            </select>
          </div>
        </div>

        <div className="modal__footer">
          <button className="modal__cancel" onClick={onClose}>
            Cancel
          </button>
          <button className="modal__save" onClick={handleSave}>
            Save User
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddNewUser;
