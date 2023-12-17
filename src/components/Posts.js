import Router from "../router/Router";


function Posts(){

    Router.titleChange(Posts.name)
    return (

        `
        
            <h1>${Posts.name}</h1>
        
        `
    )
}

export default Posts;

