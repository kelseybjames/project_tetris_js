var controller = {
  gameOver: false,
  init: function() {
    model.init();
    view.init();
  },

  update: function() {
    if (this.gameOver) {
      view.gameOver();
    } else {
      model.update();
      view.update( model.board, model.currentBlock );
    }
  },

  restart: function() {
    this.gameOver = false;
    model.restart();
    view.restart();
    this.update();
  },

  gameLoop: function() {
    setInterval( function() {
      controller.update();
    }, 100);
  }
}

$( document ).ready( function() {
  controller.init();
  controller.gameLoop();
});
