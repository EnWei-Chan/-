#include <bits/stdc++.h>
using namespace std;
int main()
{
    int m, n, i, j;
    cout << "�п�J�x�}A�PB���C�ƻP���\n";
    cin >> m >> n;
    int A[m+1][n+1], B[m+1][n+1];
    cout << "�п�J�x�}A\n";
    for(i = 1; i <= m; i++)
    {
        for(j = 1; j <= n; j++)
            cin >> A[i][j];
    }
    cout << "�п�J�x�}B\n";
    for(i = 1; i <= m; i++)
    {
        for(j = 1; j <= n; j++)
            cin >> B[i][j];
    }
    int C[m+1][n+1] , D[m+1][n+1];
    for(i = 1; i <= m; i++)
    {
        for(j = 1; j <= n; j++)
        {
            C[i][j] = A[i][j] + B[i][j];
            D[i][j] = A[i][j] - B[i][j];
        }
    }
    cout << "�[�k���G�G\n";
    for(i = 1; i <= m; i++)
    {
        for(j = 1; j <= n; j++)
            cout << C[i][j] << " ";
        cout << endl;
    }
    cout << "��k���G�G\n";
    for(i = 1; i <= m; i++)
    {
        for(j = 1; j <= n; j++)
            cout << D[i][j] << " ";
        cout << endl;
    }
}
