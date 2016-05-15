distance = require('../');

describe("distance", function() {
  it("should compute a distance", function() {
    var d = distance({lat: 43.87751, lon: 8.011852}, {lat: 43.876867, lon: 8.012698});

    expect(d).toEqual(99);
  });

  it("should compute a longer distance", function() {
    var d = distance(
      {lat: -33.8824219918503, lon: 151.206686052582},
      {lat: -33.8815434600467, lon: 151.206556440037}
    );

    expect(d).toEqual(98);
  });

  it("should compute a far distance", function() {
    var d = distance(
      {lat: 7, lon: 41.12},
      {lat: 7, lon: 41.13}
    );

    expect(d).toEqual(1104);
  });
});
