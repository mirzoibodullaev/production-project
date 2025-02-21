import { JSX } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { getUserAuthData } from "entities/User";
import { RouterPath } from "shared/config/routeConfig/routeConfig";

interface RequireAuthProps {
    children: JSX.Element;
}

export function RequireAuth({ children }: RequireAuthProps) {
    const auth = useSelector(getUserAuthData);
    const location = useLocation();

    if (!auth) {
        return (
            <Navigate to={RouterPath.main} state={{ from: location }} replace />
        );
    }

    return children;
}
