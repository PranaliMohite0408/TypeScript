//Default Argument
//Default Argument Should be trailing(from right to left)
function Demo(no1:number, no2:number=20, no3:number=30)
{
    console.log("Inside Demo!!!")
}

//Demo()        //error
Demo(10);       //no1=10,no2=20,no3=30
Demo(10,11);    //no1=10,no2=11,no3=30
Demo(10,22,12); //no1=11,no2=22,no3=12