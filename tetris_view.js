var view = {

  init: function() {
    var myCanvas = "<canvas id='tetris-canvas' width='" + (model.boardWidth * 20) + "' height='" + (model.boardHeight * 20) + "'></canvas>";
    $('.game-board').append(myCanvas);
    this.canvas = $('#tetris-canvas');
    this.context = this.canvas[0].getContext('2d');
  },

  drawBlock: function(i, j) {
    var blockXStart = j * 20;
    var blockYStart = i * 20;
    this.context.fillStyle = '#FF0000';
    this.context.fillRect(blockXStart, blockYStart, 20, 20);
  },

  drawBlocks: function(board) {
    for ( var i = 0; i < board.length; i++ ) {
      for( var j = 0; j < board[i].length; j++ ) {
        if ( board[i][j] ) {
          this.drawBlock( i, j );
        }
      }
    }
  },

  update: function(board) {
    this.context.clearRect(0, 0, model.boardWidth * 20, model.boardHeight * 20);
    this.drawBlocks(board);
  },
}
