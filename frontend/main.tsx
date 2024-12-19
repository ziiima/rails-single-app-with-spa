import { createRoot } from 'react-dom/client';
import { App } from "./app"

const rootElm = document.getElementById("app")

if(!rootElm) {
    console.error("not found root")
} else {
    const root = createRoot(rootElm);
    root.render(<App />);
}
