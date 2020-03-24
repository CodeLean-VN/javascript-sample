//Dinh nghia ham - Tao ham
//1. Muc dich: Tinh tong, hieu, tich, thuong theo toan hang, toan tu
//2. Ten ham: calculator
//3. Tham so dau vao: toanhang1, toanhang2, toantu
//4. Dau ra: tong | hieu | tich | thuong (mot so)
function calculator(toanhang1, toanhang2, toantu) {
    var result = 0;
    switch (toantu) {
        case "+":
            result = toanhang1 + toanhang2;
            break;
        case "-":
            result = toanhang1 - toanhang2;
            break;
        case "*":
            result = toanhang1 * toanhang2;
            break;
        case "/":
            result = toanhang1 / toanhang2;
            break;
        default:
            result = null;
            break;
    }
    return result;
}