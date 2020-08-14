/*
Prompt: 

The Fibonacci sequence as follows: the first number of the
sequence is zero, the second number is 1, and the nth number is the dum of the (n-1)th
and (n-2)th numbers. Write a function that takes in an integer n and returns the nth Fibonacci
number.

*/

// Worst Solution 
// O(2^n) time | O(n) space

function getNthFib(n){
    if (n===2){
        return 1;
    }

    else if (n === 1){
        return 0;
    }

    else{
        return getNthFib(n - 1) + getNthFib(n - 2);
    }
}


//Second Solution

function get NthFib(n, memoize = {1: 0, 2: 1}){
    if (n in memoize){
        return memoize(n);
    }
    else{
        memoize[n] = getNthFib(n - 1, memoize) + getNthFib(n - 2, memoize);
        return memoize[n];
    }
}