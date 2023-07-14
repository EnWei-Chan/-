#include <bits/stdc++.h>
using namespace std;
int main()
{
    int m, n, i, j;
    double A[3][3];
    cout << "請輸入一個二階方陣\n";
    for(i = 1; i <= 2; i++)
    {
        for(j = 1; j <= 2; j++)
            cin >> A[i][j];
    }
    double det = (A[1][1] * A[2][2]) - (A[1][2] * A[2][1]);
    if(det==0.0)
        cout << "此方陣不可逆";
    else
    {
        swap(A[1][1], A[2][2]);
        A[1][2] *= -1.0;
        A[2][1] *= -1.0;
        cout << "反矩陣為：\n";
        for(i = 1; i <= 2; i++)
        {
            for(j = 1; j <= 2; j++)
                cout << (A[i][j] / det) << " ";
            cout << endl;
        }
    }

}


