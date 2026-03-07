import "./index.css";

var STATS = [
  {
    label: "Total Leads",
    value: "2,543",
    change: "+12.5%",
    isUp: true,
    vs: "vs last month",
  },
  {
    label: "Active Users",
    value: "1,205",
    change: "-2.4%",
    isUp: false,
    vs: "vs last month",
  },
  {
    label: "Pending Tasks",
    value: "48",
    change: "+5.0%",
    isUp: true,
    vs: "vs last week",
  },
  {
    label: "Revenue",
    value: "$125,400",
    change: "+18.2%",
    isUp: true,
    vs: "vs last month",
  },
];

var ACTIVITIES = [
  {
    initials: "AR",
    name: "Alex Rivera",
    action: "Downloaded Report",
    status: "Completed",
    date: "Oct 24, 2023",
  },
  {
    initials: "SC",
    name: "Sarah Chen",
    action: "Updated Lead Profile",
    status: "Pending",
    date: "Oct 24, 2023",
  },
  {
    initials: "MJ",
    name: "Mike Johnson",
    action: "New Task Assigned",
    status: "In Progress",
    date: "Oct 23, 2023",
  },
  {
    initials: "ED",
    name: "Emily Davis",
    action: "Signed Contract",
    status: "Completed",
    date: "Oct 23, 2023",
  },
  {
    initials: "GT",
    name: "Global Tech",
    action: "Subscription Renewal",
    status: "Ongoing",
    date: "Oct 22, 2023",
  },
];

var STATUS_CLASSES = {
  Completed: "badge--green",
  Pending: "badge--yellow",
  "In Progress": "badge--blue",
  Ongoing: "badge--purple",
};

var ArrowUp = function () {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" y1="19" x2="12" y2="5" />
      <polyline points="5 12 12 5 19 12" />
    </svg>
  );
};

var ArrowDown = function () {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" y1="5" x2="12" y2="19" />
      <polyline points="19 12 12 19 5 12" />
    </svg>
  );
};

var MoreIcon = function () {
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
      <circle cx="12" cy="5" r="1" />
      <circle cx="12" cy="12" r="1" />
      <circle cx="12" cy="19" r="1" />
    </svg>
  );
};

function StatCard(props) {
  return (
    <div className="stat-card">
      <p className="stat-card__label">{props.label}</p>
      <h3 className="stat-card__value">{props.value}</h3>
      <p
        className={`stat-card__change ${props.isUp ? "stat-card__change--up" : "stat-card__change--down"}`}
      >
        <span className="stat-card__arrow">
          {props.isUp ? <ArrowUp /> : <ArrowDown />}
        </span>
        {props.change}
        <span className="stat-card__vs"> {props.vs}</span>
      </p>
    </div>
  );
}

function Dashboard() {
  return (
    <div className="dashboard">
      <div className="stats-grid">
        {STATS.map(function (item) {
          return <StatCard key={item.label} {...item} />;
        })}
      </div>

      <div className="activities">
        <div className="activities__header">
          <h3 className="activities__title">Recent Activities</h3>
          <div className="activities__btns">
            <button className="btn-outline">Export CSV</button>
            <button className="btn-solid">View All</button>
          </div>
        </div>

        <div className="table-wrap">
          <table className="act-table">
            <thead>
              <tr>
                <th>NAME</th>
                <th>ACTION</th>
                <th>STATUS</th>
                <th>DATE</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {ACTIVITIES.map(function (row, i) {
                return (
                  <tr key={i}>
                    <td>
                      <div className="act-table__user">
                        <div className="act-table__avatar">{row.initials}</div>
                        <span className="act-table__name">{row.name}</span>
                      </div>
                    </td>
                    <td className="act-table__action">{row.action}</td>
                    <td>
                      <span
                        className={`status-badge ${STATUS_CLASSES[row.status]}`}
                      >
                        {row.status}
                      </span>
                    </td>
                    <td className="act-table__date">{row.date}</td>
                    <td>
                      <button className="act-table__more">
                        <MoreIcon />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className="activities__footer">
          <span className="activities__count">
            Showing 1 to 5 of 24 activities
          </span>
          <div className="pagination">
            <button className="pagination__btn">
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
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <button className="pagination__btn">
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
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
