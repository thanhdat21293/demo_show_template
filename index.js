'use strict';

let log = console.log;

const db = require('./routes/routes.js');

const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const nunjucks = require('nunjucks');


/*
let c_arr = [];
const createCategory = (cat_id, cat_name, status) => {
   let category = new Categories(cat_id, cat_name, status);
   c_arr.push(category);
};

createCategory('dt', 'Điện thoại', '');
createCategory('tv', 'Tivi', '');
createCategory('tl', 'Tủ lạnh', '');
createCategory('mg', 'Máy giặt', '');
createCategory('ncd', 'Nồi cơm điện', '');
createCategory('dh', 'Điều hòa', '');

//Create Arr Products
let p_arr = [];
const createProduct = (product_id, product_name, product_template_id, category_id, manufacturer_id, store_day, price, quantity, promotion, description, properties, madein, status) => {
   let product = new Products(product_id, product_name, product_template_id, category_id, manufacturer_id, store_day, price, quantity, promotion, description, properties, madein, status);
   p_arr.push(product);
};

//Điện thoại
createProduct('IP7P256', 'Điện thoại iPhone 7 Plus 256GB', '', 'dt', '', '2017-04-07 09:50:00', '24990000', '12', '', '', '{"Màn hình":{"Công nghệ màn hình":"Công nghệ màn hình","Độ phân giải":"Full HD (1080 x 1920 pixels)","Màn hình rộng":"5.5","Mặt kính cảm ứng":"Kính oleophobic (ion cường lực)"},"Camera sau":{"Độ phân giải":"Hai camera 12 MP","Quay phim":"4K 2160p@30fps","Đèn Flash":"4 đèn LED (2 tông màu)","Chụp ảnh nâng cao":"Chạm lấy nét, Panorama, Chống rung quang học (OIS), Tự động lấy nét, Nhận diện khuôn mặt, HDR"},"Camera trước":{"Độ phân giải":"7 MP","Videocall":"Hỗ trợ VideoCall thông qua ứng dụng OTT","Thông tin khác":"Nhận diện khuôn mặt, Quay video Full HD, Tự động lấy nét, Selfie ngược sáng HDR"},"Hệ điều hành - CPU":{"Hệ điều hành":"iOS 10","Chipset (hãng SX CPU)":"Apple A10 Fusion 4 nhân 64-bit","Tốc độ CPU":"2.3 GHz","Chip đồ họa (GPU)":"PowerVR Series7XT Plus"},"Bộ nhớ & Lưu trữ":{"RAM":"3 GB","Bộ nhớ trong":"256 GB","Bộ nhớ còn lại (khả dụng)":"Khoảng 247.52 GB","Thẻ nhớ ngoài":"Không"},"Kết nối":{"Mạng di động":"3G, 4G LTE Cat 9","SIM":"1 Nano SIM","Wifi":"Wi-Fi 802.11 a/b/g/n/ac, Dual-band, Wi-Fi hotspot","GPS":"A-GPS, GLONASS","Bluetooth":"A2DP, LE, v4.2","Cổng kết nối/sạc":"Lightning","Jack tai nghe":"Không","Kết nối khác":"NFC, Air Play, HDMI, OTG"}}', '', '');
createProduct('SSGS7E', 'Điện thoại Samsung Galaxy S7 Edge', '', 'dt', '', '2017-04-07 09:00:00', '15490000', '12', '', '', '{"Màn hình":{"Công nghệ màn hình":"Công nghệ màn hình","Độ phân giải":"Full HD (1080 x 1920 pixels)","Màn hình rộng":"5.5","Mặt kính cảm ứng":"Kính oleophobic (ion cường lực)"},"Camera sau":{"Độ phân giải":"Hai camera 12 MP","Quay phim":"4K 2160p@30fps","Đèn Flash":"4 đèn LED (2 tông màu)","Chụp ảnh nâng cao":"Chạm lấy nét, Panorama, Chống rung quang học (OIS), Tự động lấy nét, Nhận diện khuôn mặt, HDR"},"Camera trước":{"Độ phân giải":"7 MP","Videocall":"Hỗ trợ VideoCall thông qua ứng dụng OTT","Thông tin khác":"Nhận diện khuôn mặt, Quay video Full HD, Tự động lấy nét, Selfie ngược sáng HDR"},"Hệ điều hành - CPU":{"Hệ điều hành":"iOS 10","Chipset (hãng SX CPU)":"Apple A10 Fusion 4 nhân 64-bit","Tốc độ CPU":"2.3 GHz","Chip đồ họa (GPU)":"PowerVR Series7XT Plus"},"Bộ nhớ & Lưu trữ":{"RAM":"3 GB","Bộ nhớ trong":"256 GB","Bộ nhớ còn lại (khả dụng)":"Khoảng 247.52 GB","Thẻ nhớ ngoài":"Không"},"Kết nối":{"Mạng di động":"3G, 4G LTE Cat 9","SIM":"1 Nano SIM","Wifi":"Wi-Fi 802.11 a/b/g/n/ac, Dual-band, Wi-Fi hotspot","GPS":"A-GPS, GLONASS","Bluetooth":"A2DP, LE, v4.2","Cổng kết nối/sạc":"Lightning","Jack tai nghe":"Không","Kết nối khác":"NFC, Air Play, HDMI, OTG"}}', '', '');
createProduct('OPPOF3P', 'Điện thoại OPPO F3 Plus', '', 'dt', '', '2017-04-07 11:20:00', '10690000', '12', '', '', '{"Màn hình":{"Công nghệ màn hình":"Công nghệ màn hình","Độ phân giải":"Full HD (1080 x 1920 pixels)","Màn hình rộng":"5.5","Mặt kính cảm ứng":"Kính oleophobic (ion cường lực)"},"Camera sau":{"Độ phân giải":"Hai camera 12 MP","Quay phim":"4K 2160p@30fps","Đèn Flash":"4 đèn LED (2 tông màu)","Chụp ảnh nâng cao":"Chạm lấy nét, Panorama, Chống rung quang học (OIS), Tự động lấy nét, Nhận diện khuôn mặt, HDR"},"Camera trước":{"Độ phân giải":"7 MP","Videocall":"Hỗ trợ VideoCall thông qua ứng dụng OTT","Thông tin khác":"Nhận diện khuôn mặt, Quay video Full HD, Tự động lấy nét, Selfie ngược sáng HDR"},"Hệ điều hành - CPU":{"Hệ điều hành":"iOS 10","Chipset (hãng SX CPU)":"Apple A10 Fusion 4 nhân 64-bit","Tốc độ CPU":"2.3 GHz","Chip đồ họa (GPU)":"PowerVR Series7XT Plus"},"Bộ nhớ & Lưu trữ":{"RAM":"3 GB","Bộ nhớ trong":"256 GB","Bộ nhớ còn lại (khả dụng)":"Khoảng 247.52 GB","Thẻ nhớ ngoài":"Không"},"Kết nối":{"Mạng di động":"3G, 4G LTE Cat 9","SIM":"1 Nano SIM","Wifi":"Wi-Fi 802.11 a/b/g/n/ac, Dual-band, Wi-Fi hotspot","GPS":"A-GPS, GLONASS","Bluetooth":"A2DP, LE, v4.2","Cổng kết nối/sạc":"Lightning","Jack tai nghe":"Không","Kết nối khác":"NFC, Air Play, HDMI, OTG"}}', '', '');
createProduct('SNXXZS', 'Điện thoại Sony Xperia XZs', '', 'dt', '', '2017-04-07 08:20:00', '14990000', '12', '', '', '{"Màn hình":{"Công nghệ màn hình":"Công nghệ màn hình","Độ phân giải":"Full HD (1080 x 1920 pixels)","Màn hình rộng":"5.5","Mặt kính cảm ứng":"Kính oleophobic (ion cường lực)"},"Camera sau":{"Độ phân giải":"Hai camera 12 MP","Quay phim":"4K 2160p@30fps","Đèn Flash":"4 đèn LED (2 tông màu)","Chụp ảnh nâng cao":"Chạm lấy nét, Panorama, Chống rung quang học (OIS), Tự động lấy nét, Nhận diện khuôn mặt, HDR"},"Camera trước":{"Độ phân giải":"7 MP","Videocall":"Hỗ trợ VideoCall thông qua ứng dụng OTT","Thông tin khác":"Nhận diện khuôn mặt, Quay video Full HD, Tự động lấy nét, Selfie ngược sáng HDR"},"Hệ điều hành - CPU":{"Hệ điều hành":"iOS 10","Chipset (hãng SX CPU)":"Apple A10 Fusion 4 nhân 64-bit","Tốc độ CPU":"2.3 GHz","Chip đồ họa (GPU)":"PowerVR Series7XT Plus"},"Bộ nhớ & Lưu trữ":{"RAM":"3 GB","Bộ nhớ trong":"256 GB","Bộ nhớ còn lại (khả dụng)":"Khoảng 247.52 GB","Thẻ nhớ ngoài":"Không"},"Kết nối":{"Mạng di động":"3G, 4G LTE Cat 9","SIM":"1 Nano SIM","Wifi":"Wi-Fi 802.11 a/b/g/n/ac, Dual-band, Wi-Fi hotspot","GPS":"A-GPS, GLONASS","Bluetooth":"A2DP, LE, v4.2","Cổng kết nối/sạc":"Lightning","Jack tai nghe":"Không","Kết nối khác":"NFC, Air Play, HDMI, OTG"}}', '', '');
createProduct('HTCUU', 'Điện thoại HTC U Ultra', '', 'dt', '', '2017-04-06 03:45:00', '15990000', '12', '', '', '{"Màn hình":{"Công nghệ màn hình":"Công nghệ màn hình","Độ phân giải":"Full HD (1080 x 1920 pixels)","Màn hình rộng":"5.5","Mặt kính cảm ứng":"Kính oleophobic (ion cường lực)"},"Camera sau":{"Độ phân giải":"Hai camera 12 MP","Quay phim":"4K 2160p@30fps","Đèn Flash":"4 đèn LED (2 tông màu)","Chụp ảnh nâng cao":"Chạm lấy nét, Panorama, Chống rung quang học (OIS), Tự động lấy nét, Nhận diện khuôn mặt, HDR"},"Camera trước":{"Độ phân giải":"7 MP","Videocall":"Hỗ trợ VideoCall thông qua ứng dụng OTT","Thông tin khác":"Nhận diện khuôn mặt, Quay video Full HD, Tự động lấy nét, Selfie ngược sáng HDR"},"Hệ điều hành - CPU":{"Hệ điều hành":"iOS 10","Chipset (hãng SX CPU)":"Apple A10 Fusion 4 nhân 64-bit","Tốc độ CPU":"2.3 GHz","Chip đồ họa (GPU)":"PowerVR Series7XT Plus"},"Bộ nhớ & Lưu trữ":{"RAM":"3 GB","Bộ nhớ trong":"256 GB","Bộ nhớ còn lại (khả dụng)":"Khoảng 247.52 GB","Thẻ nhớ ngoài":"Không"},"Kết nối":{"Mạng di động":"3G, 4G LTE Cat 9","SIM":"1 Nano SIM","Wifi":"Wi-Fi 802.11 a/b/g/n/ac, Dual-band, Wi-Fi hotspot","GPS":"A-GPS, GLONASS","Bluetooth":"A2DP, LE, v4.2","Cổng kết nối/sạc":"Lightning","Jack tai nghe":"Không","Kết nối khác":"NFC, Air Play, HDMI, OTG"}}', '', '');

//Tivi
createProduct('A25T350', 'Tivi Asanzo 25 inch 25T350', '', 'tv', '', '2017-04-07 10:45:00', '15990000', '12', '', '', '{"Màn hình":{"Công nghệ màn hình":"Công nghệ màn hình","Độ phân giải":"Full HD (1080 x 1920 pixels)","Màn hình rộng":"5.5","Mặt kính cảm ứng":"Kính oleophobic (ion cường lực)"},"Camera sau":{"Độ phân giải":"Hai camera 12 MP","Quay phim":"4K 2160p@30fps","Đèn Flash":"4 đèn LED (2 tông màu)","Chụp ảnh nâng cao":"Chạm lấy nét, Panorama, Chống rung quang học (OIS), Tự động lấy nét, Nhận diện khuôn mặt, HDR"},"Camera trước":{"Độ phân giải":"7 MP","Videocall":"Hỗ trợ VideoCall thông qua ứng dụng OTT","Thông tin khác":"Nhận diện khuôn mặt, Quay video Full HD, Tự động lấy nét, Selfie ngược sáng HDR"},"Hệ điều hành - CPU":{"Hệ điều hành":"iOS 10","Chipset (hãng SX CPU)":"Apple A10 Fusion 4 nhân 64-bit","Tốc độ CPU":"2.3 GHz","Chip đồ họa (GPU)":"PowerVR Series7XT Plus"},"Bộ nhớ & Lưu trữ":{"RAM":"3 GB","Bộ nhớ trong":"256 GB","Bộ nhớ còn lại (khả dụng)":"Khoảng 247.52 GB","Thẻ nhớ ngoài":"Không"},"Kết nối":{"Mạng di động":"3G, 4G LTE Cat 9","SIM":"1 Nano SIM","Wifi":"Wi-Fi 802.11 a/b/g/n/ac, Dual-band, Wi-Fi hotspot","GPS":"A-GPS, GLONASS","Bluetooth":"A2DP, LE, v4.2","Cổng kết nối/sạc":"Lightning","Jack tai nghe":"Không","Kết nối khác":"NFC, Air Play, HDMI, OTG"}}', '', '');
createProduct('LG24LF450D', 'Tivi LG 24 inch 24LF450D', '', 'tv', '', '2017-04-07 10:12:00', '15990000', '12', '', '', '{"Màn hình":{"Công nghệ màn hình":"Công nghệ màn hình","Độ phân giải":"Full HD (1080 x 1920 pixels)","Màn hình rộng":"5.5","Mặt kính cảm ứng":"Kính oleophobic (ion cường lực)"},"Camera sau":{"Độ phân giải":"Hai camera 12 MP","Quay phim":"4K 2160p@30fps","Đèn Flash":"4 đèn LED (2 tông màu)","Chụp ảnh nâng cao":"Chạm lấy nét, Panorama, Chống rung quang học (OIS), Tự động lấy nét, Nhận diện khuôn mặt, HDR"},"Camera trước":{"Độ phân giải":"7 MP","Videocall":"Hỗ trợ VideoCall thông qua ứng dụng OTT","Thông tin khác":"Nhận diện khuôn mặt, Quay video Full HD, Tự động lấy nét, Selfie ngược sáng HDR"},"Hệ điều hành - CPU":{"Hệ điều hành":"iOS 10","Chipset (hãng SX CPU)":"Apple A10 Fusion 4 nhân 64-bit","Tốc độ CPU":"2.3 GHz","Chip đồ họa (GPU)":"PowerVR Series7XT Plus"},"Bộ nhớ & Lưu trữ":{"RAM":"3 GB","Bộ nhớ trong":"256 GB","Bộ nhớ còn lại (khả dụng)":"Khoảng 247.52 GB","Thẻ nhớ ngoài":"Không"},"Kết nối":{"Mạng di động":"3G, 4G LTE Cat 9","SIM":"1 Nano SIM","Wifi":"Wi-Fi 802.11 a/b/g/n/ac, Dual-band, Wi-Fi hotspot","GPS":"A-GPS, GLONASS","Bluetooth":"A2DP, LE, v4.2","Cổng kết nối/sạc":"Lightning","Jack tai nghe":"Không","Kết nối khác":"NFC, Air Play, HDMI, OTG"}}', '', '');

//Tủ lạnh
createProduct('PNRBJ151SSV1', 'Tủ lạnh Panasonic 135 lít NR-BJ151SSV1', '', 'tl', '', '2017-04-08 05:10:00', '4050000', '12', '', '', '{"Màn hình":{"Công nghệ màn hình":"Công nghệ màn hình","Độ phân giải":"Full HD (1080 x 1920 pixels)","Màn hình rộng":"5.5","Mặt kính cảm ứng":"Kính oleophobic (ion cường lực)"},"Camera sau":{"Độ phân giải":"Hai camera 12 MP","Quay phim":"4K 2160p@30fps","Đèn Flash":"4 đèn LED (2 tông màu)","Chụp ảnh nâng cao":"Chạm lấy nét, Panorama, Chống rung quang học (OIS), Tự động lấy nét, Nhận diện khuôn mặt, HDR"},"Camera trước":{"Độ phân giải":"7 MP","Videocall":"Hỗ trợ VideoCall thông qua ứng dụng OTT","Thông tin khác":"Nhận diện khuôn mặt, Quay video Full HD, Tự động lấy nét, Selfie ngược sáng HDR"},"Hệ điều hành - CPU":{"Hệ điều hành":"iOS 10","Chipset (hãng SX CPU)":"Apple A10 Fusion 4 nhân 64-bit","Tốc độ CPU":"2.3 GHz","Chip đồ họa (GPU)":"PowerVR Series7XT Plus"},"Bộ nhớ & Lưu trữ":{"RAM":"3 GB","Bộ nhớ trong":"256 GB","Bộ nhớ còn lại (khả dụng)":"Khoảng 247.52 GB","Thẻ nhớ ngoài":"Không"},"Kết nối":{"Mạng di động":"3G, 4G LTE Cat 9","SIM":"1 Nano SIM","Wifi":"Wi-Fi 802.11 a/b/g/n/ac, Dual-band, Wi-Fi hotspot","GPS":"A-GPS, GLONASS","Bluetooth":"A2DP, LE, v4.2","Cổng kết nối/sạc":"Lightning","Jack tai nghe":"Không","Kết nối khác":"NFC, Air Play, HDMI, OTG"}}', '', '');
createProduct('PNRBJ158SSVN', 'Tủ lạnh Panasonic 135 lít NR-BJ158SSVN', '', 'tl', '', '2017-04-09 03:15:00', '4090000', '12', '', '', '{"Màn hình":{"Công nghệ màn hình":"Công nghệ màn hình","Độ phân giải":"Full HD (1080 x 1920 pixels)","Màn hình rộng":"5.5","Mặt kính cảm ứng":"Kính oleophobic (ion cường lực)"},"Camera sau":{"Độ phân giải":"Hai camera 12 MP","Quay phim":"4K 2160p@30fps","Đèn Flash":"4 đèn LED (2 tông màu)","Chụp ảnh nâng cao":"Chạm lấy nét, Panorama, Chống rung quang học (OIS), Tự động lấy nét, Nhận diện khuôn mặt, HDR"},"Camera trước":{"Độ phân giải":"7 MP","Videocall":"Hỗ trợ VideoCall thông qua ứng dụng OTT","Thông tin khác":"Nhận diện khuôn mặt, Quay video Full HD, Tự động lấy nét, Selfie ngược sáng HDR"},"Hệ điều hành - CPU":{"Hệ điều hành":"iOS 10","Chipset (hãng SX CPU)":"Apple A10 Fusion 4 nhân 64-bit","Tốc độ CPU":"2.3 GHz","Chip đồ họa (GPU)":"PowerVR Series7XT Plus"},"Bộ nhớ & Lưu trữ":{"RAM":"3 GB","Bộ nhớ trong":"256 GB","Bộ nhớ còn lại (khả dụng)":"Khoảng 247.52 GB","Thẻ nhớ ngoài":"Không"},"Kết nối":{"Mạng di động":"3G, 4G LTE Cat 9","SIM":"1 Nano SIM","Wifi":"Wi-Fi 802.11 a/b/g/n/ac, Dual-band, Wi-Fi hotspot","GPS":"A-GPS, GLONASS","Bluetooth":"A2DP, LE, v4.2","Cổng kết nối/sạc":"Lightning","Jack tai nghe":"Không","Kết nối khác":"NFC, Air Play, HDMI, OTG"}}', '', '');

//Máy giặt
createProduct('SWA72H4000SGSV', 'Máy giặt Samsung 7.2 kg WA72H4000SG/SV', '', 'mg', '', '2017-04-05 08:05:00', '4190000', '12', '', '', '{"Màn hình":{"Công nghệ màn hình":"Công nghệ màn hình","Độ phân giải":"Full HD (1080 x 1920 pixels)","Màn hình rộng":"5.5","Mặt kính cảm ứng":"Kính oleophobic (ion cường lực)"},"Camera sau":{"Độ phân giải":"Hai camera 12 MP","Quay phim":"4K 2160p@30fps","Đèn Flash":"4 đèn LED (2 tông màu)","Chụp ảnh nâng cao":"Chạm lấy nét, Panorama, Chống rung quang học (OIS), Tự động lấy nét, Nhận diện khuôn mặt, HDR"},"Camera trước":{"Độ phân giải":"7 MP","Videocall":"Hỗ trợ VideoCall thông qua ứng dụng OTT","Thông tin khác":"Nhận diện khuôn mặt, Quay video Full HD, Tự động lấy nét, Selfie ngược sáng HDR"},"Hệ điều hành - CPU":{"Hệ điều hành":"iOS 10","Chipset (hãng SX CPU)":"Apple A10 Fusion 4 nhân 64-bit","Tốc độ CPU":"2.3 GHz","Chip đồ họa (GPU)":"PowerVR Series7XT Plus"},"Bộ nhớ & Lưu trữ":{"RAM":"3 GB","Bộ nhớ trong":"256 GB","Bộ nhớ còn lại (khả dụng)":"Khoảng 247.52 GB","Thẻ nhớ ngoài":"Không"},"Kết nối":{"Mạng di động":"3G, 4G LTE Cat 9","SIM":"1 Nano SIM","Wifi":"Wi-Fi 802.11 a/b/g/n/ac, Dual-band, Wi-Fi hotspot","GPS":"A-GPS, GLONASS","Bluetooth":"A2DP, LE, v4.2","Cổng kết nối/sạc":"Lightning","Jack tai nghe":"Không","Kết nối khác":"NFC, Air Play, HDMI, OTG"}}', '', '');
createProduct('LGWFS8019BW', 'Máy giặt LG 8 kg WF-S8019BW', '', 'mg', '', '2017-04-07 15:15:00', '4190000', '12', '', '', '{"Màn hình":{"Công nghệ màn hình":"Công nghệ màn hình","Độ phân giải":"Full HD (1080 x 1920 pixels)","Màn hình rộng":"5.5","Mặt kính cảm ứng":"Kính oleophobic (ion cường lực)"},"Camera sau":{"Độ phân giải":"Hai camera 12 MP","Quay phim":"4K 2160p@30fps","Đèn Flash":"4 đèn LED (2 tông màu)","Chụp ảnh nâng cao":"Chạm lấy nét, Panorama, Chống rung quang học (OIS), Tự động lấy nét, Nhận diện khuôn mặt, HDR"},"Camera trước":{"Độ phân giải":"7 MP","Videocall":"Hỗ trợ VideoCall thông qua ứng dụng OTT","Thông tin khác":"Nhận diện khuôn mặt, Quay video Full HD, Tự động lấy nét, Selfie ngược sáng HDR"},"Hệ điều hành - CPU":{"Hệ điều hành":"iOS 10","Chipset (hãng SX CPU)":"Apple A10 Fusion 4 nhân 64-bit","Tốc độ CPU":"2.3 GHz","Chip đồ họa (GPU)":"PowerVR Series7XT Plus"},"Bộ nhớ & Lưu trữ":{"RAM":"3 GB","Bộ nhớ trong":"256 GB","Bộ nhớ còn lại (khả dụng)":"Khoảng 247.52 GB","Thẻ nhớ ngoài":"Không"},"Kết nối":{"Mạng di động":"3G, 4G LTE Cat 9","SIM":"1 Nano SIM","Wifi":"Wi-Fi 802.11 a/b/g/n/ac, Dual-band, Wi-Fi hotspot","GPS":"A-GPS, GLONASS","Bluetooth":"A2DP, LE, v4.2","Cổng kết nối/sạc":"Lightning","Jack tai nghe":"Không","Kết nối khác":"NFC, Air Play, HDMI, OTG"}}', '', '');

//Nồi cơm điện
createProduct('GARCGDF12C1', 'Nồi cơm điện Goldsun 1.2 lít ARC-GDF12C1', '', 'ncd', '', '2017-04-07 09:13:00', '450000', '12', '', '', '{"Màn hình":{"Công nghệ màn hình":"Công nghệ màn hình","Độ phân giải":"Full HD (1080 x 1920 pixels)","Màn hình rộng":"5.5","Mặt kính cảm ứng":"Kính oleophobic (ion cường lực)"},"Camera sau":{"Độ phân giải":"Hai camera 12 MP","Quay phim":"4K 2160p@30fps","Đèn Flash":"4 đèn LED (2 tông màu)","Chụp ảnh nâng cao":"Chạm lấy nét, Panorama, Chống rung quang học (OIS), Tự động lấy nét, Nhận diện khuôn mặt, HDR"},"Camera trước":{"Độ phân giải":"7 MP","Videocall":"Hỗ trợ VideoCall thông qua ứng dụng OTT","Thông tin khác":"Nhận diện khuôn mặt, Quay video Full HD, Tự động lấy nét, Selfie ngược sáng HDR"},"Hệ điều hành - CPU":{"Hệ điều hành":"iOS 10","Chipset (hãng SX CPU)":"Apple A10 Fusion 4 nhân 64-bit","Tốc độ CPU":"2.3 GHz","Chip đồ họa (GPU)":"PowerVR Series7XT Plus"},"Bộ nhớ & Lưu trữ":{"RAM":"3 GB","Bộ nhớ trong":"256 GB","Bộ nhớ còn lại (khả dụng)":"Khoảng 247.52 GB","Thẻ nhớ ngoài":"Không"},"Kết nối":{"Mạng di động":"3G, 4G LTE Cat 9","SIM":"1 Nano SIM","Wifi":"Wi-Fi 802.11 a/b/g/n/ac, Dual-band, Wi-Fi hotspot","GPS":"A-GPS, GLONASS","Bluetooth":"A2DP, LE, v4.2","Cổng kết nối/sạc":"Lightning","Jack tai nghe":"Không","Kết nối khác":"NFC, Air Play, HDMI, OTG"}}', '', '');
createProduct('MMRGM10SA', 'Nồi cơm điện Midea 1 lít MR-GM10SA', '', 'ncd', '', '2017-04-07 08:58:00', '300000', '12', '', '', '{"Màn hình":{"Công nghệ màn hình":"Công nghệ màn hình","Độ phân giải":"Full HD (1080 x 1920 pixels)","Màn hình rộng":"5.5","Mặt kính cảm ứng":"Kính oleophobic (ion cường lực)"},"Camera sau":{"Độ phân giải":"Hai camera 12 MP","Quay phim":"4K 2160p@30fps","Đèn Flash":"4 đèn LED (2 tông màu)","Chụp ảnh nâng cao":"Chạm lấy nét, Panorama, Chống rung quang học (OIS), Tự động lấy nét, Nhận diện khuôn mặt, HDR"},"Camera trước":{"Độ phân giải":"7 MP","Videocall":"Hỗ trợ VideoCall thông qua ứng dụng OTT","Thông tin khác":"Nhận diện khuôn mặt, Quay video Full HD, Tự động lấy nét, Selfie ngược sáng HDR"},"Hệ điều hành - CPU":{"Hệ điều hành":"iOS 10","Chipset (hãng SX CPU)":"Apple A10 Fusion 4 nhân 64-bit","Tốc độ CPU":"2.3 GHz","Chip đồ họa (GPU)":"PowerVR Series7XT Plus"},"Bộ nhớ & Lưu trữ":{"RAM":"3 GB","Bộ nhớ trong":"256 GB","Bộ nhớ còn lại (khả dụng)":"Khoảng 247.52 GB","Thẻ nhớ ngoài":"Không"},"Kết nối":{"Mạng di động":"3G, 4G LTE Cat 9","SIM":"1 Nano SIM","Wifi":"Wi-Fi 802.11 a/b/g/n/ac, Dual-band, Wi-Fi hotspot","GPS":"A-GPS, GLONASS","Bluetooth":"A2DP, LE, v4.2","Cổng kết nối/sạc":"Lightning","Jack tai nghe":"Không","Kết nối khác":"NFC, Air Play, HDMI, OTG"}}', '', '');

//Điều hòa
createProduct('EBTUESM09CRFD4', 'Điều hòa Electrolux 9000 BTU ESM09CRF-D4', '', 'dh', '', '2017-04-02 08:59:00', '5790000', '12', '', '', '{"Màn hình":{"Công nghệ màn hình":"Công nghệ màn hình","Độ phân giải":"Full HD (1080 x 1920 pixels)","Màn hình rộng":"5.5","Mặt kính cảm ứng":"Kính oleophobic (ion cường lực)"},"Camera sau":{"Độ phân giải":"Hai camera 12 MP","Quay phim":"4K 2160p@30fps","Đèn Flash":"4 đèn LED (2 tông màu)","Chụp ảnh nâng cao":"Chạm lấy nét, Panorama, Chống rung quang học (OIS), Tự động lấy nét, Nhận diện khuôn mặt, HDR"},"Camera trước":{"Độ phân giải":"7 MP","Videocall":"Hỗ trợ VideoCall thông qua ứng dụng OTT","Thông tin khác":"Nhận diện khuôn mặt, Quay video Full HD, Tự động lấy nét, Selfie ngược sáng HDR"},"Hệ điều hành - CPU":{"Hệ điều hành":"iOS 10","Chipset (hãng SX CPU)":"Apple A10 Fusion 4 nhân 64-bit","Tốc độ CPU":"2.3 GHz","Chip đồ họa (GPU)":"PowerVR Series7XT Plus"},"Bộ nhớ & Lưu trữ":{"RAM":"3 GB","Bộ nhớ trong":"256 GB","Bộ nhớ còn lại (khả dụng)":"Khoảng 247.52 GB","Thẻ nhớ ngoài":"Không"},"Kết nối":{"Mạng di động":"3G, 4G LTE Cat 9","SIM":"1 Nano SIM","Wifi":"Wi-Fi 802.11 a/b/g/n/ac, Dual-band, Wi-Fi hotspot","GPS":"A-GPS, GLONASS","Bluetooth":"A2DP, LE, v4.2","Cổng kết nối/sạc":"Lightning","Jack tai nghe":"Không","Kết nối khác":"NFC, Air Play, HDMI, OTG"}}', '', '');
createProduct('LGBTUS09EN3', 'Điều hòa LG 9000 BTU S09EN3', '', 'dh', '', '2017-04-06 12:20:00', '5990000', '12', '', '', '{"Màn hình":{"Công nghệ màn hình":"Công nghệ màn hình","Độ phân giải":"Full HD (1080 x 1920 pixels)","Màn hình rộng":"5.5","Mặt kính cảm ứng":"Kính oleophobic (ion cường lực)"},"Camera sau":{"Độ phân giải":"Hai camera 12 MP","Quay phim":"4K 2160p@30fps","Đèn Flash":"4 đèn LED (2 tông màu)","Chụp ảnh nâng cao":"Chạm lấy nét, Panorama, Chống rung quang học (OIS), Tự động lấy nét, Nhận diện khuôn mặt, HDR"},"Camera trước":{"Độ phân giải":"7 MP","Videocall":"Hỗ trợ VideoCall thông qua ứng dụng OTT","Thông tin khác":"Nhận diện khuôn mặt, Quay video Full HD, Tự động lấy nét, Selfie ngược sáng HDR"},"Hệ điều hành - CPU":{"Hệ điều hành":"iOS 10","Chipset (hãng SX CPU)":"Apple A10 Fusion 4 nhân 64-bit","Tốc độ CPU":"2.3 GHz","Chip đồ họa (GPU)":"PowerVR Series7XT Plus"},"Bộ nhớ & Lưu trữ":{"RAM":"3 GB","Bộ nhớ trong":"256 GB","Bộ nhớ còn lại (khả dụng)":"Khoảng 247.52 GB","Thẻ nhớ ngoài":"Không"},"Kết nối":{"Mạng di động":"3G, 4G LTE Cat 9","SIM":"1 Nano SIM","Wifi":"Wi-Fi 802.11 a/b/g/n/ac, Dual-band, Wi-Fi hotspot","GPS":"A-GPS, GLONASS","Bluetooth":"A2DP, LE, v4.2","Cổng kết nối/sạc":"Lightning","Jack tai nghe":"Không","Kết nối khác":"NFC, Air Play, HDMI, OTG"}}', '', '');

*/

app.use(bodyParser.urlencoded({
    extended: true
}));

nunjucks.configure('views', {
  autoescape: true,
  express   : app,
  cache : false
});

app.engine('html', nunjucks.render);

app.set('view engine', 'html');

app.use(express.static(__dirname + '/public'));


app.get('/', function(req, res) {

    //res.render('old/index1.html');
    log(req.body);
    db.task(t => {
        return t.batch([
            db.products.all(),
            db.images.all()
        ]);
    })
    .then(data => {
        res.render('index.njk', {title: 'Home', products : data[0], images : data[1]});
    })
    .catch(error => {
        // error;
    });

});

app.get('/products', function(req, res) {
    db.task(t => {
        return t.batch( [
            db.products.all(),
            db.images.all()
        ]);
    })
    .then(data => {
        res.render('products.njk', {title: 'Home', products : data[0], images : data[1]});
    })
    .catch(error => {
        res.json({
            success: false,
            error: error.message || error
        });
    });

    /*
    db.products.all(req)
        .then(data => {
            let id_product = [];
            data.forEach((index) => {
               id_product.push(index.product_id);
            });
            db.images.all(req)
                .then(data1 => {
                    res.render('products.njk', {title: 'Products', products : data, images : data1});
                })
                .catch(error => {
                res.json({
                    success: false,
                    error: error.message || error
                });
            });
            //res.render('products.njk', {title: 'Products', products : data, images : images});
        })
        .catch(error => {
            res.json({
                success: false,
                error: error.message || error
            });
        });
    */
});

app.get('/product/detail/:id', function(req, res) {

    let id = req.params.id;

    db.task(t => {
        return t.batch([
            db.products.detail(id),
            db.images.listAllImagesById(id)
        ]);
    })
    .then(data => {
        res.render('detail.njk', {title: 'Detail', detail : data[0], images : data[1]});
    })
    .catch(error => {
        res.json({
            success: false,
            error: error.message || error
        });
    });
    /*
    db.products.detail(id)
        .then(data => {
            db.images.listAllImagesById(id)
                .then(data1 => {
                    res.render('detail.njk', {title: 'Detail', detail : data, images : data1});
                })
                .catch(error => {
                res.json({
                    success: false,
                    error: error.message || error
                });
            });
            //res.render('detail.njk', {title: 'Detail', detail : data});
        })
        .catch(error => {
            res.json({
                success: false,
                error: error.message || error
            });
        });
        */
});

const port = 3000;
app.listen(port, () => {
    console.log('Ready for GET requests on http://localhost:' + port);
});
