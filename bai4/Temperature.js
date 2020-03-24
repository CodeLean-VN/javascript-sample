function Temperature(degreeC) {

    //1. Muc dich: Chuyen tu do C sang do F
    //2: Ten ham: convertToF
    //3. Dau vao: khong co
    //4. Dau ra: do F
    this.convertToF = function () {
        degreeF = (degreeC - 32) / 18;
        document.write(degreeF);
        return degreeF;
    }
}