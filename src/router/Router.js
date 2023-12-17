import Routes from "./Routes";

class Router {


    static navigateTo = (url) => {
        history.pushState(null, null, url);
        Router.setRouter(Routes)
    }

    static setRouter = async (routes = []) => {
       
        const potentialMatches = routes.map(route => {
            return {
                route,
                isMatch: location.pathname === route.path,
                
            }
        });

        let match = potentialMatches.find(potmatch => {
            return potmatch.isMatch
        })

        if(!match){
            match = Router.setDefaultRoute(routes[0], true);
        }

        console.log(match)


        Router.navRoute();

        Router.render('.out', match.route.view());
    }

    static render(node, view){

       return  document.querySelector(node).innerHTML = view

    }
    static setDefaultRoute(defroute, isMatch){
        return {
            route: defroute,
            isMatch:isMatch
        }
    }

    static navRoute(){

        document.addEventListener("DOMContentLoaded", () => {
            document.body.addEventListener("click", (e) => {

                if(e.target.matches("[data-link]")){
                    e.preventDefault();
                    Router.navigateTo(e.target.href);
                }
            })
            
        })

    }

    static initPopStateChange(){

        window.addEventListener("popstate", () => {
            Router.setRouter(Routes)
        })
    }

    static titleChange(title){
        return document.title = title;
    }

    

   
   
}

Router.initPopStateChange();

export default Router



