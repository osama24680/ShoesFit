// Header.js (with original design retained)
import React, { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthContext";
import "./header.css"

export default function Header({ logoSrc, variant }) {
  const { isAuthenticated, user, logout } = useContext(AuthContext);
  const [isSticky, setIsSticky] = useState(false);
  const [mobileToggle, setMobileToggle] = useState(false);
  const [sideNav, setSideNav] = useState(false);
  const [searchToggle, setSearchToggle] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`cs_site_header cs_style1 cs_sticky_header ${
          mobileToggle ? "cs_mobile_toggle_active" : ""
        } ${variant} ${isSticky ? "cs_active_sticky" : ""}`}
      >
        <div className="cs_main_header">
          <div className="container">
            <div className="cs_main_header_in">
              <div className="cs_main_header_left">
                <nav className="cs_nav">
                  <ul
                    className={`${
                      mobileToggle ? "cs_nav_list cs_active" : "cs_nav_list"
                    }`}
                  >
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    {!isAuthenticated ? (
                      <li>
                        <Link to="/register">Register</Link>
                      </li>
                    ) : (
                      <>
                        <li>
                          <Link to="/about">About</Link>
                        </li>
                        <li>
                          <Link to="/blog">Blog</Link>
                        </li>
                        <li>
                          <Link to="/gallery">Gallery</Link>
                        </li>
                        <li>
                          <Link to="/models">Models</Link>
                        </li>
                        <li>
                          <Link to="/dashboard">Dashboard</Link>
                        </li>
                        <li>
                          <Link to="/contact">Contact</Link>
                        </li>
                        <li class="welcomeLogout">
                          <li>
                            <span>Welcome, {user.name}</span>
                          </li>
                          <li>
                            <button
                              onClick={handleLogout}
                              className="logout-button"
                            >
                              Logout
                            </button>
                          </li>
                        </li>
                      </>
                    )}
                  </ul>
                  <span
                    className={
                      mobileToggle
                        ? "cs_menu_toggle cs_teggle_active"
                        : "cs_menu_toggle"
                    }
                    onClick={() => setMobileToggle(!mobileToggle)}
                  >
                    <span></span>
                  </span>
                </nav>
              </div>
              <div className="cs_main_header_right">
                <div className="cs_toolbox">
                  <button
                    className="cs_toolbox_btn cs_search_toggle_btn"
                    type="button"
                    onClick={() => setSearchToggle(!searchToggle)}
                  >
                    <svg
                      width={30}
                      height={30}
                      viewBox="0 0 30 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.1684 0C5.91146 0 0 5.90944 0 13.164C0 20.4184 5.91146 26.3394 13.1684 26.3394C16.2681 26.3394 19.1188 25.2535 21.3719 23.4505L26.8571 28.931C27.1339 29.1962 27.5036 29.3426 27.887 29.3386C28.2704 29.3347 28.6371 29.1809 28.9084 28.91C29.1797 28.6392 29.3342 28.2729 29.3386 27.8896C29.3431 27.5064 29.1972 27.1365 28.9322 26.8595L23.4471 21.3762C25.2521 19.1204 26.3397 16.2662 26.3397 13.164C26.3397 5.90944 20.4254 0 13.1684 0ZM13.1684 2.926C18.8435 2.926 23.4099 7.49078 23.4099 13.164C23.4099 18.8371 18.8435 23.4134 13.1684 23.4134C7.4933 23.4134 2.92695 18.8371 2.92695 13.164C2.92695 7.49078 7.4933 2.926 13.1684 2.926Z"
                        fill="currentColor"
                      />
                    </svg>
                  </button>
                  <button
                    className="cs_toolbox_btn cs_sidebar_toggle_btn"
                    type="button"
                    onClick={() => setSideNav(!sideNav)}
                  >
                    <svg
                      width={35}
                      height={30}
                      viewBox="0 0 35 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.483887 2.46544C0.483887 1.10383 1.14618 0 1.96315 0H33.5208C34.3377 0 35 1.10383 35 2.46544C35 3.82708 34.3377 4.93088 33.5208 4.93088H1.96315C1.14618 4.93088 0.483887 3.82708 0.483887 2.46544Z"
                        fill="currentColor"
                      />
                      <path
                        d="M0.483887 14.6694C0.483887 13.3074 1.14618 12.2039 1.96315 12.2039H33.5208C34.3377 12.2039 35 13.3074 35 14.6694C35 16.0309 34.3377 17.1348 33.5208 17.1348H1.96315C1.14618 17.1348 0.483887 16.0309 0.483887 14.6694Z"
                        fill="currentColor"
                      />
                      <path
                        d="M0.483887 26.6267C0.483887 25.2648 1.14618 24.1613 1.96315 24.1613H33.5208C34.3377 24.1613 35 25.2648 35 26.6267C35 27.9883 34.3377 29.0922 33.5208 29.0922H1.96315C1.14618 29.0922 0.483887 27.9883 0.483887 26.6267Z"
                        fill="currentColor"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
