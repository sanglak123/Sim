"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Sims",
      [
        {
          name: "Sim 4G SING-MAL-INDO 4N 2GB/NGÀY",
          expiry: 4,
          size_data: "2GB Tốc Độ Cao / Ngày + Không Giới Hạn 3G 128kbps",
          telco:
            "Malaysia: Celdom, DiGi||Indonesia: XL||Singapore: Starhub, Singtel",
          limit: "Singapore - Malaysia - Indonesia",
          idProduct: 1,
        },
        {
          name: "Sim 4G SING-MAL-INDO 4NT 3GB",
          expiry: 4,
          size_data: "3GB Tốc Độ Cao + Không Giới Hạn 3G nhanh 512kbps",
          telco: "Malaysia: Maxis||Indonesia: Telkomsel||Singapore: Singtel",
          limit: "Singapore - Malaysia - Indonesia",
          idProduct: 1,
        },
        {
          name: "SIM CHÂU ÂU 8 NGÀY 2GB/NGÀY",
          expiry: 8,
          size_data: "2GB Tốc Độ Cao Mỗi Ngày",
          telco: "các mạng ưu tú tại châu âu",
          limit: "EU",
          idProduct: 9,
        },
        {
          name: "SIM CHÂU ÂU 12GB/30NGÀY",
          expiry: 30,
          size_data: "12 GB Tốc Độ Cao",
          telco: "SoftBank",
          limit: "EU",
          idProduct: 9,
        },
        {
          name: "Sim Úc Optus Local 28N",
          expiry: 28,
          size_data: "40GB Tốc Độ Cao + Không Giới Hạn 3G",
          telco: "Optus",
          limit: "Úc",
          call: true,
          idProduct: 14,
        },
        {
          name: "ESIM HÀN QUỐC 5N 1GB/NGÀY",
          expiry: 5,
          size_data: "1GB/Ngày Tốc Độ Cao + Không Giới Hạn 3G (128kbps)",
          telco: "KT",
          limit: "HÀN QUỐC",
          size_sim: "QR code",
          idProduct: 17,
        },
        {
          name: "ESIM SING-MA-INDO 6N 2GB/NGÀY",
          expiry: 6,
          size_data: "2GB/Ngày Tốc Độ Cao + Không Giới Hạn 3G 128kbps",
          telco:
            "Malaysia: Celdom, DiGi||Indonesia: XL||Singapore: Starhub, M1",
          limit: "Singapore - Malaysia - Indonesia",
          size_sim: "QR code",
          idProduct: 17,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Sims", null, {});
  },
};
