window.onload = init();


function init(){
    changer()
    hider()
}


function changer(){
    let list = document.getElementsByClassName('link');
    if( window.innerWidth >= 700 ){
        for (let b of list){
            b.addEventListener('click', function (e) {
            e.preventDefault();
            })
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


function hider(){
    let locators = document.getElementsByClassName('drop-locator');
    console.log(locators)
    for (let b of locators){
        b.addEventListener('click', function (e) {
        e.preventDefault();
        })
        let block = b.parentNode.querySelector('.drop')
        const iconup = b.querySelector('.bi-caret-up')
        const icondown = b.querySelector('.bi-caret-down')
        b.onclick = function(){
            if (block.style.display == 'none'){
                block.style.display = 'block'
                iconup.style.display = 'inline'
                icondown.style.display = 'none'

            }
            else{
                block.style.display = 'none'
                iconup.style.display = 'none'
                icondown.style.display = 'inline'
            }
        }
    }
}
