import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Login from "./pages/login/index";
import Dashboard from "./pages/dashboard/index";
import UserManagement from "./pages/user-management/index";
import AddNewUser from "./pages/add-new-user/index";
import ComponentLibrary from "./pages/component-library/index";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [currentPage, setCurrentPage] = useState("dashboard");

  const [showAddUserModal, setShowAddUserModal] = useState(false);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const [usersList, setUsersList] = useState([
    {
      id: 1,
      initials: "JD",
      name: "John Doe",
      email: "john.doe@company.com",
      role: "Admin",
      status: "Active",
    },
    {
      id: 2,
      initials: "JS",
      name: "Jane Smith",
      email: "j.smith@agency.io",
      role: "Editor",
      status: "Inactive",
    },
    {
      id: 3,
      initials: "RB",
      name: "Robert Brown",
      email: "robert.brown@design.com",
      role: "Viewer",
      status: "Active",
    },
    {
      id: 4,
      initials: "ED",
      name: "Emily Davis",
      email: "emily.davis@corp.org",
      role: "Admin",
      status: "Pending",
    },
    {
      id: 5,
      initials: "MW",
      name: "Michael Wilson",
      email: "m.wilson@tech.com",
      role: "Editor",
      status: "Active",
    },
  ]);

  function addNewUser(userData) {
    const words = userData.name.trim().split(" ");
    const initials =
      words.length >= 2
        ? words[0][0].toUpperCase() + words[1][0].toUpperCase()
        : words[0].substring(0, 2).toUpperCase();

    const newUser = {
      id: Date.now(),
      initials: initials,
      name: userData.name,
      email: userData.email,
      role: userData.role,
      status: userData.status,
    };

    setUsersList(function (prevList) {
      return [...prevList, newUser];
    });

    setShowAddUserModal(false);
  }

  function deleteUser(userId) {
    setUsersList(function (prevList) {
      return prevList.filter(function (u) {
        return u.id !== userId;
      });
    });
  }

  function goToPage(pageName) {
    setCurrentPage(pageName);
    setIsSidebarOpen(false);
  }

  if (!isLoggedIn) {
    return <Login onLoginSuccess={() => setIsLoggedIn(true)} />;
  }

  function renderPage() {
    if (currentPage === "dashboard") return <Dashboard />;
    if (currentPage === "users") {
      return (
        <UserManagement
          usersList={usersList}
          onAddClick={() => setShowAddUserModal(true)}
          onDelete={deleteUser}
        />
      );
    }
    if (currentPage === "components") return <ComponentLibrary />;
    return <Dashboard />;
  }

  return (
    <div className="app-shell">
      {isSidebarOpen && (
        <div className="overlay" onClick={() => setIsSidebarOpen(false)} />
      )}

      <Sidebar
        currentPage={currentPage}
        goToPage={goToPage}
        isOpen={isSidebarOpen}
      />

      <div className="right-section">
        <Navbar
          currentPage={currentPage}
          onHamburgerClick={() => setIsSidebarOpen(!isSidebarOpen)}
          onComponentsClick={() => goToPage("components")}
        />
        <main className="page-area">{renderPage()}</main>
      </div>

      {showAddUserModal && (
        <AddNewUser
          onClose={() => setShowAddUserModal(false)}
          onSave={addNewUser}
        />
      )}
    </div>
  );
}

export default App;
