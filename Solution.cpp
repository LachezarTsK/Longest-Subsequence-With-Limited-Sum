
#include <vector>
#include <numeric>
#include <iterator>
#include <algorithm>
using namespace std;

class Solution {
    
public:
    //C++20: ... (span<int> inputNumbers, span<const int> queries) ...
    vector<int> answerQueries(vector<int>& inputNumbers, const vector<int>& queries) const {

        //C++20: std::ranges::sort(inputNumbers);
        sort(inputNumbers.begin(), inputNumbers.end());
        partial_sum(inputNumbers.begin(), inputNumbers.end(), inputNumbers.begin());

        vector<int> maxSizeOfSubsequence(queries.size());
        auto findNumberOfElements = [&](int maxSum) {
            return distance(inputNumbers.begin(), upper_bound(inputNumbers.begin(), inputNumbers.end(), maxSum));
        };
        
        //C++20: std::ranges::transform(queries, maxSizeOfSubsequence.begin(), findNumberOfElements);
        transform(queries.begin(), queries.end(), maxSizeOfSubsequence.begin(), findNumberOfElements);

        return maxSizeOfSubsequence;
    }
};
