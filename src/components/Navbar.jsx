import "./Navbar.css";

var PAGE_TITLES = {
  dashboard: "Main Dashboard",
  users: "User Management",
  components: "Component Library",
  leads: "Leads",
  tasks: "Tasks",
  revenue: "Revenue",
};

var SearchIcon = () => (
  <svg
    width="15"
    height="15"
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

var BellIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
    <path d="M13.73 21a2 2 0 0 1-3.46 0" />
  </svg>
);

var GridIcon = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="3" width="7" height="7" />
    <rect x="14" y="3" width="7" height="7" />
    <rect x="14" y="14" width="7" height="7" />
    <rect x="3" y="14" width="7" height="7" />
  </svg>
);

var MenuIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

function Navbar({ currentPage, onHamburgerClick, onComponentsClick }) {
  var title = PAGE_TITLES[currentPage] || "Dashboard";

  return (
    <header className="navbar">
      <div className="navbar__left">
        <button className="navbar__hamburger" onClick={onHamburgerClick}>
          <MenuIcon />
        </button>
        <h2 className="navbar__title">{title}</h2>
      </div>

      <div className="navbar__search">
        <span className="navbar__search-icon">
          <SearchIcon />
        </span>
        <input
          type="text"
          placeholder="Search data, users, activities..."
          className="navbar__search-input"
        />
      </div>

      <div className="navbar__right">
        <nav className="navbar__links">
          <button className="navbar__link">Overview</button>
          <button className="navbar__link">Analytics</button>
          <button className="navbar__link">Reports</button>
          <button
            onClick={onComponentsClick}
            className={`navbar__link navbar__link--comp ${currentPage === "components" ? "navbar__link--active" : ""}`}
          >
            <GridIcon /> Components
          </button>
        </nav>

        <div className="navbar__bell">
          <BellIcon />
          <span className="navbar__bell-badge">3</span>
        </div>

        <div className="navbar__avatar">JD</div>
      </div>
    </header>
  );
}

export default Navbar;
