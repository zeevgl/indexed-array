
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


var ia = new IndexedArray(data);
ia.addIndex("ID", "id");