// Địa chỉ API cần gọi
const apiUrl = 'https://go-clean-arc-da36c3009eed.herokuapp.com/swagger/index.html#/Todo/get_todo';

// Gọi API sử dụng phương thức fetch
fetch(apiUrl)
  .then(response => {
    // Kiểm tra nếu yêu cầu thành công (response.status trong khoảng 200-299)
    if (response.ok) {
      // Chuyển đổi dữ liệu nhận được sang đối tượng JSON
      return response.json();
    } else {
      // Xử lý lỗi nếu yêu cầu không thành công
      throw new Error('Yêu cầu không thành công. Mã lỗi: ' + response.status);
    }
  })
  .then(data => {
    // Xử lý dữ liệu nhận được từ API ở đây
    console.log(data);
  })
  .catch(error => {
    // Xử lý lỗi nếu có
    console.error('Đã xảy ra lỗi:', error);
  });