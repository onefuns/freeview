const orders = [
  {order:"ORD-260903-1142",created:"2026-09-03 10:20",customer:"@traveler01",product:"Japan 5GB · 30 Days",status:"PAYMENT_PAID",paymentStatus:"COMPLETED",method:"TON",paymentId:"ton-7fa9…ae20",sellingPrice:"$10.00",pointsUsed:"$3.00",amount:"7.23 TON",usd:"$7.00",paymentCompletedAt:"2026-09-03 10:22",esim:"ACTIVE",iccid:"898821…7641",saleId:"SALE-938294",issuedAt:"2026-09-03 10:24",refund:"—",refundSource:"—",refundRequestedAt:"",refundAmount:"",refundCompletedAt:"",refundReason:"",refundEligible:false,check:"NORMAL",issue:false},
  {order:"ORD-260904-1188",created:"2026-09-04 09:18",customer:"@globalnomad",product:"Europe 10GB · 30 Days",status:"PAYMENT_PAID",paymentStatus:"COMPLETED",method:"ForumPay",paymentId:"fp-4ca2…9011",sellingPrice:"$20.00",pointsUsed:"$0.00",amount:"20.00 USDT",usd:"$20.00",paymentCompletedAt:"2026-09-04 09:20",esim:"NOT_ISSUED",iccid:"—",saleId:"—",issuedAt:"—",refund:"—",refundSource:"—",refundRequestedAt:"",refundAmount:"",refundCompletedAt:"",refundReason:"",refundEligible:true,check:"결제 완료 · 미발급",issue:true},
  {order:"ORD-260905-1204",created:"2026-09-05 13:42",customer:"@seoultrip",product:"SKT Korea Unlimited",status:"PAYMENT_PAID",paymentStatus:"COMPLETED",method:"Stars",paymentId:"stars-91bd…a82c",sellingPrice:"$8.00",pointsUsed:"$0.00",amount:"560 XTR",usd:"$8.00",paymentCompletedAt:"2026-09-05 13:44",esim:"UNINSTALLED",iccid:"SKTeSIM",saleId:"SALE-940120",issuedAt:"2026-09-05 13:47",refund:"—",refundSource:"—",refundRequestedAt:"",refundAmount:"",refundCompletedAt:"",refundReason:"",refundEligible:true,check:"NORMAL",issue:false},
  {order:"ORD-260824-1027",created:"2026-08-24 09:18",customer:"@summertrip",product:"Thailand Unlimited · 10 Days",status:"REFUNDED",paymentStatus:"REFUNDED",method:"Stars",paymentId:"stars-8d1e…38ab",sellingPrice:"$12.00",pointsUsed:"$0.00",amount:"840 XTR",usd:"$12.00",paymentCompletedAt:"2026-08-24 09:20",esim:"UNINSTALLED",iccid:"898821…1129",saleId:"SALE-925011",issuedAt:"2026-08-24 09:24",refund:"COMPLETED",refundSource:"ADMIN",refundRequestedAt:"2026-09-04 12:10",refundAmount:"840 XTR / $12.00",refundCompletedAt:"2026-09-05 15:30",refundReason:"관리자 환불 처리",refundEligible:false,check:"환불 완료 · SkySIM 미취소",issue:true},
  {order:"ORD-260901-1091",created:"2026-09-01 08:45",customer:"@tokyowalk",product:"Japan 3GB · 15 Days",status:"PAYMENT_PAID",paymentStatus:"COMPLETED",method:"TON",paymentId:"ton-9011…3114",sellingPrice:"$4.20",pointsUsed:"$0.00",amount:"2.75 TON",usd:"$4.20",paymentCompletedAt:"2026-09-01 08:47",esim:"UNINSTALLED",iccid:"898821…7762",saleId:"SALE-933114",issuedAt:"2026-09-01 08:51",refund:"MANUAL_PENDING",refundSource:"ADMIN",refundRequestedAt:"2026-09-04 12:10",refundAmount:"2.75 TON / $4.20",refundCompletedAt:"",refundReason:"관리자 환불 진행",refundEligible:true,check:"수동 환불 완료 확인 대기",issue:true},
  {order:"ORD-260906-1240",created:"2026-09-06 16:05",customer:"@europass",product:"France 3GB · 15 Days",status:"PAYMENT_FAILED",paymentStatus:"FAILED",method:"TON",paymentId:"ton-a041…bb19",sellingPrice:"$3.10",pointsUsed:"$0.00",amount:"2.15 TON",usd:"$3.10",paymentCompletedAt:"—",esim:"ACTIVE",iccid:"898821…9934",saleId:"SALE-941240",issuedAt:"2026-09-06 16:12",refund:"—",refundSource:"—",refundRequestedAt:"",refundAmount:"",refundCompletedAt:"",refundReason:"",refundEligible:false,check:"미결제 · eSIM 발급",issue:true}
];

const settlementRows = [
  {event:"SUPPLIER_CREDIT",eventDate:"2026-09-21 11:00",order:"ORD-260812-0874",orderStatus:"REFUNDED",created:"2026-08-12 08:55",paymentCompletedAt:"2026-08-12 08:57",issuedAt:"2026-08-12 09:01",cancelRequestedAt:"2026-09-18 14:20",product:"USA 10GB · 30 Days",customer:"@businessfly",payment:"TON",paymentId:"ton-a812…4301",paymentAmount:"4.10 TON",sellingPrice:"$6.00 USD",pointsUsed:"$2.00 USD",actualPaidUsd:"$4.00 USD",esim:"UNINSTALLED",iccid:"898821…3068",saleId:"SALE-918430",supplyKrw:"−₩12,400",supplyUsd:"−$9.12",refund:"COMPLETED",refundAmount:"4.10 TON / $4.00",refundCompletedAt:"2026-09-19",cancelStatus:"COMPLETED",cancelDate:"2026-09-21",creditDate:"2026-09-30",creditMonth:"2026-09",creditReference:"SKY-SET-2026-09",creditAdmin:"finance01",creditMemo:"9월 SkySIM 정산서 차감 확인"},
  {event:"SUPPLIER_CREDIT",eventDate:"2026-09-14 14:00",order:"ORD-260805-0731",orderStatus:"REFUNDED",created:"2026-08-05 11:12",paymentCompletedAt:"2026-08-05 11:14",issuedAt:"2026-08-05 11:18",cancelRequestedAt:"2026-09-11 09:30",product:"Japan 5GB · 30 Days",customer:"@tokyowalk",payment:"Stars",paymentId:"stars-8050…0731",paymentAmount:"700 XTR",sellingPrice:"$10.00 USD",pointsUsed:"$0.00 USD",actualPaidUsd:"$10.00 USD",esim:"UNINSTALLED",iccid:"898821…7310",saleId:"SALE-905731",supplyKrw:"−₩9,600",supplyUsd:"−$7.06",refund:"COMPLETED",refundAmount:"700 XTR / $10.00",refundCompletedAt:"2026-09-12",cancelStatus:"COMPLETED",cancelDate:"2026-09-14",creditDate:""},
  {event:"SUPPLIER_CREDIT",eventDate:"2026-09-06 11:00",order:"ORD-260731-0640",orderStatus:"REFUNDED",created:"2026-07-31 15:05",paymentCompletedAt:"2026-07-31 15:08",issuedAt:"2026-07-31 15:12",cancelRequestedAt:"2026-09-03 10:10",product:"Thailand Unlimited",customer:"@summertrip",payment:"ForumPay",paymentId:"fp-7310…1735",paymentAmount:"$9.90 USD",sellingPrice:"$9.90 USD",pointsUsed:"$0.00 USD",actualPaidUsd:"$9.90 USD",esim:"UNINSTALLED",iccid:"898821…5082",saleId:"SALE-901735",supplyKrw:"−₩7,900",supplyUsd:"−$5.82",refund:"COMPLETED",refundAmount:"$9.90 USD",refundCompletedAt:"2026-09-04",cancelStatus:"COMPLETED",cancelDate:"2026-09-06",creditDate:"2026-09-30",creditMonth:"2026-09",creditReference:"SKY-SET-2026-09",creditAdmin:"finance01",creditMemo:"9월 정산 차감 완료"},
  {event:"REFUND",eventDate:"2026-09-05 15:30",order:"ORD-260824-1027",orderStatus:"REFUNDED",created:"2026-08-24 09:18",paymentCompletedAt:"2026-08-24 09:20",issuedAt:"2026-08-24 09:24",cancelRequestedAt:"2026-09-05 15:30",product:"Europe 10GB · 30 Days",customer:"@globalnomad",payment:"Stars",paymentId:"stars-8d1e…38ab",paymentAmount:"840 XTR",sellingPrice:"$12.00 USD",pointsUsed:"$0.00 USD",actualPaidUsd:"$12.00 USD",esim:"UNINSTALLED",iccid:"898821…1129",saleId:"SALE-925011",supplyKrw:"—",supplyUsd:"—",refund:"COMPLETED",refundAmount:"840 XTR / $12.00",refundCompletedAt:"2026-09-05",cancelStatus:"PROCESSING",cancelDate:"",creditDate:""}
];

const paymentRows = [
  {paymentId:"stars-35a…308c",order:"ORD-260910-1422",created:"2026-09-10 09:03",paymentCompletedAt:"—",customer:"@newtraveler",product:"Japan 20GB · 30 Days",method:"Stars",amount:"3,820 XTR",usd:"$54.57",paymentStatus:"FAILED",refund:"—",verify:"CALLBACK_FAILED",issue:true,status:"PAYMENT_FAILED",pointsUsed:"$0.00 USD",esim:"NOT_ISSUED",iccid:"—",saleId:"—"},
  {paymentId:"ton-852b…4aa1",order:"ORD-260903-1261",created:"2026-09-03 18:28",paymentCompletedAt:"—",customer:"@coinroamer",product:"Europe 3GB · 15 Days",method:"TON",amount:"2.48 TON",usd:"$3.57",paymentStatus:"FAILED",refund:"—",verify:"RETURNED/BOUNCED",issue:true,status:"PAYMENT_FAILED",pointsUsed:"$0.00 USD",esim:"NOT_ISSUED",iccid:"—",saleId:"—"},
  {paymentId:"stars-361d…1cfe",order:"ORD-260824-1032",created:"2026-08-24 15:49",paymentCompletedAt:"2026-08-24 15:51",customer:"@summertrip",product:"Thailand 1GB · 7 Days",method:"Stars",amount:"60 XTR",usd:"$0.85",paymentStatus:"REFUNDED",refund:"COMPLETED",verify:"NORMAL",issue:false,status:"REFUNDED",pointsUsed:"$0.00 USD",esim:"UNINSTALLED",iccid:"898821…1129",saleId:"SALE-925011"},
  {paymentId:"ton-7718…3c28",order:"ORD-260822-0998",created:"2026-08-22 19:53",paymentCompletedAt:"2026-08-22 19:55",customer:"@onefundevops",product:"China 500MB · 1 Day",method:"TON",amount:"0.74 TON",usd:"$1.07",paymentStatus:"COMPLETED",refund:"—",verify:"NORMAL",issue:false,status:"PAYMENT_PAID",pointsUsed:"$0.00 USD",esim:"UNINSTALLED",iccid:"898821…6402",saleId:"SALE-911742"},
  {paymentId:"fp-a956…0844",order:"ORD-260819-0931",created:"2026-08-19 16:42",paymentCompletedAt:"2026-08-19 16:44",customer:"@forumtraveler",product:"USA 5GB · 15 Days",method:"ForumPay",amount:"10.04 USDT",usd:"$10.04",paymentStatus:"REFUNDED",refund:"COMPLETED",verify:"AMOUNT_MISMATCH",issue:true,status:"REFUNDED",pointsUsed:"$0.00 USD",esim:"UNINSTALLED",iccid:"898821…8841",saleId:"SALE-904844"},
  {paymentId:"fp-b583…5cc0",order:"ORD-260820-0955",created:"2026-08-20 16:27",paymentCompletedAt:"—",customer:"@globalnomad",product:"France 3GB · 15 Days",method:"ForumPay",amount:"4.57 USDT",usd:"$4.57",paymentStatus:"FAILED",refund:"—",verify:"ORDER_NOT_FOUND",issue:true,status:"PAYMENT_FAILED",pointsUsed:"$0.00 USD",esim:"NOT_ISSUED",iccid:"—",saleId:"—"}
];

const esimRows = [
  {esimId:"ESIM-260903-4401",order:"ORD-260903-1142",created:"2026-09-03 10:20",issuedAt:"2026-09-03 10:24",customer:"@traveler01",product:"Japan 5GB · 30 Days",destination:"Japan",productGroup:"GLOBAL",status:"PAYMENT_PAID",paymentStatus:"COMPLETED",method:"TON",paymentId:"ton-7fa9…ae20",amount:"7.23 TON",usd:"$7.00",pointsUsed:"$3.00 USD",esim:"ACTIVE",iccid:"898821…7641",saleId:"SALE-938294",usage:"1,240 / 5,120MB",activatedAt:"2026-09-05 08:10",expiresAt:"2026-10-05 08:10",activationCode:"LPA:1$sm-v4-010-a…",qrCode:"LPA payload available",check:"NORMAL",issue:false,refund:"—"},
  {esimId:"ESIM-260905-4520",order:"ORD-260905-1204",created:"2026-09-05 13:42",issuedAt:"2026-09-05 13:46",customer:"@seoultrip",product:"SKT Korea Unlimited",destination:"Korea",productGroup:"SKT",status:"PAYMENT_PAID",paymentStatus:"COMPLETED",method:"Stars",paymentId:"stars-91bd…a82c",amount:"560 XTR",usd:"$8.00",pointsUsed:"$0.00 USD",esim:"UNINSTALLED",iccid:"SKTeSIM",saleId:"SALE-SKT-5204",usage:"—",activatedAt:"—",expiresAt:"2026-11-04",activationCode:"LPA:1$skt…",qrCode:"LPA payload available",check:"NORMAL · SKT ICCID 예외",issue:false,refund:"—"},
  {esimId:"ESIM-260902-4350",order:"ORD-260902-1110",created:"2026-09-02 08:14",issuedAt:"2026-09-02 08:18",customer:"@tokyowalk",product:"Japan 3GB · 15 Days",destination:"Japan",productGroup:"GLOBAL",status:"PAYMENT_PAID",paymentStatus:"COMPLETED",method:"ForumPay",paymentId:"fp-9021…4310",amount:"$4.20 USD",usd:"$4.20",pointsUsed:"$0.00 USD",esim:"INSTALLED",iccid:"898821…7762",saleId:"SALE-933114",usage:"0 / 3,072MB",activatedAt:"—",expiresAt:"2026-11-01",activationCode:"LPA:1$sm-v4-010-b…",qrCode:"LPA payload available",check:"NORMAL",issue:false,refund:"—"},
  {esimId:"ESIM-260824-4102",order:"ORD-260824-1027",created:"2026-08-24 09:18",issuedAt:"2026-08-24 09:24",customer:"@summertrip",product:"Thailand Unlimited · 10 Days",destination:"Thailand",productGroup:"GLOBAL",status:"REFUNDED",paymentStatus:"COMPLETED",method:"Stars",paymentId:"stars-8d1e…38ab",amount:"840 XTR",usd:"$12.00",pointsUsed:"$0.00 USD",esim:"UNINSTALLED",iccid:"898821…1129",saleId:"SALE-925011",usage:"0 / Unlimited",activatedAt:"—",expiresAt:"2026-10-23",activationCode:"LPA:1$sm-v4-010-c…",qrCode:"LPA payload available",check:"NORMAL",issue:false,refund:"COMPLETED"},
  {esimId:"ESIM-260906-4588",order:"ORD-260906-1240",created:"2026-09-06 16:05",issuedAt:"2026-09-06 16:09",customer:"@europass",product:"France 3GB · 15 Days",destination:"France",productGroup:"GLOBAL",status:"PAYMENT_FAILED",paymentStatus:"FAILED",method:"TON",paymentId:"ton-a041…bb19",amount:"2.15 TON",usd:"$3.10",pointsUsed:"$0.00 USD",esim:"ACTIVE",iccid:"898821…9934",saleId:"SALE-940588",usage:"420 / 3,072MB",activatedAt:"2026-09-07 09:40",expiresAt:"2026-09-22 09:40",activationCode:"LPA:1$sm-v4-010-d…",qrCode:"LPA payload available",check:"미결제 · eSIM 발급",issue:true,refund:"—"},
  {esimId:"ESIM-260911-4620",order:"ORD-260911-1440",created:"2026-09-11 11:05",issuedAt:"—",customer:"@newtraveler",product:"USA 5GB · 15 Days",destination:"USA",productGroup:"GLOBAL",status:"ESIM_FAILED",paymentStatus:"COMPLETED",method:"ForumPay",paymentId:"fp-9114…4620",amount:"7.20 USDT",usd:"$7.20",pointsUsed:"$0.00 USD",esim:"FAILED",iccid:"—",saleId:"—",usage:"—",activatedAt:"—",expiresAt:"—",activationCode:"—",qrCode:"—",check:"발급 실패 · 재시도 필요",issue:true,refund:"—"}
];

const body = document.querySelector("#ordersBody");
const statusTabs = [...document.querySelectorAll("#ordersView .status-tab[data-status]")];
let activeStatus = "ALL";
function showToast(message){const toast=document.querySelector("#toast");toast.textContent=message;toast.classList.add("open");setTimeout(()=>toast.classList.remove("open"),2400)}

const statusClass = status => status === "PAYMENT_PAID" ? "paid" : status === "REFUNDED" ? "refunded" : status === "PAYMENT_FAILED" ? "failed" : "pending";
const esimClass = status => status === "ACTIVE" ? "esim-active" : status === "NOT_ISSUED" ? "esim-none" : "esim-neutral";
const dateOnly = value => value && value !== "—" ? value.slice(0,10) : "";
const inDateRange = (value,start,end) => {
  if(!start&&!end)return true;
  const date=dateOnly(value);
  if(!date)return false;
  return (!start||date>=start)&&(!end||date<=end);
};

function renderOrders(){
  const query = document.querySelector("#searchInput").value.trim().toLowerCase();
  const esim = document.querySelector("#esimFilter").value;
  const anomaly = document.querySelector("#anomalyFilter").value;
  const method = document.querySelector("#orderPaymentMethod").value;
  const dateBasis = document.querySelector("#orderDateBasis").value;
  const start = document.querySelector("#orderStartDate").value;
  const end = document.querySelector("#orderEndDate").value;
  const filtered = orders.filter(row => {
    const statusMatch = activeStatus === "ALL" || row.status === activeStatus;
    const esimMatch = esim === "ALL" || row.esim === esim;
    const anomalyMatch = anomaly === "ALL" || (anomaly === "ISSUE" ? row.issue : !row.issue);
    const methodMatch = method === "ALL" || row.method === method;
    const dateMatch = inDateRange(dateBasis==="COMPLETED"?row.paymentCompletedAt:row.created,start,end);
    const searchMatch = !query || Object.values(row).join(" ").toLowerCase().includes(query);
    return statusMatch && esimMatch && anomalyMatch && methodMatch && dateMatch && searchMatch;
  });
  body.innerHTML = filtered.map((row,index) => `<tr>
    <td><b>${row.order}</b><small>${row.paymentId}</small></td>
    <td>${row.created}</td>
    <td><b>${row.customer}</b><small>${row.product}</small></td>
    <td><span class="badge ${statusClass(row.status)}">${row.status}</span></td>
    <td><b>${row.method}</b><small>${row.paymentStatus}</small></td>
    <td><b>판매 ${row.sellingPrice}</b><small>포인트 ${row.pointsUsed}</small><small>실결제 ${row.amount} / ${row.usd}</small></td>
    <td>${row.paymentCompletedAt}</td>
    <td><span class="badge ${esimClass(row.esim)}">${row.esim}</span><small>${row.iccid}</small></td>
    <td>${row.issuedAt}</td>
    <td>${row.refund === "—" ? "—" : `<span class="badge refunded">${row.refund}</span><small>${row.refundSource} · ${row.refundRequestedAt}</small><small>${row.refundAmount}</small>`}</td>
    <td><span class="badge ${row.issue ? "check-issue" : "check-normal"}">${row.check}</span></td>
    <td><button class="view-button" data-index="${orders.indexOf(row)}">View</button></td>
  </tr>`).join("") || `<tr><td colspan="12" style="text-align:center;padding:50px;color:#8a93a4">조건에 맞는 주문이 없습니다.</td></tr>`;
  document.querySelector("#visibleCount").textContent = filtered.length;
  document.querySelector("#showingCount").textContent = filtered.length;
  body.querySelectorAll(".view-button").forEach(button => button.addEventListener("click",()=>openDrawer(orders[Number(button.dataset.index)])));
}

function renderPayments(){
  const method=document.querySelector("#paymentMethodFilter").value;
  const status=document.querySelector("#paymentStatusFilter").value;
  const verification=document.querySelector("#paymentVerifyFilter").value;
  const query=document.querySelector("#paymentSearchInput").value.trim().toLowerCase();
  const start=document.querySelector("#paymentStartDate").value;
  const end=document.querySelector("#paymentEndDate").value;
  const rows=paymentRows.filter(row=>{
    const methodMatch=method==="ALL"||row.method===method;
    const statusMatch=status==="ALL"||row.paymentStatus===status;
    const verifyMatch=verification==="ALL"||(verification==="NORMAL"?!row.issue:row.issue);
    const dateMatch=inDateRange(row.paymentCompletedAt,start,end);
    const searchMatch=!query||`${row.paymentId} ${row.order}`.toLowerCase().includes(query);
    return methodMatch&&statusMatch&&verifyMatch&&dateMatch&&searchMatch;
  });
  document.querySelector("#paymentsBody").innerHTML=rows.map(row=>`<tr>
    <td><b>${row.paymentId}</b></td>
    <td><b>${row.order}</b></td>
    <td>${row.method}</td>
    <td><b>${row.amount}</b></td>
    <td>${row.usd}</td>
    <td><span class="badge ${row.paymentStatus==="COMPLETED"?"paid":row.paymentStatus==="REFUNDED"?"refunded":row.paymentStatus==="FAILED"?"failed":"pending"}">${row.paymentStatus}</span></td>
    <td>${row.refund==="—"?"—":`<span class="badge refunded">${row.refund}</span>`}</td>
    <td>${row.paymentCompletedAt==="—"?"—":`${row.paymentCompletedAt}<small>Completed At</small>`}</td>
    <td><span class="badge ${row.issue?"check-issue":"check-normal"}">${row.verify}</span></td>
    <td><button class="view-button payment-view-button" data-index="${paymentRows.indexOf(row)}">View</button></td>
  </tr>`).join("")||`<tr><td colspan="10" style="text-align:center;padding:50px;color:#8a93a4">조건에 맞는 결제가 없습니다.</td></tr>`;
  document.querySelector("#paymentVisibleCount").textContent=rows.length;
  document.querySelector("#paymentNormalCount").textContent=rows.filter(row=>!row.issue).length;
  document.querySelector("#paymentIssueCount").textContent=rows.filter(row=>row.issue).length;
  document.querySelectorAll("#paymentsBody .payment-view-button").forEach(button=>button.addEventListener("click",()=>openDrawer(paymentRows[Number(button.dataset.index)])));
}

function renderEsims(){
  const status=document.querySelector("#esimManagerStatusFilter").value;
  const product=document.querySelector("#esimProductFilter").value;
  const query=document.querySelector("#esimManagerSearchInput").value.trim().toLowerCase();
  const start=document.querySelector("#esimStartDate").value;
  const end=document.querySelector("#esimEndDate").value;
  const rows=esimRows.filter(row=>{
    const statusMatch=status==="ALL"||row.esim===status;
    const productMatch=product==="ALL"||row.productGroup===product;
    const dateMatch=inDateRange(row.issuedAt==="—"?row.created:row.issuedAt,start,end);
    const searchMatch=!query||`${row.order} ${row.iccid} ${row.saleId} ${row.customer} ${row.product}`.toLowerCase().includes(query);
    return statusMatch&&productMatch&&dateMatch&&searchMatch;
  });
  document.querySelector("#esimManagerBody").innerHTML=rows.map(row=>`<tr>
    <td><b>${row.esimId}</b><small>${row.order}</small></td>
    <td><b>${row.product}</b><small>${row.destination}</small></td>
    <td>${row.customer}</td>
    <td><span class="badge ${esimClass(row.esim)}">${row.esim}</span></td>
    <td><b>${row.iccid}</b><small>${row.saleId}</small>${row.productGroup==="SKT"?"<small>SKT ICCID 예외</small>":""}</td>
    <td>${row.usage}</td>
    <td>${row.activatedAt}</td>
    <td>${row.expiresAt}</td>
    <td>${row.issuedAt}</td>
    <td><span class="badge ${row.issue?"check-issue":"check-normal"}">${row.check}</span></td>
    <td><div class="row-actions"><button class="view-button esim-detail-button" data-index="${esimRows.indexOf(row)}">eSIM Detail</button><button class="mini-action esim-manager-view-button" data-index="${esimRows.indexOf(row)}">Order View</button>${row.esim==="FAILED"?`<button class="mini-action esim-retry-button" data-retry-index="${esimRows.indexOf(row)}">Retry</button>`:""}</div></td>
  </tr>`).join("")||`<tr><td colspan="11" style="text-align:center;padding:50px;color:#8a93a4">조건에 맞는 eSIM이 없습니다.</td></tr>`;
  document.querySelector("#esimManagerVisibleCount").textContent=rows.length;
  document.querySelector("#esimManagerNormalCount").textContent=rows.filter(row=>!row.issue).length;
  document.querySelector("#esimManagerIssueCount").textContent=rows.filter(row=>row.issue).length;
  document.querySelectorAll("#esimManagerBody .esim-manager-view-button").forEach(button=>button.addEventListener("click",()=>openDrawer(esimRows[Number(button.dataset.index)])));
  document.querySelectorAll("#esimManagerBody .esim-detail-button").forEach(button=>button.addEventListener("click",()=>openEsimDetail(esimRows[Number(button.dataset.index)])));
  document.querySelectorAll("#esimManagerBody .esim-retry-button").forEach(button=>button.addEventListener("click",()=>{
    const row=esimRows[Number(button.dataset.retryIndex)];row.esim="ISSUING";row.check="재발급 요청 접수";row.issue=false;renderEsims();showToast(`${row.order} eSIM 재발급을 요청했습니다.`);
  }));
}

let activeDrawerRow=null;
function openDrawer(row){
  activeDrawerRow=row;
  const settlementRow = Boolean(row.event);
  document.querySelector("#drawerOrder").textContent=row.order;
  document.querySelector("#detailOrderStatus").textContent=row.status||row.orderStatus||(row.refund==="COMPLETED"?"REFUNDED":"PAYMENT_PAID");
  const check=document.querySelector("#detailCheck"); check.textContent=row.check||row.verify||"NORMAL"; check.className=row.issue?"red":"green";
  document.querySelector("#detailCustomer").textContent=row.customer;
  document.querySelector("#detailProduct").textContent=row.product;
  document.querySelector("#detailCreatedAt").textContent=row.created||row.eventDate||"—";
  document.querySelector("#detailPaymentId").textContent=row.paymentId||"—";
  document.querySelector("#detailPayment").textContent=`${row.method||row.payment} · ${row.paymentStatus||"COMPLETED"}`;
  document.querySelector("#detailSellingPrice").textContent=row.sellingPrice||row.usd||row.paymentAmount||"—";
  document.querySelector("#detailPointsUsed").textContent=row.pointsUsed||(settlementRow?"—":"$3.00 USD");
  document.querySelector("#detailAmount").textContent=row.amount?`${row.amount} / ${row.usd}`:`${row.paymentAmount} / ${row.actualPaidUsd||"—"}`;
  document.querySelector("#detailCompletedAt").textContent=row.paymentCompletedAt||row.created||"—";
  document.querySelector("#detailEsim").textContent=row.esim||"UNINSTALLED";
  document.querySelector("#detailIccid").textContent=row.iccid;
  document.querySelector("#detailSaleId").textContent=row.saleId||"SALE-938294";
  document.querySelector("#detailIssuedAt").textContent=row.issuedAt||"—";
  const method=(row.method||row.payment||"").toUpperCase();
  const refundStatus=row.refund==="—"?"NOT_STARTED":row.refund;
  document.querySelector("#detailRefundStatus").innerHTML=`<span class="badge ${refundStatus==="COMPLETED"?"refunded":refundStatus==="NOT_STARTED"?"esim-neutral":"pending"}">${refundStatus}</span>`;
  document.querySelector("#detailRefundSource").textContent=row.refundSource||"—";
  document.querySelector("#detailRefundRequestedAt").textContent=row.refundRequestedAt||"—";
  document.querySelector("#detailRefundAmount").textContent=row.refundAmount||(row.amount?`${row.amount} / ${row.usd}`:row.paymentAmount||"—");
  document.querySelector("#detailRefundType").textContent=method==="STARS"?"AUTOMATIC":"MANUAL";
  document.querySelector("#detailRefundCompletedAt").textContent=row.refundCompletedAt||"—";
  document.querySelector("#detailRefundReason").textContent=row.refundReason||"—";
  const paid=["COMPLETED","REFUNDED"].includes(row.paymentStatus||"COMPLETED");
  const refundable=row.refundEligible!==false&&paid&&refundStatus!=="COMPLETED";
  const refundButton=document.querySelector("#processRefund");refundButton.disabled=!refundable;refundButton.textContent=refundStatus==="COMPLETED"?"Refund Completed":refundStatus==="MANUAL_PENDING"?"Complete Manual Refund":"Start Admin Refund";
  document.querySelector("#refundActionGuide").textContent=refundStatus==="COMPLETED"?"관리자 환불이 완료되었습니다. 주문·결제는 REFUNDED이며 과거 결제 성공 이벤트와 완료일은 보존됩니다.":!paid?"결제가 완료되지 않아 환불을 실행할 수 없습니다.":row.refundEligible===false?"사용·활성화 상태 또는 운영 정책으로 환불할 수 없습니다.":refundStatus==="MANUAL_PENDING"?"관리자가 시작한 수동환불입니다. 외부 환불과 증빙 확인 전까지 주문 상태는 변경되지 않습니다.":"관리자가 이 Order Detail에서 환불 원장을 생성하고 처리를 시작합니다.";
  document.querySelector("#supplierStatus").innerHTML=row.cancelStatus?`<span class="badge ${row.cancelStatus==="COMPLETED"?"paid":"pending"}">${cancelLabel(row.cancelStatus)}</span>`:`<span class="badge pending">NOT_RECORDED</span>`;
  document.querySelector("#supplierRequestedAt").textContent=row.cancelRequestedAt||"—";
  document.querySelector("#supplierCancelledAt").textContent=row.cancelDate||"—";
  document.querySelector("#supplierCredit").textContent=row.event==="SUPPLIER_CREDIT"?row.supplyKrw:"—";
  document.querySelector("#supplierCreditStatus").innerHTML=row.event==="SUPPLIER_CREDIT"?(row.creditDate?`<span class="badge paid">반영완료</span><small>${row.creditDate}</small>`:`<span class="badge pending">미반영</span>`):"—";
  document.querySelector("#supplierCreditMeta").textContent=row.creditReference||"—";
  document.querySelector("#supplierAdmin").textContent=row.creditAdmin||(settlementRow?"admin01":"—");
  const timeline=document.querySelector("#detailTimeline");
  timeline.innerHTML=settlementRow?`${row.cancelDate?`<li><i></i><div><b>SkySIM 취소 완료</b><span>${row.cancelDate}</span></div></li>`:""}${row.refund==="COMPLETED"?`<li><i></i><div><b>관리자 환불 완료</b><span>${row.eventDate}</span></div></li>`:""}<li><i></i><div><b>eSIM 발급 완료</b><span>${row.issuedAt}</span></div></li><li><i></i><div><b>결제 완료</b><span>${row.paymentCompletedAt}</span></div></li><li><i></i><div><b>주문 생성</b><span>${row.created}</span></div></li>`:`${row.refund==="COMPLETED"?`<li><i></i><div><b>관리자 환불 완료</b><span>${row.refundCompletedAt||"—"}</span></div></li>`:row.refund==="MANUAL_PENDING"?`<li><i></i><div><b>관리자 수동환불 시작</b><span>${row.refundRequestedAt||"—"}</span></div></li>`:""}<li><i></i><div><b>eSIM 상태 ${row.esim}</b><span>${row.issuedAt||"—"}</span></div></li>${row.paymentCompletedAt!=="—"?`<li><i></i><div><b>결제 완료</b><span>${row.paymentCompletedAt}</span></div></li>`:""}<li><i></i><div><b>주문 생성</b><span>${row.created}</span></div></li>`;
  document.querySelector("#orderDrawer").classList.add("open");
  document.querySelector("#drawerBackdrop").classList.add("open");
  document.querySelector("#orderDrawer").setAttribute("aria-hidden","false");
}
function closeDrawer(){document.querySelector("#orderDrawer").classList.remove("open");document.querySelector("#drawerBackdrop").classList.remove("open");document.querySelector("#orderDrawer").setAttribute("aria-hidden","true")}

function openRefundDialog(){
  if(!activeDrawerRow)return;
  const row=activeDrawerRow;const method=(row.method||row.payment||"").toUpperCase();
  document.querySelector("#refundDialogOrder").textContent=row.order;
  document.querySelector("#refundDialogMethod").textContent=method;
  document.querySelector("#refundDialogAmount").textContent=row.refundAmount||(row.amount?`${row.amount} / ${row.usd}`:row.paymentAmount||"—");
  document.querySelector("#refundDialogSource").textContent="ADMIN";
  document.querySelector("#refundReason").value=row.refundReason||"";
  document.querySelector("#refundConfirmed").checked=false;
  document.querySelector("#tonProofFields").hidden=method!=="TON";
  document.querySelector("#forumPayProofFields").hidden=method!=="FORUMPAY";
  const notice=document.querySelector("#refundMethodNotice");
  if(method==="STARS")notice.innerHTML="<strong>Stars 자동환불</strong><span>저장하면 Telegram Stars 환불 API를 실행하고 성공한 경우에만 환불완료로 변경합니다.</span>";
  else if(method==="TON")notice.innerHTML="<strong>TON 수동환불</strong><span>관리자가 먼저 고객 지갑으로 송금한 후 대상 지갑과 txHash를 입력합니다. 온체인 검증 성공 후 완료 처리합니다.</span>";
  else notice.innerHTML="<strong>ForumPay 수동환불</strong><span>ForumPay 또는 외부 지갑에서 실제 환불을 완료한 뒤 포털 참조번호나 txid를 증빙으로 입력합니다.</span>";
  document.querySelector("#refundConfirmText").textContent=`${method==="STARS"?"자동환불 실행":"외부 수동환불 완료와 증빙"} 및 사용 포인트 자동 반환 내용을 확인했습니다.`;
  document.querySelector("#refundDialog").classList.add("open");document.querySelector("#refundDialogBackdrop").classList.add("open");document.querySelector("#refundDialog").setAttribute("aria-hidden","false");
}
function closeRefundDialog(){document.querySelector("#refundDialog").classList.remove("open");document.querySelector("#refundDialogBackdrop").classList.remove("open");document.querySelector("#refundDialog").setAttribute("aria-hidden","true")}
function executeRefund(){
  if(!activeDrawerRow||!document.querySelector("#refundConfirmed").checked){showToast("환불 처리 확인 항목을 선택해 주세요.");return}
  const row=activeDrawerRow;const method=(row.method||row.payment||"").toUpperCase();
  if(method==="TON"&&(!document.querySelector("#refundWalletAddress").value.trim()||!document.querySelector("#refundTxHash").value.trim())){showToast("TON 수신 지갑과 txHash가 모두 필요합니다.");return}
  if(method==="FORUMPAY"&&document.querySelector("#refundProofReference").value.trim().length<8){showToast("ForumPay 환불 증빙 참조번호를 8자 이상 입력해 주세요.");return}
  row.refund="COMPLETED";row.status="REFUNDED";row.orderStatus="REFUNDED";row.refundSource=row.refundSource&&row.refundSource!=="—"?row.refundSource:"ADMIN";row.refundRequestedAt=row.refundRequestedAt||"2026-09-15 16:10";row.refundCompletedAt="2026-09-15 16:12";row.refundAmount=row.refundAmount||(row.amount?`${row.amount} / ${row.usd}`:row.paymentAmount||"—");row.refundReason=document.querySelector("#refundReason").value.trim()||"관리자 환불 처리";row.refundEligible=false;
  closeRefundDialog();openDrawer(row);renderOrders();renderPayments();showToast(method==="STARS"?"Stars 자동환불이 완료되고 사용 포인트가 반환되었습니다.":`${method} 수동환불 증빙이 확인되어 완료 처리했습니다.`);
}

function openCancelDialog(){document.querySelector("#cancelDialog").classList.add("open");document.querySelector("#cancelDialogBackdrop").classList.add("open");document.querySelector("#cancelDialog").setAttribute("aria-hidden","false")}
function closeCancelDialog(){document.querySelector("#cancelDialog").classList.remove("open");document.querySelector("#cancelDialogBackdrop").classList.remove("open");document.querySelector("#cancelDialog").setAttribute("aria-hidden","true")}
const cancelLabel=status=>status==="COMPLETED"?"취소완료":status==="PROCESSING"?"처리중":"접수중";
let selectedCreditRowIndex=null;
function syncCreditFields(){
  const applied=document.querySelector("#creditApplyStatus").value==="APPLIED";
  ["#creditAppliedDate","#creditSettlementMonth","#creditReference","#creditProcessedBy","#creditMemo"].forEach(selector=>document.querySelector(selector).disabled=!applied);
}
function openCreditDialog(index){
  selectedCreditRowIndex=index;
  const row=settlementRows[index];
  document.querySelector("#creditDialogOrder").textContent=row.order;
  document.querySelector("#creditDialogAmount").textContent=`${row.supplyKrw} / ${row.supplyUsd}`;
  document.querySelector("#creditApplyStatus").value=row.creditDate?"APPLIED":"UNAPPLIED";
  document.querySelector("#creditAppliedDate").value=row.creditDate||"2026-09-30";
  document.querySelector("#creditSettlementMonth").value=row.creditMonth||"2026-09";
  document.querySelector("#creditReference").value=row.creditReference||"";
  document.querySelector("#creditProcessedBy").value=row.creditAdmin||"finance01";
  document.querySelector("#creditMemo").value=row.creditMemo||"";
  syncCreditFields();
  document.querySelector("#creditDialog").classList.add("open");document.querySelector("#creditDialogBackdrop").classList.add("open");document.querySelector("#creditDialog").setAttribute("aria-hidden","false");
}
function closeCreditDialog(){document.querySelector("#creditDialog").classList.remove("open");document.querySelector("#creditDialogBackdrop").classList.remove("open");document.querySelector("#creditDialog").setAttribute("aria-hidden","true")}
function saveCreditApplication(){
  if(selectedCreditRowIndex===null)return;
  const row=settlementRows[selectedCreditRowIndex];
  const applied=document.querySelector("#creditApplyStatus").value==="APPLIED";
  const date=document.querySelector("#creditAppliedDate").value;
  if(applied&&!date){const toast=document.querySelector("#toast");toast.textContent="반영완료 상태에는 정산 반영일이 필요합니다.";toast.classList.add("open");setTimeout(()=>toast.classList.remove("open"),2400);return}
  row.creditDate=applied?date:"";
  row.creditMonth=applied?document.querySelector("#creditSettlementMonth").value:"";
  row.creditReference=applied?document.querySelector("#creditReference").value.trim():"";
  row.creditAdmin=applied?document.querySelector("#creditProcessedBy").value.trim():"";
  row.creditMemo=applied?document.querySelector("#creditMemo").value.trim():"";
  closeCreditDialog();renderSettlement();
  const toast=document.querySelector("#toast");toast.textContent=applied?"공급 크레딧을 정산 반영완료로 기록했습니다.":"공급 크레딧을 미반영 상태로 변경했습니다.";toast.classList.add("open");setTimeout(()=>toast.classList.remove("open"),2600);
}
function renderSettlement(){
  const basis=document.querySelector("#settlementDateBasis").value;
  const start=document.querySelector("#settlementStartDate").value;
  const end=document.querySelector("#settlementEndDate").value;
  const method=document.querySelector("#settlementPaymentMethod").value;
  const event=document.querySelector("#settlementEventFilter").value;
  const esim=document.querySelector("#settlementEsimStatus").value;
  const status=document.querySelector("#settlementCancelStatus").value;
  const credit=document.querySelector("#settlementCreditStatus").value;
  const sort=document.querySelector("#cancelDateSort").value;
  const query=document.querySelector("#settlementSearchInput").value.trim().toLowerCase();
  const dateOf=row=>basis==="CANCEL"?row.cancelDate:basis==="ISSUED"?row.issuedAt:basis==="REFUND"?row.refundCompletedAt:basis==="CREDIT"?row.creditDate:row.eventDate;
  const rows=settlementRows.filter(row=>{
    const date=(dateOf(row)||"").slice(0,10);
    const dateMatch=Boolean(date)&&(!start||date>=start)&&(!end||date<=end);
    const methodMatch=method==="ALL"||row.payment===method;
    const eventMatch=event==="ALL"||row.event===event;
    const esimMatch=esim==="ALL"||row.esim===esim;
    const statusMatch=status==="ALL"||row.cancelStatus===status;
    const applied=Boolean(row.creditDate);
    const creditMatch=credit==="ALL"||(credit==="APPLIED"?applied:!applied);
    const searchMatch=!query||`${row.order} ${row.paymentId} ${row.iccid} ${row.saleId} ${row.product} ${row.customer}`.toLowerCase().includes(query);
    return dateMatch&&methodMatch&&eventMatch&&esimMatch&&statusMatch&&creditMatch&&searchMatch;
  }).sort((a,b)=>{const av=dateOf(a)||"";const bv=dateOf(b)||"";return sort==="DESC"?bv.localeCompare(av):av.localeCompare(bv)});
  document.querySelector("#settlementBody").innerHTML=rows.map(row=>`<tr><td><span class="event ${row.event==="SUPPLIER_CREDIT"?"credit":"refund"}">${row.event}</span></td><td>${row.eventDate}</td><td><b>${row.order}</b></td><td>${row.product}<small>${row.customer}</small></td><td><b>${row.payment}</b><small>${row.paymentAmount}</small><small>${row.paymentId}</small></td><td><span class="badge ${esimClass(row.esim)}">${row.esim}</span></td><td>${row.iccid}<small>${row.saleId}</small></td><td><b class="${row.event==="SUPPLIER_CREDIT"?"green":""}">${row.supplyKrw}</b></td><td>${row.supplyUsd}</td><td>${row.refund==="—"?"—":`<span class="badge refunded">${row.refund}</span><small>${row.refundAmount}</small><small>${row.refundCompletedAt||"완료 전"}</small>`}</td><td><span class="badge ${row.cancelStatus==="COMPLETED"?"paid":"pending"}">${cancelLabel(row.cancelStatus)}</span><small>요청 ${row.cancelRequestedAt}</small><small>완료 ${row.cancelDate||"—"}</small></td><td>${row.creditDate?`<span class="badge paid">반영완료</span><small>${row.creditDate}</small><small>${row.creditReference||"참조번호 없음"}</small>`:`<span class="badge pending">미반영</span>`}</td><td><div class="row-actions"><button class="view-button settlement-view-button" data-index="${settlementRows.indexOf(row)}">View</button>${row.event==="SUPPLIER_CREDIT"?`<button class="view-button credit-button" data-credit-index="${settlementRows.indexOf(row)}">${row.creditDate?"Edit Credit":"Apply Credit"}</button>`:""}</div></td></tr>`).join("")||`<tr><td colspan="13" style="text-align:center;padding:50px;color:#8a93a4">조건에 맞는 정산 이벤트가 없습니다.</td></tr>`;
  document.querySelectorAll("#settlementBody .settlement-view-button").forEach(button=>button.addEventListener("click",()=>openDrawer(settlementRows[Number(button.dataset.index)])));
  document.querySelectorAll("#settlementBody .credit-button").forEach(button=>button.addEventListener("click",()=>openCreditDialog(Number(button.dataset.creditIndex))));
  document.querySelector(".settlement-scope").innerHTML=`<span class="pulse green-pulse"></span><strong>현재 조회:</strong> ${start}~${end} · ${method==="ALL"?"전체 결제수단":method} · ${status==="ALL"?"전체 취소 상태":cancelLabel(status)} · ${credit==="ALL"?"전체 크레딧":credit==="APPLIED"?"크레딧 반영완료":"크레딧 미반영"} · ${sort==="DESC"?"최신순":"과거순"}`;
  renderPaymentMethodSummary(method);
}

function renderPaymentMethodSummary(selectedMethod){
  const methods=["TON","Stars","ForumPay"];
  const summary=methods.filter(method=>selectedMethod==="ALL"||method===selectedMethod).map(method=>{
    const rows=paymentRows.filter(row=>row.method===method&&["COMPLETED","REFUNDED"].includes(row.paymentStatus));
    const paid=rows.reduce((sum,row)=>sum+Number(row.usd.replace(/[^0-9.]/g,"")),0);
    const refunded=rows.filter(row=>row.refund==="COMPLETED").reduce((sum,row)=>sum+Number(row.usd.replace(/[^0-9.]/g,"")),0);
    return {method,count:rows.length,paid,refunded,net:paid-refunded};
  });
  document.querySelector("#paymentMethodSummaryBody").innerHTML=summary.map(row=>`<tr><td><b>${row.method}</b></td><td>${row.count}</td><td>$${row.paid.toFixed(2)}</td><td class="red">−$${row.refunded.toFixed(2)}</td><td><b>$${row.net.toFixed(2)}</b></td></tr>`).join("");
}
function saveSupplierCancellation(){
  const status=document.querySelector("#cancelStatus").value;
  const requested=document.querySelector("#cancelRequestedDate").value;
  const completed=document.querySelector("#cancelCompletedDate").value;
  const credit=Number(document.querySelector("#cancelCredit").value||0).toLocaleString("ko-KR");
  const admin=document.querySelector("#cancelAdmin").value||"—";
  document.querySelector("#supplierStatus").innerHTML=`<span class="badge ${status==="COMPLETED"?"paid":"pending"}">${cancelLabel(status)}</span>`;
  document.querySelector("#supplierRequestedAt").textContent=requested||"—";
  document.querySelector("#supplierCancelledAt").textContent=status==="COMPLETED"?(completed||"—"):"—";
  document.querySelector("#supplierCredit").textContent=status==="COMPLETED"?`₩${credit}`:"—";
  document.querySelector("#supplierAdmin").textContent=admin;
  const timeline=document.querySelector(".timeline");
  timeline.insertAdjacentHTML("afterbegin",`<li><i></i><div><b>SkySIM 취소 ${cancelLabel(status)} 기록</b><span>${completed||requested} · ${admin}</span></div></li>`);
  closeCancelDialog();
  const toast=document.querySelector("#toast");toast.textContent="SkySIM 취소 처리 기록을 저장했습니다. 고객 환불 상태는 변경되지 않았습니다.";toast.classList.add("open");setTimeout(()=>toast.classList.remove("open"),2600);
}

function openEsimDetail(row){
  document.querySelector("#adminActionTitle").textContent="eSIM Detail";
  document.querySelector("#adminActionEyebrow").textContent="TECHNICAL RECORD";
  document.querySelector("#adminActionBody").innerHTML=`
    <div class="detail-grid">
      <section class="detail-section"><h3>Identifiers</h3><dl><div><dt>eSIM ID</dt><dd>${row.esimId}</dd></div><div><dt>Order</dt><dd>${row.order}</dd></div><div><dt>ICCID</dt><dd>${row.iccid}</dd></div><div><dt>SkySIM Sale ID</dt><dd>${row.saleId}</dd></div><div><dt>Activation Code</dt><dd>${row.activationCode}</dd></div><div><dt>Status</dt><dd>${row.esim}</dd></div></dl></section>
      <section class="detail-section"><h3>QR / Install</h3><p class="section-note">${row.qrCode}</p></section>
      <section class="detail-section"><h3>Lifecycle & Usage</h3><dl><div><dt>Issued</dt><dd>${row.issuedAt}</dd></div><div><dt>Activated</dt><dd>${row.activatedAt}</dd></div><div><dt>Expires</dt><dd>${row.expiresAt}</dd></div><div><dt>Usage</dt><dd>${row.usage}</dd></div></dl></section>
      <section class="detail-section"><h3>Technical Logs</h3><div class="key-value-list"><div><span>Usage Logs</span><strong>3 records</strong></div><div><span>Callback Logs</span><strong>2 valid / 0 invalid</strong></div><div><span>API Logs</span><strong>View latest supplier calls</strong></div></div></section>
    </div>
    <div class="action-strip"><button class="mini-action" data-preview-action="eSIM 사용량 로그를 조회합니다.">Usage Logs</button><button class="mini-action" data-preview-action="공급사 callback 로그를 조회합니다.">Callback Logs</button><button class="mini-action" data-preview-action="SkySIM API 호출 로그를 조회합니다.">API Logs</button>${row.esim==="FAILED"?'<button class="mini-action" data-preview-action="eSIM 발급 재시도를 요청합니다.">Retry Issuance</button>':""}</div>`;
  document.querySelector("#adminActionDelete").hidden=true;
  document.querySelector("#adminActionSave").hidden=true;
  document.querySelector("#adminActionDialog").dataset.formType="esim-detail";
  document.querySelector("#adminActionDialog").classList.add("open");
  document.querySelector("#adminActionDialogBackdrop").classList.add("open");
  document.querySelector("#adminActionDialog").setAttribute("aria-hidden","false");
  bindPreviewActions(document.querySelector("#adminActionBody"));
}

const adminForms={
  product:{title:"Product Detail / Edit",eyebrow:"EXISTING PRODUCT DATA",body:`<div class="notice-box"><strong>기존 상품 구조 보존</strong><span>공급사 원본 필드와 판매 노출 설정을 삭제하거나 다른 의미로 변경하지 않습니다.</span></div><div class="dynamic-form"><label><span>Product Code</span><input value="CM-500M-D1"></label><label><span>SkySIM Code</span><input value="CM-L5000-gkd-1"></label><label><span>Plan Name</span><input value="China 500MB 1 Day"></label><label><span>Plan Code</span><input value="CN-D1-500M"></label><label><span>SkySIM Product Name</span><input value="China Mobile 500MB"></label><label><span>Product Display Name</span><input value="China 500MB · 1 Day"></label><label><span>Product Name</span><input value="China_500MB_1days"></label><label><span>Service</span><input value="DATA"></label><label><span>Local Installation</span><input value="Supported"></label><label><span>Data Amount</span><input value="500MB"></label><label><span>Duration Days</span><input type="number" value="1"></label><label><span>Duration Display</span><input value="1 Day"></label><label><span>Option Name</span><input value="500MB / Day"></label><label><span>Option Name 2</span><input value="Daily"></label><label><span>Country</span><input value="China"></label><label><span>Country Code</span><input value="CN"></label><label><span>Region</span><input value="Asia"></label><label><span>Carrier</span><input value="China Mobile"></label><label><span>APN</span><input value="cmnet"></label><label><span>Validity Period</span><input value="1 Day"></label><label><span>Login Benchmark</span><input value="First network connection"></label><label><span>Top Up</span><input value="No"></label><label><span>KYC</span><input value="Not required"></label><label><span>Hotspot</span><input value="Supported"></label><label><span>Request Shipment</span><input value="No"></label><label><span>Status Check</span><input value="Available"></label><label><span>Normal Price (KRW)</span><input type="number" value="1500"></label><label><span>Recommended Price (KRW)</span><input type="number" value="1300"></label><label><span>Supply Price (KRW)</span><input type="number" value="980"></label><label><span>Base Price (KRW)</span><input type="number" value="980"></label><label><span>Selling Price (USD)</span><input type="number" value="1.29" step="0.01"></label><label><span>Priority</span><input type="number" value="10"></label><label class="full"><span>Notes</span><textarea rows="3"></textarea></label><div class="toggle-grid full"><label><input type="checkbox" checked> Active</label><label><input type="checkbox" checked> Recommended</label><label><input type="checkbox"> Popular</label></div></div>`},
  "product-import":{title:"Import Products",eyebrow:"PRODUCT IMPORT",body:`<div class="notice-box"><strong>Excel 일괄 등록</strong><span>템플릿의 상품코드, 국가/리전, 기간, 용량, 공급가와 판매가를 검증한 뒤 반영합니다.</span></div><div class="dynamic-form"><label class="full"><span>Excel File</span><input type="file" accept=".xlsx,.xls"></label><label><span>Duplicate Rule</span><select><option>Update by Product Code</option><option>Skip duplicates</option></select></label><label><span>Validation</span><select><option>Validate before import</option></select></label></div>`},
  "product-history":{title:"Product Import History",eyebrow:"IMPORT AUDIT",body:`<div class="table-card"><div class="table-scroll"><table class="compact-table"><thead><tr><th>Date</th><th>File</th><th>Total</th><th>Inserted</th><th>Updated</th><th>Skipped</th><th>Status</th></tr></thead><tbody><tr><td>2026-09-14 13:20</td><td>skysim-products.xlsx</td><td>286</td><td>12</td><td>268</td><td>6</td><td><span class="badge paid">COMPLETED</span></td></tr><tr><td>2026-09-01 09:10</td><td>price-update.xlsx</td><td>42</td><td>0</td><td>42</td><td>0</td><td><span class="badge paid">COMPLETED</span></td></tr></tbody></table></div></div>`},
  member:{title:"Member Detail",eyebrow:"EXISTING MEMBER DATA",body:`<div class="detail-grid"><section class="detail-section"><h3>Telegram Info</h3><dl><div><dt>Telegram ID</dt><dd>692617424</dd></div><div><dt>Username</dt><dd>@traveler01</dd></div><div><dt>Name</dt><dd>Traveler One</dd></div><div><dt>Language</dt><dd>en</dd></div></dl></section><section class="detail-section"><h3>Status &amp; Usage</h3><dl><div><dt>Registered</dt><dd>2026-07-18</dd></div><div><dt>Active</dt><dd>Yes</dd></div><div><dt>Banned</dt><dd>No</dd></div><div><dt>Total Orders</dt><dd>8</dd></div><div><dt>Total Spent</dt><dd>$82.40</dd></div><div><dt>Held Points</dt><dd>$4.20</dd></div></dl></section></div><div class="action-strip"><button class="mini-action" data-preview-action="회원 계정을 비활성화합니다.">Deactivate</button><button class="mini-action" data-preview-action="회원을 차단합니다.">Ban</button></div><div class="dynamic-form"><label class="full"><span>Admin Memo</span><textarea rows="3" placeholder="운영 메모"></textarea></label></div><section class="history-panel"><h3>Purchase History (8)</h3><div class="history-row"><b>ORD-260903-1142</b><span>PAYMENT_PAID · $7.00</span></div><div class="history-row"><b>ORD-260702-0621</b><span>REFUNDED · $4.20</span></div></section><section class="history-panel"><h3>Owned eSIMs (2)</h3><div class="history-row"><b>Japan 5GB · 30 Days</b><span>ACTIVE</span></div><div class="history-row"><b>Europe 3GB · 15 Days</b><span>EXPIRED</span></div></section><section class="history-panel"><h3>Points History (4)</h3><div class="history-row"><b>EARN · Purchase cashback</b><span>+$1.20 → $4.20</span></div><div class="history-row"><b>USE · ORD-260903-1142</b><span>−$3.00 → $3.00</span></div></section>`},
  exchange:{title:"Exchange Rate (KRW → USD)",eyebrow:"EXISTING EXCHANGE SETTING",body:`<div class="notice-box"><strong>기존 환율 구조 유지</strong><span>판매가격 계산에 사용하는 KRW/USD 값과 변경 이력만 관리합니다.</span></div><div class="dynamic-form"><label><span>KRW / USD</span><input type="number" value="1360" step="0.01"></label><label><span>Example</span><input value="₩10,000 → $7.35 USD" readonly></label></div>`},
  banner:{title:"Banner Editor",eyebrow:"EXISTING BANNER DATA",body:`<div class="dynamic-form"><label><span>Title (default/en)</span><input value="Japan Autumn Data"></label><label><span>Subtitle (default/en)</span><input value="Japan destination promotion"></label><label class="full"><span>Image URL</span><input value="/uploads/banners/japan-autumn.webp"></label><label class="full"><span>Link URL</span><input value="/plans/japan"></label><label><span>Position</span><input value="home"></label><label><span>Sort Order</span><input type="number" value="1"></label><label><span>Background Color</span><input value="#2AABEE"></label><label><span>Accent Color</span><input value="#FFFFFF"></label><div class="toggle-grid full"><label><input type="checkbox" checked> Active</label></div></div><section class="history-panel"><h3>Translations</h3><div class="status-tabs"><button class="status-tab active">en</button><button class="status-tab">ko</button><button class="status-tab">zh</button><button class="status-tab">ja</button><button class="status-tab">fr</button></div><div class="dynamic-form"><label><span>Title (en)</span><input value="Japan Autumn Data"></label><label><span>Subtitle (en)</span><input value="Japan destination promotion"></label></div></section>`},
  content:{title:"Content Document",eyebrow:"EXISTING CONTENT DATA",body:`<div class="dynamic-form"><label><span>Kind</span><select><option>about</option><option>terms</option><option>privacy</option><option>refund</option><option>payment</option><option>search</option><option selected>guide</option></select></label><label><span>Language</span><select><option selected>en</option><option>ko</option><option>zh</option><option>ja</option><option>fr</option></select></label><label class="full"><span>Title</span><input value="How to install your eSIM"></label><label><span>Version</span><input type="number" value="3"></label><label><span>Status</span><select><option>DRAFT</option><option selected>PUBLISHED</option></select></label><label class="full"><span>Sections (heading / sub / body)</span><textarea rows="7">Install eSIM | iPhone | Open Settings and scan the QR code.&#10;Activate | Data roaming | Enable the new eSIM for mobile data.</textarea></label></div><div class="action-strip"><button class="mini-action" data-preview-action="선택 섹션을 위로 이동했습니다.">Move Section Up</button><button class="mini-action" data-preview-action="선택 섹션을 아래로 이동했습니다.">Move Section Down</button><button class="mini-action" data-preview-action="새 콘텐츠 섹션을 추가했습니다.">+ Add Section</button></div>`},
  notice:{title:"Notice Editor",eyebrow:"EXISTING NOTICE DATA",body:`<div class="notice-box"><strong>기존 공지 구조 유지</strong><span>대상 세분화·채널 선택·예약발송은 확정 기능이 아니므로 추가하지 않습니다. Send는 현재처럼 활성 사용자 전체 대상입니다.</span></div><div class="dynamic-form"><label class="full"><span>Title</span><input value="TON network maintenance"></label><label class="full"><span>Content</span><textarea rows="5">Payment may be delayed for 20 minutes.</textarea></label><label><span>Language</span><input value="en"></label><div class="toggle-grid"><label><input type="checkbox" checked> Active</label></div></div>`},
  "admin-create":{title:"Add Admin",eyebrow:"EXISTING ACCOUNT MODEL",body:`<div class="notice-box"><strong>기존 계정 방식 유지</strong><span>email 초대나 2FA를 새로 가정하지 않고 username·password·roleName을 사용합니다.</span></div><div class="dynamic-form"><label><span>Username</span><input value=""></label><label><span>Password</span><input type="password" placeholder="Minimum 8 characters"></label><label><span>Role</span><select><option>admin</option><option>operations</option><option>finance</option><option>content</option></select></label></div>`},
  "admin-password":{title:"Reset Admin Password",eyebrow:"ACCESS CONTROL",body:`<div class="dynamic-form"><label><span>Username</span><input value="finance01" readonly></label><label><span>New Password</span><input type="password" placeholder="Minimum 8 characters"></label><label><span>Confirm Password</span><input type="password"></label></div>`},
  role:{title:"Role & Permissions",eyebrow:"EXISTING RBAC",body:`<div class="notice-box"><strong>전체 기존 scope 보존</strong><span>권한 이름은 scope:action 형식이며 view &lt; manage &lt; admin 계층을 유지합니다. payments는 view/admin만 사용합니다.</span></div><div class="dynamic-form"><label><span>Role Name</span><input value="operations" readonly></label><label class="full"><span>Description</span><input value="Order and eSIM operations"></label></div><div class="permission-list"><div><b>Products</b><select><option>None</option><option>View</option><option selected>Manage</option><option>Admin</option></select></div><div><b>Orders</b><select><option>None</option><option>View</option><option selected>Manage</option><option>Admin</option></select></div><div><b>Members</b><select><option>None</option><option selected>View</option><option>Manage</option><option>Admin</option></select></div><div><b>Payments</b><select><option>None</option><option selected>View</option><option>Admin</option></select></div><div><b>eSIMs</b><select><option>None</option><option>View</option><option selected>Manage</option><option>Admin</option></select></div><div><b>Promotions</b><select><option selected>None</option><option>View</option><option>Manage</option><option>Admin</option></select></div><div><b>Exchange</b><select><option>None</option><option selected>View</option><option>Manage</option><option>Admin</option></select></div><div><b>Banners</b><select><option selected>None</option><option>View</option><option>Manage</option><option>Admin</option></select></div><div><b>Content</b><select><option selected>None</option><option>View</option><option>Manage</option><option>Admin</option></select></div><div><b>Audit Log</b><select><option>None</option><option selected>View</option><option>Manage</option><option>Admin</option></select></div><div><b>Notices</b><select><option selected>None</option><option>View</option><option>Manage</option><option>Admin</option></select></div><div><b>Admin Users</b><select><option selected>None</option><option>View</option><option>Manage</option><option>Admin</option></select></div><div><b>Roles</b><select><option selected>None</option><option>View</option><option>Manage</option><option>Admin</option></select></div><div><b>Settings</b><select><option selected>None</option><option>View</option><option>Manage</option><option>Admin</option></select></div><div><b>Payment Reconciliation</b><select><option>None</option><option selected>View</option><option>Manage</option><option>Admin</option></select></div><div><b>Refunds</b><select><option>None</option><option>View</option><option selected>Manage</option><option>Admin</option></select></div><div><b>Settlement</b><select><option>None</option><option selected>View</option><option>Manage</option><option>Admin</option></select></div><div><b>Supplier Cancellations</b><select><option>None</option><option>View</option><option selected>Manage</option><option>Admin</option></select></div></div>`},
  permission:{title:"Add Permission",eyebrow:"EXISTING RBAC",body:`<div class="dynamic-form"><label><span>Menu Scope</span><select><option>products</option><option>orders</option><option>members</option><option>payments</option><option>esims</option><option>promotions</option><option>exchange</option><option>banners</option><option>content</option><option>audit</option><option>notices</option><option>admin-users</option><option>roles</option><option>system</option><option>reconciliation</option><option>refunds</option><option>settlement</option><option>supplier-cancel</option></select></label><label><span>Action</span><select><option>view</option><option>manage</option><option>admin</option></select></label><label class="full"><span>Name Preview</span><input value="products:view" readonly></label><label class="full"><span>Description</span><input placeholder="권한 사용 목적"></label></div>`}
};
function openAdminActionDialog(type){const config=adminForms[type];if(!config)return;document.querySelector("#adminActionTitle").textContent=config.title;document.querySelector("#adminActionEyebrow").textContent=config.eyebrow;document.querySelector("#adminActionBody").innerHTML=config.body;document.querySelector("#adminActionDelete").hidden=["product-import","product-history","exchange","permission","member","admin-create","admin-password"].includes(type);document.querySelector("#adminActionSave").hidden=type==="product-history";document.querySelector("#adminActionDialog").dataset.formType=type;document.querySelector("#adminActionDialog").classList.add("open");document.querySelector("#adminActionDialogBackdrop").classList.add("open");document.querySelector("#adminActionDialog").setAttribute("aria-hidden","false");bindPreviewActions(document.querySelector("#adminActionBody"))}
function closeAdminActionDialog(){document.querySelector("#adminActionDialog").classList.remove("open");document.querySelector("#adminActionDialogBackdrop").classList.remove("open");document.querySelector("#adminActionDialog").setAttribute("aria-hidden","true")}
function bindPreviewActions(root=document){root.querySelectorAll("[data-preview-action]").forEach(item=>{if(item.dataset.bound)return;item.dataset.bound="1";item.addEventListener("click",()=>showToast(item.dataset.previewAction))})}

statusTabs.forEach(tab=>tab.addEventListener("click",()=>{statusTabs.forEach(x=>x.classList.remove("active"));tab.classList.add("active");activeStatus=tab.dataset.status;renderOrders()}));
document.querySelector("#searchButton").addEventListener("click",renderOrders);
document.querySelector("#searchInput").addEventListener("keydown",event=>{if(event.key==="Enter")renderOrders()});
document.querySelector("#esimFilter").addEventListener("change",renderOrders);
document.querySelector("#anomalyFilter").addEventListener("change",renderOrders);
document.querySelectorAll("#orderDateBasis,#orderStartDate,#orderEndDate,#orderPaymentMethod").forEach(element=>element.addEventListener("change",renderOrders));
document.querySelector("#paymentMethodFilter").addEventListener("change",renderPayments);
document.querySelector("#paymentStatusFilter").addEventListener("change",renderPayments);
document.querySelector("#paymentVerifyFilter").addEventListener("change",renderPayments);
document.querySelector("#paymentSearchButton").addEventListener("click",renderPayments);
document.querySelector("#paymentSearchInput").addEventListener("keydown",event=>{if(event.key==="Enter")renderPayments()});
document.querySelectorAll("#paymentStartDate,#paymentEndDate").forEach(element=>element.addEventListener("change",renderPayments));
document.querySelector("#esimManagerStatusFilter").addEventListener("change",renderEsims);
document.querySelector("#esimProductFilter").addEventListener("change",renderEsims);
document.querySelector("#esimManagerSearchButton").addEventListener("click",renderEsims);
document.querySelector("#esimManagerSearchInput").addEventListener("keydown",event=>{if(event.key==="Enter")renderEsims()});
document.querySelectorAll("#esimStartDate,#esimEndDate").forEach(element=>element.addEventListener("change",renderEsims));
document.querySelector("#closeDrawer").addEventListener("click",closeDrawer);
document.querySelector("#drawerBackdrop").addEventListener("click",closeDrawer);
document.querySelector("#processRefund").addEventListener("click",openRefundDialog);
document.querySelector("#closeRefundDialog").addEventListener("click",closeRefundDialog);
document.querySelector("#refundDialogCancel").addEventListener("click",closeRefundDialog);
document.querySelector("#refundDialogBackdrop").addEventListener("click",closeRefundDialog);
document.querySelector("#executeRefund").addEventListener("click",executeRefund);
document.querySelector("#recordSupplierCancel").addEventListener("click",openCancelDialog);
document.querySelector("#closeCancelDialog").addEventListener("click",closeCancelDialog);
document.querySelector("#cancelDialogCancel").addEventListener("click",closeCancelDialog);
document.querySelector("#cancelDialogBackdrop").addEventListener("click",closeCancelDialog);
document.querySelector("#saveSupplierCancel").addEventListener("click",saveSupplierCancellation);
document.querySelector("#closeCreditDialog").addEventListener("click",closeCreditDialog);
document.querySelector("#creditDialogCancel").addEventListener("click",closeCreditDialog);
document.querySelector("#creditDialogBackdrop").addEventListener("click",closeCreditDialog);
document.querySelector("#creditApplyStatus").addEventListener("change",syncCreditFields);
document.querySelector("#saveCreditApplication").addEventListener("click",saveCreditApplication);
document.querySelector("#settlementCancelStatus").addEventListener("change",renderSettlement);
document.querySelector("#cancelDateSort").addEventListener("change",renderSettlement);
document.querySelectorAll("#settlementDateBasis,#settlementStartDate,#settlementEndDate,#settlementPaymentMethod,#settlementEventFilter,#settlementEsimStatus,#settlementCreditStatus").forEach(element=>element.addEventListener("change",renderSettlement));
document.querySelector("#settlementSearchButton").addEventListener("click",renderSettlement);
document.querySelector("#settlementSearchInput").addEventListener("keydown",event=>{if(event.key==="Enter")renderSettlement()});
document.querySelectorAll("[data-admin-form]").forEach(item=>item.addEventListener("click",()=>openAdminActionDialog(item.dataset.adminForm)));
document.querySelector("#closeAdminActionDialog").addEventListener("click",closeAdminActionDialog);
document.querySelector("#adminActionCancel").addEventListener("click",closeAdminActionDialog);
document.querySelector("#adminActionDialogBackdrop").addEventListener("click",closeAdminActionDialog);
document.querySelector("#adminActionSave").addEventListener("click",()=>{const type=document.querySelector("#adminActionDialog").dataset.formType;closeAdminActionDialog();showToast(`${adminForms[type]?.title||"관리 항목"}을 저장했습니다.`)});
document.querySelector("#adminActionDelete").addEventListener("click",()=>{closeAdminActionDialog();showToast("삭제 확인 후 항목을 삭제하고 감사 로그를 남깁니다.")});
document.querySelectorAll(".status-tabs").forEach(group=>{if(group.closest("#ordersView"))return;group.querySelectorAll(".status-tab").forEach(tab=>tab.addEventListener("click",()=>{group.querySelectorAll(".status-tab").forEach(x=>x.classList.remove("active"));tab.classList.add("active");showToast(`${tab.textContent.trim()} 화면으로 전환했습니다.`)}))});
document.addEventListener("keydown",event=>{if(event.key==="Escape"){closeAdminActionDialog();closeRefundDialog();closeCreditDialog();closeCancelDialog();closeDrawer()}});

document.querySelectorAll("[data-view]").forEach(item=>item.addEventListener("click",()=>{
  document.querySelectorAll(".nav-item").forEach(x=>x.classList.remove("active")); item.classList.add("active");
  const view=item.dataset.view; document.querySelectorAll(".view").forEach(x=>x.classList.remove("active-view"));
  const titles={dashboard:"Dashboard",products:"Products",orders:"Orders",members:"Members",payments:"Payments",esims:"eSIM Management",exchange:"Exchange",banners:"Banners",content:"Content",audit:"Audit Log",notices:"Notices",settlement:"Settlement",admins:"Admin Users",roles:"Roles",settings:"Settings"};
  document.querySelector(`#${view}View`).classList.add("active-view"); document.querySelector("#crumb").textContent=titles[view]||view;
}));

document.querySelectorAll("[data-view-jump]").forEach(item=>item.addEventListener("click",()=>{
  const target=document.querySelector(`.nav-item[data-view="${item.dataset.viewJump}"]`);
  if(target)target.click();
}));
bindPreviewActions();

document.querySelectorAll(".search-button").forEach(button=>{
  if(["searchButton","paymentSearchButton","esimManagerSearchButton","settlementSearchButton"].includes(button.id))return;
  button.addEventListener("click",()=>showToast("현재 입력한 검색·필터 조건으로 목록을 조회했습니다."));
});
document.querySelectorAll("button").forEach(button=>{
  if(button.id==="exportOrders"||button.dataset.bound||button.dataset.adminForm||button.dataset.view||button.dataset.status)return;
  if(button.textContent.trim()==="Export Excel")button.addEventListener("click",()=>showToast("현재 검색·기간 조건으로 Excel 파일을 생성합니다."));
});
document.querySelector(".mobile-menu").addEventListener("click",()=>showToast("모바일 관리자 메뉴를 열었습니다."));
document.querySelector(".icon-button").addEventListener("click",()=>showToast("새 운영 알림이 없습니다."));
document.querySelector("#logoutButton").addEventListener("click",()=>showToast("기존 관리자와 동일하게 로그아웃 후 로그인 화면으로 이동합니다."));

document.querySelector("#exportOrders").addEventListener("click",()=>{const toast=document.querySelector("#toast");toast.classList.add("open");setTimeout(()=>toast.classList.remove("open"),2200)});
renderOrders();
renderPayments();
renderEsims();
renderSettlement();
