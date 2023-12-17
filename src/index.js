import Router from "./router/Router";
import Routes from "./router/Routes";
import App from "./components/App";

import "../style.css"

function Render({root, app}){

    this.render = () => {
        return document.querySelector(root).insertAdjacentHTML("beforeend", app);
    }
}


const root = new Render({
    root: "#app",
    app: App()
})

root.render()


Router.setRouter(Routes);