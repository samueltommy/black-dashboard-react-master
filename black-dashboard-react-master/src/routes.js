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
import Parents from "views/Parents.js";
import Baby from "views/Baby.js";
import Users from "views/Users.js"
import Satker from "views/Satker.js";
import PantauNasional from "views/PantauNasional.js";
import PantauSatker from "views/PantauSatker.js";
import PantauAnak from "views/PantauAnak.js";
import Settings from "views/Settings";
import SettingsBaby from "views/SettingsBaby.js";
import SettingsNakes from "views/SettingsNakes.js";
import SettingsSatker from "views/SettingsSatker";
import Typography from "views/Typography.js";
import Monitor from "views/Monitor.js";


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
    component: <Dashboard/>,
    layout: "/admin",
  },
  {
    name: "Daftar",
    icon: "tim-icons icon-atom",
    layout: "/admin",
    path: "/daftar",
    children:[
      {
        path: "/daftarortu",
        name: "Pengguna Baru",
        component: <Parents/>,
        layout: "/admin",
      },
      {
        path: "/daftaranak",
        name: "Anak Baru",
        component: <Baby/>,
        layout: "/admin",
      },
      {
        path: "/daftaruser",
        name:"Tenaga Kesehatan Baru",
        component: <Users/>,
        layout: "/admin",
      },
      {
        path: "/daftarsatker",
        name: "Satuan Kerja Baru",
        component: <Satker/>,
        layout: "/admin",
      },
    ],
  },
  {
    name: "Pemantauan",
    icon: "tim-icons icon-bell-55",
    layout: "/admin",
    path: "/pemantauan",
    children:[
      {
        path: "/pantaunasional",
        name: "Nasional",
        component: <PantauNasional/>,
        layout: "/admin",
      },
      {
        path: "/pantausatker",
        name: "Puskesmas",
        component: <PantauSatker/>,
        layout: "/admin",
      },
      {
        path: "/pantauanak",
        name: "Individu",
        component: <PantauAnak/>,
        layout: "/admin",
      },
    ],
  },
  {
    path: "/monitor",
    name: "Mengisi Pengukuran",
    icon: "tim-icons icon-single-02",
    component: <Monitor/>,
    layout: "/admin",
  },
  {
    name: "Pengaturan",
    icon: "tim-icons icon-puzzle-10",
    layout: "/admin",
    path: "/pengaturan",
    children: [
      {
        path: "/settings",
        name: "Settings Parent",
        component: <Settings/>,
        layout: "/admin",
      },
      {
        path: "/settingsbaby",
        name: "Settings Baby",
        component: <SettingsBaby/>,
        layout: "/admin",
      },
      {
        path: "/settingsnakes",
        name: "Settings Nakes",
        component: <SettingsNakes/>,
        layout: "/admin",
      },
      {
        path: "/settingssatker",
        name: "Settings Satker",
        component: <SettingsSatker/>,
        layout: "/admin",
      },
    ]
  },
  {
    path: "/typography",
    name: "Typography",
    icon: "tim-icons icon-align-center",
    component: <Typography/>,
    layout: "/admin",
  },
];

export default routes;
