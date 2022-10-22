Math.my_pow = (x, y) => {
    if (typeof x != "number" || typeof y != "number")
        throw "(x) and (y) should only be number";

    if (y == 0) return 1;
    if (x == 0 && y > 0) return 0;

    const base = x;
    var value = base;
    var pow = y;
    if (y < 0) pow = y * -1;

    for (var i = 1; i < pow; i++) {
        value *= base;
    }

    if (y < 0) return 1 / value;
    return value;
};

try {
    // console.log(Math.my_pow(0, -3));
    // console.log(Math.pow(0, -2));

    // console.log(Math.my_pow(-5, -3));
    // console.log(Math.pow(-5, -3));

    // console.log(Math.my_pow(8, -7));
    // console.log(Math.pow(8, -7));
} catch (err) {
    // console.log(err);
}