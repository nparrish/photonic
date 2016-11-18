export function solveQuadratic(a: number, b: number, c: number): {}|boolean {
    let discr: number = b * b - 4 * a * c;
    let x0: number = 0;
    let x1: number = 0;
    if (discr < 0) {
        return false;
    }
    else if (discr == 0) {
        x0 = x1 = - 0.5 * b / a;
    }
    else {
        let q: number = (b > 0) ?
            -0.5 * (b + Math.sqrt(discr)) :
            -0.5 * (b - Math.sqrt(discr));
        x0 = q / a;
        x1 = c / q;
    }
    if (x0 > x1) {
        [x0, x1] = [x1, x0];
    }

    return {x0: x0, x1: x1};
}
