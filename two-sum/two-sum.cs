public class Solution {
    public int[] TwoSum(int[] nums, int target) {
        for (int i = 0; i < nums.Length; i++) {
            int value = target - nums[i];
            int index = Array.IndexOf(nums, value);
            
            if (index != -1 && index != i) {
                return new int[] { i, index };
            }
        }
        
        throw new ArgumentException("No two elements add up to the target.");
    }
}
