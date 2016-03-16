var controller = {
  gameOver: false,
  gameSpeed: 200,
  init: function() {
    model.init();
    view.init();
  },

  update: function() {
    if (this.gameOver) {
      view.gameOver();
    } else {
      var rowsCleared = model.rowsCleared;
      model.update();
      view.update( model.board, model.currentBlock, rowsCleared );
    }
  },

  restart: function() {
    this.gameOver = false;
    model.restart();
    view.restart();
    this.update();
  },

  quit: function() {

  },

  gameLoop: function() {
    setInterval( function() {
      controller.update();
    }, this.gameSpeed);
  }
}

$( document ).ready( function() {
  controller.init();
  controller.gameLoop();
});
