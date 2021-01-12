## Problem:

Your task is to write function findSum.

Upto and including n, this function will return the sum of all multiples of 3 and 5 that are less than the number passed.

For example:

findSum(10) should return 23 (3 + 5 + 6 + 9)

findSum(11) should return 33 (3 + 5 + 6 + 9 + 10)


## Solution:

The solution was created using arithmetic progression:
```
S(n) = n * (N/n) * (N/n + 1) / 2
```
Considering that *N* is the range, and *n* is the factor number (3 or 5).

<hr />

Therefore, if *N* is 1000 the sum of all multiples of 3, between 1 and 999, will be:
```
S(n=3) = 3*(999/3)*(999/3 + 1)/2 = 166833
```
Likewise, the sum of all multiples of 5, between 1 and 999, will be:
```
S(n=5) = 5*(999/5)*(999/5 + 1)/2 = 99500
```

However, multiples of 15, which are multiples of 3 and 5, will be counted twice. So to obtain the desired value you must subtract the sum of the multiples of 15, between 1 and 999:
```
S(n=15) = 15*(999/15)*(999/15 + 1)/2 = 33165
```


## Usage
Inside project folder use node.js to run the file.
```sh
node js/src/sum-of-all-multiples-of-3-or-5/index.js
```


### Credits
Answer in StackOverflow: [Link](https://pt.stackoverflow.com/a/229130/142646)
