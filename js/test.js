
var data=[
  {
    id:1,
    name:"Yosi",
    age:21,
    score:80
  },
  {
    id:2,
    name:"Bobi",
    age:22,
    score:100
  },
  {
    id:3,
    name:"Jonny",
    age:18,
    score:70
  },
  {
    id:4,
    name:"James",
    age:25,
    score:90
  }
  
];

var indexed={
  ID:{
    1:[0],
    2:[1],
    3:[3],
    4:[4],
  },
  SCORE:{
    key:"score",
    data:{
      80:[0],
      100:[1],
      70:[3],
      90:[4],
    },
    sorted:[3,0,4,1]
  }
};


var ia = new IndexedArray(data);
ia.addIndex("ID", "id");
ia.addIndex("SCORE", "score");