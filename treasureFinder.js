// const { indexOf } = require("underscore");


let map1 = [
    ["A","A","A","A","A"],
    ["A","A","A","A","A"],
    ["A","A","X","A","A"],
    ["A","A","A","A","A"],
    ["A","A","A","A","A"]
  ];

  let map2 = [
    ["A","A","A","A","A"],
    ["A","A","A","A","A"],
    ["A","A","A","A","A"],
    ["A","A","A","A","A"],
    ["A","X","A","A","A"]
  ];

  let map3 = [
    ["A","A","A","A","A"],
    ["A","A","V","A","A"],
    ["A","A","A","V","A"],
    ["v","v","V","v","X"],
    ["A","V","A","A","A"]
  ];

  let map4 = [
    ["A","A","A","A","A"],
    ["A","A","V","A","A"],
    ["X","A","A","V","A"],
    ["v","v","V","v","A"],
    ["A","V","A","A","A"]
  ];
  


  function treasureFinder(map){
      let long = []
      let num = 0
      let coordinate = []
    for(i = 0; i < map.length; i++){
      long.push(map[i].indexOf('X'))
      
      if(map[i].indexOf('X') != -1){
        coordinate.push(map[i].indexOf('X'))
        num = map[i].indexOf('X')
      }

    }
    
    coordinate.push(long.indexOf(num))
    return coordinate
  }

  console.log(treasureFinder(map1))
  console.log(treasureFinder(map2))
  console.log(treasureFinder(map3))
  console.log(treasureFinder(map4))