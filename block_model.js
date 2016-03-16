var MODELS = MODELS || {};

MODELS.Block = function(type, x, y) {
  this.grid = [];
  for ( var i = 0; i < MODELS.pieces[type].length; i++ ) {
    this.grid[i] = MODELS.pieces[type][i];
  };

  this.top = y;
  this.left = x;


};

MODELS.pieces = {

  square: [ [0,0,0,0],
            [0,1,1,0],
            [0,1,1,0],
            [0,0,0,0] ],

  line: [   [0,1,0,0],
            [0,1,0,0],
            [0,1,0,0],
            [0,1,0,0] ],

  rightL: [ [0,0,0,0],
            [0,1,0,0],
            [0,1,0,0],
            [0,1,1,0] ],

  leftL: [  [0,0,0,0],
            [0,0,1,0],
            [0,0,1,0],
            [0,1,1,0] ],

  leftS: [  [0,0,0,0],
            [0,0,1,0],
            [0,1,1,0],
            [0,1,0,0] ],

  rightS: [ [0,0,0,0],
            [0,1,0,0],
            [0,1,1,0],
            [0,0,1,0] ],

  tPiece: [ [0,0,0,0],
            [0,0,1,0],
            [0,1,1,0],
            [0,0,1,0] ],

};
