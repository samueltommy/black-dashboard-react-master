import React from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { PropTypes } from "prop-types";
import PerfectScrollbar from "perfect-scrollbar";
import {
  Nav,
  NavLink as ReactstrapNavLink,
  NavItem,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import {
  BackgroundColorContext,
  backgroundColors,
} from "contexts/BackgroundColorContext";

var ps;

function Sidebar(props) {
  const location = useLocation();
  const sidebarRef = React.useRef(null);
  const [dropdownOpen, setDropdownOpen] = React.useState({});

  const userRole = parseInt(localStorage.getItem("role"), 10);
  const roleRoutes = {
    // Define your role routes here
    1: ["/admin/dashboard", "/admin/daftar", "/admin/pemantauan", "/admin/pengaturan","/admin/daftarortu", "/admin/daftaranak", "/admin/daftaruser", "/admin/daftarsatker", "/admin/pantaunasional", "/admin/settings", "/admin/settingsbaby", "/admin/settingsnakes", "/admin/settingssatker", "/admin/monitor"],
    2: ["/admin/dashboard", "/admin/daftar", "/admin/pemantauan", "/admin/pengaturan", "/admin/pantausatker", "/admin/daftarortu", "/admin/daftaranak", "/admin/daftaruser", "/admin/settings", "/admin/settingsbaby", "/admin/settingsnakes", "/admin/monitor"],
    3: ["/admin/dashboard", "/admin/pemantauan", "/admin/pantausatker", "/admin/monitor"],
    4: ["/admin/dashboard", "/admin/pemantauan", "/admin/pantauanak"],
  };

  const allowedRoutes = roleRoutes[userRole] || [];

  const activeRoute = (routeName) => {
    return location.pathname === routeName ? "active" : "";
  };

  const toggleDropdown = (name) => {
    setDropdownOpen((prevState) => ({
      ...prevState,
      [name]: !prevState[name],
    }));
  };

  React.useEffect(() => {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(sidebarRef.current, {
        suppressScrollX: true,
        suppressScrollY: false,
      });
    }

    return function cleanup() {
      if (navigator.platform.indexOf("Win") > -1) {
        ps.destroy();
      }
    };
  });

  const linkOnClick = () => {
    document.documentElement.classList.remove("nav-open");
  };

  const { routes, rtlActive, logo } = props;
  let logoImg = null;
  let logoText = null;

  if (logo !== undefined) {
    if (logo.outterLink !== undefined) {
      logoImg = (
        <a
          href={logo.outterLink}
          className="simple-text logo-mini"
          target="_blank"
          onClick={props.toggleSidebar}
        >
          <div className="logo-img">
            <img src={logo.imgSrc} alt="react-logo" />
          </div>
        </a>
      );
      logoText = (
        <a
          href={logo.outterLink}
          className="simple-text logo-normal"
          target="_blank"
          onClick={props.toggleSidebar}
        >
          {logo.text}
        </a>
      );
    } else {
      logoImg = (
        <Link
          to={logo.innerLink}
          className="simple-text logo-mini"
          onClick={props.toggleSidebar}
        >
          <div className="logo-img">
            <img src={logo.imgSrc} alt="react-logo" />
          </div>
        </Link>
      );
      logoText = (
        <Link
          to={logo.innerLink}
          className="simple-text logo-normal"
          onClick={props.toggleSidebar}
        >
          {logo.text}
        </Link>
      );
    }
  }

  return (
    <BackgroundColorContext.Consumer>
      {({ color }) => (
        <div className="sidebar" data={color}>
          <div className="sidebar-wrapper" ref={sidebarRef}>
            <Nav>
              {routes.map((prop, key) => {
                if (prop.redirect) return null;
                if (allowedRoutes.includes(prop.layout + prop.path)) {
                  if (prop.children && prop.children.length > 0) {
                    const isOpen = dropdownOpen[prop.name];
                    return (
                      <Dropdown
                        nav
                        isOpen={isOpen}
                        toggle={() => toggleDropdown(prop.name)}
                        key={key}
                      >
                        <DropdownToggle nav caret>
                          <i className={prop.icon} />
                          <p>{rtlActive ? prop.rtlName : prop.name}</p>
                        </DropdownToggle>
                        <DropdownMenu className="sidebar-dropdown-menu">
                          {prop.children.map((childProp, childKey) => (
                            allowedRoutes.includes(childProp.layout + childProp.path) && (
                              <NavLink
                                key={childKey}
                                className={activeRoute(
                                  childProp.layout + childProp.path
                                )}
                                to={childProp.layout + childProp.path}
                                onClick={props.toggleSidebar}
                              >
                                <DropdownItem>
                                  <i className={childProp.icon} />
                                  <p>
                                    {rtlActive
                                      ? childProp.rtlName
                                      : childProp.name}
                                  </p>
                                </DropdownItem>
                              </NavLink>
                            )
                          ))}
                        </DropdownMenu>
                      </Dropdown>
                    );
                  } else {
                    return (
                      <NavItem
                        className={
                          activeRoute(prop.layout + prop.path) +
                          (prop.pro ? " active-pro" : "")
                        }
                        key={key}
                      >
                        <NavLink
                          to={prop.layout + prop.path}
                          className="nav-link"
                          onClick={props.toggleSidebar}
                        >
                          <i className={prop.icon} />
                          <p>{rtlActive ? prop.rtlName : prop.name}</p>
                        </NavLink>
                      </NavItem>
                    );
                  }
                } else {
                  return null;
                }
              })}
            </Nav>
          </div>
        </div>
      )}
    </BackgroundColorContext.Consumer>
  );
}

export default Sidebar;
