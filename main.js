fruits=["apple","orange","banana" ];
console.log(fruits);
document.getElementById("declare_array").innerHTML=fruits;
first_fruit=fruits[0];
console.log(first_fruit)
document.getElementById("declare_array_2").innerHTML=first_fruit;
second_fruit=fruits[1];
console.log(second_fruit);
document.getElementById("declare_array_3").innerHTML=second_fruit;
length_array=fruits.length;
console.log(length_array);

array_value="";
for(i=0;i < fruits.length;i++)
{
    console.log(fruits[i]);
    array_value= array_value + fruits[i] +"<br>";

}