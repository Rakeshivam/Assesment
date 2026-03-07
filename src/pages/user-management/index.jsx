import { useState } from "react";
import "./index.css";

var ROLE = ["All Roles", "Admin", "Editor", "Viewer"];
var STATUS = ["All Status", "Active", "Inactive", "Pending"];

var SearchIcon = function () {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
};

var EditIcon = function () {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
    </svg>
  );
};

var TrashIcon = function () {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="3 6 5 6 21 6" />
      <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
      <path d="M10 11v6" />
      <path d="M14 11v6" />
      <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
    </svg>
  );
};

var DownloadIcon = function () {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );
};

var PlusIcon = function () {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  );
};

var NoResultsIcon = function () {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#cbd5e1"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
      <line x1="8" y1="11" x2="14" y2="11" />
    </svg>
  );
};

function UserManagement({ usersList, onAddClick, onDelete }) {
  var [searchText, setSearchText] = useState("");
  var [roleFilter, setRoleFilter] = useState("All Roles");
  var [statusFilter, setStatusFilter] = useState("All Status");

  var filteredUsers = usersList.filter(function (user) {
    var query = searchText.toLowerCase();
    var matchSearch =
      user.name.toLowerCase().includes(query) ||
      user.email.toLowerCase().includes(query) ||
      user.role.toLowerCase().includes(query);
    var matchRole = roleFilter === "All Roles" || user.role === roleFilter;
    var matchStatus =
      statusFilter === "All Status" || user.status === statusFilter;
    return matchSearch && matchRole && matchStatus;
  });

  function handleDelete(userId, userName) {
    var confirmed = window.confirm('Delete user "' + userName + '"?');
    if (confirmed) onDelete(userId);
  }

  return (
    <div className="um">
      <div className="um__header">
        <div className="um__header-text">
          <h2 className="um__title">User Management</h2>
          <p className="um__subtitle">
            Manage your team's access levels and account status.
          </p>
        </div>
        <div className="um__header-btns">
          <button className="um__export-btn">
            <DownloadIcon /> Export
          </button>
          <button className="um__add-btn" onClick={onAddClick}>
            <PlusIcon /> Add New User
          </button>
        </div>
      </div>

      <div className="um__filters">
        <div className="um__search-wrap">
          <span className="um__search-icon">
            <SearchIcon />
          </span>
          <input
            type="text"
            placeholder="Search by name, email or role..."
            value={searchText}
            onChange={function (e) {
              setSearchText(e.target.value);
            }}
            className="um__search-input"
          />
        </div>
        <select
          value={roleFilter}
          onChange={function (e) {
            setRoleFilter(e.target.value);
          }}
          className="um__select"
        >
          {ROLE.map(function (opt) {
            return <option key={opt}>{opt}</option>;
          })}
        </select>
        <select
          value={statusFilter}
          onChange={function (e) {
            setStatusFilter(e.target.value);
          }}
          className="um__select"
        >
          {STATUS.map(function (opt) {
            return <option key={opt}>{opt}</option>;
          })}
        </select>
      </div>

      <div className="um__table-card">
        <div className="um__table-scroll">
          <table className="um__table">
            <thead>
              <tr>
                <th>AVATAR</th>
                <th>FULL NAME</th>
                <th>EMAIL</th>
                <th>ROLE</th>
                <th>STATUS</th>
                <th>ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.length === 0 && (
                <tr>
                  <td colSpan="6" className="um__no-results">
                    <NoResultsIcon />
                    <p>No users found. Try a different search or filter.</p>
                  </td>
                </tr>
              )}
              {filteredUsers.map(function (user) {
                return (
                  <tr key={user.id}>
                    <td>
                      <div className="um__avatar">{user.initials}</div>
                    </td>
                    <td>
                      <span className="um__name">{user.name}</span>
                    </td>
                    <td>
                      <span className="um__email">{user.email}</span>
                    </td>
                    <td>
                      <span className="um__role">{user.role}</span>
                    </td>
                    <td>
                      <span
                        className={`um__status um__status--${user.status.toLowerCase()}`}
                      >
                        <span className="um__dot" />
                        {user.status}
                      </span>
                    </td>
                    <td>
                      <div className="um__actions">
                        <button className="um__btn-edit" title="Edit user">
                          <EditIcon />
                        </button>
                        <button
                          className="um__btn-delete"
                          title="Delete user"
                          onClick={function () {
                            handleDelete(user.id, user.name);
                          }}
                        >
                          <TrashIcon />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className="um__footer">
          <p className="um__footer-text">
            Showing <strong>{filteredUsers.length}</strong> of{" "}
            <strong>{usersList.length}</strong> users
          </p>
          <div className="um__pagination">
            {["1", "2", "3"].map(function (btn) {
              return (
                <button
                  key={btn}
                  className={`um__page-btn ${btn === "1" ? "um__page-btn--active" : ""}`}
                >
                  {btn}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserManagement;
