console.log("yaha ham variable ka value ko change change karenge aage")

const a=123
let b= 'sunny'
let c= 'kumar'

d='bhai'
var e= 'jaan'

console.table([a, b, c, d, e])


//a=333 //yaha ye error dega kuiki constant ka value ham change kar rhe hai
b='manjeet'
c='bihar'
d='apna bhai'
e= 'praan'

console.table([a, b, c, d, e])

// chalo kuch addition ka kaam krte hai

ax=1
bx=2
cx=ax+bx;
console.log('the out put of',ax, '+', bx, 'is', cx)

// chalo ab subtraction krte hai

dx=bx-ax
console.log('The subtraction of', bx, 'from', ax, 'is', dx)

//chalo ab kuch multiplication krte hai

ex= ax*bx

console.log('the product of', ax, '*', bx, 'is :', ex)

//chalo ab divide krte hai

fx= bx%ax
gx=bx/ax

console.log('the Remainder of ',bx, 'by', ax, 'is equal to :', fx)
console.log('the quetont of',bx, 'by', ax, 'is equal to', gx )

// ab two string value ko add krte hai

first_person = 'sonu \t' //yaha ham \t se 1 tab space le rhe hai, normal sabhi programming language jaisa 
second_person = 'monu'  // ham \n v le skte hai line change krne k liye

final_combo = first_person + second_person;

console.log('the name',first_person, 'and', second_person, 'combine is :', final_combo)