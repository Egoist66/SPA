import DashBoard from "../components/DashBoard";
import Posts from "../components/Posts";

const Routes = [
    {
        path: "/",
        name: "Dashboard",
        view: () => DashBoard()
                
    },
    {
        path: "/posts",
        name: "Posts",
        view: () => Posts()
                 
    },
    {
        path: "/settings",
        name: "Settings",
        view: () => `<h1>Viewing settings</h1>`
        
    },
    {
        path: "/posts/new",
        name: "New Posts",
        view: () =>  `<h1>New Posts</h1>`
        
    },

   
]

export default Routes