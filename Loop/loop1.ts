//Loop : for, while, do-while

function Sequence():void
{
    console.log("Hello");
    console.log("Hello");
    console.log("Hello");
    console.log("Hello");
    console.log("Hello");
}

function Iteration_for():void
{
    var i: number = 0;

    for(i=1;i<=5;i++)
    {
        console.log("Hello");
    }
}

function Iteration_while():void
{
    var i:number = 1;

    while(i<=5)
    {
        console.log("Hello");
        i++;
    }
}

Sequence();
Iteration_for();
Iteration_while();
