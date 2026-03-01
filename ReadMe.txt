Quy trình chuẩn CI/CD GitHub Actions -> FTP (self-hosted runner) để lưu lại

Chỉnh đúng workflow
File: deploy-ftp.yml
Nội dung chính cần giữ:

runs-on: [self-hosted, windows]

with:
  protocol: ftps
  port: 21
  local-dir: ./dist/
  server-dir: ./
  dangerous-clean-slate: true
Đảm bảo secrets trong GitHub
Repo -> Settings -> Secrets and variables -> Actions:
FTP_SERVER = dichvucongngheqng.com
FTP_USERNAME = tài khoản FTP
FTP_PASSWORD = mật khẩu FTP
Đảm bảo runner online
Repo -> Settings -> Actions -> Runners phải thấy Online.
Mỗi lần cập nhật code, chạy đúng thứ tự lệnh local
cd d:\2026\code\tech-showcase
git status
git add .
git commit -m "mo ta thay doi"
git pull --rebase origin main
git push origin main
Theo dõi deploy
GitHub -> Actions -> Deploy to FTP
Chờ build-and-deploy = Success.
Kiểm tra web sau deploy
Mở site và nhấn Ctrl + F5.
Nếu cần, kiểm tra FileZilla trong public_html xem file index.html và assets/* có thời gian mới nhất.
Khi bị lỗi thường gặp
Queued: runner chưa online/không đúng label.
Cannot connect :21: network/firewall chặn.
Upload sai thư mục: chỉnh server-dir về ./
Web chưa đổi: thường do chưa commit file mới hoặc cache trình duyệt/CDN.