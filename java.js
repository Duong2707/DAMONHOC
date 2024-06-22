// Lấy các liên kết trong menu header
const menuLinks = document.querySelectorAll('header nav a');

// Thêm sự kiện click cho các liên kết
menuLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    // Ngăn chặn hành vi mặc định của liên kết
    event.preventDefault();

    // Lấy id của section tương ứng
    const targetId = event.target.getAttribute('href');

    // Cuộn đến section tương ứng
    document.querySelector(targetId).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});
