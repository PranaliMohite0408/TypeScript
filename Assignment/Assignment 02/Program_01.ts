/*
Write a typescript program which contains one function named as Maximum.T
That function accepts array of numbers and returns the largest number form array.
Input : 23 89 6 29 56 45 77 32
Output : Maximum Number is 89
*/
function main()
{
    var Arr:number[] = [23,89,6,29,56,45,77,32];

    var Num;

    Num = Maximum(Arr);

    console.log("Maximum Number is =>" + Num);

}
function Maximum(Arr:number[])
{
    var i:number=0;
    var max:number=0;
    for(i=0;i<Arr.length;i++)       
    {
        if(Arr[i]>max)
        {
            max = Arr[i];
        }
    }
    return max;
}
main()