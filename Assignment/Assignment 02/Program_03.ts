/*
    Write a typescript program which contains one function named as Maximum.
    that function accepts array of numbers and returns the second largest number from array.
    Input : 23 89 6 29 56 45 77 32
    Output : Second Maximum Number is 77
*/

function main():void
{
    var Arr:number[] = [23, 89, 6, 29, 56, 45, 77, 32]

    var Num:number;

    Num = Maximum(Arr);

    console.log("Second Maximum Number form Array is => " + Num);
}
function Maximum(Arr):number
{   
    var i:number =0;
    var max1:number=0;
    var max2:number=0;

    for(i=0;i<Arr.length;i++)
    {
        if(Arr[i]>max1)
        {
            max1 = Arr[i];
        }

        if(Arr[i]>0 && Arr[i]!= max1 && Arr[i]>max2)
        {
            max2 = Arr[i];
        }
    }
    return max2;
}
main();