// hello = function(){
//     return "Hello World !"
// }

hello = () => {
    return "Hello World !"

}

hello = () => "hello World !"

document.getElementById('app').innerHTML = hello()

console.log(hello);

// map()

const tab=[2,"",3,4,5]

const tab2 = tab.map(elementTab => {
    return elementTab * 2
})

console.log(tab);
console.log(tab2);



