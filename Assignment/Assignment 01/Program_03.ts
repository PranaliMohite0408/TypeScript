/*
Write a typescript program which contains one function named as DisplayFactors. That should accept one number and display Factors of that number.
Input : 20
Output : 1 2 4 5 10
*/

function main():void
{
    var no:number = 20;
    
    DisplayFactors(no);

}

function DisplayFactors(value):void
{
    var i:number=0;

    console.log("Factors of Given Numbers are =>")

    for(i=1;i<value;i++)
    {
        if(value%i==0)
        {
            console.log(i);
        }
    }
}

main();