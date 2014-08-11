var cmap = require('./..');
var i, j, cg;
var canvas = document.getElementById('canvas'),
    c = canvas.getContext('2d');
var n = 48;

// Display all the colormaps
var cms = [
    'jet',
    'hsv',
    'hot',
    'cool',
    'spring',
    'summer',
    'autumn',
    'winter',
    'bone',
    'copper',
    'greys',
    'YIGnBu',
    'greens',
    'YIOrRd',
    'bluered',
    'RdBu',
    'picnic',
    'rainbow',
    'portland',
    'blackbody',
    'earth',
    'electric'
];

c.canvas.height = cms.length * 40;
c.canvas.width = 600;

for (i = 0; i < cms.length; i++) {
    /*
     * Call colormap with each type
     */
    cg = cmap({'colormap': cms[i], 'nshades': n });

    /*
     * Build up the color ranges and add text
     */
    for (j = 0; j < n; j++) {
        c.fillStyle = cg[j];      // start ind at index 0
        c.fillRect(j*10, i*40, 10, 40);

    }
    c.fillStyle = '#262626';
    c.font = '16px Helvetica';
    c.fillText( cms[i], n*10 + 10, i * 40 + 26);
}




var dataURL = canvas.toDataURL();
canvas.parentElement.removeChild(canvas);
document.getElementById('canvasImg').src = dataURL;
