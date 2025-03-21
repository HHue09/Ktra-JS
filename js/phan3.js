const tabs = document.querySelectorAll('.tab');
const contentList = document.getElementById('contentList');
const typeTitle = document.getElementById('typeTitle');

function fetchData(type) {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
        .then(response => response.json())
        .then(data => {
            contentList.innerHTML = data.slice(0, 5).map(item => `<li>${item.title || item.name}</li>`).join('');
        });
}

tabs.forEach(tab => {
    tab.addEventListener('click', function() {
        // Xóa class 'active' khỏi tất cả nút
        tabs.forEach(t => t.classList.remove('active'));

        // Thêm class 'active' cho nút vừa được nhấn
        this.classList.add('active');

        // Cập nhật tiêu đề
        typeTitle.textContent = this.dataset.type;

        // Gọi API để lấy dữ liệu
        fetchData(this.dataset.type);
    });
});
