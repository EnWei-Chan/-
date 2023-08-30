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
    var i, j;

    var adjust = document.getElementsByClassName("adjust");
    var rA = 2 , cA = 2 , rB = 2 , cB = 2;
    adjust[0].addEventListener("click", function (){rA--;adjust_row_col_A();});
    adjust[1].addEventListener("click", function (){rA++;adjust_row_col_A();});
    adjust[2].addEventListener("click", function (){cA--;adjust_row_col_A();});
    adjust[3].addEventListener("click", function (){cA++;adjust_row_col_A();});
    adjust[4].addEventListener("click", function (){rB--;adjust_row_col_B();});
    adjust[5].addEventListener("click", function (){rB++;adjust_row_col_B();});
    adjust[6].addEventListener("click", function (){cB--;adjust_row_col_B();});
    adjust[7].addEventListener("click", function (){cB++;adjust_row_col_B();});
    function adjust_row_col_A()
    {
        var rowA = document.getElementById("rowA");
        var colA = document.getElementById("colA");

        rowA.innerText = rA.toString();
        colA.innerText = cA.toString();

        var form_Martix_A = document.getElementById("martix_A");
        form_Martix_A.innerHTML = "";
        for(i = 0; i < rA; i++)
        {
            for(j = 0; j < cA; j++)
            {
                var input = document.createElement("input");
                input.setAttribute("type", "text");
                input.setAttribute("class", "valueA");
                input.setAttribute("value", "0");
                form_Martix_A.appendChild(input);
            }
            var br = document.createElement("br");
            form_Martix_A.appendChild(br);
        }
        var reset = document.createElement("input");
        reset.setAttribute("type", "reset");
        reset.setAttribute("value", "重置");
        form_Martix_A.appendChild(reset);
    }
    function adjust_row_col_B()
    {
        var rowb = document.getElementById("rowB");
        var colB = document.getElementById("colB");

        rowB.innerText = rB.toString();
        colB.innerText = cB.toString();

        var form_Martix_B = document.getElementById("martix_B");
        form_Martix_B.innerHTML = "";
        for(i = 0; i < rB; i++)
        {
            for(j = 0; j < cB; j++)
            {
                var input = document.createElement("input");
                input.setAttribute("type", "text");
                input.setAttribute("class", "valueB");
                input.setAttribute("value", "0");
                form_Martix_B.appendChild(input);
            }
            var br = document.createElement("br");
            form_Martix_B.appendChild(br);
        }
        var reset = document.createElement("input");
        reset.setAttribute("type", "reset");
        reset.setAttribute("value", "重置");
        form_Martix_B.appendChild(reset);
    }
    var add = document.getElementById("addition");
    var sub = document.getElementById("subtraction");
    var multi = document.getElementById("multiplication");

    add.addEventListener("click", function (){addition(1)});
    sub.addEventListener("click", function (){addition(-1)});
    multi.addEventListener("click", multiplication);

    function getData_A()
    {
        var valueA = document.getElementsByClassName("valueA");
        var A = new Array(rA)
        for(i = 0; i < rA; i++)
            A[i] = new Array(cA);
        var k = 0;
        for(i = 0; i < rA; i++)
        {
            for(j = 0; j < cA; j++)
                A[i][j] = parseFloat(valueA[k++].value);
        }
        console.log(A);
        return A;
    }
    function getData_B()
    {
        var valueB = document.getElementsByClassName("valueB");
        var B = new Array(rB)
        for(i = 0; i < rB; i++)
            B[i] = new Array(cB);
        var k = 0;
        for(i = 0; i < rB; i++)
        {
            for(j = 0; j < cB; j++)
                B[i][j] = parseFloat(valueB[k++].value);
        }
        console.log(B);
        return B;
    }
    function addition(isadd)
    {
        var A = getData_A();
        var B = getData_B();
        if((rA != rB) || (cA != cB))
            alert("請輸入大小相同的矩陣");
        else
        {
            var solution = document.getElementById("solution")
            if(isadd == 1)
                solution.innerText = "A+B=\n";
            else if(isadd == -1)
                solution.innerText = "A-B=\n";
            for(i = 0; i < rA; i++)
            {
                for(j = 0; j < cA; j++)
                {
                    if(isadd == 1)
                        solution.innerText += (A[i][j] + B[i][j]).toString();
                    else if(isadd == -1)
                        solution.innerText += (A[i][j] - B[i][j]).toString();
                    if(j < cA-1)
                        solution.innerText += ",";
                }      
                solution.innerHTML += "<br>";
            }
        }  
    }
    
    function multiplication()
    {
        var A = getData_A();
        var B = getData_B();
        if((cA!=rB))
            alert("A的行數須等於B的列數");
        else
        {
            var AB = new Array(rA);
            for(i = 0; i < rA; i++)
                AB[i] = new Array(cB);
            for(i = 0; i < rA; i++)
            {
                for(j = 0; j < cB; j++)
                {                        
                    AB[i][j] = 0;
                    for(p = 0; p < cA; p++)
                        AB[i][j] += A[i][p] * B[p][j];
                }
            }
            var solution = document.getElementById("solution")
            solution.innerText = "A×B=\n";
            for(i = 0; i < rA; i++)
            {
                for(j = 0; j < cB; j++)
                {
                    solution.innerText += (AB[i][j]).toString();
                    if(j < cB-1)
                        solution.innerText += ",";
                } 
                solution.innerHTML += "<br>";
            }
        }
        console.log(AB);
    }
    
    var trans = document.getElementById("transpose");
    trans.addEventListener("click", transpose);
    function transpose()
    {
        var A = getData_A();
        var solution = document.getElementById("solution")
        solution.innerText = "A的轉置矩陣為：\n"
        for(i = 0; i < rA; i++)
        {
            for(j = 0; j < cA; j++)
             {
                solution.innerText += (A[j][i]).toString();
                if(j < cA-1)
                    solution.innerText += ",";
             }
             solution.innerHTML += "<br>";
        }
    }

    var det  = document.getElementById("determinant");
    det.addEventListener("click", determinant);
    function determinant()
    {
        var A = getData_A();
        var d;
        if(rA == 2 && cA ==2)
        {
            d = (A[0][0] * A[1][1]) - (A[0][1] * A[1][0]);
                
        }  
        else if(rA == 3 && cA == 3)
        {
            d = (A[0][0] * A[1][1] * A[2][2]) +
                (A[0][1] * A[1][2] * A[2][0]) +
                (A[0][2] * A[1][0] * A[2][1]) -
                (A[0][2] * A[1][1] * A[2][0]) -
                (A[0][1] * A[1][0] * A[2][2]) -
                (A[0][0] * A[1][2] * A[2][1]); 
        }
        else
            alert("求行列式值只接受2x2或3x3大小的方陣")
        var solution = document.getElementById("solution")
        solution.innerText = "A的行列式值為："
        solution.innerText += d.toString();
    }
    var rev = document.getElementById("reverse");
    rev.addEventListener("click", reverse);
    function reverse()
    {
        var A = getData_A();
        if(rA != 2 || cA != 2)
            alert("求反方陣只接受2x2大小的方陣");
        else
        {
            var d = (A[0][0] * A[1][1]) - (A[0][1] * A[1][0]);
            if(d == 0)
                alert("此方陣不可逆");
            else
            {
                var solution = document.getElementById("solution")
                solution.innerText = "A的反方陣為：\n"
                var temp = A[0][0];
                A[0][0] = A[1][1];
                A[1][1] = temp;
                A[0][1] *= -1.0;
                A[1][0] *= -1.0;
                console.log(d);
                for(i = 0; i < 2; i++)
                {
                    for(j = 0;j < 2; j++)
                    {
                        solution.innerText += (A[i][j]*(1/d)).toString();
                        if(j < cA-1)
                            solution.innerText += ",";
                    }
                    solution.innerHTML += "<br>";
                }
            }
        }
    }        
}