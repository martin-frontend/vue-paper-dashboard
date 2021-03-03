import DashboardLayout from "@/layout/dashboard/DashboardLayout.vue";
// GeneralViews
import NotFound from "@/pages/NotFoundPage.vue";

// Admin pages
// import Dashboard from "@/pages/Dashboard.vue";
// import UserProfile from "@/pages/UserProfile.vue";
// import Notifications from "@/pages/Notifications.vue";
// import Icons from "@/pages/Icons.vue";
// import Maps from "@/pages/Maps.vue";
// import Typography from "@/pages/Typography.vue";
// import TableList from "@/pages/TableList.vue";
import TableList from "@/pages/TableList.vue";
import Login from "@/pages/Login";

const routes = [
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/userProfile",
    children: [
      {
        path: "userProfile",
        name: "userProfile",
        component: TableList
      }
    ]
  },
  { 
    path: "/login",
    name: "login",
    component: Login 
  },
  { path: "*", component: NotFound }
];

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes;
