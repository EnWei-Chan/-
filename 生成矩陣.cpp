#include <bits/stdc++.h>
using namespace std;
int main()
{
    int m, n, i, j;
    cout << "��J�x�}���C�ƻP���\n";
    cin >> m >> n;
    int A[m+1][n+1];
    for(i = 1; i <= m; i++)
    {
        for(j = 1; j <= n; j++)
            A[i][j] = i + j;
    }
    cout << "�ͦ��x�}���G�G\n";
    for(i = 1; i <= m; i++)
    {
        for(j = 1; j <= n; j++)
            cout << A[i][j] << " ";
        cout << endl;
    }
}
