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
    for(i=0; i < this.boardHeight; i++) {
      this.board.push(Array(this.boardWidth));
    };
    this.generateBlock();
  },

  update: function() {
    this.blockList.forEach(function(block) {
      block.y--;
    })
  },

  generateBlock: function() {
    var newBlock = new this.Block();
    this.blockList.push(newBlock);
  }

}
