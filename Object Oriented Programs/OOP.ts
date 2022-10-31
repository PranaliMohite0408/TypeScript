//Object Oriented Programming(OOP)

class Arithmetic
{
    //Characterstics
    No1:number;
    No2:number;

    constructor(a:number,b:number)
    {
        this.No1 = a;
        this.No2 = b;
    }

    Addition()  //Behaviour
    {
        var Ans:number = 0;     //Local Variable
        Ans = this.No1 + this.No2;
        return Ans;
    }

    Substraction()      //Behaviour
    {
        var Ans:number = 0;         //Local Cariable
        Ans = this.No1 - this.No2;
        return Ans;
    }
}

var Obj1 = new Arithmetic(10,11);
var Obj2 = new Arithmetic(20,21);

var Ret:number = 0;

Ret = Obj1.Addition()
console.log("Addition is :"+Ret)

Ret = Obj1.Substraction()
console.log("Substraction is :"+Ret)