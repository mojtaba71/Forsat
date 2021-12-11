import Login from "../Components/Login/Login";
import UserManagement from "../Components/UserManagment/UserManagement";
import RoleManagement from "../Components/RoleManagement/RoleManagement";
import SimpleSignature from "../Components/SimpleSignature/SimpleSignature";

const routes = [
  { path: "/login", component: Login },
  { path: "/main/user-management", component: UserManagement },
  { path: "/main/role-management", component: RoleManagement },
  { path: "/main/simple-signature", component: SimpleSignature },
];

export default routes;
