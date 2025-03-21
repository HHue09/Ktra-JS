// Bài 1: Lấy các chuỗi có độ dài lớn nhất
function getStringHasMaxLength(arr) {
    let maxLength = 0;
    let result = [];
    
    for (let str of arr) {
        if (str.length > maxLength) {
            maxLength = str.length;
            result = [str];
        } else if (str.length === maxLength) {
            result.push(str);
        }
    }
    return result;
}

// Bài 2.1: Lọc user có age > 25 và isStatus = true
function filterUsers(users) {
    let result = [];
    for (let user of users) {
        if (user.age > 25 && user.isStatus) {
            result.push(user);
        }
    }
    return result;
}

// Bài 2.2: Sắp xếp user theo tuổi tăng dần
function sortUsersByAge(users) {
    return users.sort(function(a, b) {
        return a.age - b.age;
    });
}

// Bài 3: Đếm số lần xuất hiện của các phần tử trong mảng
function getCountElement(arr) {
    let countObj = {};
    for (let item of arr) {
        if (countObj[item]) {
            countObj[item]++;
        } else {
            countObj[item] = 1;
        }
    }
    return countObj;
}

console.log(getStringHasMaxLength(['aba', 'aa', 'ad', 'c', 'vcd']));
console.log(filterUsers([
    { name: "Bùi Công Sơn", age: 30, isStatus: true },
    { name: "Nguyễn Thu Hằng", age: 27, isStatus: false },
    { name: "Phạm Văn Dũng", age: 20, isStatus: false }
]));
console.log(getCountElement(["one", "two", "three", "one", "one", "three"]));