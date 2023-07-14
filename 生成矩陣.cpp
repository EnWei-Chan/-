#include <bits/stdc++.h>
using namespace std;
int main()
{
    int m, n, i, j;
    cout << "輸入矩陣的列數與行數\n";
    cin >> m >> n;
    int A[m+1][n+1];
    for(i = 1; i <= m; i++)
    {
        for(j = 1; j <= n; j++)
            A[i][j] = i + j;
    }
    cout << "生成矩陣結果：\n";
    for(i = 1; i <= m; i++)
    {
        for(j = 1; j <= n; j++)
            cout << A[i][j] << " ";
        cout << endl;
    }
}
