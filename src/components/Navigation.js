import Routes from "../router/Routes"

function NavBar(){


    return (

        `
            <nav class="nav">

                <ul>
                
                    ${Routes.map((route, i) => {
                        return `<li><a class="nav__link" data-link="" href="${route.path}">${route.name}</a></li>`
                    }).join("")}

                
                </ul>
               
            </nav>

            
        
        `
    )
}

export default NavBar;