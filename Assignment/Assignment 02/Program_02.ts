/*
    write a typescript program which contains one function named as Summation.
    That function accepts of numbers and return the summation of each number form the array.
    Input : 23 6 7 4 5 7 
    Output : Addition is 52  
*/

function main():void
{
    var Arr:number[] = [23, 6, 7, 4, 5, 7 ];

    var num:number ;

    num = Summation(Arr);

    console.log("Addition of Given Array is =>" + num);
}

function Summation(Arr):number
{
    var i:number=0;
    var min:number=0;

    for(i=0;i<Arr.length;i++)
    {
        if(Arr[i]>0)
        {
            min = min + Arr[i];
        }
    }
    return min;
}

main()