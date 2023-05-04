import { Data_Api } from "@/data/api/data";
import Sim_Banners from "@/layouts/banner";
import Slide_Hot_Selling from "@/layouts/slide_card";
import { useAppDispatch } from "@/sp/hooks";
import {
  DataPublicSelector,
  Load_Data_Pl_Success,
} from "@/sp/redux/slice/data";
import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

const HomePage = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const handle_load_data = async () => {
      await Data_Api.Load_Data(dispatch, Load_Data_Pl_Success);
    };
    handle_load_data();
  }, []);

  const Sims = useSelector(DataPublicSelector.Sims);
  const ListComons = Sims?.filter((item) => item.common);
  const Hot_Sims = useSelector(DataPublicSelector.Hot_Sims);

  const Reviews = useSelector(DataPublicSelector.Reviews);

  return (
    <div id="home_page">
      <Sim_Banners />

      <section id="advantage" className="mb-5">
        <div className="w-85">
          <div className="sim_header mb-4">
            <h4 className="txt_center txt_red">ƯU ĐIỂM CỦA SIM THẺ QUỐC TẾ</h4>
          </div>
          <div className="advantage_content">
            <Row>
              <Col xs={12} sm={12} md={6} xl={3} className="mb-2 mt-2">
                <div className="advantage_item bsd bdr-7">
                  <div className="item_icon">
                    <span className="material-symbols-outlined">contacts</span>
                  </div>
                  <div className="item_title">
                    <h6 className="txt_center txt_bold">
                      GIỮ LIÊN LẠC VỚI <br /> NGƯỜI THÂN, BẠN BÈ
                    </h6>
                  </div>
                  <div className="advantage_txt">
                    <p className="txt_justify">
                      Thẻ sim quốc tế cho phép bạn sử dụng dịch vụ viễn thông
                      của quốc gia sở tại, có thể gọi điện hay nhắn tin với
                      người thân, bạn bè… ở Việt Nam hay người quen ở đất nước
                      bạn đến.
                    </p>
                  </div>
                </div>
              </Col>
              <Col xs={12} sm={12} md={6} xl={3} className="mb-2 mt-2">
                <div className="advantage_item bsd bdr-7">
                  <div className="item_icon">
                    <img
                      src="/img/icon/tenlua.png"
                      alt=""
                      className="d-block w-100 img-fluid"
                    />
                  </div>
                  <div className="item_title">
                    <h6 className="txt_center txt_bold">
                      TRUY CẬP INTERNET,
                      <br />
                      LƯỚT WEB THOẢI MÁI
                    </h6>
                  </div>
                  <div className="advantage_txt">
                    <p className="txt_justify">
                      Thẻ sim quốc tế sẽ có sẵn dung lượng data 3G/ 4G để bạn có
                      thể truy cập internet, lướt web, gửi mail… mà không cần
                      đăng ký thông tin rườm rà, không phải mang theo cục phát
                      wifi hay sử dụng wifi công cộng.
                    </p>
                  </div>
                </div>
              </Col>
              <Col xs={12} sm={12} md={6} xl={3} className="mb-2 mt-2">
                <div className="advantage_item bsd bdr-7">
                  <div className="item_icon">
                    <img
                      src="/img/icon/truycap.png"
                      alt=""
                      className="d-block w-100 img-fluid"
                    />
                  </div>
                  <div className="item_title">
                    <h6 className="txt_center txt_bold">
                      TRA CỨU THÔNG TIN,
                      <br />
                      ĐƯỜNG ĐI DỄ DÀNG
                    </h6>
                  </div>
                  <div className="advantage_txt">
                    <p className="txt_justify">
                      Có sim data quốc tế bạn có thể truy cập mạng, google maps
                      mọi lúc mọi nơi… giúp chuyến đi của bạn dễ dàng hơn, không
                      lo lắng lạc đường khi đi đến một đất nước xa lạ.
                    </p>
                  </div>
                </div>
              </Col>
              <Col xs={12} sm={12} md={6} xl={3} className="mb-2 mt-2">
                <div className="advantage_item bsd bdr-7">
                  <div className="item_icon">
                    <img
                      src="/img/icon/tietkiem.png"
                      alt=""
                      className="d-block w-100 img-fluid"
                    />
                  </div>
                  <div className="item_title">
                    <h6 className="txt_center txt_bold">
                      TIẾT KIỆM CHI PHÍ,
                      <br />
                      THỜI GIAN
                    </h6>
                  </div>
                  <div className="advantage_txt">
                    <p className="txt_justify">
                      Với Sim du lịch bạn chỉ cần gắn vào máy là có thể sử dụng
                      ngay không cần tốn thời gian đăng ký và xác nhận thông
                      tin. Sim có sẵn tiền và dữ liệu data có thể sử dụng nghe
                      gọi được ngay mà không tốn chi phí đăng ký dịch vụ chuyển
                      vùng quốc tế.
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </section>
      <Slide_Hot_Selling
        List_Card={Hot_Sims}
        Title="CÁC GÓI SIM BÁN CHẠY NHẤT"
        Bgr="bg_pink_700"
      />

      <Slide_Hot_Selling
        List_Card={ListComons}
        Title="CÁC GÓI SIM THÔNG DỤNG QUỐC TẾ"
        Bgr="bg_white"
      />

      <section id="advantage" className="mt-5 mb-5 p-5 bg_pink_700">
        <div className="w-80">
          <div className="sim_header mb-4">
            <h4 className="txt_center txt_red">
              ƯU ĐIỂM KHI MUA HÀNG TẠI 4G DATA
            </h4>
          </div>
          <div className="advantage_content">
            <Row>
              <Col xs={12} sm={12} md={6} xl={4} className="mb-2 mt-2">
                <div className="advantage_item  ">
                  <div className="item_icon">
                    <span className="material-symbols-outlined">
                      monetization_on
                    </span>
                  </div>
                  <div className="item_title">
                    <h6 className="txt_center txt_bold">
                      TIẾT KIỆM HƠN KHI MUA Ở NƯỚC NGOÀI
                    </h6>
                  </div>
                  <div className="advantage_txt">
                    <p className="txt_justify">
                      Mua Sim Quốc Tế ở Sim Station đảm bảo rẻ hơn tới 50% so
                      với khi mua sim ở nước ngoài. Sẵn sàng hoàn tiền 100% khi
                      sim bị lỗi, hỗ trợ tư vấn 24/7.
                    </p>
                  </div>
                </div>
              </Col>
              <Col xs={12} sm={12} md={6} xl={4} className="mb-2 mt-2">
                <div className="advantage_item bsd bdr-7">
                  <div className="item_icon">
                    <span className="material-symbols-outlined">
                      local_shipping
                    </span>
                  </div>
                  <div className="item_title">
                    <h6 className="txt_center txt_bold">GIAO HÀNG TẬN NƠI</h6>
                  </div>
                  <div className="advantage_txt">
                    <p className="txt_justify">
                      Đặt và nhận Sim từ 1 - 3 ngày làm việc, giao hàng tận nhà,
                      thanh toán khi nhận hàng.
                    </p>
                  </div>
                </div>
              </Col>
              <Col xs={12} sm={12} md={6} xl={4} className="mb-2 mt-2">
                <div className="advantage_item bsd bdr-7">
                  <div className="item_icon">
                    <span className="material-symbols-outlined">overview</span>
                  </div>
                  <div className="item_title">
                    <h6 className="txt_center txt_bold">THỦ TỤC ĐƠN GIẢN</h6>
                  </div>
                  <div className="advantage_txt">
                    <p className="txt_justify">
                      Không cần đăng ký thông tin rườm rà, không cần Passport
                      khi mua, không lo bị đánh cắp thông tin. Chỉ cần liên hệ
                      Sim Station đặt mua đơn giản, lắp sim vào máy là kích hoạt
                      dùng ngay.
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </section>

      <section id="reviews">
        <div className="w-80">
          <div className="sim_header mb-4">
            <h4 className="txt_center txt_red">CHIA SẺ CỦA KHÁCH HÀNG</h4>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
