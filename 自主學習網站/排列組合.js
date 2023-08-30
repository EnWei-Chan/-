if (window.addEventListener)
{
    window.addEventListener("load", init);
}
else if (window.attachEvent)
{
    window.attachEvent("onload", init);
}
else
{
    window.onload = init;
}
function init()
{
    var i, j, k;
    function factorial(n)
    {
        if(n == 0)
            return 1;
        else
            return factorial(n - 1) * n;
    } 
    var calf = document.getElementById("f")
    calf.addEventListener("click", f);
    function f()
    {
        var n = parseInt(document.getElementById("n").value);
        var solution = document.getElementById("solution_f")
        solution.innerText = n.toString() + "!=" + factorial(n).toString();
    }
    var calC = document.getElementById("C")
    calC.addEventListener("click", C);
    function C()
    {
        var m = parseInt(document.getElementById("Cm").value);
        var n = parseInt(document.getElementById("Cn").value);
        if(n > m)
        {
            alert("注意：m需>n");
            return;
        }
        console.log(m , n);
        var ans = factorial(m) / (factorial(n) * factorial(m - n));
        var solution = document.getElementById("solution_C");
        solution.innerText = "C" + m.toString() + "取" + n.toString() + "=" + ans.toString();
    }
    var calP = document.getElementById("P")
    calP.addEventListener("click", P);
    function P()
    {
        var m = parseInt(document.getElementById("Pm").value);
        var n = parseInt(document.getElementById("Pn").value);
        if(n > m)
        {
            alert("注意：m需>n");
            return;
        }
        var ans = factorial(m) / factorial(n);
        var solution = document.getElementById("solution_P");
        solution.innerText = "P" + m.toString() + "取" + n.toString() + "=" + ans.toString();
    }
    var calH = document.getElementById("H")
    calH.addEventListener("click", H);
    function H()
    {
        var m = parseInt(document.getElementById("Hm").value);
        var n = parseInt(document.getElementById("Hn").value);
        if(n > m)
        {
            alert("注意：m需>n");
            return;
        }
        var ans = factorial(m + n - 1) / (factorial(m-1) * factorial(n));
        var solution = document.getElementById("solution_H");
        solution.innerText = "H" + m.toString() + "取" + n.toString() + "=" + ans.toString();
    }
}