// Select color input
// Select size input

// Your code goes here!


function makeGrid() {

    var canvas, row, column, x, y;
    
    canvas = $('#pixelCanvas');
    
    
    row = $('#inputHeight').val();
    column = $('#inputWeight').val();
    
    canvas.children().remove(); //deletes existing grid
    
    for (x=0; x<row; x++) {
        canvas.append('<tr><tr>');
    }
    
    for (y=0; y<column; y++) {
        $('tr').append('<td><td>');
    }
}
    


//function that changes cell color to reflect the color in the color picker

var cell = canvas.find('td');  //to identify the cell whose color would change

cell.click(function(){
    var colorPicker;
    colorPicker = $('#colorPicker').val();
    
    $(cell).css("background-color", colorPicker);
    
});
    

// When size is submitted by the user using the submit button, it calls makeGrid() function
var submit = $('input[type = "submit"]');
    submit.click(function(exp){
        exp.preventDefault();
        makeGrid();
});


    

