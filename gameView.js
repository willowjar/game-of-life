$(function() {
	var grid = Grid();
	var numOfRows = grid.getNumOfRows();
	var numOfCols = grid.getNumOfColumns();
    setUpBoard(numOfRows,numOfCols);
    grid.setUpInitialGrid();
    grid.subscribe(function() {
	refreshView(grid,numOfRows,numOfCols);
	});
	gameController(grid,numOfRows,numOfCols);

});
/**
* Refreshes the view upon changes in the model. 
* @param grid valid grid
* @param numOfRows of the grid
* @param numOfCols of the grid
*/
var refreshView = function(grid,numOfRows,numOfCols){
	utility.from_to(1,numOfRows,function(e1){
		utility.from_to(1,numOfCols, function(e2){
			var id = "#"+e1+"-"+e2;
			if (grid.getStatus(e1,e2) == 0){
				$(id).css('background-color', 'gold');
			}else{
				$(id).css('background-color', 'black');
			}
		});
	});
};
/**
* Sets up the board/grid of all dead cells on the view.
*/
var setUpBoard = function(numOfRows,numOfCols){
	var bodyHTMLforGrid = "";
	var currentRowNum = 0;
	utility.times(numOfRows,function(){
		currentRowNum = currentRowNum + 1;
		var currentColNum = 0;
		var thisRow = $("<tr></tr>");
		utility.times(numOfCols, function(){
			currentColNum = currentColNum + 1;
			var id = currentRowNum + "-" + currentColNum;
			var thisColumn = $("<td></td>");
			thisColumn.attr("id",id);
			thisRow.append(thisColumn);
		});
		$("table").append(thisRow);
	});
};
