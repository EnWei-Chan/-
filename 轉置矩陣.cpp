#include <bits/stdc++.h>
using namespace std;
int main()
{
    int m, n, i, j;
    cout << "��J�x�}���C�ƻP���\n";
    cin >> m >> n;
    int A[m+1][n+1];
    cout << "��J�x�}\n";
    for(i = 1; i <= m; i++)
    {
        for(j = 1; j <= n; j++)
            cin >> A[i][j];
    }
    int T[n+1][m+1];
    for(i = 1; i <= n; i++)
    {
        for(j = 1; j <= m; j++)
            T[i][j]=A[j][i];
    }
    cout << "�x�}��m���G�G\n";
    for(i = 1; i <= n; i++)
    {
        for(j = 1; j <= m; j++)
            cout << T[i][j] << " ";
        cout << endl;
    }
}
