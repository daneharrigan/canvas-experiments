# Canvas Experiments!

This repo is a collection of canvas concepts.

## Color by Character

The "color-by-character" directory contains the files to build canvases
out of a string of characters.

Out of the box, the R, G, B and ' ' (a single space) characters have
colors mapped to them.

Here is an example of using it:

    <script type="text/javascript" src="canvas.js"></script>
    <script type="text/javascript" src="grid.js"></script>
    <script type="text/javascript">
      var picture = '';
      picture += "RGB\n";
      picture += "GBR";

      var canvas = new Canvas('my-picture', { width: 100, height: 100 }),
          grid   = new Grid();

      // need to override the default colors?
      // these are the default colors by the way
      grid.setColors({
        ' ': '#FFF',
        'R': '#F00',
        'G': '#0F0',
        'B': '#00F'
      });

      grid.draw(canvas);
    </script>
