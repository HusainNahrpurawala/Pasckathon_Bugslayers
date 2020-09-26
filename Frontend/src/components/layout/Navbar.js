import React from "react";

function Navbar() {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-dark fixed-top"
        id="mainNav"
      >
        <div className="container">
          <a className="navbar-brand js-scroll-trigger" href="/" style={{color:"#F5F5DC" }}>
            SEPSIS
          </a>
          <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            Menu
            <i className="fa fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav text-uppercase ml-auto">
              {localStorage.getItem("token") ? (
                <li className="nav-item">
                  <a
                    className="nav-link js-scroll-trigger"
                    onClick={() => {
                      localStorage.removeItem("token");
                    }}
                    href="/form"
                  >
                    Sign Out
                  </a>
                </li>
              ) : (
                <div>
                  <li className="nav-item">
                    <a className="nav-link js-scroll-trigger" href="/signup">
                      SignUP
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link js-scroll-trigger" href="/login">
                      Login
                    </a>
                  </li>
                </div>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
