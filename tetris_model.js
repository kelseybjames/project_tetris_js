var model = {
  // blockList: [],
  boardHeight: 20,
  boardWidth: 10,
  board: [],
  fallingBlock: undefined,
  blockFalling: false,

  Block: function() {
  },

  currentLevel: function(column) {
    row = this.boardHeight - 1;
    while (this.board[row][column]) {
      row--;
    }
    return row;
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
          if (( i < this.currentLevel(j) - 1) && (!(model.board[i+1][j])))  {
            this.fallingBlock = [i, j];
          } else if (i === this.currentLevel(j) - 1) {
            console.log('i have hit bottom at ' + this.currentLevel(j));
            model.blockFalling = false;
            model.generateBlock(0,5);
          }
        }
      }
    };

    while ( this.fallingBlock ) {
      var coords = this.fallingBlock;
      var i = coords[0];
      var j = coords[1];
      console.log(model.board[i][j]);

      model.board[i+1][j] = model.board[i][j];
      model.board[i][j] = undefined;
      this.fallingBlock = undefined;
    };

  },

  generateBlock: function(x,y) {
    var newBlock = new this.Block();
    this.currentBlock = newBlock;
    this.board[y][x] = newBlock;
    this.blockFalling = true;
  }

}
