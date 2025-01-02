import { scan } from 'react-scan';
import { createRoot } from "react-dom/client"
import { App } from "./app"

const rootElm = document.querySelector("#app")
const { isProd } = process.env

if(!rootElm) {
    console.error("not supporting")
    throw new Error("shit")
}
const root = createRoot(rootElm)

if (typeof window !== 'undefined' && !isProd) {
    scan({
      enabled: true,
      log: true, // logs render info to console (default: false)
    });
}

root.render(<App />)