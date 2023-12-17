import NavBar from "./Navigation"

function App(){

    return (

        `
    
            <div class="app-wrapper">
            
            
                <header>
                
                    ${NavBar()}
                
                </header>

                <section class="section-out out"></section>
            
            </div>
        
        `
    )
}

export default App


