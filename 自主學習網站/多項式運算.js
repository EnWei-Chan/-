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
    var comfirm = document.getElementById("comfirm");
    comfirm.addEventListener("click",make_input);
    var n;
    function make_input()
    {
        n = parseInt((document.getElementById("n")).value);
        var form = document.getElementById("form");
        form.innerHTML = "";
        for(i = 0, k = n; i <= n; i++, k--)
        {
            var input = document.createElement("input");
            input.setAttribute("type", "text");
            input.setAttribute("class", "coefficient");
            input.setAttribute("value", "0");
            form.appendChild(input);
            var span = document.createElement("span")
            if(i < n-1)
                span.innerHTML += "X<sup>" + k.toString() + "</sup>+";
            else if(i != n)
                span.innerHTML += "X<sup>" + k.toString() + "</sup>";
            form.appendChild(span);
        }
        var br = document.createElement("br");
        form.appendChild(br);
        var reset = document.createElement("input");
        reset.setAttribute("type", "reset");
        reset.setAttribute("id", "reset");
        reset.setAttribute("value", "重置");
        form.appendChild(reset);
        var comfirm_fun = document.createElement("input");
        comfirm_fun.setAttribute("type", "button");
        comfirm_fun.setAttribute("id", "comfirm_function");
        comfirm_fun.setAttribute("value", "確認");
        form.appendChild(comfirm_fun);
        comfirm_fun.addEventListener("click", get_differential);
        comfirm_fun.addEventListener("click", get_integral);
    }
    function getData()
    {
        var value = document.getElementsByClassName("coefficient");
        var A = new Array(n+1)
        var k = 0;
        for(i = n; i >= 0; i--)
            A[i] = parseFloat(value[n-i].value);
        return A;
    }
    var cal_fun = document.getElementById("cal_fun");
    cal_fun.addEventListener("click", f);
    function f()
    {
        var x = parseFloat(document.getElementById("x_fun").value);
        var A = getData();
        var sum = 0;
        for(i = 0; i <= n; i++)
        {
            sum += A[i]*Math.pow(x , i);
        }
        sum = (Math.round(sum*100))/100;
        var solution = document.getElementById("solution_fun");
        solution.innerHTML = "";
        solution.innerText = "f(" + x.toString() + ")=" +  sum.toString();
    }
    function get_differential()
    {
        var A = getData();
        var D = new Array(n);
        for(i = n; i >= 1; i--)
            D[i-1] = (Math.round((A[i] * i)*100))/100;
        var p = document.getElementById("differential_function");
        p.innerHTML = "";
        p.innerText += "導函數為："
        for(i = n - 1; i >= 0; i--)
        {
            if(D[i] != 0)
            {
                var last = true;
                for(j = i - 1; j >= 0; j--)
                {
                    if(D[j] != 0)
                    {
                        last = false;
                        break;
                    }
                }
                if(last)
                {
                    if(i == 0)
                        p.innerHTML += D[i].toString();
                    else
                        p.innerHTML += D[i].toString() + "X<sup>" + i.toString() + "</sup>";
                }
                else
                    p.innerHTML += D[i].toString() + "X<sup>" + i.toString() + "</sup>+";
            }
            
        }
    }
    var cal_dif = document.getElementById("cal_dif");
    cal_dif.addEventListener("click", differential);
    function differential()
    {
        var A = getData();
        var x = parseFloat(document.getElementById("x_dif").value);
        var sum = 0;
        var D = new Array(n);
        for(i = n; i >= 1; i--)
            D[i-1] = (Math.round((A[i] * i)*100))/100;
        for(i = n - 1; i >= 0; i--)
        {
            sum += D[i] * Math.pow(x, i);
        }
        sum = (Math.round(sum*100))/100;
        var solution = document.getElementById("solution_dif");
        solution.innerHTML = "";
        solution.innerText = "f'(" + x.toString() + ")=" +  sum.toString();
    }
    function get_integral()
    {
        var A = getData();
        var I = new Array(n+2);
        I[0] = 0;
        for(i = 1; i < n + 2; i++)
            I[i] = ((Math.round((A[i-1]/i) * 100)) / 100);
        var p = document.getElementById("integral_function");
        p.innerHTML = "";
        p.innerText += "反導函數為："
        for(i = n + 1; i >= 1; i--)
        {
            if(I[i] != 0)
            {
                var last = true;
                for(j = i - 1; j >= 0; j--)
                {
                    if(I[j] != 0)
                    {
                        last = false;
                        break;
                    }
                }
                if(last)
                    p.innerHTML += I[i].toString() + "X<sup>" + i.toString() + "</sup>";
                else
                    p.innerHTML += I[i].toString() + "X<sup>" + i.toString() + "</sup>+";
            }
            
        }
    }
    var cal_int = document.getElementById("cal_int");
    cal_int.addEventListener("click", integral);
    function integral()
    {
        var A = getData();
        var a = parseFloat(document.getElementById("a").value);
        var b = parseFloat(document.getElementById("b").value);
        var sum = 0
        var I = new Array(n+2);
        I[0] = 0;
        for(i = 1; i < n + 2; i++)
            I[i] = ((Math.round((A[i-1]/i) * 100)) / 100);
        for(i = n + 1; i >= 1; i--)
        {
            sum += I[i] * ( Math.pow(b, i) - Math.pow(a, i) );
        }
        sum = (Math.round(sum*100))/100;
        var solution = document.getElementById("solution_int");
        solution.innerHTML = "";
        solution.innerText = "計算結果:" +  sum.toString();
    }
}