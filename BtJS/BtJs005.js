function Hamtinh() {
    // Hiện số N
    let N = document.getElementById('soN').value;
    document.getElementById('soNhienthi').innerHTML = N;
    
    // Tính giá trị tổng và show
    let tong = 0;
    for (let i = 1; i <= N; i++) {
        // Cộng i vào tổng
        tong += i;
    }
    document.getElementById('tonghienthi').innerHTML = tong;
    console.log('codechaydenday');
}