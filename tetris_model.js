var MODELS = MODELS || {};

var model = {
  blockTypes: ['square', 'line', 'rightL', 'leftL', 'leftS', 'rightS', 'tPiece'],
  boardHeight: 24,
  boardWidth: 10,
  board: [],
  fallingBlock: undefined,
  blockFalling: false,
  gameOver: false,

  init: function() {
    var randomPieceType = this.blockTypes[Math.floor(Math.random() * this.blockTypes.length)];
    for(var i=0; i < this.boardHeight; i++) {
      this.board.push(Array(this.boardWidth));
    };
    this.board.push([1,1,1,1,1,1,1,1,1,1]);
    this.generateBlock(randomPieceType,0,3);
  },

  restart: function() {
     var randomPieceType = this.blockTypes[Math.floor(Math.random() * this.blockTypes.length)];
    for(var i=0; i < this.boardHeight; i++) {
      this.board[i] = Array(this.boardWidth);
    };
    this.gameOver = false;
    this.fallingBlock = undefined;
    this.blockFalling = false;
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
          this.checkForFullRows();
          this.checkForGameOver();

          if (this.gameOver) {
            controller.gameOver = true;
          } else {
            this.generateBlock(randomPieceType,0, 3);
          };
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
    for (var i=0; i<4; i++) {
      var column = this.currentBlock.left + i;
      currentColumns.push(this.currentLevel(column));
    };
    var lowestColumn = Math.min.apply(null, currentColumns);
    this.currentBlock.top = lowestColumn - 4;
  },

  rotateBlockRight: function() {
    rotatedBlock = [[], [], [], []];
    for(var y=0; y<4; y++) {
      for(var x=0; x<4; x++) {
        var value = model.currentBlock.grid[y][x];
        var newX = 3 - y;
        var newY = x;
        rotatedBlock[newY][newX] = value;
      }
    };
    this.currentBlock.grid = rotatedBlock;
  },

  rotateBlockLeft: function() {
    rotatedBlock = [[], [], [], []];
    for(var y=0; y<4; y++) {
      for(var x=0; x<4; x++) {
        var value = model.currentBlock.grid[y][x];
        var newX = y;
        var newY = 3 - x;
        rotatedBlock[newY][newX] = value;
      }
    };
    this.currentBlock.grid = rotatedBlock;
  },

  arraysEqual: function(arr1, arr2) {
    if(arr1.length !== arr2.length) {
      return false;
    };

    for(var i = arr1.length; i--;) {
      if(arr1[i] !== arr2[i]) {
        return false;
      };
    };
    return true;
  },

  checkForFullRows: function() {
    this.board.forEach(function(row, index) {
      if (index !== 24) {
        console.log(model.arraysEqual(row, [1,1,1,1,1,1,1,1,1,1]));
        if (model.arraysEqual(row, [1,1,1,1,1,1,1,1,1,1])) {
          model.board.splice(index, 1);
          model.board.unshift(Array(model.boardWidth));
        };
      };
    });
  },

  checkForGameOver: function() {
    for(var i=0; i<4; i++) {
      if (!(model.arraysEqual(model.board[i], Array(model.boardWidth)))) {
        model.gameOver = true;
      }
    }
  }

}
