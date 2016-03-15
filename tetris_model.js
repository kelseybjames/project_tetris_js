var model = {
  // blockList: [],
  boardHeight: 20,
  boardWidth: 10,
  board: [],
  fallingBlocks: [],

  Block: function() {
  },

  init: function() {
    for(i=0; i < this.boardHeight; i++) {
      this.board.push(Array(this.boardWidth));
    };
    this.generateBlock(0,5);
  },

  update: function() {
    for(var i = 0; i < this.boardHeight; i++) {
      for(var j = 0; j < this.boardWidth; j++) {
        if (model.board[i][j]) {
          block = model.board[i][j];
          if (( i < this.boardHeight - 1) && (!(model.board[i+1][j])))  {
            this.fallingBlocks.push([i, j]);
          } else {
            this.generateBlock(0,5);
          }
        }
      }
    };

    while ( this.fallingBlocks.length > 0 ) {
      var coords = this.fallingBlocks.pop();
      var i = coords[0];
      var j = coords[1];
      console.log(model.board[i][j]);

      model.board[i+1][j] = model.board[i][j];
      model.board[i][j] = undefined;
    }

  },

  generateBlock: function(x,y) {
    var newBlock = new this.Block();
    this.currentBlock = newBlock;
    this.board[y][x] = newBlock;
  }

}
