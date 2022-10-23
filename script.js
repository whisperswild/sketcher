

function buildGrid(count){
    const container = document.querySelector('#container');
    const gridDiv = document.createElement('div');
    const docFragment = document.createDocumentFragment(); //stages the elements before writing them to the dom

     for (i=1; i<=count; i++){
        const gridDiv = document.createElement('div');
        gridDiv.classList.add('grid');
        docFragment.appendChild(gridDiv);
     }

     container.appendChild(docFragment);

}

