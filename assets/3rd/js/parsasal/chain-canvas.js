        // Adapted from the following Processing example:
        // http://processing.org/learning/topics/follow3.html

        // The amount of points in the path:
        var points = 25;

        // The distance between the points:
        var length = 30;


        // Create a raster item using the image tag with id='mona'
        var ruler = new Raster('ruler');
        ruler.scale("0.3")
        ruler.position = new Point(400, 600);


        var curved_line = new Raster('curved-line');
        curved_line.scale("0.5")
        curved_line.position = new Point(300, 200);
        curved_line.rotate(-45);

        
        
        var path = new Path({
            strokeColor: '#E4141B',
            strokeWidth: 20,
            strokeCap: 'round'
        });

        var circle = new Path.Circle({
            center: view.center,
            radius: 5,
            fillColor: 'green'
        });
        var start = view.center / [10, 1];
        for (var i = 0; i < points; i++)
            path.add(start + new Point(i * length, 0));


        
        circle.attached_segment = getNearestSegmentOnPath(path, circle.point, points);

        path.onMouseDrag = function (event) {
            if (Key.isDown('shift')) {
                path.position += event.delta;
                circle.position = circle.attached_segment.point
            }

        }
        
        path.onDoubleClick = function (event){
            circle.attached_segment = getNearestSegmentOnPath(path, event.point, points);
            circle.position = circle.attached_segment.point
            
        }


        function onMouseDrag(event) {
            if (!Key.isDown('shift')) {
                minDistanceSegment = getNearestSegmentOnPath(path, event.point, points)

                if (minDistanceSegment !== undefined) {
                    if (minDistanceSegment.point.getDistance(event.point) < 75) {
                        var segment = minDistanceSegment;
                        segment.point = event.point
                        while (!segment.isLast()) {

                            var nextSegment = segment.next;
                            var vector = segment.point - nextSegment.point;
                            vector.length = length;
                            nextSegment.point = segment.point - vector;
                            var segment = segment.next;
                        }

                        var segment = minDistanceSegment;

                        while (!segment.isFirst()) {

                            var previousSegment = segment.previous;
                            var vector = segment.point - previousSegment.point;
                            vector.length = length;
                            previousSegment.point = segment.point - vector;
                            var segment = segment.previous;
                        }
                        path.smooth({
                            type: 'continuous'
                        });
                    }
                    circle.position = circle.attached_segment.point
                }

            }

        }

        function onMouseDown(event) {
            path.fullySelected = true;
            path.strokeColor = '#e08285';
        }

        function onMouseUp(event) {
            path.fullySelected = false;
            path.strokeColor = '#e4141b';
        }