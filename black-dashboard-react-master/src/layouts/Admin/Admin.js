/*!

=========================================================
* Black Dashboard React v1.2.2
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, {useContext} from "react";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";

// core components
import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Footer from "components/Footer/Footer.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import FixedPlugin from "components/FixedPlugin/FixedPlugin.js";

import routes from "routes.js";

import { BackgroundColorContext } from "contexts/BackgroundColorContext";
import LoginPage from "views/LoginPage.js";
import Parents from "views/Parents";
import Baby from "views/Baby";
import Users from "views/Users";
import Satker from "views/Satker";
import PantauNasional from "views/PantauNasional";
import PantauSatker from "views/PantauSatker.js";
import PantauAnak from "views/PantauAnak.js";
import Settings from "views/Settings";
import SettingsBaby from "views/SettingsBaby";
import SettingsNakes from "views/SettingsNakes";
import SettingsSatker from "views/SettingsSatker";

var ps;

const userRole = parseInt(localStorage.getItem('role'), 10);
function Admin(prop) {
  
  const location = useLocation();
  const mainPanelRef = React.useRef(null);
  const [sidebarOpened, setsidebarOpened] = React.useState(
    document.documentElement.className.indexOf("nav-open") !== -1
  );
  React.useEffect(() => {
    if (navigator.platform.indexOf("Win") > -1) {
      document.documentElement.className += " perfect-scrollbar-on";
      document.documentElement.classList.remove("perfect-scrollbar-off");
      ps = new PerfectScrollbar(mainPanelRef.current, {
        suppressScrollX: true,
      });
      let tables = document.querySelectorAll(".table-responsive");
      for (let i = 0; i < tables.length; i++) {
        ps = new PerfectScrollbar(tables[i]);
      }
    }
    // Specify how to clean up after this effect:
    return function cleanup() {
      if (navigator.platform.indexOf("Win") > -1) {
        ps.destroy();
        document.documentElement.classList.add("perfect-scrollbar-off");
        document.documentElement.classList.remove("perfect-scrollbar-on");
      }
    };
  });
  React.useEffect(() => {
    if (navigator.platform.indexOf("Win") > -1) {
      let tables = document.querySelectorAll(".table-responsive");
      for (let i = 0; i < tables.length; i++) {
        ps = new PerfectScrollbar(tables[i]);
      }
    }
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    if (mainPanelRef.current) {
      mainPanelRef.current.scrollTop = 0;
    }
  }, [location]);
  // this function opens and closes the sidebar on small devices
  const toggleSidebar = () => {
    document.documentElement.classList.toggle("nav-open");
    setsidebarOpened(!sidebarOpened);
  };
  const roleRoutes = {
    1: ["/dashboard", "/daftarortu", "/daftaranak", "/daftaruser", "/daftarsatker", "/pantaunasional", "/pantausatker", "/pantauanak", "/settings", "/settingsbaby", "/settingsnakes", "/settingssatker", "/monitor"],
    2: ["/dashboard", "/pantausatker", "/pantauanak", "/daftarortu", "/daftaranak", "/daftaruser", "/settings", "/settingsbaby", "/settingsnakes", "/settingssatker", "/monitor"],
    3: ["/dashboard", "/pantausatker", "/pantauanak", "/monitor"],
    4: ["/dashboard", "/pantauanak"],
  };
  const getRoutes = (routes) => {
    const allowedRoutes = roleRoutes[userRole];

    console.log('userRole:', userRole);
    console.log('allowedRoutes:', allowedRoutes);
    // Example: Check if the correct role has access to the path
    console.log('Allowed:', allowedRoutes.includes("/dashboard"));
  
    return (
      <>
        {routes.map((route, index) => {
        if (route.layout === "/admin" && allowedRoutes.includes(route.path)) {
          return (
            <Route
              key={index}
              path={route.path}
              element={route.component}
              exact
            />
          );
        } else {
          return null;
        }
      })}

      <Route path={"/login"} element={<LoginPage />} />
      </>
    );
  };
  
  

  
  const getBrandText = (path) => {
    for (let i = 0; i < routes.length; i++) {
      if (location.pathname.indexOf(routes[i].layout + routes[i].path) !== -1) {
        return routes[i].name;
      }
    }
    return "Brand";
  };

  // Check if the current route is the login page
  const isLoginPage = location.pathname === "/admin/login";

  return (
    <BackgroundColorContext.Consumer>
      {({ color, changeColor }) => (
        <React.Fragment>
          {isLoginPage ? null : <Sidebar routes={routes} toggleSidebar={toggleSidebar} />}
          <div className="main-panel" ref={mainPanelRef} data={color}>
            {!isLoginPage && <AdminNavbar brandText={getBrandText(location.pathname)} />}
            <Routes>
              {getRoutes(routes)}
              <Route path={"/daftarortu"} element={<Parents/>} />
              <Route path={"/daftaranak"} element={<Baby/>} />
              <Route path={"/daftaruser"} element={<Users/>} />
              <Route path={"/daftarsatker"} element={<Satker/>} />
              <Route path={"/pantaunasional"} element={<PantauNasional/>} />
              <Route path={"/pantausatker"} element={<PantauSatker/>} />
              <Route path={"/pantauanak"} element={<PantauAnak/>} />
              <Route path={"/settings"} element={<Settings/>} />
              <Route path={"/settingsnakes"} element={<SettingsNakes/>} />
              <Route path={"/settingsbaby"} element={<SettingsBaby/>} />
              <Route path={"/settingssatker"} element={<SettingsSatker/>} />
              <Route
                path="/"
                element={<Navigate to="/admin/dashboard" replace />}
              />
            </Routes>
            {!isLoginPage && location.pathname !== "/admin/maps" && <Footer fluid />}
          </div>
          <FixedPlugin bgColor={color} handleBgClick={changeColor} />
        </React.Fragment>
      )}
    </BackgroundColorContext.Consumer>
  );
}

export default Admin;
