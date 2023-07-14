#include <bits/stdc++.h>
using namespace std;
int main()
{
    int n, i, j, k;
    cout << "請輸入方程組的元數\n";
    cin >> n;
    double A[n+1][n+2];
    cout << "請輸入方程式的增廣矩陣 注意：係數為0需輸入\n";
    for(i = 1; i <= n; i++)
    {
        for(j = 1; j <= n + 1; j++)
            cin >> A[i][j];
    }

    for(i = 1; i <= n-1; i++)
	{

		if (A[i][i] == 0)
        {
			for (int j = i + 1; j <= n; j++)
            {
				if (A[j][i] != 0)
				{
					for (k = i; k <= n+1; k++)
						swap(A[i][k], A[j][k]);
					break;
				}
            }
        }

		if(A[i][i] == 0)
            continue;

		double t = A[i][i];
		for (j = i; j <= n + 1; j++)
			A[i][j] /= t;

		for (j = i + 1; j <= n; j++)
        {
            double t = -(A[j][i] / A[i][i]);

			if (A[j][i] != 0)
			{
				for (k = i; k <= n+1; k++)
					A[j][k] += A[i][k] * t;
			}
        }

	}

	cout << "方程式的解為：\n";
	double Solution_Set[n+1];

	if (A[n][n] == 0)
    {
        if(A[n][n+1]==0)
            cout << "無限多組解";
        else
            cout << "無解";
    }
    else
    {
        for (i = n; i >= 1; i--)
        {
            double t = 0;
            for (j = i + 1; j <= n; j++)
                t += A[i][j] * Solution_Set[j];
            Solution_Set[i] = (A[i][n+1] - t) / A[i][i];
        }
        for(i = 1; i <= n; i++)
            cout << "X" << i << "=" << Solution_Set[i] << endl;
    }

}
