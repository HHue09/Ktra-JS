document.addEventListener("DOMContentLoaded", function () {
    // Lấy nút "Random Answer"
    let btn = document.getElementById("btn");

    // Khi nhấn vào nút
    btn.addEventListener("click", function () {
        // Lấy tất cả các câu hỏi
        let quizItems = document.querySelectorAll(".quiz-item");

        quizItems.forEach((quiz) => {
            // Lấy tất cả các đáp án trong câu hỏi đó
            let answers = quiz.querySelectorAll("input[type='radio']");

            // Bỏ chọn tất cả trước khi chọn ngẫu nhiên
            answers.forEach((ans) => ans.checked = false);

            // Chọn một đáp án ngẫu nhiên
            let randomIndex = Math.floor(Math.random() * answers.length);
            answers[randomIndex].checked = true;
        });
    });
});
