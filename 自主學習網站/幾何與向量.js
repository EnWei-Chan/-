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
    var point = document.getElementsByClassName("line_point");
    var make_line = document.getElementById("make_line");
    make_line.addEventListener("click", line);
    function line()
    {
        var a = parseFloat(point[0].value), b = parseFloat(point[1].value), c = parseFloat(point[2].value), d = parseFloat(point[3].value);
        if(a == c && b == d)
            alert("AB兩點座標需相異")
        else
        {
            var solution = document.getElementById("line_solution");
            solution.innerText = "求得直線為：";
            if(a != c)
            {
                
                var m = (d - b) / (c - a);
                console.log(m);
                var k = m*(-a)+b;
                solution.innerText += "y=";
                if(m != 0)
                {
                    if(m != 1)
                        solution.innerText += m.toString();
                    solution.innerText += "x";
                }
                if((m==0 && k==0))
                    solution.innerText += k.toString();
                if(m!=0 && k!=0)
                    solution.innerText += "+" + k.toString();
            }
            else
                solution.innerText = "x=" + a.toString();
        }
    }
    var sypoint_2d = document.getElementsByClassName("symmetryPoint_2d");
    var syline = document.getElementsByClassName("symmetryLine");
    var find_symmetryPoint_2d = document.getElementById("find_symmetryPoint_2d");
    find_symmetryPoint_2d.addEventListener("click",  symmetry_2d);
    function symmetry_2d()
    {
        var x = parseFloat(sypoint_2d[0].value), y = parseFloat(sypoint_2d[1].value);
        var a = parseFloat(syline[0].value), b = parseFloat(syline[1].value), c = parseFloat(syline[2].value);
        if(a == 0 && b == 0)
            alert("x與y的係數不能同時為0");
        else
        {
            var x2 = x - (2 * a*(a * x + b * y + c) )/ (a * a + b * b);
            var y2 = y - (2 * b*(a * x + b * y + c) )/ (a * a + b * b);
            var solution = document.getElementById("symmetry_solution_2d");
            solution.innerText = "求得對稱點為：";
            solution.innerText += "(" + x2.toString() + "," + y2.toString() + ")";
        }
    }

    var sypoint_3d = document.getElementsByClassName("symmetryPoint_3d");
    var syplane = document.getElementsByClassName("symmetryPlane");
    var find_symmetryPoint_3d = document.getElementById("find_symmetryPoint_3d");
    find_symmetryPoint_3d.addEventListener("click",  symmetry_3d);
    function symmetry_3d()
    {
        var x = parseFloat(sypoint_3d[0].value), y = parseFloat(sypoint_3d[1].value), z = parseFloat(sypoint_3d[2].value);
        var a = parseFloat(syplane[0].value), b = parseFloat(syplane[1].value), c = parseFloat(syplane[2].value), d = parseFloat(syplane[3].value);
        if(a == 0 && b == 0 && c == 0)
            alert("x,y,z的係數不能同時為0");
        else
        {
            var x2 = x - (2 * a*(a * x + b * y + c * z + d) )/ (a * a + b * b + c * c);
            var y2 = y - (2 * b*(a * x + b * y + c * z + d) )/ (a * a + b * b + c * c);
            var z2 = z - (2 * c*(a * x + b * y + c * z + d) )/ (a * a + b * b + c * c);
            var solution = document.getElementById("symmetry_solution_3d");
            solution.innerText = "求得對稱點為：";
            solution.innerText += "(" + x2.toString() + "," + y2.toString() + "," + z2.toString() + ")";
        }
    }


    var vector_2d = document.getElementsByClassName("vector_2d");

    var add_2d = document.getElementById("addition_2d");
    add_2d.addEventListener("click", addition_2d);

    var sub_2d = document.getElementById("subtraction_2d");
    sub_2d.addEventListener("click", subtraction_2d);

    var dot_2d = document.getElementById("dotPorduct_2d");
    dot_2d.addEventListener("click", dotPorduct_2d);

    function addition_2d()
    {
        var x1 = parseFloat(vector_2d[0].value), y1 = parseFloat(vector_2d[1].value), x2 = parseFloat(vector_2d[2].value), y2 = parseFloat(vector_2d[3].value);
        var solution = document.getElementById("vector_2d_solution");
        solution.innerText = "A+B=(" + (x1+x2).toString() + "," + (y1+y2).toString() + ")";
    }
    function subtraction_2d()
    {
        var x1 = parseFloat(vector_2d[0].value), y1 = parseFloat(vector_2d[1].value), x2 = parseFloat(vector_2d[2].value), y2 = parseFloat(vector_2d[3].value);
        var solution = document.getElementById("vector_2d_solution");
        solution.innerText = "A-B=(" + (x1-x2).toString() + "," + (y1-y2).toString() + ")";
    }
    function dotPorduct_2d()
    {
        var x1 = parseFloat(vector_2d[0].value), y1 = parseFloat(vector_2d[1].value), x2 = parseFloat(vector_2d[2].value), y2 = parseFloat(vector_2d[3].value);
        var solution = document.getElementById("vector_2d_solution");
        solution.innerText = "A•B=" + (x1 * x2 + y1 * y2).toString();
    }

    var vector_3d = document.getElementsByClassName("vector_3d");

    var add_3d = document.getElementById("addition_3d");
    add_3d.addEventListener("click", addition_3d);

    var sub_3d = document.getElementById("subtraction_3d");
    sub_3d.addEventListener("click", subtraction_3d);

    var dot_3d = document.getElementById("dotPorduct_3d");
    dot_3d.addEventListener("click", dotPorduct_3d);

    var outer_3d = document.getElementById("outerPorduct_3d");
    outer_3d.addEventListener("click", outerPorduct_3d);

    function addition_3d()
    {
        var x1 = parseFloat(vector_3d[0].value), y1 = parseFloat(vector_3d[1].value), z1 = parseFloat(vector_3d[2].value),
            x2 = parseFloat(vector_3d[3].value), y2 = parseFloat(vector_3d[4].value), z2 = parseFloat(vector_3d[5].value);
        var solution = document.getElementById("vector_3d_solution");
        solution.innerText = "A+B=(" + (x1+x2).toString() + "," + (y1+y2).toString() + "," + (z1+z2).toString() + ")";
    }
    function subtraction_3d()
    {
        var x1 = parseFloat(vector_3d[0].value), y1 = parseFloat(vector_3d[1].value), z1 = parseFloat(vector_3d[2].value),
            x2 = parseFloat(vector_3d[3].value), y2 = parseFloat(vector_3d[4].value), z2 = parseFloat(vector_3d[5].value);
        var solution = document.getElementById("vector_3d_solution");
        solution.innerText = "A-B=(" + (x1-x2).toString() + "," + (y1-y2).toString() + "," + (z1-z2).toString() + ")";
    }
    function dotPorduct_3d()
    {
        var x1 = parseFloat(vector_3d[0].value), y1 = parseFloat(vector_3d[1].value), z1 = parseFloat(vector_3d[2].value),
            x2 = parseFloat(vector_3d[3].value), y2 = parseFloat(vector_3d[4].value), z2 = parseFloat(vector_3d[5].value);
        var solution = document.getElementById("vector_3d_solution");
        solution.innerText = "A•B=" + (x1 * x2 + y1 * y2 + z1 * z2).toString();
    }
    function outerPorduct_3d()
    {
        var x1 = parseFloat(vector_3d[0].value), y1 = parseFloat(vector_3d[1].value), z1 = parseFloat(vector_3d[2].value),
            x2 = parseFloat(vector_3d[3].value), y2 = parseFloat(vector_3d[4].value), z2 = parseFloat(vector_3d[5].value);
        var crossx = (y1*z2 - y2*z1), crossy = (z1*x2 - z2*x1), crossz = (x1*y2 - x2*y1);
        var solution = document.getElementById("vector_3d_solution");
        solution.innerText = "A×B=(" + crossx.toString() + "," + crossy.toString() + "," + crossz.toString() + ")";
    }

    var rotatePoint = document.getElementsByClassName("rotation_point");
    var rotate = document.getElementById("rotate");
    rotate.addEventListener("click", Rotation);
    function Rotation()
    {
        var x = parseFloat(rotatePoint[0].value), y = parseFloat(rotatePoint[1].value);
        var theta = parseFloat(document.getElementById("theta").value);
        var costheta, sintheta;
        var cos_special_angle = new Map([[90, 0], [180, -1], [270, 0]]);
        var sin_special_angle = new Map([[90, 1], [180, 0], [270, -1]]);
        if(theta >= 360 || theta < 0)
            alert("360°> 角度 ≧ 0°");
        else
        {
            if(theta == 90 || theta == 180 || theta == 270)
            {
                costheta = cos_special_angle.get(theta);
                sintheta = sin_special_angle.get(theta);
            }
            else
            {
                theta *= (Math.PI/180.0);
                costheta = Math.cos(theta);
                sintheta = Math.sin(theta);
            }
            
            var x2 = x*costheta + y*(-sintheta);
            var y2 = x*sintheta + y*costheta;
            var solution = document.getElementById("rotation_solution");
            solution.innerText = "旋轉結果：(" + x2.toString() + "," + y2.toString() + ")";
        }

    }
    
}