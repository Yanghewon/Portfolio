// 이메일 모달 띄우는 함수
function showEmail() {
    var modal = document.getElementById("emailModal");
    modal.style.display = "flex";  // 모달을 보이게 설정
    modal.style.opacity = 1;  // 투명도를 1로 설정
    modal.style.visibility = "visible";  // 가시성 보이도록 설정
}

// 이메일 모달 닫는 함수
function closeEmailModal() {
    var modal = document.getElementById("emailModal");
    modal.style.display = "none";  // 모달을 숨김
    modal.style.opacity = 0;  // 투명도를 0으로 설정
    modal.style.visibility = "hidden";  // 가시성 숨김
}

// ESC 키로 모달 닫기
document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        closeEmailModal();
    }
});
