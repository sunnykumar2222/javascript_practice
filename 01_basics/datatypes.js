console.log("hello we are studying datatypes")

"use strict"; // ye ham likhte hai taaki ham compiler ko bol ske ki aap ye saare javascript code ko newer version k tarah treat kare
              // halaki ab ka jo naya compiler hai wo automatically saare code ko newer version jaisa hi treat krta hai.

console.log("hello")              

//alert("hello") // ye 1 statement hai jiska use ham bhout krenge, saayed jobrowser me jo alert message aata hai wo issi k wajah se aata hai
                //                ye abhi output iss liye nhi de rha hai kuiki  yaha pe node.js k andar isko likhne ka syntax thora alag hai, wahi pe agar 
               //                ham browser me jaa kar developer mode khol kar uske console me likhte hai to ye output de deta hai, kuiki waha pura k pura javascript ka engine hota hai

//alert( 3 + 3)

console.log(3 + 3);  console.log("sunny") // dekho aise v ham likh skte hai par code readiabilty ye accha nhi hai, hame dushre line me yahi extra code ko likhna chahiye tha

console.log(3 
    +
    3         // ham aise v likh skte hai par ye acchi practice nhi hai isse codee readiablity ghati hai

)   

// Lets study the real data types of javascripts

let a="ssss"
let b = 3

let c = null;

let d;

let e= true;

console.table([a, b, c, d, e])

// datatypes

// number => iska size 2 ka pwer 53/54 jitna hota hai , jaise ham "int" ka dekhte the
// big int => iska use hota hai jaha number ki size khatam hoti hai, matlab waha jaha more size ka value chahiye than normal number datatypes 100000000000000000000000000, iskause lagbhag nhi hi hota hai
// string 
// boolean => true/false
// undefined => yaha pe jo "d" variable hai wo abhi undefined hai, isme ham baad me value dalenge, isliiye ye abhi undefined kahlaayega
// null => ye v 1 datatype hai, lakin ye apne aap me 1 standalone vale hai,yaha pe null 1 value ki tarah treat hoga
// symbol => ye v 1 data type hota hai iska use react me jada hota hai kuiki ye unique value ko mark krne me maddad krta haia , jaise HTML/CSS me Id & Class krte the waise hi
// object


// aaaiye ab kuch aur keywords dehte hai jo hame bhot maddad karega

console.log(typeof "a") // iska use krte hai kissi v variable/value ka datatype check krne k lye, jaise python me type of() function ka use hota tha waise hi yaha v hota hai, kissi ka v data type check krne k liye
console.table([typeof a, typeof b, typeof c, typeof d, typeof e])

console.log(typeof null) // jab ham datatype check karenge null ka to wo hame output deta hai "object"
console.log(typeof undefined) // undefined ka output undefined hi aata hai kuiki ye 1 apne aap me data type hai, wahi null jo hai wo 1 object datatype hai as a value treat hota hai

