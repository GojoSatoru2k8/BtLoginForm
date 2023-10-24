function hamxulicode() {
    // Lấy giá trị của thẻ input
    let a = document.getElementById("chieudai").value;
    let b = document.getElementById("chieurong").value;
    document.getElementById("chieudaihienthi").innerHTML = a;
    document.getElementById("chieuronghienthi").innerHTML = b;
    let chuvi = 2 * (Number(a) + Number(b));
    let dientich = Number(a) * Number(b);
    document.getElementById("chuvihienthi").innerHTML = chuvi;
    document.getElementById("dientichhienthi").innerHTML = dientich;
}
