var model = {
  blockList: [],
  boardHeight: 20,
  boardWidth: 10,
  board: [],

  Block: function() {
    this.x = 5;
    this.y = 20;
  },

  init: function() {
    generateBlock();
    for(i=0; i < boardHeight; i++) {
      this.board.push(Array(boardWidth));
    };
  },

  update: function() {
    blockList.forEach(function(block) {
      block.y--;
    })
  },

  generateBlock: function() {
    newBlock = new Block();
    this.blockList.push(newBlock);
  }

}