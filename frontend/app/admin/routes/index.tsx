import { FC } from "react";
import { Route, Routes } from "react-router";
import { UsersPage } from "./users-page";
import { RootPage } from "./root-page";

export const RoutesPage: FC = () => {
    return (
        <Routes>
            <Route path="admin">
                <Route index element={<RootPage />} />
                <Route path="users" element={<UsersPage />} />
            </Route>
        </Routes>
    )
}
