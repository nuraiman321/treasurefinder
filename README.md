# treasurefinder

source https://gist.github.com/epoch/4461732cf2a283a2d8857e6c18fad1ed

You are an adventuring archaeologist, and have found some treasure maps! There are too many to check individually, so write a function `treasureFinder` that takes an array of arrays as an argument (see sample inputs below) and returns an array with the location of the treasure (X) as an array representing the X and Y coordinates, for example:

```javascript
let map1 = [
  ["A","A","A","A","A"],
  ["A","A","A","A","A"],
  ["A","A","X","A","A"],
  ["A","A","A","A","A"],
  ["A","A","A","A","A"]
];

// Sample output:

treasureFinder(map1) // should return [2, 2];
```
You can assume that the size of the treasure map will be the same.

### Some additional maps:

```javascript

let map2 = [
  ["A","A","A","A","A"],
  ["A","A","A","A","A"],
  ["A","A","A","A","A"],
  ["A","A","A","A","A"],
  ["A","X","A","A","A"]
];

treasureFinder(map2) // should return [1, 4];

let map3 = [
  ["A","A","A","A","A"],
  ["A","A","V","A","A"],
  ["A","A","A","V","A"],
  ["v","v","V","v","X"],
  ["A","V","A","A","A"]
];

treasureFinder(map3) // should return [4, 3];

let map4 = [
  ["A","A","A","A","A"],
  ["A","A","V","A","A"],
  ["X","A","A","V","A"],
  ["v","v","V","v","A"],
  ["A","V","A","A","A"]
];

treasureFinder(map4) // should return [0, 2];

```
