var setup = [{name:'Yusuf' ,age:18 , level:'100'}, {name:'Bhadchef' ,age:20 , level:'300'},
{name:'Akin' ,age:28 , level:'500'},{name:'Peter' ,age:23, level:'40'},{name:'Samuel' ,age:17 , level:'100'}];

function output(setup) {
    var result = [];
    for ( var i = 0; i< setup.length ;i++){
        result.push(setup[ i].name + '/' + setup[i].age + '/' + setup[i].level);
    }
     return result;

}
console.log(output(setup));