# Website dịch vụ tour du lịch - VietTrip

## 1. Cấu trúc thư mục
- `index.html`: Trang chủ
- `about.html`: Giới thiệu
- `tours.html`: Danh sách tour, lọc theo từ khóa/loại tour và sắp xếp giá
- `tour-detail.html`: Chi tiết tour, lịch trình và form yêu cầu đặt tour
- `services.html`: Vé máy bay, khách sạn, visa, thuê xe
- `guide.html`: Cẩm nang du lịch
- `contact.html`: Thông tin liên hệ và form liên hệ
- `account.html`: Đăng nhập, đăng ký và đánh giá mẫu
- `css/style.css`: Giao diện, Box Model, Flexbox, Grid và responsive
- `js/main.js`: Tương tác JavaScript

## 2. Chạy website trên máy tính
1. Giải nén file ZIP.
2. Mở thư mục `website_tour_du_lich`.
3. Nhấp đúp `index.html` để mở bằng trình duyệt.
4. Khuyến nghị dùng Visual Studio Code và tiện ích Live Server để xem khi chỉnh sửa.

Website dùng HTML/CSS/JavaScript thuần, không cần cài thư viện hay chạy lệnh cài đặt.

## 3. Các yêu cầu trong giai đoạn 2 đã thể hiện
- Layout nhiều trang, header, menu điều hướng, footer.
- CSS Box Model (`box-sizing`, margin, padding, border).
- Flexbox và CSS Grid.
- Form tìm kiếm, lọc tour, đặt tour, liên hệ, đăng nhập/đăng ký, đánh giá.
- Hình ảnh du lịch, bảng nội dung lịch trình dạng khối, responsive cho điện thoại.
- Có thể triển khai miễn phí lên GitHub Pages.

## 4. Đưa website lên GitHub Pages
1. Đăng nhập GitHub và tạo repository mới, ví dụ `viettrip-tour`.
2. Upload toàn bộ file/thư mục của dự án lên repository. Đảm bảo `index.html` nằm ở thư mục gốc repository.
3. Mở **Settings → Pages**.
4. Ở mục **Build and deployment**, chọn **Deploy from a branch**.
5. Chọn branch `main` và folder `/ (root)`, sau đó bấm **Save**.
6. Đợi GitHub hoàn tất triển khai. Địa chỉ website sẽ có dạng `https://TEN-TAI-KHOAN.github.io/viettrip-tour/`.

## 5. Lưu ý quan trọng
- 000webhost đã ngừng cung cấp dịch vụ hosting miễn phí; có thể dùng GitHub Pages cho website tĩnh.
- Các form trong bản này là bản demo phía trình duyệt. Chúng chưa gửi dữ liệu lên máy chủ, chưa có cơ sở dữ liệu và không tạo tài khoản thật.
- Giá tour, tên thương hiệu, hotline, email và nội dung là dữ liệu minh họa, cần thay bằng thông tin thật nếu sử dụng thực tế.
- Ảnh và font có thể cần kết nối Internet để tải. Khi nộp bài, nên kiểm tra lại ảnh và đường dẫn trên hosting.
- Nếu cô yêu cầu chức năng đặt tour/lưu tài khoản thật, cần bổ sung backend (ví dụ PHP/MySQL hoặc Flask/SQLite) và triển khai ở dịch vụ hỗ trợ backend.
