// create tr and Td
// create a loop to create the table

//let gridWidth = document.querySelector('.grid-width');
//let gridHeight = document.querySelector('.grid-height');

window.onload = function(){

let submitButton = document.querySelector('button');
submitButton.onclick = function makeGrid(event){
    submitButton == null;

    let grid_height = document.querySelector(".grid-height");

/*=============== Create Table Dynamically=============== */
// let input = document.querySelector('input').value;
    for (let row = 1; row <= grid_height.value; row++){
/*================= Create tr tag ======================*/
let table = document.querySelector('.pixel-art-maker-table');// grabs table element
    let createRows = document.createElement('tr'); // create row element
    let grid_width= document.querySelector(".grid-width");
    
    for (let cols = 1; cols <= grid_width.value; cols++){

/*================= Create td tag ======================*/
let tabletd = document.querySelector('table tr');
    let createCols =  document.createElement('td'); // create td element
    let rows =  table.appendChild(createRows);
        rows.appendChild(createCols);
 
    }

}



}
/*======== add Input color type tag to paint icon ======= */
    let paint = document.querySelector('.fa-palette');
    paint.innerHTML = "<input class='pickColor paintColor' type='color' value='#000000'>";

    let paintFull = document.querySelector('.fa-paint-roller');
        paintFull.innerHTML = "<input class='pickColor paintFull' type='color' value='#ffffff'>";

        let gridColor = document.querySelector('.fa-border-all');

        gridColor.innerHTML = "<input class='pickColor gridColorValue' type='color' value='#000000'>";

    
    
/* =========== Add Color to Table =================*/

    document.querySelector('table').onclick = function(){

        document.querySelector('table').onclick = null;
       let td = document.getElementsByTagName('td');
       for (let i = 0; i <= td.length; i++){
           let eachCell = td[i];


         

            eachCell.onclick = function(){

                let color = document.querySelector('.paintColor').value;
                eachCell.style.backgroundColor = color;

                let table = document.querySelector('table');
                table.onclick = function(){
                let paintFullValue = document.querySelector('.paintFull').value;

                document.querySelector('table').style.backgroundColor = paintFullValue;
                
        }   

        /*========== erase cell =============== */ 
    eachCell.addEventListener('dblclick', function(){
        eachCell.style.backgroundColor = '';
    });
}
                   
          
}
       
    }
}

alert('This project is not yet finish. Not all features are available.\n \t Double-click to erase is working!');


