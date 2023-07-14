import React from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { PropTypes } from "prop-types";
import PerfectScrollbar from "perfect-scrollbar";
import {
  Nav,
  NavLink as ReactstrapNavLink,
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
            {logoImg !== null || logoText !== null ? (
              <div className="logo">
                {logoImg}
                {logoText}
              </div>
            ) : null}
            <Nav>
              {routes.map((prop, key) => {
                if (prop.redirect) return null;
                if (prop.children && prop.children.length > 0) {
                  const isOpen = dropdownOpen[prop.name];
                  return (
                    <li className="nav-item" key={key}>
                      <Dropdown
                        nav
                        isOpen={isOpen}
                        toggle={() => toggleDropdown(prop.name)}
                      >
                        <DropdownToggle nav caret>
                          <i className={prop.icon} />
                          <p>{rtlActive ? prop.rtlName : prop.name}</p>
                        </DropdownToggle>
                        <DropdownMenu className="sidebar-dropdown-menu">
                          {prop.children.map((childProp, childKey) => (
                            <DropdownItem
                              key={childKey}
                              className={activeRoute(
                                childProp.layout + childProp.path
                              )}
                              tag={NavLink}
                              to={childProp.layout + childProp.path}
                              onClick={props.toggleSidebar}
                            >
                              <i className={childProp.icon} />
                              <p>
                                {rtlActive
                                  ? childProp.rtlName
                                  : childProp.name}
                              </p>
                            </DropdownItem>
                          ))}
                        </DropdownMenu>
                      </Dropdown>
                    </li>
                  );
                } else {
                  return (
                    <li
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
                    </li>
                  );
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
