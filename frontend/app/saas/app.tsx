import { BrowserRouter, Route, Routes } from "react-router";

export const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/home" element={<div>sample from home</div>} />
            </Routes>
        </BrowserRouter>
    )
}
