var arr=[9,2,1,4,5,6,7,2,4]
document.write("Input = [9,2,1,4,5,6,7,2,4]<br><br>")
let count=0
for(let i=0;i<arr.length;i++){
   
    console.log(count);
    if(count===3){
        document.write("<br>")
        count=count*0
     
    }
    if(arr[i]%2===0){
    
        document.write(0)
    }
    else{
        document.write(1)
    }
    count++
}