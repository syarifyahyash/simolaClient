import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../views/Dashboard";
import Calendar from "../views/Calendar";
import NotFound from "../views/NotFound";
import Penyewaan from "../views/Penyewaan";
import TambahPenyewaan from "../views/TambahPenyewaan";
import Room from "../views/Room";
import Car from "../views/Car";
import Authentication from "../views/Authentication";
import ProtectedRoute from "./protected";
// navigation guard
// const requireAuth = (to: any, from: any, next: any) => {
//   if (!localStorage.getItem('token')) {
//     next({ path: '/login' });
//   } else {
//     next();
//   }
// protected route except for login
// const ProtectedRoute = ({ user, redirectPath = "/", children }: typeRoutes) => {
//   if (!user) {
//     return <Navigate to={redirectPath} replace />;
//   }
//
//   return children ? children : <Outlet />;
// };

// export default ProtectedRoute;
// const router = createBrowserRouter([
//   {
//     path: "/login",
//     element: <Authentication />,
//   },
//   {
//     path: "/",
//     element: <ProtectedRoute user={localStorage.getItem('token')} redirectPath="/login"><Dashboard /></ProtectedRoute>,
//   },
//   {
//     path: "/calendar",




const router = createBrowserRouter([
  {
    path: "/login",
    element: <Authentication />,
  },
  {
    path: "/",
    element: ProtectedRoute({ children: <Dashboard /> }),
  },
  {
    path: "/calendar",
    element: ProtectedRoute({ children: <Calendar /> }),
  },
  {
    path: "/penyewaan",
    element: ProtectedRoute({ children: <Penyewaan /> }),
  },
  {
    path: "/penyewaan/create",
    element: ProtectedRoute({ children: <TambahPenyewaan /> }),
  },
  {
    path: "/settings/room",
    element: ProtectedRoute({ children: <Room /> }),
  },
  {
    path: "/settings/car",
    element: ProtectedRoute({ children: <Car /> }),
  },
  // handle 404
  {
    path: "*",
    element: <NotFound />
  },
]);

export default router;
