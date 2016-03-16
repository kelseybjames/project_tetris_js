var MODELS = MODELS || {};

var model = {
  blockTypes: ['square', 'line', 'rightL', 'leftL', 'leftS', 'rightS', 'tPiece'],
  boardHeight: 24,
  boardWidth: 10,
  board: [],
  fallingBlock: undefined,
  blockFalling: false,

  init: function() {
    var randomPieceType = this.blockTypes[Math.floor(Math.random() * this.blockTypes.length)];
    for(var i=0; i < this.boardHeight; i++) {
      this.board.push(Array(this.boardWidth));
    };
    this.board.push([1,1,1,1,1,1,1,1,1,1]);
    this.generateBlock(randomPieceType,0,3);
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
    var randomPieceType = this.blockTypes[Math.floor(Math.random() * this.blockTypes.length)];
    for(var i = 0; i < 4; i++) {
      for(var j = 0; j < 4; j++) {
        var boardX = this.currentBlock.left + j;
        var boardY = this.currentBlock.top + i;
        if ( this.currentBlock.grid[i][j] === 1 && this.board[boardY + 1][boardX] === 1 ) {
          this.stopBlock();
          this.generateBlock(randomPieceType,0, 3);
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

  generateBlock: function(type,y,x) {
    console.log("generating block")
    this.currentBlock = new MODELS.Block(type,x,y);
  },

  moveBlockLeft: function() {
    var validMove = true;
    for(var i = 0; i < 4; i++) {
      for(var j = 0; j < 4; j++) {
        var boardX = this.currentBlock.left + j;
        var boardY = this.currentBlock.top + i;
        var leftBorder = this.board[boardY][boardX - 1];
        if ( this.currentBlock.grid[i][j] === 1 && ( leftBorder === 1 || boardX - 1 < 0 ) ) {
          validMove = false;
        };
      }
    }

    if (validMove) {
      this.currentBlock.left--;
    };
  },

  moveBlockRight: function() {
    var validMove = true;
    for(var i = 0; i < 4; i++) {
      for(var j = 0; j < 4; j++) {
        var boardX = this.currentBlock.left + j;
        var boardY = this.currentBlock.top + i;
        var rightBorder = this.board[boardY][boardX + 1];
        if ( this.currentBlock.grid[i][j] === 1 && ( rightBorder === 1 || boardX + 1 > 9 ) ) {
          validMove = false;
        };
      }
    };

    if (validMove) {
      this.currentBlock.left++;
    };
  },

  moveBlockDown: function() {
    var currentColumns = [];
    for (i=0; i<4; i++) {
      var column = this.currentBlock.left + i;
      currentColumns.push(this.currentLevel(column));
    };
    var lowestColumn = Math.min.apply(null, currentColumns);
    this.currentBlock.top = lowestColumn - 4;
  }

}
