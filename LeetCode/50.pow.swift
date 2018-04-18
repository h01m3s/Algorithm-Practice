// https://leetcode.com/problems/powx-n/description/

class Solution {
    func myPow(_ x: Double, _ n: Int) -> Double {
        guard n != 0 else { return 1.0 }
        guard n != 1 else { return x }
        guard x != 1.0 || x != -1.0 else { return (n % 2 == 0) ? 1.0 : -1.0 }

        let nn = Double(abs(n))
        if n > 0 {
            return (n % 2 == 0) ? pow(x*x, nn/2) : pow(x, nn)
        }
        return (n % 2 == 0) ? 1/pow(x*x, nn/2) : 1/pow(x, nn)
    }
}
