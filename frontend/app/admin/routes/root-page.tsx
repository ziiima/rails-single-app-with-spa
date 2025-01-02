import { FC } from "react";
import { NavLink } from "react-router";


export const RootPage: FC = () => {
    return (
        <div>
            sample from admin page
            <div>
            <NavLink to="/admin/users">
        ユーザー
      </NavLink>
            </div>
        </div>
    )
}
