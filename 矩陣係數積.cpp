#include <bits/stdc++.h>
using namespace std;
int main()
{
    int m, n, i, j;
    cout << "�п�J�C�ƻP���\n";
    cin >> m >> n;
    int A[m+1][n+1];
    cout << "�п�J�x�}\n";
    for(i = 1; i <= m; i++)
    {
        for(j = 1; j <= n; j++)
            cin >> A[i][j];
    }
    int k;
    cout << "�п�J�x�}���W����\n";
    cin >> k;
    for(i = 1; i <= m; i++)
    {
        for(j = 1; j <= m; j++)
            A[i][j] *= k;
    }
    cout << "�Y�ƿn���G�G\n";
    for(i = 1; i <= m; i++)
    {
        for(j = 1; j <= n; j++)
            cout << A[i][j] << " ";
        cout << endl;
    }
}

