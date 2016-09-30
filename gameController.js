/**
* gameController manipulates/updates grid.js based on user's actions
* @param grid the Grid object the game is played on.
* @param numOfRows number of rows of the grid
* @param numOfCols number of columns of the grid
*/
gameController = function(grid,numOfRows,numOfCols){
    $("#play-pause-button").click(function(){
		$("#play-pause-icon").toggleClass("glyphicon-play glyphicon-pause");
		var buttonClasses = $("#play-pause-icon").attr("class").split(" ");
		if (buttonClasses[1] == "glyphicon-pause"){ //clicked play
			globalID = requestAnimationFrame(function(){
				continousUpdateView(grid,numOfRows,numOfCols);
			});
		}else{//clicked pause
			cancelAnimationFrame(globalID);
		}
		
	});

    //handles user clicks on a cell. Toggles the cell's state between living/dead
	$("td").click(function(){
		var id = $(this).attr('id');
		var idComponenets = id.split('-');
		var row = idComponenets[0];
		var column = idComponenets[1];
		grid.makeAliveOrDead(row,column);
	});
	//handles user clicks on the preset patterns. Sets the pattern of grid to the replicator pattern.
	$("#replicator").click(function(){
		grid.setPattern("replicator");
	});
	//handles user clicks on the preset patterns. Sets the pattern of grid to the spaceDream pattern.
	$("#space-dream").click(function(){
		grid.setPattern("spaceDream");
	});
	//handles user clicks on the preset patterns. Sets the pattern of grid to the dashingThroughSnow pattern.
	$("#dashing-through-snow").click(function(){
		grid.setPattern("dashingThroughSnow");
	});

	var continousUpdateView = function (grid,numOfRows,numOfCols){
		grid.applyGameRulesOneStep();
		globalID = requestAnimationFrame(function(){continousUpdateView(grid,numOfRows,numOfCols);});
	};
};


















/*$(function() {
	var grid = Grid();
	var numOfRows = grid.getNumOfRows();
	var numOfCols = grid.getNumOfColumns();
    setUpBoard(numOfRows,numOfCols);
    grid.subscribe(function() {
	refreshView(grid,numOfRows,numOfCols);
	});

    $("#play-pause-button").click(function(){
		$("#play-pause-icon").toggleClass("glyphicon-play glyphicon-pause");
		var buttonClasses = $("#play-pause-icon").attr("class").split(" ");
		if (buttonClasses[1] == "glyphicon-pause"){ //clicked play
			globalID = requestAnimationFrame(function(){
				continousUpdateView(grid,numOfRows,numOfCols);
			});
		}else{//clicked pause
			cancelAnimationFrame(globalID);
		}
		
	});

	$("td").click(function(){
		var id = $(this).attr('id');
		var idComponenets = id.split('-');
		var row = idComponenets[0];
		var column = idComponenets[1];
		grid.makeAliveOrDead(row,column);
	});

	$("#replicator").click(function(){
		grid.setPattern("replicator");
	});

	$("#space-dream").click(function(){
		grid.setPattern("spaceDream");
	});

	$("#dashing-through-snow").click(function(){
		grid.setPattern("dashingThroughSnow");
	});
});

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

var continousUpdateView = function (grid,numOfRows,numOfCols){
	grid.applyGameRulesOneStep();
	globalID = requestAnimationFrame(function(){continousUpdateView(grid,numOfRows,numOfCols);});
};


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
*/




