var Canvas = function(id, attributes)
{
  attributes = attributes || {};
  var canvas = document.createElement('canvas');
  for(var key in attributes)
    canvas.setAttribute(key, attributes[key]);

  this.context = canvas.getContext('2d');
  document.body.appendChild(canvas);
};

Canvas.prototype = {
  addPoint: function(args){
    var x      = args.x * this.settings.size,
        y      = args.y * this.settings.size,
        color  = args.color || '#000',
        width  = this.width(),
        height = this.height();

    this.context.fillStyle = color;
    this.context.fillRect(x, y, width, height);
  },
  width:  function() { return 2 * this.settings.size },
  height: function() { return 1 * this.settings.size },
  settings: { size: 10 }
};
