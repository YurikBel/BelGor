window.onload = init();


function init(){
    changer()
}


function changer(){
    let list = document.getElementsByClassName('link');
    if( window.innerWidth >= 700 ){
        for (let b of list){
            b.onclick = function(){
                const href = this.getAttribute('data-href-file')
                const preview = document.getElementById('preview')
                preview.setAttribute('src', href)
            }
        }
    }
    else{
        for (let b of list){
            const href = b.getAttribute('data-href-file')
            b.setAttribute('href', href)
            b.setAttribute('download', 'newfilename')
        }
    }
}
