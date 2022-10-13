let arr = [1,2,3];
let arr2 = [4,5,6];
let arr3 = [...arr,...arr2];
// spread operator;
function masai(...ans)
{
    console.log(ans)
}
masai(1,2,3)