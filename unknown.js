/**
 * Created by Antonio on 14.04.2017.
 */

function getCoords(vect) {
    return new Vector2D(vect.x, vect.y)
}

function rotate(point, cz, pz, cx, cy) {
    return new Vector2D(cx + (1 / (1 - pz / cz)) * (getX(point) - cx), cy + (1 / (1 - pz / cz)) * (getY(point) - cy));
}

function init() {
    var  points = [
        _idpt21, _idpt22, _idpt23, _idpt24, _idpt25, _idpt26, _idpt27,
        _idpt28, _idpt29, _idpt30, _idpt31, _idpt32
    ]
    var polygon = [
        new Vector2D(0.7185080122244105, 0.30095510659419994),
        new Vector2D(0.2814919877755894, -0.008061887780747512),
        new Vector2D(-0.2814919877755894, 0.008061887780747512),
        new Vector2D(-0.7185080122244105, -0.30095510659419994),
        new Vector2D(-0.3454915028125263, 1.398807881668542),
        new Vector2D(-0.6545084971874737, 1.3082988995180054),
        new Vector2D(0.6545084971874737, -1.3082988995180054),
        new Vector2D(0.3454915028125263, -1.398807881668542),
        new Vector2D(0.5525982839990738, 0.9182710004871527),
        new Vector2D(0.8616152783740213, 0.08172899951284729),
        new Vector2D(-0.8616152783740213, -0.08172899951284729),
        new Vector2D(-0.5525982839990738, -0.9182710004871527)]
    for (var i=0;i<polygon.length;++i)
    {
        points[i].vector = polygon[i];
    }
    var zp = [0.6990448934058, 1.0080618877807475, -1.0080618877807475, -0.6990448934058, 0.4102091127064052,
        -0.11731589389295277, 0.11731589389295277, -0.4102091127064052, -0.45474550892473153, -0.5452544910752685,
        0.5452544910752685, 0.45474550892473153]
    _param1.addEventListener("change", function() {
        for(var i=0;i<points.length();++i){
            points[i].vector = getCoords(rotate(polygon[i], _param1.getValue(), zp[i], getX(_pt2), getY(_pt2)));
        }
        }
    )
    _pt2.addEventListener("change", function () {
        for(var i=0;i<points.length();++i){
            points[i].vector = getCoords(rotate(polygon[i], _param1.getValue(), zp[i], getX(_pt2), getY(_pt2)));
        }
        }
    )
}

addEventListener("load", init);
