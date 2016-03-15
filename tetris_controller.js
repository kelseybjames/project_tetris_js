var controller = {
  init: function() {
    model.init();
    view.init();
  },

  update: function() {
    model.update();
    view.update( model.board );
  }
}

$( document ).ready( function() {
  controller.init();
  setInterval( function() {
    controller.update();
  }, 100);
});
