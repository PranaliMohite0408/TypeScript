/*
Write a typescript program which contains one function named as Area. That function should calculate area of circle. Accerpt value of radius from user and return its area. Default value of PI should be 3.14. if it is not provided by the caller.
Input : 5
Output : Area of circle is 78.5
 */

function main():void
{
    var no:number = 5;
    var ret;

    ret = Area(no);

    console.log('Area of Circle is ',ret)
  
}

function Area(value:number, PI:number=  3.14 ):number
{
    var ans:number=0;

    ans = PI * value * value

    return ans;


}
main();