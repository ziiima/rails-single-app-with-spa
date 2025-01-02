import { BrowserRouter } from "react-router"
import { RoutesPage } from "./routes"
import { FC, StrictMode } from "react"

export const App: FC = () => {
    return (
        <StrictMode>
            <BrowserRouter>
                <RoutesPage />
            </BrowserRouter>
        </StrictMode>
    )
}
