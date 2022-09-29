window.onload = init();


function init(){
    changer()
}


function changer(){
    let list = document.getElementsByClassName('elem');
    for (let b of list){
        b.onclick = function(){
            const href = this.getAttribute('data-href-file')
            const preview = document.getElementById('preview')
            preview.setAttribute('src', href)
        }
    }
}