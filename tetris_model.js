var model = {
  // board has filled and empty spaces
  // check if coordinates overlap filled space
  // blockList: [],
  boardHeight: 20,
  boardWidth: 10,
  board: [],
  fallingBlock: undefined,
  blockFalling: false,

  init: function() {
    for(var i=0; i < this.boardHeight; i++) {
      this.board.push(Array(this.boardWidth));
    };
    this.board.push([1,1,1,1,1,1,1,1,1,1]);
    this.generateBlock(0,3);
    console.log('initializing');
  },

  currentLevel: function(column) {
    row = this.boardHeight - 1;
    console.log(this.board[row][column]);
    console.log('Row: ' + row);
    console.log('Column: ' + column);
    while (this.board[row][column]) {
      row--;
    }
    return row;
  },

  update: function() {
    for(var i = 0; i < 4; i++) {
      for(var j = 0; j < 4; j++) {
        var boardX = this.currentBlock.left + j;
        var boardY = this.currentBlock.top + i;

        if ( this.currentBlock.grid[i][j] === 1 && this.board[boardY + 1][boardX] === 1 ) {
          this.stopBlock();
          this.generateBlock(0, 3);
          return true;
        }
      }
    }
    this.currentBlock.top++;
  },

  stopBlock: function() {
    for(var i = 0; i < 4; i++) {
      for(var j = 0; j < 4; j++) {
        var boardX = this.currentBlock.left + j;
        var boardY = this.currentBlock.top + i;

        if (this.currentBlock.grid[i][j] === 1) {
          this.board[boardY][boardX] = 1;
        }
      }
    }
  },

  generateBlock: function(y,x) {
    this.currentBlock = new this.Block(x,y);
  },

  Block: function(x,y) {
    this.grid = []
    for (var i=0; i < 4; i++) {
      this.grid[i] = [];
      for ( var j=0; j<4; j++) {
        this.grid[i][j] = 0;
      }
    }
    this.grid[0][0] = 1;
    this.top = y;
    this.left = x;
  },

  moveBlockLeft: function() {
    for(var i = 0; i < 4; i++) {
      for(var j = 0; j < 4; j++) {
        var boardX = this.currentBlock.left + j;
        var boardY = this.currentBlock.top + i;
        var validMove = true;

        if ( this.currentBlock.grid[i][j] === 1 && this.board[boardY][boardX - 1] === 1 ) {
          validMove = false;
        };
      }
    }

    if (this.currentBlock.left === 0) {
      validMove = false;
    }

    if (validMove) {
      this.currentBlock.left--;
    };
  },

  moveBlockRight: function() {
    for(var i = 0; i < 4; i++) {
      for(var j = 0; j < 4; j++) {
        var boardX = this.currentBlock.left + j;
        var boardY = this.currentBlock.top + i;
        var validMove = true;

        if ( this.currentBlock.grid[i][j] === 1 && this.board[boardY][boardX + 1] === 1 ) {
          validMove = false;
        };
      }
    };

    if (this.currentBlock.left === 7) {
      validMove = false;
    };

    if (validMove) {
      this.currentBlock.left++;
    };
  }

}
//
// if (model.board[i][j]) {
//   block = model.board[i][j];
//   if (( i < this.currentLevel(j) - 1) && (!(model.board[i+1][j])))  {
//     this.fallingBlock = [i, j];
//   } else if (i === this.currentLevel(j) - 1) {
//     console.log('i have hit bottom at ' + this.currentLevel(j));
//     // console.log(model.currentBlock === model.board[i][j]);
//
//       model.blockFalling = false;
//
//   }
// }
