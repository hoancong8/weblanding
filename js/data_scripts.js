//dữ liệu
const exchanges = [
  //crypto
  {
    //đường dẫn hỉnh ảnh logo
    logo: "./images/mexc1.png",
    //tên (nếu logo ở trên có cả tên rồi thì để là "")
    name: "",
    //tên (nếu logo ở trên có cả tên rồi thì để là "")
    colorname: "",
    type: "Hàng ngày",
    code: "96643",
    cashback: "Tối đa 60%",
    //phân loại
    classify: "crypto",
    //link đăng ký
    link:"https://cellphones.com.vn/sforum/meme-meo-cuoi"
  },
  {
    logo: "./images/kucoin.png",
    name: "",
    colorname: "",
    type: "Hàng ngày",
    code: "96643",
    cashback: "Tối đa 60%",
    classify: "crypto",
    link:"https://cellphones.com.vn/sforum/meme-meo-cuoi"
  },
  {
    logo: "./images/binance.png",
    name: "",
    colorname: "",
    type: "Hàng ngày",
    code: "96643",
    cashback: "Tối đa 60%",
    classify: "crypto",
    link:"https://cellphones.com.vn/sforum/meme-meo-cuoi"
  },
  {
    logo: "./images/binance.png",
    name: "",
    colorname: "",
    type: "Hàng ngày",
    code: "96643",
    cashback: "Tối đa 60%",
    classify: "crypto",
    link:"https://cellphones.com.vn/sforum/meme-meo-cuoi"
  },
  {
    logo: "./images/binance.png",
    name: "",
    colorname: "",
    type: "Hàng ngày",
    code: "96643",
    cashback: "Tối đa 60%",
    classify: "crypto",
    link:"https://cellphones.com.vn/sforum/meme-meo-cuoi"
  },
  {
    logo: "./images/binance.png",
    name: "",
    colorname: "",
    type: "Hàng ngày",
    code: "96643",
    cashback: "Tối đa 60%",
    classify: "crypto",
    link:"https://cellphones.com.vn/sforum/meme-meo-cuoi"
  },
  {
    logo: "./images/binance.png",
    name: "",
    colorname: "",
    type: "Hàng ngày",
    code: "96643",
    cashback: "Tối đa 60%",
    classify: "crypto",
    link:"https://cellphones.com.vn/sforum/meme-meo-cuoi"
  },
  {
    logo: "./images/binance.png",
    name: "",
    colorname: "",
    type: "Hàng ngày",
    code: "96643",
    cashback: "Tối đa 60%",
    classify: "crypto",
    link:"https://cellphones.com.vn/sforum/meme-meo-cuoi"
  },
  {
    logo: "./images/binance.png",
    name: "",
    colorname: "",
    type: "Hàng ngày",
    code: "96643",
    cashback: "Tối đa 60%",
    classify: "crypto",
    link:"https://cellphones.com.vn/sforum/meme-meo-cuoi"
  },

  //forex
  {
    logo: "",
    name: "Major",
    colorname: "#f2ba2f",
    type: "Hàng ngày",
    code: "96643",
    cashback: "Tối đa 60%",
    classify: "forex",
    link:"https://cellphones.com.vn/sforum/meme-meo-cuoi"
  },
  {
    logo: "",
    name: "Minor",
    colorname: "#f2ba2f",
    type: "Hàng ngày",
    code: "96643",
    cashback: "Tối đa 60%",
    classify: "forex",
    link:"https://cellphones.com.vn/sforum/meme-meo-cuoi"
  },
  {
    logo: "",
    name: "Exotic",
    colorname: "#f2ba2f",
    type: "Hàng ngày",
    code: "96643",
    cashback: "Tối đa 60%",
    classify: "forex",
    link:"https://cellphones.com.vn/sforum/meme-meo-cuoi"
  }
];

//Chờ HTML load xong rồi mới chạy JS (tránh query ra null)
function observeScrollAnimations(container) {
  container.querySelectorAll(
    ".scroll-fade-in, .scroll-fade-left, .scroll-fade-right, .scroll-zoom-in, .scroll-rotate-in"
  ).forEach(el => {
    el.classList.add("scroll-anim"); // nếu bạn đang dùng base transition
    el.style.willChange = "transform, opacity";
    scrollObserver.observe(el);
  });
}
document.addEventListener("DOMContentLoaded", async () => {

  // 1) Lấy 2 thẻ quan trọng
  const grid = document.getElementById("exchangeGrid");     // nơi render card
  const tabsWrap = document.getElementById("exchangeTabs"); // nơi chứa tab

  // Nếu thiếu 1 trong 2 cái này thì thôi (tránh lỗi)
  if (!grid || !tabsWrap) return;

  // 2) Hàm render: nhận list -> vẽ HTML vào grid
  function renderExchanges(list) {
    // Nếu list rỗng thì hiện thông báo
    if (!list || list.length === 0) {
      grid.innerHTML = `<p style="text-align:center;color:#aaa;">Không có dữ liệu</p>`;
      return;
    }

    // Render từng item thành 1 card
    grid.innerHTML = list.map((item, idx) => `
      <div class="exchange-card scroll-fade-in delay-${(idx % 5) + 1}">
        <div class="card-header">
          <div class="card-header-inner">
            ${item.logo === "" ? "" : `<img src="${item.logo}" width="100" />`}
            ${item.name === "" ? "" : `<h4  style="color:${item.colorname?item.colorname:"#ffffff"};">${item.name}</h4>`}
          </div>
        </div>

        <div class="card-body">
          <div class="row">
            <span>Kiểu</span>
            <span>${item.type}</span>
          </div>

          <div class="row">
            <span>Mã giới thiệu</span>
            <span class="copy">
              ${item.code}
              <img src="./images/copy.svg" />
            </span>
          </div>

          <div class="row">
            <span>Tỷ lệ hoàn tiền</span>
            <span>${item.cashback}</span>
          </div>
        </div>

        <a class="btn-register" href="${item.link}">Đăng ký →</a>
      </div>
    `).join("");
  }

  // 3) Render mặc định (tab All)
  renderExchanges(exchanges);
  observeScrollAnimations(grid);
  // 4) Lấy danh sách các button tab bên trong #exchangeTabs
  const tabs = tabsWrap.querySelectorAll(".tab");

  // 5) Gắn sự kiện click cho từng tab
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {

      // 5.1) Đổi UI active: xoá active của tất cả tab
      tabs.forEach(t => t.classList.remove("active"));

      // 5.2) Gán active cho tab đang bấm
      tab.classList.add("active");

      // 5.3) Lấy filter từ data-filter của tab
      const filter = tab.dataset.filter;
      // filter sẽ là: "all" | "forex" | "crypto" | "commodities"

      // 5.4) Nếu bấm "all" -> render toàn bộ
      if (filter === "all") {
        renderExchanges(exchanges);
        observeScrollAnimations(grid);
        return;
      }

      // 5.5) Do data bạn dùng "commodity" nhưng tab dùng "commodities"
      // map để khỏi phải sửa HTML
      const map = { commodities: "commodity" };
      const realFilter = map[filter] || filter;

      // 5.6) Lọc exchanges theo category rồi render
      const filtered = exchanges.filter(x => x.classify === filter);
      renderExchanges(filtered);
      observeScrollAnimations(grid);
    });
  });

});





//data question
const dataFaq = [
  {
    question: "BackCom.NetWork là gì?",
    answer: "BackCom.Network là một dịch vụ được thiết kế để các nhà giao dịch lấy lại khoản phí họ đã trả cho các sàn giao dịch tiền điện tử. Nền tảng của chúng tôi giúp bạn thu hồi các khoản phí này và nâng cao lợi nhuận giao dịch của bạn.",
  },
  {
    question: "BackCom.NetWork hoạt động như thế nào?",
    answer: "Chỉ cần sử dụng mã giới thiệu của chúng tôi khi đăng ký tại các sàn giao dịch. Hàng ngày, những khoản phí bạn đã trả sẽ được tính toán và hoàn lại vào tài khoản của bạn.",
  },
  {
    question: "Sàn giao dịch nào được hỗ trợ?",
    answer: "Hiện tại chúng tôi hỗ trợ các sàn giao dịch lớn như MEXC, KuCoin, Binance và nhiều sàn khác. Danh sách sàn được hỗ trợ được cập nhật thường xuyên.",
  },
]
const questionContainer = document.getElementById("faq");
if (questionContainer) {
  questionContainer.innerHTML = dataFaq.map((item, idx) => {
    const isOpen = idx === 0;
    return `
    <div class="faq-item scroll-fade-in delay-1">
                <div class="faq-question${isOpen ? ' open' : ''}">
                    <span>${item.question}</span>
                    <div class="faq-toggle">${isOpen ? '−' : '+'}</div>
                </div>
                <div class="faq-answer">
                    ${item.answer}
                </div>
            </div>
`;
  }).join("");
}



//data tab 
document.addEventListener("DOMContentLoaded", () => {

  const featureData = {
    tab1: [
      { img: "./images/iconweb5.jpg", title: "Feature 1", time: "24/02/2025" },
      { img: "./images/iconweb5.jpg", title: "Feature 2", time: "24/02/2025" },
      { img: "./images/iconweb5.jpg", title: "Feature 1", time: "24/02/2025" },
      { img: "./images/iconweb5.jpg", title: "Feature 2", time: "24/02/2025" },
    ],
    tab2: [
      { img: "./images/iconweb5.jpg", title: "Feature A", time: "24/02/2025" },
      { img: "./images/iconweb5.jpg", title: "Feature B", time: "24/02/2025" },
    ],
    tab3: [
      { img: "./images/iconweb5.jpg", title: "Feature X", time: "24/02/2025" },
    ]
  };

  const featuresGrid = document.getElementById("featuresGrid");
  const featureTabs = document.querySelectorAll(".features-tab-item");

  if (!featuresGrid || featureTabs.length === 0) return;

  function renderFeatures(list) {
    featuresGrid.innerHTML = list.map((item, idx) => `
      <div class="feature-item scroll-fade-in delay-${(idx % 5) + 1}">
        <div class="feature-image">
          <img src="${item.img}" alt="${item.title}" />
        </div>
        <div class="feature-info">
          <h3>${item.title}</h3>
          <p class="feature-date">${item.time}</p>
        </div>
      </div>
    `).join("");

    observeScrollAnimations(featuresGrid);
  }

  renderFeatures(featureData.tab1);

  featureTabs.forEach(tab => {
    tab.addEventListener("click", () => {
      featureTabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");

      const key = tab.dataset.tab;
      renderFeatures(featureData[key] || []);
    });
  });

});






const dataPartners = [
  { img: "./images/binance.png", title: "Partner 1" },
  { img: "./images/kucoin.png", title: "Partner 2" },
  { img: "./images/mexc1.png", title: "Partner 3" },
  { img: "./images/kucoin.png", title: "Partner 4" },
  { img: "./images/kucoin.png", title: "Partner 5" },
  { img: "./images/kucoin.png", title: "Partner 6" },
];

const listPartner = document.getElementById("partnerList");

if (listPartner) {
  // render 1 lần
  listPartner.innerHTML = dataPartners.map(item => `
    <div class="partnerbg">
      <div class="partner">
        <img height="18px" src="${item.img}" alt="${item.title}" />
      </div>
    </div>
  `).join("");

  listPartner.innerHTML = listPartner.innerHTML + listPartner.innerHTML + listPartner.innerHTML + listPartner.innerHTML;

  // bật marquee class sau khi đo xong để tránh nhảy
  const start = () => {
    // width đúng của "1 vòng" = nửa track
    const loop = listPartner.scrollWidth / 2;

    // set biến loop
    listPartner.style.setProperty("--loop", `${loop}px`);

    // tốc độ tính theo px/s
    const speed = 60;
    listPartner.style.animationDuration = `${loop / speed}s`;

    // bắt đầu chạy sau khi đã set xong
    listPartner.classList.add("marquee");
  };

  // đợi ảnh load xong để đo chính xác
  const imgs = [...listPartner.querySelectorAll("img")];
  let done = 0;

  const tick = () => {
    done++;
    if (done >= imgs.length) start();
  };

  if (imgs.length === 0) start();
  else {
    imgs.forEach(img => {
      if (img.complete) tick();
      else {
        img.addEventListener("load", tick);
        img.addEventListener("error", tick);
      }
    });
  }
}