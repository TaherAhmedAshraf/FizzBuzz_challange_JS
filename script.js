var array = [];

var i = 1;

while(i<=100){
    if((i%3) == 0 && (i%5) ==0){
        array.push("Fizz-Buzz");
        i++;

    }else if((i%5) ==0){
        array.push("Buzz")
        i++;

    }else if((i%3)==0){
        array.push("Fizz")
        i++;

    }else{
        array.push(i);
        i++;
    }
}

var a= 0;
while(a<=99){
    document.write(array[a]+"</br>")
    a++;
}

console.log(array)