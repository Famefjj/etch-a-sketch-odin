const DEFAULT_GRID_SIZE = 16;
const CONTAINER_SIZE = 600;

let container = document.querySelector(".container");


function create_default_grid(grid_size=DEFAULT_GRID_SIZE){

    
    for (let i=0; i<grid_size*grid_size; i++){
        let div_grid = document.createElement("div");
    
        div_grid.setAttribute("class","grid-style");

        div_grid.classList.add("cell-size");
        container.appendChild(div_grid);

        let cell_sizes = document.querySelectorAll(".cell-size");
        let cell_size = cell_sizes[cell_sizes.length - 1];
        cell_size.setAttribute("style","width:"+CONTAINER_SIZE/grid_size+"px; height:"+CONTAINER_SIZE/grid_size+"px;");
    
    }

}


function color_black_mouseover(){
    let cells = document.querySelectorAll(".grid-style");
    cells.forEach((cell)=>{
        cell.addEventListener("mouseover",(e)=>{
            e.target.style.backgroundColor = "black";
        });
    });

} 



function Reset(){
    let reset = document.querySelector(".reset");
    reset.addEventListener("click", (e)=>{
        container.innerHTML = "";
        create_default_grid();
        color_black_mouseover();
    });

}

function submit_grid_per_side(){
    let submit = document.querySelector(".submit-grid-per-side");
    let grid_per_side = document.querySelector("#grid-per-side");

    
    submit.addEventListener("click", (e)=>{
        
        if (isNaN(grid_per_side.value)){
            alert("Input should be number");
            grid_per_side.value = "";
            return -1;
        } else if (grid_per_side.value > 0 && grid_per_side.value <= 100){
            //pass
        }
         else {
            alert("Input out of range");
            grid_per_side.value = "";
            return -2;
        }
        container.innerHTML = "";
        create_default_grid(grid_per_side.value);
        color_black_mouseover();
        grid_per_side.value = "";
        
        
    });
}

let key_input = document.querySelector("#grid-per-side");


key_input.addEventListener("keypress", (e)=>{
    if (e.key === "Enter"){
        e.preventDefault();
        document.querySelector(".submit-grid-per-side").click();
        
    }

});

create_default_grid();
color_black_mouseover();
Reset();
submit_grid_per_side();




















