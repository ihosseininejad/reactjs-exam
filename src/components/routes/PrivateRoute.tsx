import { Navigate } from "react-router-dom";
import useToken from "../../hooks/useToken";

type Props = {
    component: React.FC,
}

const PrivateRoute = ({ component: Component, ...rest }: Props) => {

    const token = useToken()
    const isAuthenticated = !!token;

    return isAuthenticated
        ? <Component {...rest} />
        : <Navigate to="/auth" replace />;
};

export default PrivateRoute;