        // Adapted from the following Processing example:
        // http://processing.org/learning/topics/follow3.html

        // The amount of points in the path:
        var points = 25;

        // The distance between the points:
        var length = 25;

        var path = new Path({
            strokeColor: '#E4141B',
            strokeWidth: 20,
            strokeCap: 'round'
        });

        var start = view.center / [10, 1];
        for (var i = 0; i < points; i++)
            path.add(start + new Point(i * length, 0));

        // Create a raster item using the image tag with id='mona'
        var raster = new Raster('ruler');

        raster.scale("0.3")
        // Move the raster to the center of the view
        raster.position = new Point(400, 600);





        function onMouseDrag(event) {

            minDistanceSegment = getNearestSegmentOnPath(path, event.point , points)

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
                    path.smooth({ type: 'continuous' });
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