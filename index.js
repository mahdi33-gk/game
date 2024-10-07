function display(){
    const ul = document.getElementById('users-list');
    for(const user of data){
        console.log(user.name);
        const li = document.createElement('li');
        li.innerText ='user.name'
        ul.appendChild(li)
        li.TEXT_NODE
    }
}
function display(){
    const postcontainer = document.getElementById('heythere')
    for(const post of posts){
        const postdiv = document.createElement('div')
        postdiv.innerHTML = ` 
            <h3>hey</h3>
        
        `
        postcontainer.appendChild('postdiv')
    } 
}