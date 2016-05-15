
var distance = function(a, b) {
  var φ1 = toRad(a.lat),
      φ2 = toRad(b.lat),
      Δλ = toRad((b.lon-a.lon)),
      R  = 6371000;

  return Math.round(Math.acos( Math.sin(φ1)*Math.sin(φ2) + Math.cos(φ1)*Math.cos(φ2) * Math.cos(Δλ) ) * R);
};

var toRad = function(num) {
   return num * Math.PI / 180;
};

module.exports = distance;
