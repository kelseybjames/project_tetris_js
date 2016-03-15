var model = {
  blockList: [],
  boardHeight: 20,
  boardWidth: 10,
  board: [],
  fallingBlocks: [],

  Block: function() {
    this.x = 5;
    this.y = 0;
  },

  init: function() {
    for(i=0; i < this.boardHeight; i++) {
      this.board.push(Array(this.boardWidth));
    };
    this.generateBlock();
  },

  update: function() {
    for(var i = 0; i < this.boardHeight; i++) {
      for(var j = 0; j < this.boardWidth; j++) {
        if (model.board[i][j]) {
          block = model.board[i][j];
          if ((block.y !== this.boardHeight - 1) && (!(model.board[i+1][j])))  {
            this.fallingBlocks.push([i, j]);
          } else {
            console.log(this.currentBlock.y);
            this.generateBlock();
          }
        }
      }
    };

    this.fallingBlocks.forEach(function(coords) {
      var i = coords[0];
      var j = coords[1];
      console.log(model.board[i][j]);

      model.board[i+1][j] = model.board[i][j];
      model.board[i][j] = undefined;
      block.y++;
    })

    this.fallingBlocks = [];

  },

  generateBlock: function() {
    var newBlock = new this.Block();
    this.currentBlock = newBlock;
    this.blockList.push(newBlock);
    this.board[newBlock.y][newBlock.x] = newBlock;
  }

}
