import GeoClasses, GeoFunctions


square = GeoClasses.Polygon(sides=4)
print(square.side)
print(GeoFunctions.interior_angle(square))