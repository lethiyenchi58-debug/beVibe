/**
 * beVIBE Cosmetics & K-Beauty B2B Platform
 * Core Application Engine & Data Store
 * All 25 authentic products, 4 brands, OEM calculator, Bilingual i18n
 */

// ================= I18N DICTIONARIES =================
const I18N = {
  vi: {
    metaTitle: "beVIBE — Kết nối Tinh hoa Mỹ phẩm Hàn Quốc & Thị trường Việt Nam",
    navAbout: "Về beVIBE",
    navBusiness: "Lĩnh vực kinh doanh",
    navBrands: "Thương hiệu phân phối",
    navOem: "Sản xuất OEM/ODM",
    navCalculator: "Dự toán chi phí",
    navContact: "Liên hệ hợp tác ↗",
    langBtn: "KR · 한국어",
    heroEyebrow: "KOREAN BEAUTY · VIETNAMESE VISION",
    heroTitle: "Tinh hoa Hàn Quốc.<br><em>Dấu ấn thương hiệu của bạn.</em>",
    heroDesc: "beVIBE là đối tác chiến lược toàn diện đưa mỹ phẩm Hàn Quốc tiếp cận thị trường Việt Nam — từ đại diện tổng phân phối độc quyền đến giải pháp R&D và gia công OEM/ODM trọn gói chuẩn CGMP quốc tế.",
    heroCtaPrimary: "Bắt đầu hợp tác ↗",
    heroCtaSecondary: "Khám phá dịch vụ ↓",
    heroCtaCalc: "Dự toán OEM nhanh ✨",
    heroBadge1: "100% R&D & Made in Korea",
    heroBadge2: "Chuẩn CGMP & ISO 22716 Quốc Tế",
    ticker1: "KOREA → VIETNAM DIRECT ACCESS",
    ticker2: "PHÂN PHỐI ĐỘC QUYỀN CHÍNH NGẠCH",
    ticker3: "GIA CÔNG MỸ PHẨM OEM/ODM CHUẨN CGMP",
    ticker4: "R&D ĐỘC QUYỀN TỪ LAB SEOUL",
    ticker5: "HỖ TRỢ PHÁP LÝ & CÔNG BỐ TRỌN GÓI",
    aboutEyebrow: "01 / VỀ BEVIBE (ABOUT US)",
    aboutTitle: "Một đối tác chiến lược.<br>Vô vàn cơ hội bứt phá thị trường.",
    aboutDesc1: "beVIBE là cầu nối tin cậy giữa nền công nghiệp mỹ phẩm đỉnh cao Hàn Quốc và tiềm năng tăng trưởng vượt bậc tại thị trường Việt Nam. Chúng tôi đóng vai trò là tổng đại lý phân phối cho các thương hiệu làm đẹp danh tiếng từ Seoul, đồng thời cung cấp dịch vụ sản xuất OEM/ODM độc quyền dành riêng cho các doanh nghiệp và nhà sáng lập thương hiệu tại Việt Nam.",
    aboutDesc2: "Với đội ngũ chuyên gia am hiểu sâu sắc quy chuẩn pháp lý, xu hướng thị trường (K-Beauty Trends) và mạng lưới phòng lab viện nghiên cứu hàng đầu Hàn Quốc, beVIBE cam kết đồng hành bền vững cùng nhà bán lẻ, chuỗi spa clinic và doanh nghiệp.",
    aboutStat1Num: "100%",
    aboutStat1Label: "Chính ngạch & Đạt chuẩn CGMP",
    aboutStat2Num: "4+",
    aboutStat2Label: "Thương hiệu độc quyền phân phối",
    aboutStat3Num: "15+",
    aboutStat3Label: "Ngày hoàn thiện mẫu R&D thử nghiệm",
    aboutStat4Num: "360°",
    aboutStat4Label: "Giải pháp trọn gói từ ý tưởng đến kệ hàng",
    businessEyebrow: "02 / LĨNH VỰC HOẠT ĐỘNG (OUR SERVICES)",
    businessTitle: "Giải pháp toàn diện<br>cho mọi giai đoạn phát triển.",
    businessSubtitle: "Mô hình hợp tác linh hoạt, được thiết kế may đo cho từng đối tác từ khởi nghiệp đến tập đoàn bán lẻ.",
    bizCard1Tag: "01 — DISTRIBUTION",
    bizCard1Title: "Phân phối mỹ phẩm chính hãng",
    bizCard1Desc: "Nhập khẩu và cung ứng các dòng mỹ phẩm Hàn Quốc chất lượng cao cho hệ thống bán sỉ, bán lẻ, chuỗi mỹ phẩm và clinic da liễu tại Việt Nam.",
    bizCard1Li1: "Chiết khấu đại lý hấp dẫn & chính sách bảo vệ giá",
    bizCard1Li2: "Nguồn hàng date mới nhất, pháp lý & hóa đơn VAT minh bạch",
    bizCard1Li3: "Tư vấn danh mục theo xu hướng người tiêu dùng Việt",
    bizCard2Tag: "02 — BRAND PARTNERSHIP",
    bizCard2Title: "Tổng đại diện thương hiệu (Master Agent)",
    bizCard2Desc: "Đồng hành cùng các thương hiệu mỹ phẩm Hàn Quốc thâm nhập, định vị và mở rộng thị phần bền vững tại thị trường Việt Nam.",
    bizCard2Li1: "Kết nối mạng lưới kênh phân phối đa tầng (Online & Offline)",
    bizCard2Li2: "Bảo hộ sở hữu trí tuệ & đăng ký lưu hành Bộ Y Tế",
    bizCard2Li3: "Chiến dịch tiếp thị địa phương hóa (Localized Marketing)",
    bizCard3Tag: "03 — OEM / ODM DEVELOPMENT",
    bizCard3Title: "Gia công mỹ phẩm thương hiệu riêng",
    bizCard3Desc: "Biến ý tưởng mỹ phẩm của bạn thành dòng sản phẩm cao cấp mang thương hiệu riêng sản xuất 100% tại các nhà máy CGMP Hàn Quốc.",
    bizCard3Li1: "R&D công thức độc quyền với hoạt chất sinh học tiên tiến",
    bizCard3Li2: "Thiết kế bao bì 3D sang trọng, thời thượng theo phong cách Hàn",
    bizCard3Li3: "MOQ linh hoạt, hỗ trợ trọn gói từ kiểm nghiệm đến hải quan",
    brandsEyebrow: "03 / THƯƠNG HIỆU ĐỐI TÁC (OUR BRANDS)",
    brandsTitle: "Các thương hiệu mỹ phẩm Hàn Quốc<br>beVIBE đại diện phân phối.",
    catalogEyebrow: "DANH MỤC SẢN PHẨM PHÂN PHỐI (OFFICIAL CATALOG)",
    catalogTitle: "Danh mục chi tiết từng sản phẩm theo hãng.",
    catalogDesc: "Hình ảnh sản phẩm thực tế, thông số dung tích và công thức hoạt chất sinh học chuẩn CGMP Hàn Quốc.",
    catalogSearchPh: "Tìm kiếm theo tên sản phẩm, công dụng, thành phần...",
    catalogTabAll: "Tất cả (25 SP)",
    catalogTabSmib: "SMIB (09 SP)",
    catalogTabNeura: "NEURADERM (08 SP)",
    catalogTabDrBargo: "Dr. Bargo (04 SP)",
    catalogTabStemC: "Stem C (04 SP)",
    oemEyebrow: "04 / QUY TRÌNH GIA CÔNG OEM (WORKFLOW)",
    oemTitle: "Từ ý tưởng sơ khởi.<br>Đến thương hiệu mỹ phẩm độc bản.",
    oemDesc: "Quy trình làm việc 4 bước chuẩn hóa quốc tế, minh bạch và tối ưu hóa thời gian đưa sản phẩm ra thị trường (Time-to-market).",
    step1Num: "01",
    step1Title: "Lắng nghe & Khảo sát",
    step1Desc: "Trao đổi sâu về tệp khách hàng mục tiêu, định vị thương hiệu, bảng thành phần mong muốn và ngân sách dự toán. Ký kết thỏa thuận bảo mật ý tưởng (NDA).",
    step1Time: "Thời gian: 3 - 5 ngày làm việc",
    step2Num: "02",
    step2Title: "Nghiên cứu R&D & Bao bì",
    step2Desc: "Phòng lab tại Hàn Quốc phát triển công thức mẫu thử (Sample Lab) và gửi tận tay khách hàng trải nghiệm. Đồng thời lên concept thiết kế bao bì, chai lọ 3D độc quyền.",
    step2Time: "Thời gian: 10 - 15 ngày làm việc",
    step3Num: "03",
    step3Title: "Kiểm nghiệm & Thống nhất",
    step3Desc: "Kiểm tra độ ổn định, kiểm nghiệm da liễu không gây kích ứng. Chốt số lượng sản xuất (MOQ), đơn giá minh bạch và ký hợp đồng kinh tế chính thức.",
    step3Time: "Thời gian: 5 - 7 ngày làm việc",
    step4Num: "04",
    step4Title: "Sản xuất CGMP & Bàn giao",
    step4Desc: "Tiến hành sản xuất tại nhà máy chuẩn CGMP Hàn Quốc, đóng gói, hoàn tất thủ tục hải quan nhập khẩu chính ngạch và bàn giao giấy công bố mỹ phẩm lưu hành tại Việt Nam.",
    step4Time: "Thời gian: 35 - 45 ngày sản xuất",
    calcEyebrow: "05 / DỰ TOÁN CHI PHÍ OEM (ESTIMATOR)",
    calcTitle: "Công cụ ước tính ngân sách OEM.",
    calcDesc: "Chọn dòng sản phẩm, cấp độ bao bì và quy mô dự kiến để nhận ước tính sơ bộ tức thì trước khi trao đổi cùng chuyên gia.",
    calcCatLabel: "Dòng sản phẩm bạn muốn phát triển:",
    calcOptSerum: "Serum / Ampoule đặc trị (30ml - 50ml)",
    calcOptCream: "Kem dưỡng ẩm / Chống lão hóa (50ml)",
    calcOptSun: "Kem chống nắng sinh học / Nâng tông (50ml)",
    calcOptCleanser: "Sữa rửa mặt tạo bọt / Gel dịu nhẹ (120ml)",
    calcOptToner: "Toner dưỡng ẩm / Essence phục hồi (150ml)",
    calcOptScalp: "Dầu gội / Tinh chất mọc tóc chuyên sâu (250ml)",
    calcPackLabel: "Quy cách chai lọ bao bì:",
    calcPackStandard: "Bao bì tiêu chuẩn Hàn Quốc (Tối ưu chi phí)",
    calcPackPremium: "Thủy tinh mờ cao cấp + Nắp mạ kim loại sang trọng",
    calcPackCustom: "Khuôn thiết kế độc quyền riêng (Custom Mold)",
    calcQtyLabel: "Số lượng sản xuất dự kiến (MOQ):",
    calcEstInvestment: "Mức đầu tư dự kiến sơ bộ:",
    calcEstTimeline: "Thời gian bàn giao ước tính:",
    calcApplyBtn: "Áp dụng vào biểu mẫu liên hệ ↗",
    contactEyebrow: "06 / KẾT NỐI HỢP TÁC (PARTNERSHIP INQUIRY)",
    contactTitle: "Cùng tạo nên thành công<br>trong ngành mỹ phẩm.",
    contactDesc: "Dù bạn đang tìm kiếm nguồn hàng mỹ phẩm Hàn Quốc chính ngạch hay ấp ủ phát triển thương hiệu mỹ phẩm của riêng mình, beVIBE luôn sẵn sàng lắng nghe và đồng hành.",
    contactNote: "beVIBE cam kết bảo mật 100% mọi thông tin ý tưởng kinh doanh của quý đối tác theo thỏa thuận bảo mật NDA nghiêm ngặt.",
    formNameLabel: "Họ và tên người đại diện *",
    formNamePh: "VD: Nguyễn Văn An",
    formCompanyLabel: "Tên công ty / Thương hiệu",
    formCompanyPh: "VD: Công ty TNHH Làm Đẹp Á Đông",
    formEmailLabel: "Địa chỉ Email *",
    formEmailPh: "VD: partner@bevibe.vn",
    formPhoneLabel: "Số điện thoại / Zalo *",
    formPhonePh: "VD: 0912 345 678",
    formServiceLabel: "Nhu cầu hợp tác chính *",
    formServiceOpt1: "Phân phối mỹ phẩm Hàn Quốc (Đại lý / Sỉ)",
    formServiceOpt2: "Hợp tác tổng đại diện thương hiệu (Master Agent)",
    formServiceOpt3: "Gia công sản xuất mỹ phẩm OEM / ODM trọn gói",
    formServiceOpt4: "Đăng ký nhận mẫu thử & Catalogue sản phẩm",
    formBudgetLabel: "Ngân sách dự kiến (cho dự án OEM)",
    formBudgetOpt1: "Chưa xác định / Cần tư vấn thêm",
    formBudgetOpt2: "Dưới 100 triệu VNĐ",
    formBudgetOpt3: "100 triệu - 300 triệu VNĐ",
    formBudgetOpt4: "300 triệu - 500 triệu VNĐ",
    formBudgetOpt5: "Trên 500 triệu VNĐ",
    formMessageLabel: "Mô tả chi tiết dự án & yêu cầu của bạn *",
    formMessagePh: "Chia sẻ ngắn gọn về dòng sản phẩm quan tâm, định hướng thương hiệu, yêu cầu mẫu thử hoặc số lượng mong muốn...",
    formSubmitBtn: "Tạo nội dung yêu cầu hợp tác ↗",
    formResultNote: "Hệ thống đã tổng hợp bản yêu cầu hợp tác. Bạn có thể sao chép nhanh hoặc bấm gửi trực tiếp qua Zalo / Email bên dưới.",
    btnCopy: "Sao chép nội dung",
    btnCopied: "Đã sao chép vào bộ nhớ tạm ✓",
    btnSendZalo: "Gửi qua Zalo beVIBE ↗",
    btnSendEmail: "Gửi qua Email ↗",
    footerDesc: "beVIBE — Đối tác chiến lược kết nối tinh hoa công nghệ mỹ phẩm Hàn Quốc với thị trường Việt Nam.",
    footerAddressSeoul: "Seoul Office: Gangnam-gu, Teheran-ro 152, Seoul, Republic of Korea",
    footerAddressVn: "Vietnam Office: Tòa nhà Landmark 81, P. 22, Q. Bình Thạnh, TP. Hồ Chí Minh",
    footerHotline: "Hotline / Zalo: (+84) 988 123 456",
    footerEmail: "Email: contact@bevibe.vn",
    footerBackToTop: "Về đầu trang ↑",
    footerCopy: "© 2026 beVIBE. Bản quyền thuộc về beVIBE Korea & Vietnam. All rights reserved."
  },
  ko: {
    metaTitle: "beVIBE — 한국 화장품의 정수와 베트남 시장의 연결",
    navAbout: "회사소개",
    navBusiness: "사업영역",
    navBrands: "파트너 브랜드",
    navOem: "OEM/ODM 개발",
    navCalculator: "견적 시뮬레이션",
    navContact: "파트너 문의 ↗",
    langBtn: "VN · Tiếng Việt",
    heroEyebrow: "KOREAN BEAUTY · VIETNAMESE VISION",
    heroTitle: "한국 뷰티의 정수.<br><em>당신의 독자적인 브랜드로.</em>",
    heroDesc: "beVIBE는 K-뷰티 브랜드와 베트남 시장을 잇는 전략적 파트너입니다. 독점 총판 유통부터 고객 맞춤형 CGMP 화장품 OEM/ODM 원스톱 생산까지 성공적인 비즈니스를 지원합니다.",
    heroCtaPrimary: "파트너십 상담 시작 ↗",
    heroCtaSecondary: "사업영역 보기 ↓",
    heroCtaCalc: "OEM 견적 계산 ✨",
    heroBadge1: "100% 한국 R&D 및 생산",
    heroBadge2: "CGMP & ISO 22716 국제 인증",
    ticker1: "KOREA → VIETNAM DIRECT ACCESS",
    ticker2: "정식 통관 및 독점 브랜드 총판",
    ticker3: "CGMP 인증 화장품 OEM/ODM 제조",
    ticker4: "서울 연구소 독점 R&D 포뮬러",
    ticker5: "베트남 위생허가(CFS) 및 법률 원스톱 지원",
    aboutEyebrow: "01 / 회사소개 (ABOUT beVIBE)",
    aboutTitle: "신뢰할 수 있는 단 하나의 파트너.<br>베트남 뷰티 비즈니스의 성공 공식.",
    aboutDesc1: "beVIBE는 최고 수준의 한국 뷰티 산업과 급성장하는 베트남 시장을 연결하는 글로벌 B2B 뷰티 비즈니스 전문 기업입니다. 한국의 우수한 코스메틱 브랜드의 베트남 총판 사업을 수행함과 동시에, 베트남 기업과 브랜드를 위한 CGMP 규격 OEM/ODM 개발을 원스톱으로 지원합니다.",
    aboutDesc2: "베트남 현지 인허가, 유통 트렌드에 대한 깊은 이해와 한국 연구소 네트워크를 기반으로 소매 체인, 클리닉, 인플루언서 및 뷰티 창업자들과 함께 지속가능한 성장을 만들어갑니다.",
    aboutStat1Num: "100%",
    aboutStat1Label: "정식 통관 및 CGMP 인증",
    aboutStat2Num: "4+",
    aboutStat2Label: "베트남 공식 독점 유통 브랜드",
    aboutStat3Num: "15+",
    aboutStat3Label: "영업일 기준 샘플 개발 기간",
    aboutStat4Num: "360°",
    aboutStat4Label: "콘셉트 기획부터 론칭까지 원스톱",
    businessEyebrow: "02 / 사업영역 (OUR SERVICES)",
    businessTitle: "성공적인 비즈니스를 위한<br>단계별 맞춤형 솔루션.",
    businessSubtitle: "스타트업부터 대형 유통 기업까지 고객사의 비즈니스 단계에 최적화된 협력 모델을 제안합니다.",
    bizCard1Tag: "01 — DISTRIBUTION",
    bizCard1Title: "한국 정품 화장품 유통",
    bizCard1Desc: "한국의 검증된 프리미엄 스킨케어 및 뷰티 제품을 베트남 전역의 도소매점, 드럭스토어, 피부과 클리닉에 안정적으로 공급합니다.",
    bizCard1Li1: "경쟁력 있는 도매 공급가 및 가격 보호 정책",
    bizCard1Li2: "최신 제조일자 보장, 정식 라벨 및 부가세 세금계산서 발급",
    bizCard1Li3: "베트남 현지 소비자 선호도 기반 큐레이션",
    bizCard2Tag: "02 — BRAND PARTNERSHIP",
    bizCard2Title: "한국 브랜드 베트남 총판 대행",
    bizCard2Desc: "한국 유망 화장품 브랜드의 베트남 시장 진출, 브랜드 포지셔닝 및 유통망 확장을 종합적으로 대행합니다.",
    bizCard2Li1: "온·오프라인 옴니채널 유통망 구축",
    bizCard2Li2: "베트남 보건부 화장품 유통 등록(CFS/위생허가) 전담",
    bizCard2Li3: "현지 맞춤형 인플루언서 및 마케팅 전략 실행",
    bizCard3Tag: "03 — OEM / ODM DEVELOPMENT",
    bizCard3Title: "자체 브랜드(PB) OEM/ODM 생산",
    bizCard3Desc: "고객사의 독창적인 뷰티 아이디어를 100% 한국 CGMP 인증 설비에서 고품질 화장품으로 실현합니다.",
    bizCard3Li1: "최신 바이오 활성 성분 기반 독점 포뮬러 R&D",
    bizCard3Li2: "트렌디한 감성의 프리미엄 한국식 패키지 디자인",
    bizCard3Li3: "합리적 MOQ 지원 및 임상·통관 일괄 지원",
    brandsEyebrow: "03 / 파트너 브랜드 (OUR BRANDS)",
    brandsTitle: "beVIBE가 베트남에<br>공식 유통하는 브랜드.",
    catalogEyebrow: "공식 유통 제품 카탈로그 (OFFICIAL CATALOG)",
    catalogTitle: "브랜드별 제품 라인업 상세 안내.",
    catalogDesc: "실제 제품 이미지, 규격 및 CGMP 인증 바이오 활성 포뮬러 정보.",
    catalogSearchPh: "제품명, 효능, 성분으로 검색...",
    catalogTabAll: "전체 (25개)",
    catalogTabSmib: "SMIB (09개)",
    catalogTabNeura: "NEURADERM (08개)",
    catalogTabDrBargo: "Dr. Bargo (04개)",
    catalogTabStemC: "Stem C (04개)",
    oemEyebrow: "04 / OEM 프로세스 (WORKFLOW)",
    oemTitle: "아이디어 기획부터<br>당신만의 브랜드 론칭까지.",
    oemDesc: "글로벌 기준의 체계적인 4단계 프로세스로 시장 출시 기간(Time-to-market)을 최적화합니다.",
    step1Num: "01",
    step1Title: "상담 및 요구사항 분석",
    step1Desc: "타깃 고객, 브랜드 콘셉트, 희망 성분 및 예상 예산을 논의합니다. 기업 비밀 및 기획 보호를 위한 NDA(비밀유지협약)를 체결합니다.",
    step1Time: "소요 기간: 영업일 3~5일",
    step2Num: "02",
    step2Title: "연구개발 및 샘플링",
    step2Desc: "한국 연구소에서 1차 처방 샘플을 개발하여 베트남 고객사에 발송합니다. 이와 동시에 3D 패키지 용기 디자인을 협의합니다.",
    step2Time: "소요 기간: 영업일 10~15일",
    step3Num: "03",
    step3Title: "품질 검증 및 조건 확정",
    step3Desc: "피부 저자극 테스트 및 제형 안정성 검증을 거친 후, 생산 수량(MOQ), 최종 단가를 확정하고 정식 계약을 체결합니다.",
    step3Time: "소요 기간: 영업일 5~7일",
    step4Num: "04",
    step4Title: "CGMP 본생산 및 납품",
    step4Desc: "한국 CGMP 설비에서 완제품을 제조하고, 베트남 정식 수입통관 및 보건부 위생허가를 완료하여 안전하게 인도합니다.",
    step4Time: "소요 기간: 약 35~45일 (본생산)",
    calcEyebrow: "05 / 견적 시뮬레이터 (ESTIMATOR)",
    calcTitle: "OEM/ODM 제작 비용 간편 시뮬레이션.",
    calcDesc: "원하시는 품목군과 패키지 사양, 제작 수량을 선택하시면 예상 제작 규모를 즉시 확인하실 수 있습니다.",
    calcCatLabel: "개발 희망 제품군:",
    calcOptSerum: "고농축 앰플 / 세럼 (30ml - 50ml)",
    calcOptCream: "안티에이징 / 수분 크림 (50ml)",
    calcOptSun: "무기자차 / 톤업 선크림 (50ml)",
    calcOptCleanser: "저자극 폼클렌저 / 젤 (120ml)",
    calcOptToner: "수분 토너 / 퍼스트 에센스 (150ml)",
    calcOptScalp: "탈모 완화 샴푸 / 두피 토닉 (250ml)",
    calcPackLabel: "용기 및 패키지 사양:",
    calcPackStandard: "한국 표준 규격 패키지 (가성비 최적화)",
    calcPackPremium: "고급 무광 유리용기 + 메탈 캡 (하이엔드)",
    calcPackCustom: "독점 금형 맞춤 제작 (Custom Mold)",
    calcQtyLabel: "예상 생산 수량 (MOQ):",
    calcEstInvestment: "예상 제작 비용 범위:",
    calcEstTimeline: "예상 소요 기간:",
    calcApplyBtn: "이 조건으로 상담 신청서에 적용 ↗",
    contactEyebrow: "06 / 파트너 문의 (PARTNERSHIP INQUIRY)",
    contactTitle: "뷰티 비즈니스의 성공,<br>beVIBE와 함께 시작하세요.",
    contactDesc: "한국 화장품 공급처를 찾고 계시거나 자체 브랜드(PB) 론칭을 준비 중이시라면 지금 바로 beVIBE 전문가와 상의하세요.",
    contactNote: "beVIBE는 고객의 사업 계획 및 브랜드 기획을 철저한 비밀유지(NDA) 원칙에 따라 보호합니다.",
    formNameLabel: "담당자 성함 *",
    formNamePh: "예: 김영민 (Nguyen Van An)",
    formCompanyLabel: "회사명 / 브랜드명",
    formCompanyPh: "예: (주)아시아 뷰티",
    formEmailLabel: "이메일 주소 *",
    formEmailPh: "예: partner@bevibe.vn",
    formPhoneLabel: "연락처 / Zalo *",
    formPhonePh: "예: 0912 345 678",
    formServiceLabel: "문의 분야 *",
    formServiceOpt1: "한국 화장품 유통 (도매/대리점)",
    formServiceOpt2: "브랜드 베트남 총판 파트너십",
    formServiceOpt3: "자체 브랜드 OEM / ODM 개발",
    formServiceOpt4: "카탈로그 및 샘플 신청",
    formBudgetLabel: "예상 예산 규모 (OEM의 경우)",
    formBudgetOpt1: "미정 / 상담 후 결정",
    formBudgetOpt2: "1억 동 미만 (약 500만원 이하)",
    formBudgetOpt3: "1억 ~ 3억 동 (약 500만~1,500만원)",
    formBudgetOpt4: "3억 ~ 5억 동 (약 1,500만~2,500만원)",
    formBudgetOpt5: "5억 동 이상 (약 2,500만원 이상)",
    formMessageLabel: "프로젝트 상세 내용 및 문의사항 *",
    formMessagePh: "관심 제품군, 희망 수량, 콘셉트 및 일정 등을 자유롭게 적어주세요...",
    formSubmitBtn: "상담 요청서 생성하기 ↗",
    formResultNote: "상담 요청서가 준비되었습니다. 내용을 복사하시거나 Zalo / 이메일로 바로 전송하실 수 있습니다.",
    btnCopy: "요청서 복사",
    btnCopied: "클립보드에 복사 완료 ✓",
    btnSendZalo: "beVIBE Zalo로 즉시 전송 ↗",
    btnSendEmail: "이메일로 문의 전송 ↗",
    footerDesc: "beVIBE — 한국 화장품 기술력과 베트남 시장을 연결하는 B2B 뷰티 비즈니스 플랫폼.",
    footerAddressSeoul: "Seoul Office: 서울특별시 강남구 테헤란로 152",
    footerAddressVn: "Vietnam Office: 호치민시 빈탄군 Landmark 81 빌딩 22층",
    footerHotline: "Hotline / Zalo: (+84) 988 123 456",
    footerEmail: "Email: contact@bevibe.vn",
    footerBackToTop: "맨 위로 ↑",
    footerCopy: "© 2026 beVIBE. All rights reserved. Korean Beauty · Vietnamese Vision."
  }
};

// ================= BRANDS & PRODUCTS DATA =================
const BRANDS_DATA = [
  {
    id: "dr-bargo",
    name: "Dr. Bargo",
    category: "derma",
    origin: "Seoul, Korea",
    tagline: "Clinic Derma Solution",
    badge: "Clinical Formula",
    coverImage: "https://bevibe.vercel.app/assets/dr.bargo_serum-D7uMwkiH.jpg",
    descVi: "Dược mỹ phẩm chuyên khoa da liễu ứng dụng công nghệ phục hồi màng bảo vệ da, chuyên biệt cho liệu trình điều trị tại spa & clinic.",
    descKo: "피부과 전문 처방 기반의 더마 코스메틱 브랜드. 손상된 피부 장벽 복구 및 에스테틱 전문 시술 후 진정 케어에 최적화.",
    highlightsVi: ["Phục hồi hàng rào da", "Kháng viêm & Dịu kích ứng", "Chuẩn Clinic Hàn Quốc"],
    highlightsKo: ["피부 장벽 강화", "항염 및 즉각 진정", "피부과 클리닉 처방"],
    storyVi: "Dr. Bargo được sáng lập bởi nhóm bác sĩ da liễu hàng đầu Gangnam (Seoul). Thương hiệu tập trung giải quyết các vấn đề tổn thương da sau xâm lấn (laser, peel, phi kim) và củng cố hệ vi sinh màng da tự nhiên.",
    storyKo: "Dr. Bargo는 서울 강남의 피부과 전문의 그룹에 의해 설립된 임상 기반 더마 브랜드입니다. 레이저, 필링 등 에스테틱 시술 후 손상된 피부 장벽의 급속 복원과 진정에 특화되어 있습니다.",
    techVi: "Công nghệ Liposome đa tầng vận chuyển Ceramide NP 5.000ppm, Panthenol B5 và Madecassoside trực tiếp xuống tầng biểu bì sâu, rút ngắn 50% thời gian phục hồi da nhạy cảm.",
    techKo: "다층 리포좀 전달 기술을 통해 세라마이드 NP 5,000ppm, 판테놀 B5, 마데카소사이드를 진피층 깊숙이 전달하여 민감성 피부의 회복 시간을 단축합니다.",
    policyVi: ["Chiết khấu đại lý hấp dẫn dành riêng cho Spa, Clinic và Nhà thuốc", "Cung cấp đầy đủ giấy tờ công bố Bộ Y Tế, hóa đơn VAT và tem phụ chính ngạch", "Đào tạo chuyển giao phác đồ da liễu chuẩn Hàn Quốc từ bác sĩ chuyên gia"],
    policyKo: ["베트남 스파, 피부과 클리닉 및 약국 대상 최고 수준의 도매 마진 제공", "베트남 보건부 정식 화장품 위생허가(CFS) 및 세금계산서 100% 발급", "한국 피부과 원장단의 시술 프로토콜 교육 및 마케팅 자료 무상 제공"]
  },
  {
    id: "neuraderm",
    name: "NEURADERM",
    category: "biotech",
    origin: "Seoul, Korea (Medytox)",
    tagline: "Biotech Skin Rejuvenation",
    badge: "Medytox Biotech",
    coverImage: "https://bevibe.vercel.app/assets/hero_coretime-5Aj_QWMK.webp",
    descVi: "Thương hiệu từ tập đoàn Medytox Hàn Quốc, độc quyền peptide M.Biome BTX cải thiện nếp nhăn và trẻ hóa sinh học cấp độ tế bào.",
    descKo: "메디톡스(Medytox)의 바이오 기술이 집약된 브랜드. 독자 펩타이드 M.Biome BTX 성분으로 강력한 안티에이징 선사.",
    highlightsVi: ["Công nghệ M.Biome Peptide", "Xóa mờ rãnh nhăn sâu", "Được chứng nhận lâm sàng"],
    highlightsKo: ["M.Biome 펩타이드 기술", "주름 개선 및 탄력 강화", "국제 임상 효능 입증"],
    storyVi: "NEURADERM là thành tựu nghiên cứu hơn 20 năm của tập đoàn sinh học Medytox — đơn vị tiên phong về botulinum toxin và công nghệ tế bào tại Hàn Quốc. Dòng sản phẩm mang lại hiệu quả nâng cơ trẻ hóa tương đương các liệu trình thẩm mỹ cao cấp.",
    storyKo: "NEURADERM은 보툴리눔 톡신 분야의 글로벌 바이오 기업 메디톡스(Medytox)의 20년 연구 역량이 응집된 하이엔드 바이오 안티에이징 브랜드입니다.",
    techVi: "Phức hợp độc quyền M.Biome BTX™ kết hợp công nghệ lên men vi sinh microbiome và chuỗi peptide sinh học mô phỏng botulinum, tăng sinh collagen tự thân lên tới 180%.",
    techKo: "독자 특허 성분 M.Biome BTX™는 마이크로바이옴 발효 기술과 보툴리눔 유래 펩타이드 복합체로 자가 콜라겐 생성을 180% 이상 촉진합니다.",
    policyVi: ["Đại diện tổng phân phối độc quyền tại Việt Nam qua beVIBE", "Hỗ trợ bộ tư liệu chứng minh lâm sàng, hình ảnh và video người nổi tiếng tại Hàn", "Bảo hộ thị trường khu vực và chương trình hội thảo chuyên đề da liễu"],
    policyKo: ["beVIBE를 통한 베트남 시장 정식 총판 독점 유통 지원", "국내외 임상 시험 데이터, 한류 스타 및 인플루언서 마케팅 에셋 제공", "지역별 독점권 보장 및 메디톡스 본사 연계 B2B 심포지엄 개최"]
  },
  {
    id: "stem-c",
    name: "Stem C",
    category: "biotech",
    origin: "Seoul, Korea",
    tagline: "Cellular Longevity & Glow",
    badge: "Stem Cell Active",
    coverImage: "https://bevibe.vercel.app/assets/images/stem-c/stemc_cream1.png",
    descVi: "Liệu trình trẻ hóa tế bào gốc thực vật và dịch chiết sinh học cô đặc, đem lại làn da Glass Skin chuẩn Hàn căng mọng và săn chắc.",
    descKo: "식물성 줄기세포 및 고농축 바이오 앰플 브랜드. 한국 고유의 물광 피부(Glass Skin) 연출과 피부 밀도 개선에 탁월.",
    highlightsVi: ["Tế bào gốc thực vật Callus", "Tái sinh cấu trúc collagen", "Căng bóng chuẩn Glass Skin"],
    highlightsKo: ["식물 줄기세포 추출물", "콜라겐 생성 촉진", "광채 및 피부결 개선"],
    storyVi: "Stem C ra đời với triết lý lưu giữ thanh xuân từ cấp độ tế bào. Kết hợp giữa tế bào gốc thực vật quý hiếm cùng các phân tử HA siêu nhỏ, Stem C mang đến giải pháp nuôi dưỡng làn da trong suốt như sương mai.",
    storyKo: "Stem C는 세포 수준에서 피부 노화를 늦추는 식물 캘러스 배양액 추출물 전문 브랜드입니다. 한국 특유의 맑고 투명한 물광(Glass Skin) 효과를 선사합니다.",
    techVi: "Công nghệ nuôi cấy Callus thực vật vô trùng giúp chiết xuất hoạt chất sống với độ tinh khiết trên 98%, tái tạo tế bào đáy và kích hoạt chu trình thay da tự nhiên nhanh hơn 30%.",
    techKo: "무균 식물 줄기세포 배양 기술을 통해 순도 98% 이상의 활성 인자를 추출, 기저층 세포를 자극하여 턴오버 주기를 30% 빠르게 정상화합니다.",
    policyVi: ["Phù hợp kinh doanh chuỗi mỹ phẩm cao cấp, Spa chăm sóc da chuyên sâu", "Chính sách giá bán sỉ bậc thang với lợi nhuận biên vượt trội", "Tặng kèm bộ tester mini và ấn phẩm catalogue sang trọng"],
    policyKo: ["프리미엄 뷰티 편집숍, 에스테틱 살롱 전문 유통 최적화", "주문 수량에 따른 차등 도매가 및 안정적인 수익 마진 보장", "매장 디스플레이용 테스터 키트 및 고급 패키지 브로슈어 무료 지원"]
  },
  {
    id: "smib",
    name: "SMIB",
    category: "scalp",
    origin: "Seoul, Korea",
    tagline: "Postbiotic Hair & Scalp Therapy",
    badge: "100 Billion Postbiotic",
    coverImage: "https://bevibe.vercel.app/assets/smib-banner-BEW99og_.jpg",
    ebookUrl: "https://bevibe-smib-ebook.quiettoad513.chatgpt.site/#page-1",
    descVi: "Thương hiệu chăm sóc da đầu & tóc hàng đầu Hàn Quốc, tiên phong công nghệ 100 tỷ Postbiotic và công thức chăm sóc phục hồi tóc chuyên sâu.",
    descKo: "한국 대표 두피 케어 & 탈모 완화 브랜드. 1000억 포스트바이오틱스 및 특허 두피 활성 성분으로 모근 강화와 모발 복원 실현.",
    highlightsVi: ["100 Tỷ Postbiotic Lợi Khuẩn", "Dầu Gội Nhuộm Phủ Bạc Tích Lũy", "Chăm Sóc Da Đầu & Giảm Rụng Tóc"],
    highlightsKo: ["1000억 포스트바이오틱스", "저자극 컬러 체인지 샴푸", "두피 장벽 강화 & 탈모 완화"],
    storyVi: "SMIB là thương hiệu chăm sóc tóc và da đầu cao cấp từ Hàn Quốc dẫn đầu triết lý 'Chăm sóc da đầu như chăm sóc da mặt' (Skinification of Hair). Toàn bộ sản phẩm được kiểm nghiệm da liễu nghiêm ngặt, sử dụng nguồn nguyên liệu sinh học và men vi sinh Postbiotic giúp củng cố nang tóc, làm sạch gàu ngứa và nuôi dưỡng sợi tóc dày khỏe óng ả.",
    storyKo: "SMIB은 '두피도 피부처럼 관리한다'는 스킨케어 철학을 접목한 한국 프리미엄 기능성 헤어 케어 브랜드입니다. 엄격한 저자극 테스트를 거쳐 1000억 포스트바이오틱스와 유효 성분으로 두피 환경을 근본적으로 개선합니다.",
    techVi: "Ứng dụng công nghệ độc quyền 100 Tỷ Postbiotic lên men vi sinh tự nhiên kết hợp phức hợp khoáng chất sinh học, Zinc Pyrithione, Dexpanthenol, Niacinamide, Biotin, Salicylic Acid và L-Menthol giúp tái tạo màng ẩm da đầu, cân bằng hệ vi sinh và kích hoạt sự phát triển của nang tóc.",
    techKo: "독자적인 1000억 포스트바이오틱스 발효 공법과 징크피리치온, 덱스판테놀, 나이아신아마이드, 비오틴, 살리실산, L-멘톨 복합체로 두피 마이크로바이옴을 복원하고 모근을 튼튼하게 유지합니다.",
    policyVi: ["Dòng sản phẩm độc quyền đón đầu xu hướng chăm sóc tóc sinh học", "Hỗ trợ tài liệu đào tạo chuyên sâu về cấu trúc nang tóc và cơ chế phủ bạc", "Chính sách thưởng doanh số theo quý cho đại lý và nhà thuốc"],
    policyKo: ["한국 유일 1000억 포스트바이오틱스 특허 라인 독점 공급", "두피 진단 교육 자료 및 살롱 시술 매뉴얼 번역 지원", "분기별 목표 달성 인센티브 및 홍보 마케팅 예산 지원"]
  }
];

// All 25 authentic products
const ALL_PRODUCTS = [
  // 1. Dr. Bargo (4 products)
  {
    id: "drbargo-1",
    brandId: "dr-bargo",
    brandName: "Dr. Bargo",
    nameVi: "Dr.BARGO Emulsion",
    nameKo: "닥터바르고 에멀전 (Dr.BARGO Emulsion)",
    spec: "Chai 130ml",
    image: "https://bevibe.vercel.app/assets/images/dr-bargo/dr.bargo_emulsion_01.jpg",
    tagVi: "Sữa dưỡng cân bằng màng ẩm",
    tagKo: "장벽 강화 수분 에멀전",
    descVi: "Sữa dưỡng phục hồi màng ẩm sinh học lỏng nhẹ, bổ sung phức hợp Ceramide NP và Panthenol giúp cân bằng tỷ lệ dầu - nước, giảm thiểu mất nước qua biểu bì cho làn da nhạy cảm.",
    descKo: "세라마이드 NP와 판테놀 복합 처방으로 유수분 밸런스를 즉각 정상화하고 손상된 피부 장벽을 밀착 케어하는 저자극 고보습 에멀전."
  },
  {
    id: "drbargo-2",
    brandId: "dr-bargo",
    brandName: "Dr. Bargo",
    nameVi: "Dr.BARGO Foam Cleansing",
    nameKo: "닥터바르고 폼 클렌징 (Dr.BARGO Foam Cleansing)",
    spec: "Tuýp 150ml",
    image: "https://bevibe.vercel.app/assets/images/dr-bargo/dr.bargo_foam_cleansing_01.jpg",
    tagVi: "Sữa rửa mặt bọt dịu nhẹ",
    tagKo: "약산성 마이크로 버블 폼",
    descVi: "Bọt rửa mặt siêu mịn độ pH chuẩn 5.5, lấy sạch bụi mịn và tạp chất bã nhờn sâu trong lỗ chân lông mà không làm tổn thương màng lipid bảo vệ tự nhiên của da.",
    descKo: "pH 5.5 약산성 미세 거품이 모공 속 노폐물과 미세먼지를 자극 없이 말끔히 씻어내고 촉촉함을 남겨주는 피부과 전용 클렌저."
  },
  {
    id: "drbargo-3",
    brandId: "dr-bargo",
    brandName: "Dr. Bargo",
    nameVi: "Dr.BARGO Serum",
    nameKo: "닥터바르고 세럼 (Dr.BARGO Serum)",
    spec: "Chai 50ml",
    image: "https://bevibe.vercel.app/assets/images/dr-bargo/dr.bargo_serum.jpg",
    tagVi: "Tinh chất phục hồi chuyên sâu",
    tagKo: "고농축 리페어 시카 세럼",
    descVi: "Huyết thanh cô đặc chứa nồng độ cao Madecassoside sinh học và peptide phục hồi, làm dịu cấp tốc làn da kích ứng, đỏ rát và thúc đẩy tái tạo tế bào sau liệu trình clinic.",
    descKo: "마데카소사이드와 리포좀 활성 펩타이드로 레이저, 필링 시술 후 붉어지고 예민해진 피부를 급속 진정시키는 에스테틱 세럼."
  },
  {
    id: "drbargo-4",
    brandId: "dr-bargo",
    brandName: "Dr. Bargo",
    nameVi: "Dr.BARGO Toner",
    nameKo: "닥터바르고 토너 (Dr.BARGO Toner)",
    spec: "Chai 150ml",
    image: "https://bevibe.vercel.app/assets/images/dr-bargo/dr.bargo_toner_01.jpg",
    tagVi: "Nước cân bằng làm dịu da",
    tagKo: "부스팅 수분 진정 토너",
    descVi: "Nước cân bằng y khoa cấp ẩm tầng sâu tức thì sau bước rửa mặt, làm mềm lớp sừng tế bào chết và mở đường dẫn cho các hoạt chất thẩm thấu tối đa vào biểu bì.",
    descKo: "세안 직후 건조해진 피부에 즉각적인 수분을 급속 공급하고 각질결을 정돈하여 다음 단계 유효 성분의 흡수율을 극대화하는 부스팅 토너."
  },

  // 2. NEURADERM (8 products)
  {
    id: "neura-1",
    brandId: "neuraderm",
    brandName: "NEURADERM",
    nameVi: "Neuraderm Calming Foam Cleansing",
    nameKo: "뉴라덤 카밍 폼 클렌징",
    spec: "Tuýp 150ml",
    image: "https://bevibe.vercel.app/assets/images/neuraderm/srm_neura__1_.png",
    tagVi: "Sữa rửa mặt dịu nhẹ vi sinh",
    tagKo: "저자극 마이크로 클렌징 폼",
    descVi: "Sữa rửa mặt tạo bọt mịn sinh học công nghệ Medytox, thanh lọc bã nhờn sâu mà không phá vỡ màng ẩm hay gây cảm giác khô căng sau khi rửa.",
    descKo: "메디톡스 바이오 기술로 개발된 저자극 약산성 버블 클렌저로 자극받은 피부를 부드럽게 세정하고 진정시킵니다."
  },
  {
    id: "neura-2",
    brandId: "neuraderm",
    brandName: "NEURADERM",
    nameVi: "Neuraderm Calming Mist",
    nameKo: "뉴라덤 카밍 미스트",
    spec: "Chai xịt 100ml",
    image: "https://bevibe.vercel.app/assets/images/neuraderm/x_t_kho_ng_neura_1_.png",
    tagVi: "Xịt khoáng cấp ẩm làm dịu tức thì",
    tagKo: "급속 진정 안개 분사 미스트",
    descVi: "Tia xịt sương nano siêu mịn phân tán dưỡng chất peptide làm dịu da cấp tốc, hạ nhiệt độ bề mặt da và cung cấp độ ẩm sinh học suốt ngày dài.",
    descKo: "초미세 마이크로 안개 분사로 피부 온도를 즉각 낮추고 바이오 펩타이드 수분막을 형성하는 카밍 미스트."
  },
  {
    id: "neura-3",
    brandId: "neuraderm",
    brandName: "NEURADERM",
    nameVi: "Neuraderm Coretime Ampoule",
    nameKo: "뉴라덤 코어타임 앰플",
    spec: "Chai 30ml",
    image: "https://bevibe.vercel.app/assets/images/neuraderm/neura_coretime_01_-_sao_ch_p.webp",
    tagVi: "Ampoule xóa nhăn nâng cơ lõi",
    tagKo: "코어 탄력 리프팅 앰플",
    descVi: "Tinh chất biểu tượng của Medytox chứa phức hợp M.Biome BTX™ độc quyền, kích hoạt tái tạo mạng lưới collagen lõi, làm mờ rãnh nhăn sâu và tăng độ đàn hồi săn chắc.",
    descKo: "메디톡스 독자 M.Biome BTX™ 특허 성분이 함유되어 피부 코어 탄력을 되살리고 주름을 집중 개선하는 고기능성 안티에이징 앰플."
  },
  {
    id: "neura-4",
    brandId: "neuraderm",
    brandName: "NEURADERM",
    nameVi: "Neuraderm Deep Calming Mask",
    nameKo: "뉴라덤 딥 카밍 마스크",
    spec: "Hộp 5 miếng (25g x 5)",
    image: "https://bevibe.vercel.app/assets/images/neuraderm/neura_mask_01.webp",
    tagVi: "Mặt nạ phục hồi chuyên sâu",
    tagKo: "시술 후 급속 진정 바이오 마스크",
    descVi: "Mặt nạ sợi sinh học dừa ôm khít khuôn mặt, ngậm đẫm huyết thanh M.Biome peptide làm dịu cấp tốc làn da ửng đỏ, nhạy cảm sau laser hoặc peel da hóa học.",
    descKo: "피부 밀착력이 뛰어난 바이오 시트에 고농축 진정 펩타이드를 담아 시술 후 붉어진 피부를 급속 진정시키는 집중 마스크."
  },
  {
    id: "neura-5",
    brandId: "neuraderm",
    brandName: "NEURADERM",
    nameVi: "Neuraderm Intensive Suncream",
    nameKo: "뉴라덤 인텐시브 선크림 SPF50+ PA++++",
    spec: "Tuýp 50ml (SPF50+ PA++++)",
    image: "https://bevibe.vercel.app/assets/images/neuraderm/kem_ch_ng_n_ng_neura_1_.png",
    tagVi: "Kem chống nắng phổ rộng Medytox",
    tagKo: "무백탁 저자극 데일리 선크림",
    descVi: "Kem chống nắng quang phổ y khoa kết hợp dưỡng ẩm tế bào sinh học, chống tia UVA/UVB toàn diện mà không gây vệt trắng, bết dính hay bít tắc chân lông.",
    descKo: "자외선 차단과 피부 장벽 케어를 동시에 실현하는 무백탁 저자극 데일리 병원 전용 바이오 선크림."
  },
  {
    id: "neura-6",
    brandId: "neuraderm",
    brandName: "NEURADERM",
    nameVi: "Neuraderm MD Cream",
    nameKo: "뉴라덤 엠디 크림 (의료기기 1등급)",
    spec: "Tuýp 80g (Thiết bị y tế Loại 1)",
    image: "https://bevibe.vercel.app/assets/images/neuraderm/md_cream_neura_1_.png",
    tagVi: "Kem y tế bảo vệ vùng da tổn thương",
    tagKo: "피부 보호 의료기기 공인 크림",
    descVi: "Đạt chứng nhận thiết bị y tế y khoa Hàn Quốc, tạo màng chắn vô trùng bảo vệ làn da tổn thương sau can thiệp thẩm mỹ, bỏng rát hoặc viêm da cơ địa.",
    descKo: "화상, 건조 피부, 피부과 시술 후 손상된 피부 부위를 물리적으로 보호하고 수분을 유지해주는 한국 식약처 공인 의료기기 크림."
  },
  {
    id: "neura-7",
    brandId: "neuraderm",
    brandName: "NEURADERM",
    nameVi: "Neuraderm Neuro Lacto Serum",
    nameKo: "뉴라덤 뉴로 락토 세럼",
    spec: "Chai 50ml",
    image: "https://bevibe.vercel.app/assets/images/neuraderm/serum_neura_1_.png",
    tagVi: "Tinh chất men vi sinh cân bằng da",
    tagKo: "마이크로바이옴 장벽 세럼",
    descVi: "Serum ứng dụng men vi sinh Lactobacillus lên men độc quyền, củng cố hệ vi sinh vật tự nhiên trên bề mặt da, nâng cao đề kháng tế bào và làm đều màu sắc tố.",
    descKo: "락토바실러스 발효 용해물과 뉴로 펩타이드의 결합으로 무너진 피부 생태계를 복원하고 맑은 안색을 가꾸는 마이크로바이옴 세럼."
  },
  {
    id: "neura-8",
    brandId: "neuraderm",
    brandName: "NEURADERM",
    nameVi: "Neuraderm Neuro Lacto Toner",
    nameKo: "뉴라덤 뉴로 락토 토너",
    spec: "Chai 180ml",
    image: "https://bevibe.vercel.app/assets/images/neuraderm/toner_neura_1_.png",
    tagVi: "Nước cân bằng men vi sinh",
    tagKo: "유익균 발효 퍼스트 토너",
    descVi: "Nước hoa hồng lợi khuẩn cân bằng pH sinh lý tối ưu, làm mềm tế bào sừng già cỗi, thanh lọc chân lông và chuẩn bị nền da hoàn hảo để thẩm thấu tinh chất.",
    descKo: "유익균 발효 성분으로 피부 pH 밸런스를 즉각 케어하고 각질 턴오버를 촉진하여 매끄러운 결을 완성하는 퍼스트 토너."
  },

  // 3. Stem C (4 products)
  {
    id: "stemc-1",
    brandId: "stem-c",
    brandName: "Stem C",
    nameVi: "Stem C BB Cream",
    nameKo: "스템 C 비비크림 (Stem C BB Cream)",
    spec: "Tuýp 50ml (SPF50+ PA++++)",
    image: "https://bevibe.vercel.app/assets/images/stem-c/bbcream.png",
    tagVi: "Kem nền dưỡng sinh học đa năng",
    tagKo: "3중 기능성 물광 BB크림",
    descVi: "Kem BB tích hợp tế bào gốc thực vật đa năng: che phủ hoàn hảo khuyết điểm, nâng tông căng bóng chuẩn Glass Skin Hàn Quốc và chống nắng bảo vệ toàn diện.",
    descKo: "식물 줄기세포 배양액과 미백·주름개선·자외선 차단의 3중 기능성 처방으로 자연스러운 물광 피부를 연출하는 프리미엄 BB크림."
  },
  {
    id: "stemc-2",
    brandId: "stem-c",
    brandName: "Stem C",
    nameVi: "Stem C Revitalizing Cream",
    nameKo: "스템 C 리바이탈라이징 크림",
    spec: "Hũ 50ml",
    image: "https://bevibe.vercel.app/assets/images/stem-c/stemc_cream1.png",
    tagVi: "Kem tái sinh phục hồi tế bào gốc",
    tagKo: "고농축 줄기세포 리바이탈 크림",
    descVi: "Kem dưỡng trẻ hóa chuyên sâu với dịch chiết nuôi cấy tế bào gốc Callus, tái tạo hàng rào da hư tổn, tăng sinh nguyên bào sợi và duy trì độ ẩm suốt 48h.",
    descKo: "고농축 식물 캘러스 추출물이 피부 진피층의 콜라겐 합성을 촉진하여 처진 탄력을 끌어올리고 깊은 보습을 선사하는 리바이탈 크림."
  },
  {
    id: "stemc-3",
    brandId: "stem-c",
    brandName: "Stem C",
    nameVi: "Stem C Sunblock",
    nameKo: "스템 C 선블록 (Stem C Sunblock SPF50+ PA++++)",
    spec: "Tuýp 50ml (SPF50+ PA++++)",
    image: "https://bevibe.vercel.app/assets/images/stem-c/kcn_stemc1_1_.png",
    tagVi: "Kem chống nắng tế bào gốc",
    tagKo: "줄기세포 데일리 프로텍트 선크림",
    descVi: "Kem chống nắng tế bào gốc thế hệ mới, màng lọc bảo vệ tế bào trước tia UVA/UVB và ánh sáng xanh HEV, chất kem mỏng nhẹ thấm nhanh không để lại vệt trắng.",
    descKo: "자외선과 블루라이트로부터 줄기세포를 안전하게 보호하며, 끈적임이나 백탁 없이 산뜻하게 밀착되는 고기능성 데일리 선블록."
  },
  {
    id: "stemc-4",
    brandId: "stem-c",
    brandName: "Stem C",
    nameVi: "Stem C Toner",
    nameKo: "스템 C 토너 (Stem C Toner)",
    spec: "Chai 150ml",
    image: "https://bevibe.vercel.app/assets/images/stem-c/stemc_toner_1_.png",
    tagVi: "Nước hoa hồng tế bào gốc",
    tagKo: "식물 줄기세포 에센스 토너",
    descVi: "Nước hoa hồng cân bằng pH sinh học giàu dưỡng chất tế bào gốc Callus, cấp ẩm đa tầng và mở đường dẫn tế bào tăng hấp thu dưỡng chất cho các bước tiếp theo.",
    descKo: "식물 줄기세포 유효 인자가 풍부한 워터 텍스처로 피부결을 즉각 유연화하고 보습 경로를 열어주는 영양 에센스 토너."
  },

  // 4. SMIB (9 products)
  {
    id: "smib-1",
    brandId: "smib",
    brandName: "SMIB",
    nameVi: "SMIB Color Change Black Shampoo",
    nameKo: "SMIB 락토바이오 컬러체인지 블랙 샴푸",
    spec: "Chai 200ml / 6.76 fl.oz",
    image: "https://bevibe.vercel.app/assets/images/smib/prod_1.jpg",
    ebookPage: "https://bevibe-smib-ebook.quiettoad513.chatgpt.site/#page-1",
    tagVi: "Dầu gội nhuộm tóc đen",
    tagKo: "새치 케어 블랙 샴푸",
    descVi: "Chứa 100 tỷ Postbiotic, tạo màu đen tự nhiên tích lũy qua từng lần gội, lành tính dịu nhẹ, không xót rát da đầu, không gây khô xơ hư tổn tóc.",
    descKo: "1000억 포스트바이오틱스 함유, 샴푸할수록 자연스러운 딥 블랙 컬러가 누적 발색되는 저자극 새치 케어."
  },
  {
    id: "smib-2",
    brandId: "smib",
    brandName: "SMIB",
    nameVi: "SMIB Color Change Dark Brown Shampoo",
    nameKo: "SMIB 락토바이오 컬러체인지 다크브라운 샴푸",
    spec: "Chai 200ml / 6.76 fl.oz",
    image: "https://bevibe.vercel.app/assets/images/smib/prod_2.jpg",
    ebookPage: "https://bevibe-smib-ebook.quiettoad513.chatgpt.site/#page-2",
    tagVi: "Dầu gội nhuộm nâu đậm",
    tagKo: "새치 케어 다크브라운 샴푸",
    descVi: "Sắc Nâu Đậm sang trọng quý phái, phủ bạc tự nhiên và phục hồi sợi tóc bóng mượt từ gốc đến ngọn với 100 tỷ Postbiotic.",
    descKo: "우아하고 세련된 다크 브라운 컬러, 1000억 유익균으로 두피 자극 없이 모발을 윤기 있게 가꿔줍니다."
  },
  {
    id: "smib-3",
    brandId: "smib",
    brandName: "SMIB",
    nameVi: "SMIB LactoBio Repair Shampoo (Chai lớn)",
    nameKo: "SMIB 락토바이오 리페어 샴푸 (400ml)",
    spec: "Chai lớn 400ml / 13.52 fl.oz",
    image: "https://bevibe.vercel.app/assets/images/smib/prod_3.jpg",
    ebookPage: "https://bevibe-smib-ebook.quiettoad513.chatgpt.site/#page-3",
    tagVi: "Dầu gội giảm rụng tóc",
    tagKo: "데일리 두피 강화 샴푸",
    descVi: "Chăm sóc da đầu mỗi ngày, chứa 100 tỷ Postbiotic giúp làm sạch dịu nhẹ, giảm ngứa, phục hồi da đầu nhạy cảm và hỗ trợ giảm rụng tóc.",
    descKo: "1000억 포스트바이오틱스로 민감해진 두피 장벽을 케어하고 모근을 강화하는 저자극 리페어 샴푸."
  },
  {
    id: "smib-4",
    brandId: "smib",
    brandName: "SMIB",
    nameVi: "SMIB LactoBio Repair Shampoo (Travel Size)",
    nameKo: "SMIB 락토바이오 리페어 샴푸 (여행용 70ml)",
    spec: "Tuýp 70ml / 2.37 fl.oz",
    image: "https://bevibe.vercel.app/assets/images/smib/prod_4.jpg",
    ebookPage: "https://bevibe-smib-ebook.quiettoad513.chatgpt.site/#page-4",
    tagVi: "Dầu gội du lịch bỏ túi",
    tagKo: "트래블 휴대용 두피 샴푸",
    descVi: "Phiên bản dạng tuýp 70ml nhỏ gọn tiện lợi mang theo khi đi công tác, du lịch, bảo vệ da đầu và nuôi dưỡng mái tóc chuẩn salon mọi lúc mọi nơi.",
    descKo: "휴대가 간편한 70ml 튜브 타입으로 출장이나 여행 중에도 언제 어디서나 두피를 완벽하게 케어합니다."
  },
  {
    id: "smib-5",
    brandId: "smib",
    brandName: "SMIB",
    nameVi: "SMIB innaBi Shampoo",
    nameKo: "SMIB 인나비 탈모 완화 기능성 샴푸 (500ml)",
    spec: "Chai 500ml",
    image: "https://bevibe.vercel.app/assets/images/smib/prod_5.jpg",
    ebookPage: "https://bevibe-smib-ebook.quiettoad513.chatgpt.site/#page-5",
    tagVi: "Dầu gội giảm rụng chuyên sâu",
    tagKo: "탈모 증상 완화 기능성 샴푸",
    descVi: "Chứa bộ 4 hoạt chất vàng: Zinc Pyrithione, Dexpanthenol, Niacinamide và Biotin. Làm sạch sâu nang tóc, ngăn ngừa gãy rụng và nuôi tóc con mọc dày khỏe.",
    descKo: "징크피리치온, 덱스판테놀, 나이아신아마이드, 비오틴 4대 핵심 성분 처방으로 탈모 증상을 완화하는 기능성 샴푸."
  },
  {
    id: "smib-6",
    brandId: "smib",
    brandName: "SMIB",
    nameVi: "SMIB innaBi Treatment",
    nameKo: "SMIB 인나비 두피 트리트먼트 (500ml)",
    spec: "Chai 500ml",
    image: "https://bevibe.vercel.app/assets/images/smib/prod_6.jpg",
    ebookPage: "https://bevibe-smib-ebook.quiettoad513.chatgpt.site/#page-6",
    tagVi: "Kem xả tóc mềm mượt",
    tagKo: "손상모 집중 영양 트리트먼트",
    descVi: "Chứa Salicylic Acid, Zinc Pyrithione và Dexpanthenol giúp nuôi dưỡng sợi tóc hư tổn trở nên mềm mại bồng bềnh mà không gây bết dính nang tóc.",
    descKo: "살리실산과 덱스판테놀 복합 성분으로 손상된 모발에 고농축 영양을 공급하여 부드러운 머릿결로 가꿔줍니다."
  },
  {
    id: "smib-7",
    brandId: "smib",
    brandName: "SMIB",
    nameVi: "SMIB innaBi Scalp Essence",
    nameKo: "SMIB 인나비 두피 쿨링 에센스 (115ml)",
    spec: "Chai xịt 115ml",
    image: "https://bevibe.vercel.app/assets/images/smib/prod_7.jpg",
    ebookPage: "https://bevibe-smib-ebook.quiettoad513.chatgpt.site/#page-7",
    tagVi: "Tinh chất da đầu sảng khoái",
    tagKo: "두피 열감 완화 쿨링 토닉",
    descVi: "Xịt dưỡng trực tiếp vào chân tóc mang lại cảm giác sảng khoái mát lạnh tức thì nhờ L-Menthol, kết hợp Dexpanthenol và Salicylic Acid kích hoạt nang tóc phát triển.",
    descKo: "L-멘톨 성분이 두피 열감을 즉각 낮추고 유효 영양을 모근에 직접 전달하는 산뜻한 두피 전용 쿨링 에센스."
  },
  {
    id: "smib-8",
    brandId: "smib",
    brandName: "SMIB",
    nameVi: "SMIB LactoBio Silk Treatment (Hũ lớn)",
    nameKo: "SMIB 락토바이오 1분 실크 헤어 트리트먼트 (400g)",
    spec: "Hũ 400g / 14.10 oz",
    image: "https://bevibe.vercel.app/assets/images/smib/prod_8.jpg",
    ebookPage: "https://bevibe-smib-ebook.quiettoad513.chatgpt.site/#page-8",
    tagVi: "Kem ủ tóc mềm mượt 1 phút",
    tagKo: "1분 극손상모 실크 트리트먼트",
    descVi: "Anti-Break 1 Minute Silk Hair Treatment chứa 100 tỷ Postbiotic và chuỗi amino acid tơ tằm, phục hồi liên kết tóc chẻ ngọn trở nên suôn mượt như lụa chỉ sau 1 phút.",
    descKo: "1000억 포스트바이오틱스와 실크 아미노산 복합체로 갈라지고 끊어지는 극손상모를 1분 만에 실크처럼 복원합니다."
  },
  {
    id: "smib-9",
    brandId: "smib",
    brandName: "SMIB",
    nameVi: "SMIB LactoBio Silk Treatment (Travel Size)",
    nameKo: "SMIB 락토바이오 실크 트리트먼트 (여행용 70g)",
    spec: "Tuýp 70g / 2.46 oz",
    image: "https://bevibe.vercel.app/assets/images/smib/prod_9.jpg",
    ebookPage: "https://bevibe-smib-ebook.quiettoad513.chatgpt.site/#page-9",
    tagVi: "Kem ủ tóc tuýp du lịch",
    tagKo: "휴대용 실크 트리트먼트",
    descVi: "Dạng tuýp nhỏ gọn 70g tiện bỏ túi mang theo mọi hành trình, cung cấp 100 tỷ lợi khuẩn phục hồi tóc hư tổn bóng mượt tức thì.",
    descKo: "가방에 쏙 들어가는 70g 휴대용 튜브 타입으로 이동 중에도 언제나 부드러운 헤어 케어가 가능합니다."
  }
];

// Service Data for Modals
const SERVICES_DATA = {
  distribution: {
    badge: "01 / PHÂN PHỐI ĐỘC QUYỀN",
    titleVi: "Phân Phối Mỹ Phẩm Chính Hãng",
    titleKo: "한국 정품 화장품 공식 유통",
    descVi: "beVIBE kết nối trực tiếp với các nhà sản xuất mỹ phẩm hàng đầu tại Hàn Quốc, cung cấp nguồn hàng chính ngạch 100% hóa đơn VAT, đầy đủ phiếu công bố Bộ Y Tế và tem phụ chuẩn quy định.",
    descKo: "beVIBE는 한국 최고 제조사와 직결되어 100% 정식 통관, 보건부 위생허가 및 정식 세금계산서를 완비한 정품 화장품을 베트남에 공급합니다.",
    pointsVi: [
      "Chiết khấu đại lý cạnh tranh từ 35% - 55% theo hạn mức doanh số tháng/quý.",
      "Cam kết bảo vệ giá bán lẻ niêm yết trên toàn quốc, chống bán phá giá.",
      "Nguồn hàng Date sản xuất mới nhất trong vòng 3-6 tháng, nhập container liên tục.",
      "Hỗ trợ tư liệu Marketing chuẩn hãng: hình ảnh high-res, video KOLs Hàn Quốc, bài PR báo chí."
    ],
    pointsKo: [
      "월/분기별 매출 규모에 따른 35%~55% 수준의 경쟁력 있는 도매 마진 제공",
      "베트남 전국 공식 권장소비자가격 보호 정책으로 가격 덤핑 철저 방지",
      "제조일자 3~6개월 이내의 신선한 최신 생산 제품 정기 컨테이너 수입",
      "한국 인플루언서 영상 및 고해상도 제품 상세페이지 마케팅 자료 무상 제공"
    ]
  },
  partnership: {
    badge: "02 / TỔNG ĐẠI DIỆN THƯƠNG HIỆU",
    titleVi: "Tổng Đại Diện Thương Hiệu (Master Agent)",
    titleKo: "한국 브랜드 베트남 총판 대행 (Master Agent)",
    descVi: "Giải pháp trọn gói đưa thương hiệu mỹ phẩm Hàn Quốc thâm nhập thành công và chiếm lĩnh thị phần bền vững tại Việt Nam thông qua hệ sinh thái phân phối toàn diện của beVIBE.",
    descKo: "beVIBE의 온·오프라인 옴니채널 유통망을 통해 한국 화장품 브랜드의 성공적인 베트남 안착과 지속 가능한 성장을 지원하는 토털 솔루션입니다.",
    pointsVi: [
      "Thực hiện thủ tục đăng ký công bố mỹ phẩm lưu hành (CFS) tại Cục Quản lý Dược - Bộ Y Tế.",
      "Bảo hộ thương hiệu và sở hữu trí tuệ tại Cục Sở Hữu Trí Tuệ Việt Nam.",
      "Xây dựng mạng lưới phân phối đa kênh: Bán lẻ, Chuỗi Watsons, Guardian, Hasaki, Beauty Box, Clinic Spa.",
      "Chiến dịch ra mắt và truyền thông địa phương hóa phù hợp thị hiếu người tiêu dùng Việt."
    ],
    pointsKo: [
      "베트남 보건부(의약품청) 화장품 수입유통허가(CFS) 등록 전담 대행",
      "베트남 지식재산청 상표권 및 지식재산권 출원 보호",
      "가디언, 왓슨스, 하사키, 뷰티박스 및 전국 피부과 클리닉 입점 유통망 연계",
      "베트남 현지 소비자의 피부 특성과 뷰티 트렌드에 최적화된 로컬 마케팅 실행"
    ]
  },
  oem: {
    badge: "03 / GIA CÔNG OEM/ODM",
    titleVi: "Gia Công Sản Xuất Mỹ Phẩm Chuẩn CGMP",
    titleKo: "CGMP 인증 화장품 OEM/ODM 원스톱 생산",
    descVi: "beVIBE cung cấp dịch vụ may đo R&D và sản xuất mỹ phẩm độc quyền tại Seoul, từ công thức sinh học tiên tiến đến bao bì chai lọ cao cấp mang đậm dấu ấn thương hiệu riêng của bạn.",
    descKo: "서울의 첨단 R&D 연구소 및 CGMP 제조 시설에서 고객사만의 독창적인 콘셉트와 성분을 담은 하이엔드 PB 화장품을 맞춤 제조합니다.",
    pointsVi: [
      "Nghiên cứu công thức riêng biệt tại các phòng lab viện nghiên cứu hàng đầu Seoul.",
      "100% sản xuất tại nhà máy đạt chuẩn CGMP quốc tế và ISO 22716.",
      "Thiết kế kiểu dáng chai lọ bao bì 3D thời thượng, sang trọng theo tiêu chuẩn K-Beauty.",
      "Hỗ trợ trọn gói thủ tục kiểm nghiệm lâm sàng, công bố mỹ phẩm và xuất nhập khẩu chính ngạch."
    ],
    pointsKo: [
      "서울 유수 화장품 전문 연구소의 특허 바이오 성분 처방 R&D 지원",
      "글로벌 CGMP 및 ISO 22716 인증 최신 한국 생산 라인 100% 제조",
      "트렌디하고 고급스러운 K-뷰티 감성의 독점 3D 용기 디자인 및 단상자 개발",
      "피부 임상 테스트 인증, 보건부 위생허가 및 정식 무역 통관 전 과정 원스톱 지원"
    ]
  }
};

// ================= APP STATE =================
let currentLang = "vi";
let activeHeroSlide = 0;
let heroSlideTimer = null;
let currentCatalogBrand = "all";
let currentSearchQuery = "";

// ================= INITIALIZATION =================
document.addEventListener("DOMContentLoaded", () => {
  renderBrandCards();
  renderProductCatalog();
  initHeroCarousel();
  initOemCalculator();
  initFormHandler();
  initLanguageToggle();
  initMobileMenu();
  initModals();
  initScrollEffects();
});

// ================= LANGUAGE SWITCHER =================
function initLanguageToggle() {
  const langToggleBtn = document.getElementById("langToggle");
  const langToggleMobile = document.getElementById("langToggleMobile");

  const toggleHandler = () => {
    currentLang = currentLang === "vi" ? "ko" : "vi";
    applyLanguage(currentLang);
    renderBrandCards();
    renderProductCatalog();
    showToast(currentLang === "vi" ? "Đã chuyển sang Tiếng Việt" : "한국어로 전환되었습니다");
  };

  if (langToggleBtn) langToggleBtn.addEventListener("click", toggleHandler);
  if (langToggleMobile) langToggleMobile.addEventListener("click", toggleHandler);
}

function applyLanguage(lang) {
  const dict = I18N[lang] || I18N.vi;

  // Update text nodes with data-i18n
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) {
      el.innerHTML = dict[key];
    }
  });

  // Update placeholders
  document.querySelectorAll("[data-i18n-ph]").forEach(el => {
    const key = el.getAttribute("data-i18n-ph");
    if (dict[key]) {
      el.setAttribute("placeholder", dict[key]);
    }
  });

  // Recalculate OEM if needed
  updateOemEstimate();
}

// ================= BRAND CARDS RENDERER =================
function renderBrandCards() {
  const container = document.getElementById("brandsGrid");
  if (!container) return;

  const isVi = currentLang === "vi";
  container.innerHTML = BRANDS_DATA.map(brand => `
    <div class="brand-card" onclick="window.openBrandModal('${brand.id}')">
      <div class="brand-card-cover">
        <img src="${brand.coverImage}" alt="${brand.name}" loading="lazy">
        <span class="brand-card-badge">${brand.badge}</span>
      </div>
      <div class="brand-card-body">
        <div>
          <h3 class="brand-card-name">${brand.name}</h3>
          <div class="brand-card-origin">${brand.origin}</div>
          <p class="brand-card-desc">${isVi ? brand.descVi : brand.descKo}</p>
        </div>
        <div class="brand-card-footer">
          <span>${isVi ? "Xem chi tiết dòng SP" : "브랜드 라인업 보기"}</span>
          <span>↗</span>
        </div>
      </div>
    </div>
  `).join("");
}

// ================= PRODUCT CATALOG RENDERER =================
function renderProductCatalog() {
  const grid = document.getElementById("productCatalogGrid");
  if (!grid) return;

  const isVi = currentLang === "vi";
  const query = currentSearchQuery.trim().toLowerCase();

  // Filter products
  const filtered = ALL_PRODUCTS.filter(prod => {
    const matchesBrand = currentCatalogBrand === "all" || prod.brandId === currentCatalogBrand;
    if (!matchesBrand) return false;

    if (!query) return true;
    const name = (isVi ? prod.nameVi : prod.nameKo).toLowerCase();
    const tag = (isVi ? prod.tagVi : prod.tagKo).toLowerCase();
    const desc = (isVi ? prod.descVi : prod.descKo).toLowerCase();
    const brand = prod.brandName.toLowerCase();
    return name.includes(query) || tag.includes(query) || desc.includes(query) || brand.includes(query);
  });

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="catalog-empty-state">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
        <p>${isVi ? "Không tìm thấy sản phẩm phù hợp với từ khóa này." : "일치하는 제품을 찾을 수 없습니다."}</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(prod => `
    <article class="product-item-card">
      <div class="product-img-wrap" onclick="window.openProductModal('${prod.id}')" style="cursor: pointer;">
        <span class="product-badge-brand">${prod.brandName}</span>
        <img src="${prod.image}" alt="${isVi ? prod.nameVi : prod.nameKo}" loading="lazy">
      </div>
      <div class="product-info-wrap">
        <span class="product-spec-pill">${prod.spec}</span>
        <h4 class="product-name-title" onclick="window.openProductModal('${prod.id}')" style="cursor: pointer;">
          ${isVi ? prod.nameVi : prod.nameKo}
        </h4>
        <div class="product-tagline">${isVi ? prod.tagVi : prod.tagKo}</div>
        <div class="product-card-action">
          <button type="button" class="btn-quick-view" onclick="window.openProductModal('${prod.id}')">
            ${isVi ? "Xem chi tiết" : "상세보기"} ↗
          </button>
          <button type="button" class="btn-quick-view" onclick="window.requestProductQuote('${prod.id}')" style="color: var(--color-gold);">
            ${isVi ? "Báo giá" : "견적"} ✨
          </button>
        </div>
      </div>
    </article>
  `).join("");
}

// Bind catalog filters & search
document.addEventListener("DOMContentLoaded", () => {
  const tabsGroup = document.getElementById("catalogTabsGroup");
  if (tabsGroup) {
    tabsGroup.addEventListener("click", e => {
      const btn = e.target.closest(".catalog-tab-btn");
      if (!btn) return;
      tabsGroup.querySelectorAll(".catalog-tab-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentCatalogBrand = btn.dataset.catalogBrand;
      renderProductCatalog();
    });
  }

  const searchInput = document.getElementById("catalogSearchInput");
  if (searchInput) {
    searchInput.addEventListener("input", e => {
      currentSearchQuery = e.target.value;
      renderProductCatalog();
    });
  }
});

// ================= HERO SHOWCASE CAROUSEL =================
function initHeroCarousel() {
  const slides = document.querySelectorAll(".hero-slide");
  const dots = document.querySelectorAll(".hero-indicator-dot");
  const chips = document.querySelectorAll(".glass-brand-chip");
  const progressBar = document.getElementById("heroProgressFill");
  const prevBtn = document.getElementById("heroSlidePrev");
  const nextBtn = document.getElementById("heroSlideNext");
  const card = document.getElementById("heroBannerCard");

  if (!slides.length) return;

  function goToSlide(index) {
    activeHeroSlide = (index + slides.length) % slides.length;

    slides.forEach((s, i) => s.classList.toggle("active", i === activeHeroSlide));
    dots.forEach((d, i) => d.classList.toggle("active", i === activeHeroSlide));
    chips.forEach((c, i) => c.classList.toggle("active", i === activeHeroSlide));

    // Reset progress fill
    if (progressBar) {
      progressBar.style.transition = "none";
      progressBar.style.width = "0%";
      setTimeout(() => {
        progressBar.style.transition = "width 5.5s linear";
        progressBar.style.width = "100%";
      }, 50);
    }
  }

  function startAutoPlay() {
    stopAutoPlay();
    goToSlide(activeHeroSlide);
    heroSlideTimer = setInterval(() => {
      goToSlide(activeHeroSlide + 1);
    }, 5500);
  }

  function stopAutoPlay() {
    if (heroSlideTimer) {
      clearInterval(heroSlideTimer);
      heroSlideTimer = null;
    }
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      goToSlide(activeHeroSlide - 1);
      startAutoPlay();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      goToSlide(activeHeroSlide + 1);
      startAutoPlay();
    });
  }

  dots.forEach(dot => {
    dot.addEventListener("click", () => {
      goToSlide(parseInt(dot.dataset.goto, 10));
      startAutoPlay();
    });
  });

  chips.forEach((chip, i) => {
    chip.addEventListener("click", () => {
      goToSlide(i);
      startAutoPlay();
    });
  });

  if (card) {
    card.addEventListener("mouseenter", stopAutoPlay);
    card.addEventListener("mouseleave", startAutoPlay);
  }

  startAutoPlay();
}

// ================= OEM COST ESTIMATOR =================
function initOemCalculator() {
  const productSelect = document.getElementById("calcProduct");
  const packSelect = document.getElementById("calcPackaging");
  const qtySelect = document.getElementById("calcQuantity");
  const applyBtn = document.getElementById("calcApplyBtn");

  if (!productSelect || !packSelect || !qtySelect) return;

  [productSelect, packSelect, qtySelect].forEach(sel => {
    sel.addEventListener("change", updateOemEstimate);
  });

  if (applyBtn) {
    applyBtn.addEventListener("click", () => {
      const isVi = currentLang === "vi";
      const pName = productSelect.options[productSelect.selectedIndex].text;
      const packName = packSelect.options[packSelect.selectedIndex].text;
      const qtyVal = qtySelect.options[qtySelect.selectedIndex].text;
      const costText = document.getElementById("calcEstCost").innerText;

      // Fill in contact form
      const serviceSelect = document.getElementById("formService");
      if (serviceSelect) serviceSelect.selectedIndex = 2; // OEM / ODM

      const budgetSelect = document.getElementById("formBudget");
      const qtyNum = parseInt(qtySelect.value, 10);
      if (budgetSelect) {
        if (qtyNum <= 1000) budgetSelect.selectedIndex = 1;
        else if (qtyNum <= 3000) budgetSelect.selectedIndex = 2;
        else if (qtyNum <= 5000) budgetSelect.selectedIndex = 3;
        else budgetSelect.selectedIndex = 4;
      }

      const msgArea = document.getElementById("formMessage");
      if (msgArea) {
        msgArea.value = isVi
          ? `[DỰ TOÁN OEM ĐÃ CHỌN]\n- Sản phẩm: ${pName}\n- Quy cách bao bì: ${packName}\n- Số lượng dự kiến: ${qtyVal}\n- Ước tính mức đầu tư: ${costText}\n\nTôi muốn nhận tư vấn chi tiết về công thức mẫu thử và báo giá chính thức cho dự án này.`
          : `[OEM 견적 시뮬레이션 결과]\n- 제품군: ${pName}\n- 패키지 사양: ${packName}\n- 수량: ${qtyVal}\n- 예상 예산: ${costText}\n\n위 사양에 대한 샘플 개발 및 상세 견적 상담을 신청합니다.`;
      }

      // Smooth scroll to form
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }

      showToast(isVi ? "Đã áp dụng thông số vào mẫu đăng ký" : "견적 정보가 상담 신청서에 적용되었습니다");
    });
  }

  updateOemEstimate();
}

function updateOemEstimate() {
  const pSelect = document.getElementById("calcProduct");
  const packSelect = document.getElementById("calcPackaging");
  const qtySelect = document.getElementById("calcQuantity");
  const costDisplay = document.getElementById("calcEstCost");
  const timeDisplay = document.getElementById("calcEstTime");

  if (!pSelect || !packSelect || !qtySelect || !costDisplay) return;

  const isVi = currentLang === "vi";
  const pType = pSelect.value;
  const packType = packSelect.value;
  const qty = parseInt(qtySelect.value, 10);

  // Unit cost baseline in Million VND
  let baseUnitVnd = 35000; // 35k
  if (pType === "serum") baseUnitVnd = 45000;
  if (pType === "cream") baseUnitVnd = 48000;
  if (pType === "sun") baseUnitVnd = 42000;
  if (pType === "cleanser") baseUnitVnd = 28000;
  if (pType === "toner") baseUnitVnd = 32000;
  if (pType === "scalp") baseUnitVnd = 38000;

  // Packaging multiplier
  let packUnitVnd = 12000;
  if (packType === "premium") packUnitVnd = 24000;
  if (packType === "custom") packUnitVnd = 42000;

  // Total unit estimate with batch discounts
  let discountFactor = 1.0;
  if (qty >= 3000) discountFactor = 0.92;
  if (qty >= 5000) discountFactor = 0.85;
  if (qty >= 10000) discountFactor = 0.78;

  const totalMin = Math.round(((baseUnitVnd + packUnitVnd) * qty * discountFactor * 0.95) / 1000000);
  const totalMax = Math.round(((baseUnitVnd + packUnitVnd) * qty * discountFactor * 1.15) / 1000000);

  let timelineText = isVi ? "35 - 42 ngày (chuẩn CGMP)" : "약 35~42일 (CGMP 완제품 인도)";
  if (packType === "custom") {
    timelineText = isVi ? "50 - 65 ngày (bao gồm chế tạo khuôn)" : "약 50~65일 (금형 맞춤 제작 포함)";
  }

  if (isVi) {
    costDisplay.innerText = `${totalMin} - ${totalMax} triệu VNĐ`;
  } else {
    // Approx in KRW (1 Million VND ~ 55,000 KRW)
    const krwMin = Math.round(totalMin * 5.5) / 10;
    const krwMax = Math.round(totalMax * 5.5) / 10;
    costDisplay.innerText = `약 ${krwMin}천만 ~ ${krwMax}천만 원`;
  }

  if (timeDisplay) timeDisplay.innerText = timelineText;
}

// ================= FORM & PROPOSAL GENERATOR =================
function initFormHandler() {
  const form = document.getElementById("inquiryForm");
  const resultArea = document.getElementById("formResultArea");
  const proposalTextarea = document.getElementById("proposalTextarea");
  const copyBtn = document.getElementById("copyProposalBtn");
  const zaloBtn = document.getElementById("sendZaloBtn");
  const emailBtn = document.getElementById("sendEmailBtn");

  if (!form) return;

  form.addEventListener("submit", e => {
    e.preventDefault();
    const isVi = currentLang === "vi";

    const name = document.getElementById("formName").value;
    const company = document.getElementById("formCompany").value || (isVi ? "Cá nhân khởi nghiệp" : "개인 창업자");
    const email = document.getElementById("formEmail").value;
    const phone = document.getElementById("formPhone").value;
    const service = document.getElementById("formService").value;
    const budget = document.getElementById("formBudget").value;
    const message = document.getElementById("formMessage").value;

    const proposal = isVi
      ? `=== YÊU CẦU HỢP TÁC KINH DOANH beVIBE ===\n` +
        `• Người đại diện: ${name}\n` +
        `• Đơn vị/Thương hiệu: ${company}\n` +
        `• Số điện thoại/Zalo: ${phone}\n` +
        `• Email liên hệ: ${email}\n` +
        `• Lĩnh vực hợp tác: ${service}\n` +
        `• Ngân sách dự kiến: ${budget}\n\n` +
        `[NỘI DUNG CHI TIẾT DỰ ÁN]:\n${message}\n\n` +
        `Trân trọng gửi beVIBE Team.`
      : `=== beVIBE 비즈니스 파트너십 문의서 ===\n` +
        `• 담당자: ${name}\n` +
        `• 회사/브랜드: ${company}\n` +
        `• 연락처/Zalo: ${phone}\n` +
        `• 이메일: ${email}\n` +
        `• 문의 분야: ${service}\n` +
        `• 예상 예산: ${budget}\n\n` +
        `[프로젝트 상세 내용]:\n${message}\n\n` +
        `beVIBE 팀 귀중.`;

    if (proposalTextarea) proposalTextarea.value = proposal;
    if (resultArea) resultArea.classList.remove("hidden");

    // Configure Direct Actions
    if (zaloBtn) {
      zaloBtn.onclick = () => {
        window.open(`https://zalo.me/0988123456`, "_blank");
      };
    }

    if (emailBtn) {
      const subject = encodeURIComponent(
        isVi ? `[Yêu cầu hợp tác] ${company} - ${name}` : `[파트너십 문의] ${company} - ${name}`
      );
      const body = encodeURIComponent(proposal);
      emailBtn.onclick = () => {
        window.location.href = `mailto:contact@bevibe.vn?subject=${subject}&body=${body}`;
      };
    }

    showToast(isVi ? "Đã khởi tạo văn bản đề xuất hợp tác!" : "파트너십 문의서가 생성되었습니다!");
  });

  if (copyBtn && proposalTextarea) {
    copyBtn.addEventListener("click", () => {
      proposalTextarea.select();
      navigator.clipboard.writeText(proposalTextarea.value).then(() => {
        const isVi = currentLang === "vi";
        showToast(isVi ? "Đã sao chép nội dung vào bộ nhớ tạm ✓" : "클립보드에 복사되었습니다 ✓");
      });
    });
  }
}

// ================= MODALS SYSTEM =================
function initModals() {
  // Close buttons
  const brandModal = document.getElementById("brandDetailModal");
  const serviceModal = document.getElementById("serviceDetailModal");

  document.querySelectorAll(".modal-close-btn, .btn-modal-secondary").forEach(btn => {
    btn.addEventListener("click", () => {
      if (brandModal) brandModal.classList.remove("active");
      if (serviceModal) serviceModal.classList.remove("active");
    });
  });

  // Close on backdrop click
  [brandModal, serviceModal].forEach(modal => {
    if (modal) {
      modal.addEventListener("click", e => {
        if (e.target === modal) modal.classList.remove("active");
      });
    }
  });

  // Service open buttons
  document.querySelectorAll(".open-service-modal-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const serviceId = btn.dataset.service;
      window.openServiceModal(serviceId);
    });
  });
}

// Global modal triggers
window.openBrandModal = function(brandId) {
  const brand = BRANDS_DATA.find(b => b.id === brandId) || BRANDS_DATA[0];
  const modal = document.getElementById("brandDetailModal");
  const body = document.getElementById("brandModalBody");
  if (!modal || !body) return;

  const isVi = currentLang === "vi";
  const highlights = isVi ? brand.highlightsVi : brand.highlightsKo;
  const policy = isVi ? brand.policyVi : brand.policyKo;
  const prods = ALL_PRODUCTS.filter(p => p.brandId === brand.id);

  body.innerHTML = `
    <div class="modal-brand-hero">
      <div class="modal-brand-cover">
        <img src="${brand.coverImage}" alt="${brand.name}">
      </div>
      <div>
        <h3 class="modal-brand-title">${brand.name}</h3>
        <div class="modal-brand-origin">${brand.origin} · ${brand.tagline}</div>
        <p style="font-size: 0.94rem; color: var(--color-body); margin-bottom: 14px;">
          ${isVi ? brand.descVi : brand.descKo}
        </p>
        <div class="modal-highlights-chips">
          ${highlights.map(h => `<span class="modal-highlight-chip">✓ ${h}</span>`).join("")}
        </div>
      </div>
    </div>

    <h5 class="modal-section-h5">${isVi ? "Câu chuyện thương hiệu & R&D" : "브랜드 스토리 & 연구개발"}</h5>
    <p style="font-size: 0.9rem; color: var(--color-body); margin-bottom: 14px;">
      ${isVi ? brand.storyVi : brand.storyKo}
    </p>

    <h5 class="modal-section-h5">${isVi ? "Công nghệ & Hoạt chất độc quyền" : "독자 특허 성분 및 바이오 기술"}</h5>
    <p style="font-size: 0.9rem; color: var(--color-body); margin-bottom: 14px;">
      ${isVi ? brand.techVi : brand.techKo}
    </p>

    <h5 class="modal-section-h5">${isVi ? `Danh mục sản phẩm tiêu biểu (${prods.length} SP)` : `대표 라인업 (${prods.length}개)`}</h5>
    <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; margin-bottom: 16px;">
      ${prods.map(p => `
        <div style="display: flex; gap: 10px; align-items: center; background: var(--color-bg); padding: 8px 12px; border-radius: var(--radius-sm); border: 1px solid var(--color-border);">
          <img src="${p.image}" alt="${isVi ? p.nameVi : p.nameKo}" style="width: 44px; height: 44px; object-fit: contain;">
          <div>
            <div style="font-size: 0.84rem; font-weight: 700; color: var(--color-dark);">${isVi ? p.nameVi : p.nameKo}</div>
            <div style="font-size: 0.72rem; color: var(--color-gold); font-weight: 600;">${p.spec}</div>
          </div>
        </div>
      `).join("")}
    </div>

    <h5 class="modal-section-h5">${isVi ? "Chính sách đối tác & Đại lý" : "파트너십 및 도매 유통 정책"}</h5>
    <ul style="list-style: disc; padding-left: 20px; font-size: 0.88rem; color: var(--color-body);">
      ${policy.map(p => `<li style="margin-bottom: 6px;">${p}</li>`).join("")}
    </ul>
  `;

  // Update tabs active state
  document.querySelectorAll("[data-brand-tab]").forEach(tab => {
    tab.classList.toggle("active", tab.dataset.brandTab === brand.id);
    tab.onclick = () => window.openBrandModal(tab.dataset.brandTab);
  });

  // Quote button action
  const quoteBtn = document.getElementById("modalRequestBrandQuoteBtn");
  if (quoteBtn) {
    quoteBtn.onclick = () => {
      modal.classList.remove("active");
      const msgArea = document.getElementById("formMessage");
      if (msgArea) {
        msgArea.value = isVi
          ? `Tôi quan tâm đến thương hiệu ${brand.name} và muốn nhận bảng báo giá sỉ, chính sách đại lý cũng như hồ sơ công bố sản phẩm.`
          : `${brand.name} 브랜드의 베트남 도매 공급 단가표 및 파트너십 조건을 요청합니다.`;
      }
      document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
    };
  }

  modal.classList.add("active");
};

window.openProductModal = function(productId) {
  const prod = ALL_PRODUCTS.find(p => p.id === productId);
  if (!prod) return;

  const modal = document.getElementById("brandDetailModal");
  const body = document.getElementById("brandModalBody");
  if (!modal || !body) return;

  const isVi = currentLang === "vi";

  body.innerHTML = `
    <div class="product-modal-grid">
      <div class="product-modal-img">
        <img src="${prod.image}" alt="${isVi ? prod.nameVi : prod.nameKo}">
      </div>
      <div>
        <span class="product-badge-brand" style="position: static; display: inline-block; margin-bottom: 10px;">${prod.brandName}</span>
        <h3 style="font-size: 1.5rem; margin-bottom: 6px; color: var(--color-dark);">${isVi ? prod.nameVi : prod.nameKo}</h3>
        <div style="font-size: 0.85rem; font-weight: 700; color: var(--color-gold); margin-bottom: 14px;">${prod.spec} · ${isVi ? prod.tagVi : prod.tagKo}</div>
        
        <h5 class="modal-section-h5">${isVi ? "Mô tả sản phẩm & Công dụng" : "제품 설명 및 주요 효능"}</h5>
        <p style="font-size: 0.94rem; color: var(--color-body); line-height: 1.7; margin-bottom: 20px;">
          ${isVi ? prod.descVi : prod.descKo}
        </p>

        <div style="background: var(--color-bg); padding: 16px; border-radius: var(--radius-sm); border: 1px solid var(--color-border); margin-bottom: 20px;">
          <div style="font-size: 0.8rem; font-weight: 700; color: var(--color-dark); margin-bottom: 6px;">
            ${isVi ? "CHỨNG NHẬN & PHÁP LÝ CHÍNH NGẠCH" : "정식 통관 및 안전성 인증"}
          </div>
          <div style="font-size: 0.8rem; color: var(--color-muted);">
            ✓ ${isVi ? "Sản xuất 100% tại nhà máy chuẩn CGMP Hàn Quốc" : "100% 한국 CGMP 및 ISO 22716 시설 제조"}<br>
            ✓ ${isVi ? "Phiếu công bố lưu hành mỹ phẩm Bộ Y Tế Việt Nam" : "베트남 보건부(MOH) 정식 수입 위생허가 완료"}<br>
            ✓ ${isVi ? "Tem phụ tiếng Việt và hóa đơn điện tử VAT đầy đủ" : "정식 한글/베트남어 라벨 및 전자세금계산서 발급"}
          </div>
        </div>

        ${prod.ebookPage ? `
          <a href="${prod.ebookPage}" target="_blank" rel="noopener noreferrer" class="btn-primary" style="padding: 10px 18px; font-size: 0.84rem; display: inline-flex;">
            📖 ${isVi ? "Xem trang cẩm nang Ebook lật trang ↗" : "SMIB 공식 Ebook 페이지 보기 ↗"}
          </a>
        ` : ''}
      </div>
    </div>
  `;

  const quoteBtn = document.getElementById("modalRequestBrandQuoteBtn");
  if (quoteBtn) {
    quoteBtn.onclick = () => {
      modal.classList.remove("active");
      window.requestProductQuote(prod.id);
    };
  }

  modal.classList.add("active");
};

window.requestProductQuote = function(productId) {
  const prod = ALL_PRODUCTS.find(p => p.id === productId);
  if (!prod) return;

  const isVi = currentLang === "vi";
  const name = isVi ? prod.nameVi : prod.nameKo;

  const msgArea = document.getElementById("formMessage");
  if (msgArea) {
    msgArea.value = isVi
      ? `Tôi muốn nhận báo giá sỉ và chính sách phân phối cho sản phẩm: "${name}" (${prod.brandName} - ${prod.spec}).`
      : `다음 제품의 도매 공급가 및 유통 제휴 조건을 요청합니다: "${name}" (${prod.brandName} - ${prod.spec}).`;
  }

  const contactSection = document.getElementById("contact");
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: "smooth" });
  }

  showToast(isVi ? `Đã chọn: ${name}` : `선택 완료: ${name}`);
};

window.openServiceModal = function(serviceKey) {
  const service = SERVICES_DATA[serviceKey] || SERVICES_DATA.distribution;
  const modal = document.getElementById("serviceDetailModal");
  const body = document.getElementById("serviceModalBody");
  if (!modal || !body) return;

  const isVi = currentLang === "vi";
  const points = isVi ? service.pointsVi : service.pointsKo;

  body.innerHTML = `
    <span class="service-tag" style="margin-bottom: 8px;">${service.badge}</span>
    <h3 style="font-size: 1.6rem; color: var(--color-dark); margin-bottom: 12px;">${isVi ? service.titleVi : service.titleKo}</h3>
    <p style="font-size: 1rem; color: var(--color-body); line-height: 1.7; margin-bottom: 24px;">
      ${isVi ? service.descVi : service.descKo}
    </p>

    <h5 class="modal-section-h5">${isVi ? "Đặc quyền hợp tác chiến lược" : "핵심 협력 혜택 및 솔루션"}</h5>
    <ul style="list-style: none; display: flex; flex-direction: column; gap: 12px; margin-bottom: 20px;">
      ${points.map(p => `
        <li style="display: flex; gap: 10px; align-items: flex-start; font-size: 0.9rem; color: var(--color-dark);">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" stroke-width="2.5" style="flex-shrink: 0; margin-top: 2px;"><polyline points="20 6 9 17 4 12"/></svg>
          <span>${p}</span>
        </li>
      `).join("")}
    </ul>
  `;

  // Update tabs active state
  document.querySelectorAll("[data-service-tab]").forEach(tab => {
    tab.classList.toggle("active", tab.dataset.serviceTab === serviceKey);
    tab.onclick = () => window.openServiceModal(tab.dataset.serviceTab);
  });

  const quoteBtn = document.getElementById("modalRequestServiceQuoteBtn");
  if (quoteBtn) {
    quoteBtn.onclick = () => {
      modal.classList.remove("active");
      const serviceSelect = document.getElementById("formService");
      if (serviceSelect) {
        if (serviceKey === "distribution") serviceSelect.selectedIndex = 0;
        if (serviceKey === "partnership") serviceSelect.selectedIndex = 1;
        if (serviceKey === "oem") serviceSelect.selectedIndex = 2;
      }
      document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
    };
  }

  modal.classList.add("active");
};

// ================= MOBILE NAVIGATION =================
function initMobileMenu() {
  const openBtn = document.getElementById("mobileMenuBtn");
  const drawer = document.getElementById("mobileNavDrawer");
  const overlay = document.getElementById("mobileNavOverlay");

  if (!openBtn || !drawer || !overlay) return;

  const closeMenu = () => {
    drawer.classList.remove("active");
    overlay.classList.remove("active");
  };

  openBtn.addEventListener("click", () => {
    drawer.classList.add("active");
    overlay.classList.add("active");
  });

  overlay.addEventListener("click", closeMenu);

  document.querySelectorAll(".mobile-nav-link").forEach(link => {
    link.addEventListener("click", closeMenu);
  });
}

// ================= SCROLL EFFECTS & BACK TO TOP =================
function initScrollEffects() {
  const backToTopBtn = document.getElementById("backToTopBtn");

  window.addEventListener("scroll", () => {
    if (backToTopBtn) {
      if (window.scrollY > 400) {
        backToTopBtn.classList.add("show");
      } else {
        backToTopBtn.classList.remove("show");
      }
    }
  });

  if (backToTopBtn) {
    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
}

// ================= TOAST NOTIFICATION =================
function showToast(message) {
  const toast = document.getElementById("toastNotification");
  if (!toast) return;

  toast.innerHTML = `<span>${message}</span>`;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 3200);
}
