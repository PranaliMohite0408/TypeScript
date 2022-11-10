/*
Write a typescript program which contains one function named ChkPrime. That function accept one number and it should return true if the given number is prime and otherwise return false.
Input : 11
Output : It is Prime number 
*/

function main():void
{
    var no:number = 11;
    var ret;

    ret = ChkPrime(no)

    if(ret == true)
    {
        console.log('Number is Prime');
    }
    else
    {
        console.log('Number is Not Prime');
    }
    
}

function ChkPrime(value:number)
{
    var i:number = 0;
    
   for(i=2;i<value;i++)
   {
        if(value % i != 0)
        {
            return true;
        }
        else
        {
            return false;
        }
   }
}

main()