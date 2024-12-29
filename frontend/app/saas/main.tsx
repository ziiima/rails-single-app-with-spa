import { createRoot } from "react-dom/client"
import { App } from "./app"

const rootElm = document.querySelector("#app")

if(!rootElm) {
    console.error("not supporting")
    throw new Error("shit")
}
const root = createRoot(rootElm)
root.render(<App />)