# Unexpected Loop Termination with Break Statement
This code demonstrates a potential issue with using a `break` statement within an `if` condition inside a loop.  Improper placement or conditions can lead to unexpected loop termination.

The `bug.js` file contains the buggy code, and the `bugSolution.js` file shows a corrected version.

## Bug Description
The original loop intends to iterate until 'i' reaches 10. However, the `break` statement within the `if (i === 5)` condition prematurely terminates the loop when 'i' is 5. This might be the expected behavior sometimes but might also be an unintentional bug if the loop was expected to always reach 10 iterations.

## Solution
The solution addresses this by restructuring the loop to ensure all iterations are completed and clarifying the condition for exiting. 