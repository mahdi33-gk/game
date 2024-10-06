function display(){
    const ul = document.getElementById('users-list');
    for(const user of data){
        console.log(user.name);
        const li = document.createElement('li');
        li.innerText ='user.name'
        ul.appendChild(li);
    }
}