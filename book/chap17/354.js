let name = "Heungmin Son";
name = name.replace(/(?:\w+)\s(\w+)/, "$2 $1");
console.log(name); // Son Heungmin
// (): 캡쳐링, $1랑 짝지어짐, 임시 메모리에 보관

// (?:x): 임시 메모리에 보관은 안하면서 묶고싶을때, 
// (?:)은 문법이고 x만 바꿀수있음

// 검색어 예 : js regex email check 