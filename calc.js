let currentNum=0;
let prevNum=0;

let upperText=document.querySelector(".upperDiv")
let lowerText=document.querySelector(".lowerDiv")

let allNum=document.querySelectorAll(".num")

let plus=document.getElementById("add")
let sub=document.getElementById("sub")
let multiply=document.getElementById("multiply")
let divide=document.getElementById("divide")
let equal=document.getElementById("equal")
let reset=document.getElementById("reset")
let i=0;

let numbers=[];
let opers=[];

allNum.forEach(function(num){
    num.addEventListener("click", function(){
        if(upperText.innerHTML==0){
            upperText.innerHTML=num.innerHTML
        }
        else{
            upperText.innerHTML+=num.innerHTML
        }
        currentNum=Number(upperText.innerHTML)
    })
})

plus.addEventListener("click", function(){
    if(numbers[numbers.length-1!=upperText.innerHTML] || numbers[0]==null){
        numbers.push(currentNum); 
    }
      
    opers.push('+');
    if(lowerText.innerHTML==="" || lowerText.innerHTML[lowerText.innerHTML.length-1]=='+' || lowerText.innerHTML[lowerText.innerHTML.length-1]=='-' || lowerText.innerHTML[lowerText.innerHTML.length-1]=='x'){
        lowerText.innerHTML+=currentNum+"+";
    }
    else{
        lowerText.innerHTML+="+";
    }
    
    upperText.innerHTML=0;
    console.log(numbers)
    console.log(opers)
    console.log(i)
})

sub.addEventListener("click", function(){
    if(numbers[numbers.length-1!=upperText.innerHTML] || numbers[0]==null){
        numbers.push(currentNum); 
    }
      
    opers.push('-');
    if(lowerText.innerHTML==="" || lowerText.innerHTML[lowerText.innerHTML.length-1]=='+' || lowerText.innerHTML[lowerText.innerHTML.length-1]=='-' || lowerText.innerHTML[lowerText.innerHTML.length-1]=='x' || lowerText.innerHTML[lowerText.innerHTML.length-1]=='/'){
        lowerText.innerHTML+=currentNum+"-";
    }
    else{
        lowerText.innerHTML+="-";
    }
    
    upperText.innerHTML=0;
    console.log(numbers)
    console.log(opers)
    console.log(i)
})

multiply.addEventListener("click", function(){
    if(numbers[numbers.length-1!=upperText.innerHTML] || numbers[0]==null){
        numbers.push(currentNum); 
    }
      
    opers.push('x');
    if(lowerText.innerHTML==="" || lowerText.innerHTML[lowerText.innerHTML.length-1]=='+' || lowerText.innerHTML[lowerText.innerHTML.length-1]=='-' || lowerText.innerHTML[lowerText.innerHTML.length-1]=='x'){
        lowerText.innerHTML+=currentNum+"x";
    }
    else{
        lowerText.innerHTML+="x";
    }
    
    upperText.innerHTML=0;
    console.log(numbers)
    console.log(opers)
    console.log(i)
})

divide.addEventListener("click", function(){
    if(numbers[numbers.length-1!=upperText.innerHTML] || numbers[0]==null){
        numbers.push(currentNum); 
    }
      
    opers.push('/');
    if(lowerText.innerHTML==="" || lowerText.innerHTML[lowerText.innerHTML.length-1]=='+' || lowerText.innerHTML[lowerText.innerHTML.length-1]=='-' || lowerText.innerHTML[lowerText.innerHTML.length-1]=='x'){
        lowerText.innerHTML+=currentNum+"/";
    }
    else{
        lowerText.innerHTML+="/";
    }
    
    upperText.innerHTML=0;
    console.log(numbers)
    console.log(opers)
    console.log(i)
})

equal.addEventListener("click", function(){
    lowerText.innerHTML+=currentNum
    numbers.push(currentNum);
    console.log(numbers)
    console.log(opers)


    while(i<numbers.length-1){
        if(opers[i]=='+'){
            numbers[i+1]=numbers[i]+numbers[i+1];
        }
        else if(opers[i]=='-'){
            numbers[i+1]=numbers[i]-numbers[i+1];
        }
        else if(opers[i]=='x'){
            numbers[i+1]=numbers[i]*numbers[i+1];
        }
        else if(opers[i]=='/'){
            numbers[i+1]=numbers[i]/numbers[i+1];
        }
        i++
    }
    console.log(i)
    console.log(numbers)
    upperText.innerHTML=numbers[numbers.length-1];
    currentNum=Number(upperText.innerHTML)
})


reset.addEventListener("click", function(){
    window.location.reload();
})

