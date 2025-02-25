document.addEventListener("DOMContentLoaded", function () {
    const reviewsContainer = document.querySelector(".reviews-container");
    const reviewItems = Array.from(document.querySelectorAll(".review-wrapper"));
    const dots = document.querySelectorAll(".dot");
    const btnLeft = document.querySelector(".nav-left");
    const btnRight = document.querySelector(".nav-right");

    let currentIndex = 0;
    const itemsPerPage = 3;
    const totalReviews = reviewItems.length;
    const maxIndex = totalReviews - itemsPerPage;

    // Hiển thị đúng số review ban đầu
    function updateDisplay() {
        reviewItems.forEach((item, index) => {
            if (index >= currentIndex && index < currentIndex + itemsPerPage) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        });

        // Cập nhật chấm tròn (dot)
        dots.forEach((dot, idx) => {
            dot.classList.toggle("active", idx === Math.floor(currentIndex / itemsPerPage));
        });

        // Cập nhật trạng thái nút mũi tên
        btnLeft.style.opacity = currentIndex === 0 ? "0.5" : "1";
        btnRight.style.opacity = currentIndex === maxIndex ? "0.5" : "1";
    }

    // Xử lý nút phải
    btnRight.addEventListener("click", function () {
        if (currentIndex < maxIndex) {
            currentIndex += itemsPerPage;
        } else {
            currentIndex = 0; // Quay lại đầu
        }
        updateDisplay();
    });

    // Xử lý nút trái
    btnLeft.addEventListener("click", function () {
        if (currentIndex > 0) {
            currentIndex -= itemsPerPage;
        } else {
            currentIndex = maxIndex; // Nhảy về trang cuối
        }
        updateDisplay();
    });

    // Xử lý khi nhấn chấm tròn
    dots.forEach((dot, index) => {
        dot.addEventListener("click", function () {
            currentIndex = index * itemsPerPage;
            updateDisplay();
        });
    });

    // Chạy ngay khi load xong
    updateDisplay();
});
