const words = ["Beachball", "Rodeo", "Bali", "Angel",
  "Aardvark", "Xylophone", "November", "Chocolate",
  "Papaya", "Uniform", "Joker", "Clover"
];

const alphabetical = words.reduce((a, x) => {
  if (!a[x[0]]) { // a객체에 해당 프로퍼티가 없다면
    a[x[0]] = []; // a객체에 해당 프로퍼티를 추가하고 빈 배열을 할당한다.
  }
  a[x[0]].push(x);
  return a;
}, {});


// a[x[0]]
// {}["B"] ==> 객체.프로퍼티 = 객체[프로퍼티]

/*
            a                      x              return
1회전       {}                     "Beachball"    {'B': ["Beachball"]}

2회전       {'B': "Beachball"}     "Rodeo"        {'B': ["Beachball"],
                                                  'R': ["Rodeo"]}
                 
3회전       {'B': ["Beachball"],   "Bali"         {'B': ["Beachball", "Bali"],
            'R': ["Rodeo"]}                       'R': ["Rodeo"]}
      
4회전      

*/

console.log(alphabetical);
// { B: [ 'Beachball', 'Bali' ],
//   R: [ 'Rodeo' ],
//   A: [ 'Angel', 'Aardvark' ],
//   X: [ 'Xylophone' ],
//   N: [ 'November' ],
//   C: [ 'Chocolate', 'Clover' ],
//   P: [ 'Papaya' ],
//   U: [ 'Uniform' ],
//   J: [ 'Joker' ] }