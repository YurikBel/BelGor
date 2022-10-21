window.onload = init();

function init(){
    reader()
}


function reader(){
    const button = document.getElementById('click')
    button.onclick = function() {
        const data = document.getElementById('input').value.trim()
        const lineDelimiter = '\n'
        const rowDelimiter = /\s+/
        const rows = data.split(lineDelimiter)
        let x = []
        let y = []
        for (let rStr of rows){
            let rItems = rStr.trim().split(rowDelimiter)
            x.push(parseFloat(rItems[0]))
            y.push(parseFloat(rItems[1]))
        }
        const graph = document.getElementById('graph')
        for (let i in x){
            let str = `<circle cx="${x[i]}" cy="${y[i] * 10}" r="3" fill="blue" stroke="none" stroke-width="0"></circle>`
            graph.innerHTML += str
        }
        console.log(x, y)
    }

}

