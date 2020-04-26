//Dinh nghia ham
//1. Muc dich: giai phuong trinh bac 2 theo cong thuc co san
//2. Ten ham: gptb2
//3. Dau vao: he so a, b, c (tham so dau vao)
//4. Dau ra: khong co
function gptb2(a, b, c) {
    //than ham
    var delta = b * b - 4 * a * c;

    if (delta < 0) {
        alert("Phuong trinh vo nghiem");
    } else if (delta > 0) {
        var x1 = -b + Math.sqrt(delta) / 2 * a;
        var x2 = -b - Math.sqrt(delta) / 2 * a;
        alert("Phuong trinh co 2 nghiem phan biet.\n x1 = " + x1 + "\nx2 = " + x2);
    } else {
        //delta = 0
        var x = -b / 2 * a;
        alert("Phuong trinh co nghiem kep x1 = x2 = " + x);
    }
}