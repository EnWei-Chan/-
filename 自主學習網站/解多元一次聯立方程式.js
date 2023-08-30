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
        for(i = 0; i < n; i++)
        {
            for(j = 0, k = n; j < n + 1; j++, k--)
            {
                var input = document.createElement("input");
                input.setAttribute("type", "text");
                input.setAttribute("class", "coefficient");
                input.setAttribute("value", "0");
                form.appendChild(input);
                if(j < n)
                {
                    var span = document.createElement("span")
                    if(j <= n-1)
                        span.innerHTML += "X<sub>" + k.toString() + "</sub>+";
                    else
                        span.innerHTML += "X<sub>" + k.toString() + "</sub>=0";
                    form.appendChild(span);
                }
            }
            var span = document.createElement("span")
            span.innerText = "=0";
            form.appendChild(span);
            var br = document.createElement("br");
            form.appendChild(br);
        }
        var reset = document.createElement("input");
        reset.setAttribute("type", "reset");
        reset.setAttribute("id", "reset");
        reset.setAttribute("value", "重置");
        form.appendChild(reset);
        var cal = document.createElement("input");
        cal.setAttribute("type", "button");
        cal.setAttribute("id", "calculate");
        cal.setAttribute("value", "解方程組");
        form.appendChild(cal);
        var calculate = document.getElementById("calculate");
        calculate.addEventListener("click", solution);
        var sol = document.getElementById("solution");
        sol.innerHTML = "";
        var reset_button = document.getElementById("reset");
        reset_button.addEventListener("click", function(){sol.innerHTML="";})    
    }
    

    function getData()
    {
        var value = document.getElementsByClassName("coefficient");
        var A = new Array(n)
        for(i = 0; i < n; i++)
            A[i] = new Array(n+1);
        var k = 0;
        for(i = 0; i < n; i++)
        {
            for(j = 0; j < n + 1; j++)
                A[i][j] = parseFloat(value[k++].value);
        }
        return A;
    }

    function solution()
    {
        var A = getData();
        for(i = 0; i < n-1; i++)
        {

            if (A[i][i] == 0)
            {
                for (j = i + 1; j < n; j++)
                {
                    if (A[j][i] != 0)
                    {
                        for (k = i; k < n+1; k++)
                            swap(A[i][k], A[j][k]);
                        break;
                    }
                }
            }

            if(A[i][i] == 0)
                continue;

            var t = A[i][i];
            for (j = i; j < n + 1; j++)
                A[i][j] /= t;

            for (j = i + 1; j < n; j++)
            {
                var t = -(A[j][i] / A[i][i]);

                if (A[j][i] != 0)
                {
                    for (k = i; k < n+1; k++)
                        A[j][k] += A[i][k] * t;
                }
            }

        }

        var Solution_Set = new Array(n);
        var sol = document.getElementById("solution");
        sol.innerHTML = "";
        sol.innerText += "計算結果為：\n";
        if (A[n-1][n-1] == 0)
        {
            if(A[n-1][n] == 0)
                sol.innerText = "無限多組解";
            else
                sol.innerText = "無解";
        }
        else
        {
            for (i = n-1; i >= 0; i--)
            {
                var t = 0;
                for (j = i + 1; j < n; j++)
                    t += A[i][j] * Solution_Set[j];
                Solution_Set[i] =  (A[i][n] - t) / A[i][i];
            }
            for(i = 0; i < n; i++)
                Solution_Set[i] = Math.round(Solution_Set[i]*100)/100;
                sol.innerText = "解集合為{" + Solution_Set.toString() + "}";
        }
    }
    /*
    var n = 4, i, j, k;
    var A = new Array(n);
    for(i = 0; i < n; i++)
        A[i] = new Array(n+1);
    A = [[8, 3, 4, 5, 31],
         [14, 4, 33, 23, 17],
         [15, 4, 23, 7, 22],
         [4, 11, 17, 1, 51]];
    for(i = 0; i < n-1; i++)
	{

		if (A[i][i] == 0)
        {
			for (j = i + 1; j < n; j++)
            {
				if (A[j][i] != 0)
				{
					for (k = i; k < n+1; k++)
						swap(A[i][k], A[j][k]);
					break;
				}
            }
        }

		if(A[i][i] == 0)
            continue;

		var t = A[i][i];
		for (j = i; j < n + 1; j++)
			A[i][j] /= t;

		for (j = i + 1; j < n; j++)
        {
            var t = -(A[j][i] / A[i][i]);

			if (A[j][i] != 0)
			{
				for (k = i; k < n+1; k++)
					A[j][k] += A[i][k] * t;
			}
        }

	}

	var Solution_Set = new Array(n);

	if (A[n-1][n-1] == 0)
    {
        if(A[n-1][n] == 0)
            console.log("無限多組解");
        else
            console.log("無解");
    }
    else
    {
        for (i = n-1; i >= 0; i--)
        {
            var t = 0;
            for (j = i + 1; j < n; j++)
                t += A[i][j] * Solution_Set[j];
            Solution_Set[i] =  (A[i][n] - t) / A[i][i];
        }
        for(i = 0; i < n; i++)
            Solution_Set[i] = Math.round(Solution_Set[i]*100)/100;
        console.log(Solution_Set);
    }*/
}