var view = {

  init: function() {
    var myCanvas = "<canvas id='tetris-canvas' width='" + (model.boardWidth * 20) + "' height='" + (model.boardHeight * 20) + "'></canvas>";
    $('.game-board').append(myCanvas);
    this.canvas = $('#tetris-canvas');
    this.context = this.canvas[0].getContext('2d');
  },

  drawBlock: function(block) {
    var blockXStart = block.x * 20;
    var blockXEnd = blockXStart + 20;
    var blockYStart = ((model.boardHeight - block.y) * 20);
    var blockYEnd = blockYStart + 20;
    this.context.fillStyle = '#FF0000';
    this.context.fillRect(blockXStart, blockYStart, blockXEnd, blockYEnd);
  },

  drawBlocks: function(blockList) {
    // for (var row = 0; row < board.length; row++ ) {
    //   for (var col = 0; col < board[row].length; col++ ) {
    //     this.drawBlock( board[row][col] );
    //   }
    // }
    for ( var i = 0; i < blockList.length; i++ ) {
      this.drawBlock( blockList[i] );
    }
  },

  update: function(blockList) {
    this.drawBlocks(blockList);
  },
}
