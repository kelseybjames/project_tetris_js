var view = {

  blockColors: {
    'square': '#FF0000',
    'line': '#00FF00',
    'rightL': '#0000FF',
    'leftL': '#FFFF00',
    'leftS': '#FF00FF',
    'rightS': '#000000',
    'tPiece': '#00FFFF'
  },

  init: function() {
    var myCanvas = "<canvas id='tetris-canvas' width='" + (model.boardWidth * 20) + "' height='" + (model.boardHeight * 20) + "'></canvas>";
    $('.game-board').append(myCanvas);
    this.canvas = $('#tetris-canvas');
    this.context = this.canvas[0].getContext('2d');
    this.moveListener();
  },

  drawBlock: function(i, j, color) {
    var blockXStart = j * 20;
    var blockYStart = i * 20;
    this.context.fillStyle = color;
    this.context.fillRect(blockXStart, blockYStart, 20, 20);
  },

  drawBlocks: function(board, block) {
    var blockColor = this.blockColors[block.type];
    for ( var i = 0; i < board.length; i++ ) {
      for( var j = 0; j < board[i].length; j++ ) {
        if ( board[i][j] === 1 ) {
          this.drawBlock( i, j, '#A4B049' );
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

  update: function(board, block, rowsCleared) {
    this.context.clearRect(0, 0, model.boardWidth * 20, model.boardHeight * 20);
    this.drawBlocks(board, block);
    this.context.fillStyle = "#555";
    this.context.fillRect( 0, 0, model.boardWidth * 20, 60 );

    $('#score').text('Rows Cleared: ' + rowsCleared);
  },

  restart: function() {
    this.context.clearRect(0, 0, model.boardWidth * 20, model.boardHeight * 20);
  },

  gameOver: function(rowsCleared) {
    var restart = confirm('You cleared ' + rowsCleared + ' rows! Want to play again?');
    if (restart) {
      controller.restart();
    } else {
      controller.quit();
    };
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
        case 65:
          console.log('A');
          model.rotateBlockLeft();
          break;
        case 68:
          console.log('D');
          model.rotateBlockRight();
          break;
        default:
          console.log(event.which);
          break;
      }
    })
  }
}
