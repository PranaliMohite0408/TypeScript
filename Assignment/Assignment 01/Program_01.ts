/*
write a typescript program which contains one function named as Maximum. That function accepts three parameters and it should returns largest value from three input parameters.
Input : 23 89 6 
Output : Maximum number is 89
*/

function main():void
{
    var no1:number = 23;
    var no2:number=89
    var no3:number=6
    var ret;

    ret = Maximum(no1,no2,no3);

}

function Maximum(value1:number, value2:number, value3:number)
{
    if(value1>value2 && value1>value3)
    {
        console.log(value1,'Greater Number');
    }
    else if(value2>value1 && value2>value3)
    {
        console.log(value2,'is Greater Number');
    }
    else
    {
        console.log(value3,'is Greater Number');
    }
}

main();