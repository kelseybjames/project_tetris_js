var view = {
  canvas: document.getElementById('tetris-canvas'),
  context: canvas.getContext('2d'),

  drawBlock: function(block) {
    blockXStart = block.x * 20;
    blockXEnd = blockXStart + 20;
    blockYStart = ((model.boardHeight - board.y) * 20);
    blockYEnd = blockYStart + 20;
    this.context.fillStyle('#FF0000');
    this.context.fillRect(blockXStart, blockYStart, blockXEnd, blockYEnd);
  }

  init: function() {
    var myCanvas = "<canvas id='tetris-canvas' width='" + (model.boardWidth * 20) + "' height='" + (model.boardHeight * 20) + "'></canvas>";
    $('.game-board').append(myCanvas);
    
    
  },

  update: function() {

  },
}