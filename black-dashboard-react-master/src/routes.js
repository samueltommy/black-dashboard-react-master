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
import LoginPage from "views/LoginPage.js";
import Dashboard from "views/Dashboard.js";
import Icons from "views/Icons.js";
import Map from "views/Map.js";
import Notifications from "views/Notifications.js";
import TableList from "views/TableList.js";
import Typography from "views/Typography.js";
import UserProfile from "views/UserProfile.js";

var routes = [
  {
    path: "/login",
    name:"Login",
    component: <LoginPage />,
    layout: "/admin",
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "tim-icons icon-chart-pie-36",
    component: <Dashboard />,
    layout: "/admin",
  },
  {
    name: "Daftar",
    icon: "tim-icons icon-atom",
    children: [
      {
        path: "/icons",
        name: "Pengguna Baru",
        component: <Icons />,
        layout: "/admin",
      },
      {
        path: "/map",
        name: "Puskesmas Baru",
        component: <Map />,
        layout: "/admin",
      },
    ],
  },
  {
    name: "Pemantauan",
    icon: "tim-icons icon-bell-55",
    layout: "/admin",
    children:[
      {
        path: "/notification",
        name: "Nasional",
        component: <Notifications />,
        layout: "/admin",
      },
      {
        path: "/",
        name: "Puskesmas",
        component: <Notifications />,
        layout: "/admin",
      },
      {
        path: "/",
        name: "Individu",
        component: <Notifications />,
        layout: "/admin",
      },
    ],
  },
  {
    path: "/user-profile",
    name: "Mengisi Pengukuran",
    icon: "tim-icons icon-single-02",
    component: <UserProfile />,
    layout: "/admin",
  },
  {
    path: "/tables",
    name: "Data Pengguna",
    icon: "tim-icons icon-puzzle-10",
    component: <TableList />,
    layout: "/admin",
  },
  {
    path: "/typography",
    name: "Typography",
    icon: "tim-icons icon-align-center",
    component: <Typography />,
    layout: "/admin",
  },
];

export default routes;
