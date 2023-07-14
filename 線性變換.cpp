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
    cout << "�п�Jy=mx����m\n";
    cin >> m;
    A[1][1] = ( (1 - m * m) / (1 + m * m) );
    A[1][2] = ( (2 * m) / (1 + m * m) );
    A[2][1] = ( (2 * m) / (1 + m * m) );
    A[2][2] = -( (1 - m * m) / (1 + m * m) );
}
void Scaling()
{
    double k, r;
    cout << "�п�Jx�y�Ц��Y�X��\n";
    cin >> k;
    cout << "�п�Jy�y�Ц��Y�X��\n";
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
    cout << "�ux�b��V����:�п�J1 , �uy�b��V����:�п�J2\n";
    cin >> n;
    cout << "�п�J�����X��\n";
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
    cout << "�п�J����覡 �f�ɰw��J1 ���ɰw��J2\n";
    cin >> n;
    double theta;
    cout << "�п�J���ਤ�� �`�N�G0�X<����<360�X\n";
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
    cout << "�п�J�@���I��X�y��Y�y��\n";
    cin >> x >> y;
    P[1][1] = x;
    P[2][1] = y;
    cout << "�п�J�u���ܴ����� 1����y=mx��g 2�����Y 3������ 4������I����\n";
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
    cout << "�ܴ����G�G\n";
    cout << Result[1][1] << " " << Result[2][1];
}
