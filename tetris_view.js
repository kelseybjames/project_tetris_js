var view = {

  init: function() {
    var myCanvas = "<canvas id='tetris-canvas' width='" + (model.boardWidth * 20) + "' height='" + (model.boardHeight * 20) + "'></canvas>";
    $('.game-board').append(myCanvas);
    this.canvas = $('#tetris-canvas');
    this.context = this.canvas[0].getContext('2d');
    this.moveListener();
  },

  drawBlock: function(i, j) {
    var blockXStart = j * 20;
    var blockYStart = i * 20;
    this.context.fillStyle = '#FF0000';
    this.context.fillRect(blockXStart, blockYStart, 20, 20);
  },

  drawBlocks: function(board, block) {
    for ( var i = 0; i < board.length; i++ ) {
      for( var j = 0; j < board[i].length; j++ ) {
        if ( board[i][j] === 1 ) {
          this.drawBlock( i, j );
        }
      }
    }

    for ( var i = 0; i < 4; i++) {
      for (var j = 0; j < 4; j++) {
        if( block.grid[i][j] === 1 ) {
          var boardX = block.left + j;
          var boardY = block.top + i;
          this.drawBlock( boardY, boardX )
        }
      }
    }
  },

  update: function(board, block) {
    this.context.clearRect(0, 0, model.boardWidth * 20, model.boardHeight * 20);
    this.drawBlocks(board, block);
    this.context.fillStyle = "#555";
    this.context.fillRect( 0, 0, model.boardWidth * 20, 40 );
  },

  moveListener: function() {
    $(window).on('keydown', function() {
      switch (event.which) {
        case 37:
          console.log('left');
          model.moveBlockLeft();
          break;
        case 39:
          console.log('right');
          model.moveBlockRight();
          break;
        case 40:
          console.log('down');
          model.moveBlockDown();
          break;
        default:
          console.log(event.which);
          break;
      }
    })
  }
}
