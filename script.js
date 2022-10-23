

function buildGrid(){
    const canvas = document.querySelector('#canvas');
    const gridDiv = document.createElement('div');
    const gridSize = document.querySelector('#gridSize');
    const docFragment = document.createDocumentFragment(); //stages the elements before writing them to the dom

    let count = document.getElementById('gridSize').value;
    console.log(count);
    canvas.replaceChildren();



     for (i=1; i<=count*count; i++){
        const gridDiv = document.createElement('div');
        gridDiv.classList.add('grid');


        gridDiv.addEventListener('mousemove', function(e){
                gridDiv.classList.add('colorPixel');
        });


        docFragment.appendChild(gridDiv);
     }
     //canvas.setAttribute('style', 'width: ' + count * 10 + "px");
     gridDiv.setAttribute('style', 'height: ' + count/10 +'em; width: ' + count/10 + 'em;');
     canvas.appendChild(docFragment);

}

