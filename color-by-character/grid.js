var Grid = function(str){
  this.grid  = str;
  this.colors = { ' ': '#FFF', 'R': '#F00', 'G': '#0F0', 'B': '#00F' };
};

Grid.prototype = {
  setColors: function(colors){ this.colors = colors; },
  parse: function(){
    var parsedGrid = [],
        gridRows   = this.grid.split("\n");

    for(var i=0; gridRows.length>i; i++)
    {
      var gridColumns = gridRows[i].split('');
      for(var j=0; gridColumns.length>j; j++)
        parsedGrid.push({ x: j+1, y: i+1, color: this.colors[gridColumns[j]] });
    }

    this.parsedGrid = parsedGrid;
  },
  draw: function(canvas){
    this.parse();
    for(var i=0; this.parsedGrid.length>i; i++)
    {
      var options = this.parsedGrid[i];
      canvas.addPoint(options);
    }
  }
};
