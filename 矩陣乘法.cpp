#include <bits/stdc++.h>
using namespace std;
int main()
{
    int m, n, k, i, j, p;
    cout << "請輸入矩陣A的列數與行數\n";
    cin >> m >> n;
    int A[m+1][n+1];
    cout << "請輸入矩陣A\n";
    for(i = 1; i <= m; i++)
    {
        for(j = 1; j <= n; j++)
            cin >> A[i][j];
    }
    cout << "請輸入矩陣B的列數與行數 注意：A的行數=B的列數\n";
    cin >> n >> k;
    int B[n+1][k+1];
    cout << "請輸入矩陣B\n";
    for(i = 1; i <= n; i++)
    {
        for(j = 1; j <= k; j++)
            cin >> B[i][j];
    }
    int AB[m+1][k+1];
    for(i = 1; i <= m; i++)
    {
        for(j = 1; j <= k; j++)
        {
            AB[i][j]=0;
            for(p = 1; p <= n; p++)
                AB[i][j]+=A[i][p]*B[p][j];
        }
    }
    cout << "A與B相乘結果：\n";
    for(i = 1; i <= m; i++)
    {
        for(j = 1; j <= k; j++)
            cout << AB[i][j] << " ";
        cout << endl;
    }

}
