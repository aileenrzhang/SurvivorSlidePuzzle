/*eslint-env browser*/


// Checks to see if the game has been won
function checkWin() {
    var classes = ['tile1', 'tile2', 'tile3', 'tile4', 'tile5', 'tile6', 'tile7', 'tile8', 'tile9', 'tile10', 'tile11', 'tile12']
    var ids = ['cell11', 'cell12', 'cell13', 'cell14', 'cell21', 'cell22', 'cell23', 'cell24', 'cell31', 'cell32', 'cell33', 'cell34']
    
    
    // checks if each location has the correct tile there
    for (var i = 0; i < 12; i++){
        if (document.getElementById(ids[i]).className != classes[i]){
            return;
        }
    }
    
    alert("Congratulations, you won!")
    return;
    
}


// Swaps the white tile and the clicked tile if they are next to each other
function moveTile(clickedRow, clickedCol) {
    
    var clickedCell = "cell" + clickedRow + clickedCol;
    var whiteCell = document.querySelector('.tile12').id;
    
    var temp = document.getElementById(clickedCell).className;
    
    document.getElementById(clickedCell).className = document.getElementById(whiteCell).className;
    
    document.getElementById(whiteCell).className = temp;
    
}


// Checks to see if the white tile is next to the clicked tile
function checkValidMove(row, column) {
    
    var whiteCell = document.querySelector('.tile12').id;
    
    // Uses the ID of the white tile to figure out its location
    var rowWhiteCell = parseInt(whiteCell.charAt(4), 10);
    var colWhiteCell = parseInt(whiteCell.charAt(5), 10);
    
    
    //checks if the white tile is either above, below, to the left, or to the right of the clicked tile
    if (Math.abs(rowWhiteCell - row) == 1 && colWhiteCell == column) {
        moveTile(row, column);
        checkWin();
    } else if (Math.abs(column - colWhiteCell) == 1 && row == rowWhiteCell) {
        moveTile(row, column);
        checkWin();
    } else {
        return;
    }
    
}

document.getElementById("cell11").className = "tile1"
document.getElementById("cell12").className = "tile2"
document.getElementById("cell13").className = "tile3"
document.getElementById("cell14").className = "tile4"
document.getElementById("cell21").className = "tile5"
document.getElementById("cell22").className = "tile6"
document.getElementById("cell23").className = "tile7"
document.getElementById("cell24").className = "tile8"
document.getElementById("cell31").className = "tile9"
document.getElementById("cell32").className = "tile10"
document.getElementById("cell33").className = "tile11"
document.getElementById("cell34").className = "tile12"

// Starts game by randomizing the tiles
function shuffle() {
    var choose;
    var row;
    var col;
    var whiteCell;
    var rowWhiteCell;
    var colWhiteCell;
    
    // Moves one of the tiles next to the white tile 1000 tiles to randomize the tiles
    for (var i = 0; i < 1000; i++){
        whiteCell = document.querySelector('.tile12').id;
    
        rowWhiteCell = parseInt(whiteCell.charAt(4), 10);
        colWhiteCell = parseInt(whiteCell.charAt(5), 10);
        
        // Decides whether the row or the column of the white tile is going to change
        // This process ensures that we do not end up with an unsolveable puzzle
        choose = Math.floor(Math.random() * 2)
        
        if (choose == 0){
            // Randomly chooses one of the tiles either above or below the white tile to move
            
            if (rowWhiteCell == 1){
                row = 2;
            } else if (rowWhiteCell == 3){
                row = 2;
            } else {
                row = rowWhiteCell + Math.floor(Math.random() * 3 - 1);
            }
            
            col = colWhiteCell;
        } else if (choose == 1){
            // Randomly chooses one of the tiles to either the left or right of the white tile to move
            
            if (colWhiteCell == 1){
                col = 2;
            } else if (colWhiteCell == 4){
                col = 3;
            } else {
                col = colWhiteCell + Math.floor(Math.random() * 3  - 1);
            }
                
            row = rowWhiteCell;
        }
        
        moveTile(row, col);
    }
    
}