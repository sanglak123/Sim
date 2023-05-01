"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Productions",
      [
        {
          name: "Sim Du Lịch Liên Tuyến : Singapore - Malay - Indonesia",
          idCate: 1,
        },
        {
          name: "Sim Du Lịch Hongkong - Trung Quốc - Macau",
          idCate: 1,
        },
        {
          name: "SSim Du Lịch Thái Lan",
          idCate: 1,
        },
        {
          name: "Sim Du Lịch Nhật Bản",
          idCate: 1,
        },
        {
          name: "Sim Du Lich Liên Tuyến : ẤN Độ - Nepal",
          idCate: 1,
        },
        {
          name: "Sim Du Lịch Dubai",
          idCate: 1,
        },
        {
          name: "Sim Du Lịch Liên Tuyến : Hàn - Nhật",
          idCate: 1,
        },
        {
          name: "Sim Du Lịch Đài Loan",
          idCate: 1,
        },
        //2
        {
          name: "Sim Du Lịch Châu Âu",
          idCate: 2,
        },
        {
          name: "Sim Mỹ",
          idCate: 2,
        },
        {
          name: "Sim Du Lịch : Mỹ - Canada",
          idCate: 2,
        },
        {
          name: "Sim Thỗ Nhĩ Kỳ",
          idCate: 2,
        },
        {
          name: "Sim Du Lịch Monaco",
          idCate: 2,
        },
        //3
        {
          name: "Sim Du Lịch Úc",
          idCate: 3,
        },
        {
          name: "Sim Du Lịch Nam Phi",
          idCate: 3,
        },
        {
          name: "Sim Du Lich Ai Cập",
          idCate: 3,
        },
        //4
        {
          name: "ESIM Châu Á",
          idCate: 4,
        },
        {
          name: "ESIM CHÂU ÂU",
          idCate: 4,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Productions", null, {});
  },
};
