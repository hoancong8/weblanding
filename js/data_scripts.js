const exchanges = [
    {
        logo: "./images/mexc.svg",
        name: "MEXC",
        type: "Hàng ngày",
        code: "96643",
        cashback: "Tối đa 60%"
    },
    {
        logo: "./images/kucoin.png",
        name: "Kucoin",
        type: "Hàng ngày",
        code: "96643",
        cashback: "Tối đa 60%"
    },
    {
        logo: "./images/binance.png",
        name: "Binance",
        type: "Hàng ngày",
        code: "96643",
        cashback: "Tối đa 60%"
    },
    {
        logo: "./images/binance.png",
        name: "Binance",
        type: "Hàng ngày",
        code: "96643",
        cashback: "Tối đa 60%"
    },
    {
        logo: "./images/binance.png",
        name: "Binance",
        type: "Hàng ngày",
        code: "96643",
        cashback: "Tối đa 60%"
    },
    {
        logo: "./images/binance.png",
        name: "Binance",
        type: "Hàng ngày",
        code: "96643",
        cashback: "Tối đa 60%"
    },
    {
        logo: "./images/binance.png",
        name: "Binance",
        type: "Hàng ngày",
        code: "96643",
        cashback: "Tối đa 60%"
    },
    {
        logo: "./images/binance.png",
        name: "Binance",
        type: "Hàng ngày",
        code: "96643",
        cashback: "Tối đa 60%"
    },
    {
        logo: "./images/binance.png",
        name: "Binance",
        type: "Hàng ngày",
        code: "96643",
        cashback: "Tối đa 60%"
    }
];
const grid = document.getElementById("exchangeGrid");
if (grid) {
    grid.innerHTML = exchanges.map(item => `
    <div class="exchange-card scroll-fade-in delay-1">
        <div class="card-header">
            <div class="card-header-inner">
                <img src="${item.logo}" alt="${item.name}" width="100" />
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
                    <img src="copy.svg" />
                </span>
            </div>
            <div class="row">
                <span>Tỷ lệ hoàn tiền</span>
                <span>${item.cashback}</span>
            </div>
        </div>

        <button class="btn-register">
            Đăng ký →
        </button>
    </div>
`).join("");
}

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
    questionContainer.innerHTML = dataFaq.map(item => `
    <div class="faq-item scroll-fade-in delay-1">
                <div class="faq-question open">
                    <span>${item.question}</span>
                    <div class="faq-toggle">+</div>
                </div>
                <div class="faq-answer">
                    ${item.answer}
                </div>
            </div>
`).join("");
}

const dataNews = [
    {
        img: "./images/iconweb5.jpg",
        title: "NFT Holder's Course Management Dashboard",
        time: "24/02/2025",
    },
    {
        img: "./images/iconweb5.jpg",
        title: "Cryptocurrency Portfolio Management",
        time: "24/02/2025",
    },
    {
        img: "./images/iconweb5.jpg",
        title: "Digital Coin Management",
        time: "24/02/2025",
    },
    {
        img: "./images/iconweb5.jpg",
        title: "Virtual Currency Course",
        time: "24/02/2025",
    },
]
const featureContainer = document.getElementById("featuresGrid");
if (featureContainer) {
    featureContainer.innerHTML = dataNews.map(item => `
    <div class="feature-item scroll-fade-in delay-1">
                    <div class="feature-image">
                        <img src="${item.img}" alt="${item.title}" />
                    </div>
                    <div class="feature-info">
                        <h3>${item.title}</h3>
                        <p class="feature-date">24/02/2025</p>
                    </div>
                </div>
`).join("");
}





const dataPartners = [
  { img: "./images/kucoin.png", title: "Partner 1" },
  { img: "./images/kucoin.png", title: "Partner 2" },
  { img: "./images/kucoin.png", title: "Partner 3" },
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
        <img src="${item.img}" alt="${item.title}" />
      </div>
    </div>
  `).join("");

  // clone đúng 1 lần
  listPartner.innerHTML = listPartner.innerHTML + listPartner.innerHTML + listPartner.innerHTML+ listPartner.innerHTML;

  // bật marquee class sau khi đo xong để tránh nhảy
  const start = () => {
    // width đúng của "1 vòng" = nửa track
    const loop = listPartner.scrollWidth / 2;

    // set biến loop
    listPartner.style.setProperty("--loop", `${loop}px`);

    // tốc độ tính theo px/s
    const speed = 90; // px/s
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