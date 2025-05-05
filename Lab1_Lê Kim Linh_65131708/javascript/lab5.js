//code js
const imgs = document.querySelectorAll('.slide');
//img[0]-->img[1]--->img[2]--->img[3]==>classList.add/remove
let currentSlide = 0;
//index Là vị trí của hinh ảnh được hiển thị
function showSlide(vitri) {
    for (let i = 0; i < imgs.length; i++) {
        //ẩn toàn bộ hình ảnh
        imgs[i].classList.remove ('active'); //xóa class active của tất cả các hình ảnh
        //hiển thị hình ảnh tại vị trí muốn hiện thị
        if (i === vitri) {
            imgs[i].classList.add('active'); //thêm 
        }
    }
}
//ham chuyen anh ve phia sau
function prevSlide() {
    //đang có so luong anhh 3
    // ví dụ đang đứng ở vi tri dang dung ở ảnh thứ 0--->(0-1+3)%3=2 imgs[2]
    // (currentSlide-1+ số lượng hình ảnh)%so luong hinh anh;
    currentSlide = (currentSlide - 1 + imgs.length) % imgs.length; //tính toán vị trí của hình ảnh trước đó
    //sau khi lay duoc vị tri anh can hien thi là curentSlide--> show ảnh lên
    showSlide(currentSlide); //hiển thị hình ảnh tại vị trí hiện tại
}
//ham chuyen anh ve phia truoc
function nextSlide() {
    //đang có so luong anhh 3
    // ví dụ đang đứng ở vi tri dang dung ở ảnh thứ 0--->(0+1)%3=1 imgs[1]
    // (currentSlide+1)%so luong hinh anh;
    currentSlide = (currentSlide + 1 ) % imgs.length; //tính toán vị trí của hình ảnh tiếp theo
    //sau khi lay duoc vị tri anh can hien thi là curentSlide--> show ảnh lên
    showSlide(currentSlide); //hiển thị hình ảnh tại vị trí hiện tại
}
//mặc định hiển thị hình ảnh đầu tiên khi load lại trang web 
showSlide(currentSlide);
//tự động chuyển ảnh sau mỗi 3 giây
setInterval(nextSlide, 3000);
// viet ham hien thi menu cap con
function showSubMenu() {
   //tim den the li gan nhat duoc click(tuc la vua duoc nguoi dung click)
   //const li = target.
}
document.addEventListener("click", e => {
    const menu = e.target.closest(".has-submenu");
    document.querySelectorAll(".submenu").forEach(s => s.style.display = "none");
    if (menu) {
      e.preventDefault();
      menu.querySelector(".submenu").style.display = "block";
    }
  });
function toggleButtons(product) {
    const overlays = document.querySelectorAll(".overlay");
    const images = document.querySelectorAll(".product img");
  
    overlays.forEach(o => o.style.display = "none");
    images.forEach(img => img.style.filter = "none");
  
    const overlay = product.querySelector(".overlay");
    const image = product.querySelector("img");
  
    if (overlay.style.display === "flex") {
      overlay.style.display = "none";
      image.style.filter = "none";
    } else {
      overlay.style.display = "flex";
      image.style.filter = "blur(2px)";
    }
  }  
// Hiển thị submenu khi nhấn "Sản phẩm"
// Hiển thị Modal đăng nhập
function hienThiDangNhap() {
    document.getElementById("modalDangNhap").style.display = "block";
}

// Hiển thị Modal đăng ký
function hienThiDangKy() {
    document.getElementById("modalDangKy").style.display = "block";
}

// Đóng modal khi nhấn ra ngoài
window.onclick = function(event) {
    const modalDN = document.getElementById("modalDangNhap");
    const modalDK = document.getElementById("modalDangKy");

    if (event.target == modalDN) {
        modalDN.style.display = "none";
    }
    if (event.target == modalDK) {
        modalDK.style.display = "none";
    }
}
