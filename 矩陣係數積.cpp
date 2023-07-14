#include <bits/stdc++.h>
using namespace std;
int main()
{
    int m, n, i, j;
    cout << "請輸入列數與行數\n";
    cin >> m >> n;
    int A[m+1][n+1];
    cout << "請輸入矩陣\n";
    for(i = 1; i <= m; i++)
    {
        for(j = 1; j <= n; j++)
            cin >> A[i][j];
    }
    int k;
    cout << "請輸入矩陣乘上的數\n";
    cin >> k;
    for(i = 1; i <= m; i++)
    {
        for(j = 1; j <= m; j++)
            A[i][j] *= k;
    }
    cout << "係數積結果：\n";
    for(i = 1; i <= m; i++)
    {
        for(j = 1; j <= n; j++)
            cout << A[i][j] << " ";
        cout << endl;
    }
}

