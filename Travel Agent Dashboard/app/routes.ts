import { type RouteConfig, route, layout} from "@react-router/dev/routes";

export default [
    layout("routes/admin/Adminlayout.tsx", [
            route('dashboard', 'routes/admin/dashboard.tsx' ),
             route('all-users', 'routes/admin/AllUsers.tsx' )
    ])

] satisfies RouteConfig;