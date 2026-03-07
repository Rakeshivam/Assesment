import "./index.css";

var LIB_NAV = [
  "Buttons",
  "Input Fields",
  "Status Badges",
  "Card Layouts",
  "Navigation",
  "Data Tables",
];

var SOFT_BADGES = [
  { label: "Success", cls: "soft-green" },
  { label: "Warning", cls: "soft-yellow" },
  { label: "Danger", cls: "soft-red" },
  { label: "Information", cls: "soft-blue" },
];

var SOLID_BADGES = [
  { label: "Active", cls: "solid-green" },
  { label: "Pending", cls: "solid-yellow" },
  { label: "Critical", cls: "solid-red" },
];

var BarChartIcon = function () {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#3b82f6"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="18" y1="20" x2="18" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" />
    </svg>
  );
};

var DotsIcon = function () {
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

var MailIcon = function () {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#94a3b8"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
};

function ComponentLibrary() {
  return (
    <div className="cl">
      <aside className="cl__nav">
        <div className="cl__nav-header">
          <p className="cl__nav-title">Library Navigation</p>
          <p className="cl__nav-version">System Version 1.2.0</p>
        </div>
        {LIB_NAV.map(function (item, i) {
          return (
            <button
              key={item}
              className={`cl__nav-btn ${i === 0 ? "cl__nav-btn--active" : ""}`}
            >
              {item}
            </button>
          );
        })}
      </aside>

      <div className="cl__content">
        <span className="cl__variant-tag">Variant 5 of 5</span>
        <h2 className="cl__page-title">Component Library</h2>
        <p className="cl__page-desc">
          Global reusable UI elements for high-performance CRM dashboard
          applications. Built with modularity and design consistency.
        </p>

        {/* Buttons */}
        <section className="cl__section">
          <h3 className="cl__section-title">Buttons & Actions</h3>
          <p className="cl__section-desc">
            Interactive elements for core user flows.
          </p>
          <div className="cl__btn-groups">
            <div>
              <p className="cl__group-label">PRIMARY STATES</p>
              <div className="cl__btn-row">
                <button className="cl-btn cl-btn--primary">
                  Primary Button
                </button>
                <button className="cl-btn cl-btn--soft">Soft Primary</button>
                <button className="cl-btn cl-btn--outline">
                  Outline Primary
                </button>
              </div>
            </div>
            <div>
              <p className="cl__group-label">SECONDARY</p>
              <div className="cl__btn-row">
                <button className="cl-btn cl-btn--secondary">Secondary</button>
                <button className="cl-btn cl-btn--ghost">Ghost Button</button>
              </div>
            </div>
          </div>
        </section>

        {/* Inputs */}
        <section className="cl__section">
          <h3 className="cl__section-title">Input Fields</h3>
          <p className="cl__section-desc">
            Standardized form controls for data entry.
          </p>
          <div className="cl__inputs-grid">
            <div>
              <p className="cl__group-label">DEFAULT</p>
              <input className="cl-input" placeholder="Enter value..." />
            </div>
            <div>
              <p className="cl__group-label">WITH ICON</p>
              <div className="cl-input-wrap">
                <span className="cl-input-icon">
                  <MailIcon />
                </span>
                <input
                  className="cl-input cl-input--icon"
                  placeholder="email@company.com"
                />
              </div>
            </div>
            <div>
              <p className="cl__group-label">ERROR STATE</p>
              <input
                className="cl-input cl-input--error"
                defaultValue="Invalid data"
              />
              <p className="cl-err-text">Please enter a valid input.</p>
            </div>
          </div>
        </section>

        {/* Badges */}
        <section className="cl__section">
          <h3 className="cl__section-title">Status Badges</h3>
          <p className="cl__section-desc">
            Visual indicators for categorization and priority.
          </p>
          <div className="cl__badge-groups">
            <div>
              <p className="cl__group-label">SOFT STYLE</p>
              <div className="cl__badge-row">
                {SOFT_BADGES.map(function (b) {
                  return (
                    <span
                      key={b.label}
                      className={`cl-badge cl-badge--${b.cls}`}
                    >
                      <span className="cl-badge__dot" />
                      {b.label}
                    </span>
                  );
                })}
              </div>
            </div>
            <div>
              <p className="cl__group-label">SOLID STYLE</p>
              <div className="cl__badge-row">
                {SOLID_BADGES.map(function (b) {
                  return (
                    <span
                      key={b.label}
                      className={`cl-badge cl-badge--${b.cls}`}
                    >
                      {b.label}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Cards */}
        <section className="cl__section">
          <h3 className="cl__section-title">Card Layouts</h3>
          <p className="cl__section-desc">
            Content containers for organized data presentation.
          </p>
          <div className="cl__cards-grid">
            <div className="cl-card">
              <div className="cl-card__img" />
              <div className="cl-card__body">
                <h4 className="cl-card__title">Standard Action Card</h4>
                <p className="cl-card__desc">
                  A simple card to present content blocks with a primary action.
                </p>
                <button className="cl-card__btn">View Details</button>
              </div>
            </div>

            <div className="cl-metric">
              <div className="cl-metric__top">
                <div className="cl-metric__icon">
                  <BarChartIcon />
                </div>
                <button className="cl-metric__dots">
                  <DotsIcon />
                </button>
              </div>
              <h4 className="cl-metric__title">Metric Highlight</h4>
              <p className="cl-metric__desc">
                Real-time analytical data visualization component.
              </p>
              <p className="cl-metric__value">
                84.2%
                <span className="cl-metric__change">
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
                  12%
                </span>
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ComponentLibrary;
