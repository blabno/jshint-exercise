/**
 * Created by Daniel on 2015-04-08.
 */
function foo (n) {
    if (n <= 1) {
        return 1;
    }
    return n * foo(n - 1);
}
// returns 120 (5 * 4 * 3 * 2 * 1)
console.log(foo(5));
