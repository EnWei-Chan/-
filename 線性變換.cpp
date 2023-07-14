#include <bits/stdc++.h>
using namespace std;
#define PI 3.14159265358979323846
double A[3][3];
double P[3][2];
double Result[3][2]={{0},
                     {0}};
void Multiplication()
{
    int i, j, p;
    for(i = 1; i <= 2; i++)
    {
        for(j = 1; j <= 1; j++)
        {
            for(p = 1; p <= 2; p++)
                Result[i][j] += A[i][p]*P[p][j];
        }
    }
}
void Reflection()
{
    double m;
    cout << "請輸入y=mx中的m\n";
    cin >> m;
    A[1][1] = ( (1 - m * m) / (1 + m * m) );
    A[1][2] = ( (2 * m) / (1 + m * m) );
    A[2][1] = ( (2 * m) / (1 + m * m) );
    A[2][2] = -( (1 - m * m) / (1 + m * m) );
}
void Scaling()
{
    double k, r;
    cout << "請輸入x座標伸縮幾倍\n";
    cin >> k;
    cout << "請輸入y座標伸縮幾倍\n";
    cin >> r;
    A[1][1] = k;
    A[1][2] = 0;
    A[2][1] = 0;
    A[2][2] = r;
}
void Shear_mapping()
{
    int n;
    double k;
    cout << "沿x軸方向推移:請輸入1 , 沿y軸方向推移:請輸入2\n";
    cin >> n;
    cout << "請輸入推移幾倍\n";
    cin >> k;
    if(n==1)
    {
        A[1][1] = 1;
        A[1][2] = k;
        A[2][1] = 0;
        A[2][2] = 1;
    }
    else if(n==2)
    {
        A[1][1] = 1;
        A[1][2] = 0;
        A[2][1] = k;
        A[2][2] = 1;
    }
}
void Rotation()
{
    int n;
    cout << "請輸入旋轉方式 逆時針輸入1 順時針輸入2\n";
    cin >> n;
    double theta;
    cout << "請輸入旋轉角度 注意：0°<角度<360°\n";
    cin >> theta;
    double costheta, sintheta;
    map < double, double > cos_special_angle = { {90, 0}, {180, -1}, {270, 0}};
    map < double, double > sin_special_angle = { {90, 1}, {180, 0}, {270, -1}};
    if(theta == 90 || theta == 180 || theta == 270)
    {
        costheta = cos_special_angle[theta];
        sintheta = sin_special_angle[theta];
    }
    else
    {
        theta *= (PI/180.0);
        costheta = cos(theta);
        sintheta = sin(theta);
    }
    if(n==1)
    {
        A[1][1] = costheta;
        A[1][2] = -sintheta;
        A[2][1] = sintheta;
        A[2][2] = costheta;
    }
    else if(n==2)
    {
        A[1][1] = costheta;
        A[1][2] = sintheta;
        A[2][1] = -sintheta;
        A[2][2] = costheta;
    }
}
int main()
{
    int trans;
    double x , y;
    cout << "請輸入一個點的X座標Y座標\n";
    cin >> x >> y;
    P[1][1] = x;
    P[2][1] = y;
    cout << "請輸入線性變換種類 1為對y=mx鏡射 2為伸縮 3為推移 4為對原點旋轉\n";
    cin >> trans;
    if(trans == 1)
        Reflection();
    else if(trans == 2)
        Scaling();
    else if(trans == 3)
        Shear_mapping();
    else if(trans == 4)
        Rotation();
    Multiplication();
    cout << "變換結果：\n";
    cout << Result[1][1] << " " << Result[2][1];
}
