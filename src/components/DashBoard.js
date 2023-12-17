import Router from "../router/Router";

function DashBoard(){

    Router.titleChange(DashBoard.name)

    return (

        `
        
            <h1>Dashboard</h1>
        
        `
    )
}

export default DashBoard;