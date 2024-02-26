import { Navigate } from "react-router-dom";
import useToken from "../hooks/useToken";
import { PrivateRouteProps } from "../types/components/privateroute.types";

const PrivateRoute = ({ component: Component, ...restProps }: PrivateRouteProps) => {

    const token = useToken()
    const isAuthenticated = !!token;

    return isAuthenticated
        ? <Component {...restProps} />
        : <Navigate to="/auth" replace />;
};

export default PrivateRoute;