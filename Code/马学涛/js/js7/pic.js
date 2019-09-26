module.exports = class Picture {
    constructor(n, p) {
            this.n = n;
            this.p = p;
        }
        // 正方形
    Square() {
            let str = '';
            for (let i = 0; i < Number(this.n); i++) {
                for (let j = 0; j < Number(this.n); j++) {
                    str += this.p + ' ';
                }
                str += '\n';
            }
            console.log(str);
        }
        //三角形
    Triangle() {
        let str = '';
        let z = 0;
        for (let i = 0; i < this.n; i++) {
            for (let j = 0; j < this.n - i; j++) {
                str += ' ';
            }
            if (i == 0) { z = 0; } else { z = 2 * i; }
            for (let k = 0; k <= z; k++) {
                str += this.p;
            }
            str += '\n';
        }
        console.log(str);
    }

    Diamond() {
            let str = '';
            let z = 0;
            for (let i = 0; i <= this.n; i++) {
                for (let j = 0; j <= this.n - i; j++) {
                    str += ' ';
                }
                if (i == 0) { z = 0; } else { z = 2 * i; }
                for (let k = 0; k <= z; k++) {
                    str += this.p;
                }
                str += '\n';
            }
            for (let i = 0; i <= this.n; i++) {
                z = i;
                for (let j = 0; j <= z; j++) {
                    str += ' ';
                }
                if (this.n - i == 0) { z = this.n - i; } else { z = 2 * (this.n - i); }
                for (let k = 0; k <= z; k++) {
                    str += this.p;
                }
                str += '\n';
            }
            console.log(str);

        }
        // 回字型
    Hui() {
            let str = '';
            let z = Math.round(this.n / 4);
            if (this.n % 3 == 1) {
                for (let i = 0; i < this.n; i++) {
                    if (i == 0 || i == this.n - 1) {
                        for (let j = 0; j < this.n; j++) {
                            str += this.p + ' ';
                        }
                    } else if (i == (z) || i == 2 * (z)) {
                        for (let j = 0; j < this.n; j++) {
                            if (j == 0 || (j >= (z) && j <= 2 * (z)) || j == this.n - 1) {
                                str += this.p + ' ';
                            } else { str += '  '; }
                        }
                    } else if (i > (z) && i < 2 * (z)) {
                        for (let j = 0; j < this.n; j++) {
                            if (j == 0 || j == this.n - 1 || j == (z) || j == 2 * (z)) {
                                str += this.p + ' ';
                            } else { str += '  '; }
                        }
                    } else {
                        for (let j = 0; j < this.n; j++) {
                            if (j == 0 || j == this.n - 1) {
                                str += this.p + ' ';
                            } else { str += '  '; }
                        }
                    }
                    str += '\n';
                }
            } else if (this.n % 3 == 2) {
                for (let i = 0; i < this.n; i++) {
                    if (i == 0 || i == this.n - 1) {
                        for (let j = 0; j < this.n; j++) {
                            str += this.p + ' ';
                        }
                    } else if (i == (z) || i == 2 * (z + 1) - 1) {
                        for (let j = 0; j < this.n; j++) {
                            if (j == 0 || (j >= (z) && j <= 2 * (z + 1) - 1) || j == this.n - 1) {

                                str += this.p + ' ';
                            } else { str += '  '; }
                        }
                    } else if (i > (z) && i < 2 * (z + 1) - 1) {
                        for (let j = 0; j < this.n; j++) {
                            if (j == 0 || j == this.n - 1 || j == (z) || j == 2 * (z + 1) - 1) {
                                str += this.p + ' ';
                            } else { str += '  '; }
                        }
                    } else {
                        for (let j = 0; j < this.n; j++) {
                            if (j == 0 || j == this.n - 1) {
                                str += this.p + ' ';
                            } else { str += '  '; }
                        }
                    }
                    str += '\n';
                }
            } else {
                for (let i = 0; i < this.n; i++) {
                    if (i == 0 || i == this.n - 1) {
                        for (let j = 0; j < this.n; j++) {
                            str += this.p + ' ';
                        }
                    } else if (i == (z) || i == 2 * (z + 1)) {
                        for (let j = 0; j < this.n; j++) {
                            if (j == 0 || (j >= (z) && j <= 2 * (z + 1)) || j == this.n - 1) {
                                str += this.p + ' ';
                            } else { str += '  '; }
                        }
                    } else if (i > (z) && i < 2 * (z + 1)) {
                        for (let j = 0; j < this.n; j++) {
                            if (j == 0 || j == this.n - 1 || j == (z) || j == 2 * (z + 1)) {
                                str += this.p + ' ';
                            } else { str += '  '; }
                        }
                    } else {
                        for (let j = 0; j < this.n; j++) {
                            if (j == 0 || j == this.n - 1) {
                                str += this.p + ' ';
                            } else { str += '  '; }
                        }
                    }
                    str += '\n';
                }
            }
            console.log(str);
        }
        //梯形
    Trapezoid() {
            let str = '';
            let z = 0;
            this.n = Number(this.n);
            this.n = this.n + 3;

            for (let i = 0; i < this.n; i++) {
                if (i >= 3) {
                    for (let j = 0; j < this.n - i; j++) {
                        str += ' ';
                    }
                    if (i == 0) { z = 0; } else { z = 2 * i; }
                    for (let k = 0; k <= z; k++) {
                        str += this.p;
                    }
                    str += '\n';
                }
            }
            console.log(str);
        }
        //空心正方形
    spanSquare() {
            let str = '';
            for (let i = 0; i < Number(this.n); i++) {
                if (i == 0 || i == Number(this.n) - 1) {
                    for (let j = 0; j < Number(this.n); j++) {

                        str += this.p + ' ';
                    }
                } else {
                    for (let j = 0; j < Number(this.n); j++) {
                        if (j == 0 || j == Number(this.n) - 1) {
                            str += this.p + ' ';
                        } else { str += '  '; }
                    }
                }
                str += '\n';
            }
            console.log(str);

        }
        //空心三角形
    spanTriangle() {
            let str = '';
            let z = 0;
            for (let i = 0; i < this.n; i++) {
                for (let j = 0; j < this.n - i; j++) {
                    str += ' ';
                }
                if (i == 0) { z = 0; } else { z = 2 * i; }
                if (i == 0 || i == this.n - 1) {
                    for (let k = 0; k <= z; k++) {
                        str += this.p;
                    }
                    str += '\n';
                } else {
                    for (let k = 0; k <= z; k++) {
                        if (k == 0 || k == z) {
                            str += this.p;
                        } else {
                            str += ' ';
                        }
                    }
                    str += '\n';
                }
            }
            console.log(str);
        }
        //空心梯形
    spanTrapezoid() {
        let str = '';
        let z = 0;
        this.n = Number(this.n);
        this.n = this.n + 3;
        for (let i = 0; i < this.n; i++) {
            if (i >= 3) {
                if (i == 3 || i == this.n - 1) {
                    for (let j = 0; j < this.n - i; j++) {
                        str += ' ';
                    }
                    if (i == 0) { z = 0; } else { z = 2 * i; }
                    for (let k = 0; k <= z; k++) {
                        str += this.p;
                    }
                    str += '\n';
                } else {
                    for (let j = 0; j < this.n - i; j++) {
                        str += ' ';
                    }
                    if (i == 0) { z = 0; } else { z = 2 * i; }
                    for (let k = 0; k <= z; k++) {
                        if (k == 0 || k == z) {
                            str += this.p;
                        } else {
                            str += ' ';
                        }
                    }
                    str += '\n';
                }
            }
        }
        console.log(str);
    }
}