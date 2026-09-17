const orders = [
  {order:"ORD-260903-1142",created:"2026-09-03 10:20",customer:"@traveler01",product:"Japan 5GB · 30 Days",status:"PAYMENT_PAID",paymentStatus:"COMPLETED",method:"TON",paymentId:"ton-7fa9…ae20",sellingPrice:"$10.00",pointsUsed:"$3.00",amount:"7.23 TON",usd:"$7.00",paymentCompletedAt:"2026-09-03 10:22",fulfillment:"ISSUED",usageStatus:"ACTIVE",iccid:"898821…7641",saleId:"SALE-938294",issuedAt:"2026-09-03 10:24",refund:"—",refundSource:"—",refundStartedAt:"",refundAmount:"",refundCompletedAt:"",refundReason:"",refundEligible:true,check:"NORMAL",issue:false},
  {order:"ORD-260904-1188",created:"2026-09-04 09:18",customer:"@globalnomad",product:"Europe 10GB · 30 Days",status:"PAYMENT_PAID",paymentStatus:"COMPLETED",method:"ForumPay",paymentId:"fp-4ca2…9011",sellingPrice:"$20.00",pointsUsed:"$0.00",amount:"20.00 USDT",usd:"$20.00",paymentCompletedAt:"2026-09-04 09:20",fulfillment:"NOT_ISSUED",usageStatus:"UNKNOWN",iccid:"—",saleId:"—",issuedAt:"—",refund:"—",refundSource:"—",refundStartedAt:"",refundAmount:"",refundCompletedAt:"",refundReason:"",refundEligible:true,check:"결제 완료 · 미발급",issue:true},
  {order:"ORD-260905-1204",created:"2026-09-05 13:42",customer:"@seoultrip",product:"SKT Korea Unlimited",status:"PAYMENT_PAID",paymentStatus:"COMPLETED",method:"Stars",paymentId:"stars-91bd…a82c",sellingPrice:"$8.00",pointsUsed:"$0.00",amount:"560 XTR",usd:"$8.00",paymentCompletedAt:"2026-09-05 13:44",fulfillment:"ISSUED",usageStatus:"UNKNOWN",iccid:"SKTeSIM",saleId:"SALE-940120",issuedAt:"2026-09-05 13:47",refund:"—",refundSource:"—",refundStartedAt:"",refundAmount:"",refundCompletedAt:"",refundReason:"",refundEligible:true,check:"NORMAL · SKT 사용상태 확인불가",issue:false},
  {order:"ORD-260824-1027",created:"2026-08-24 09:18",customer:"@summertrip",product:"Thailand Unlimited · 10 Days",status:"REFUNDED",paymentStatus:"REFUNDED",method:"Stars",paymentId:"stars-8d1e…38ab",sellingPrice:"$12.00",pointsUsed:"$0.00",amount:"840 XTR",usd:"$12.00",paymentCompletedAt:"2026-08-24 09:20",fulfillment:"ISSUED",usageStatus:"UNINSTALLED",iccid:"898821…1129",saleId:"SALE-925011",issuedAt:"2026-08-24 09:24",refund:"COMPLETED",refundSource:"ADMIN",refundStartedAt:"2026-09-04 12:10",refundAmount:"840 XTR / $12.00",refundCompletedAt:"2026-09-05 15:30",refundReason:"관리자 환불 처리",refundEligible:false,check:"환불 완료 · SkySIM 미취소",issue:true},
  {order:"ORD-260901-1091",created:"2026-09-01 08:45",customer:"@tokyowalk",product:"Japan 3GB · 15 Days",status:"REFUND_REQUESTED",paymentStatus:"COMPLETED",method:"TON",paymentId:"ton-9011…3114",sellingPrice:"$4.20",pointsUsed:"$0.00",amount:"2.75 TON",usd:"$4.20",paymentCompletedAt:"2026-09-01 08:47",fulfillment:"ISSUED",usageStatus:"UNINSTALLED",iccid:"898821…7762",saleId:"SALE-933114",issuedAt:"2026-09-01 08:51",refund:"REQUESTED",refundSource:"ADMIN",refundStartedAt:"2026-09-04 12:10",refundAmount:"2.75 TON / $4.20",refundCompletedAt:"",refundReason:"관리자 환불 처리 중",refundEligible:true,check:"수동 환불 완료 확인 대기",issue:true},
  {order:"ORD-260906-1240",created:"2026-09-06 16:05",customer:"@europass",product:"France 3GB · 15 Days",status:"PAYMENT_FAILED",paymentStatus:"FAILED",method:"TON",paymentId:"ton-a041…bb19",sellingPrice:"$3.10",pointsUsed:"$0.00",amount:"2.15 TON",usd:"$3.10",paymentCompletedAt:"—",fulfillment:"ISSUED",usageStatus:"ACTIVE",iccid:"898821…9934",saleId:"SALE-941240",issuedAt:"2026-09-06 16:12",refund:"—",refundSource:"—",refundStartedAt:"",refundAmount:"",refundCompletedAt:"",refundReason:"",refundEligible:false,check:"미결제 · eSIM 발급",issue:true},
  {order:"ORD-260907-1278",created:"2026-09-07 11:12",customer:"@twicepaid",product:"USA 5GB · 15 Days",status:"PAYMENT_PAID",paymentStatus:"2 COMPLETED",method:"Stars",paymentId:"대표 결제 미확정",sellingPrice:"$6.00",pointsUsed:"$1.00",amount:"—",usd:"—",paymentCompletedAt:"—",fulfillment:"NOT_ISSUED",usageStatus:"UNKNOWN",iccid:"—",saleId:"—",issuedAt:"—",refund:"—",refundSource:"—",refundStartedAt:"",refundAmount:"",refundCompletedAt:"",refundReason:"",refundEligible:false,check:"중복 성공 결제 2건 · 대표 결제 지정 필요",issue:true,paymentAttempts:[{id:"stars-a112…91bc",method:"Stars",status:"COMPLETED",amount:"350 XTR",usd:"$5.00",completedAt:"2026-09-07 11:15"},{id:"stars-b837…22da",method:"Stars",status:"COMPLETED",amount:"350 XTR",usd:"$5.00",completedAt:"2026-09-07 11:16"}]}
];

const settlementRows = [
  {event:"ESIM_ISSUED_COST",eventDate:"2026-09-03 10:24",order:"ORD-260903-1142",orderStatus:"PAYMENT_PAID",created:"2026-09-03 10:20",paymentCompletedAt:"2026-09-03 10:22",issuedAt:"2026-09-03 10:24",product:"Japan 5GB · 30 Days",productGroup:"GLOBAL",customer:"@traveler01",payment:"TON",paymentId:"ton-7fa9…ae20",paymentAmount:"7.23 TON",sellingPrice:"$10.00 USD",pointsUsed:"$3.00 USD",actualPaidUsd:"$7.00 USD",esim:"ACTIVE",iccid:"898821…7641",saleId:"SALE-938294",supplyKrw:"₩8,400",supplyUsd:"$6.18",cancelStatus:"NOT_REQUESTED",cancelDate:"",creditStatus:"NA",creditKrw:"—",creditUsd:"—",creditDate:"",creditReference:""},
  {event:"ESIM_ISSUED_COST",eventDate:"2026-09-05 13:47",order:"ORD-260905-1204",orderStatus:"PAYMENT_PAID",created:"2026-09-05 13:42",paymentCompletedAt:"2026-09-05 13:44",issuedAt:"2026-09-05 13:47",product:"SKT Korea Unlimited",productGroup:"SKT",customer:"@seoultrip",payment:"Stars",paymentId:"stars-91bd…a82c",paymentAmount:"560 XTR",sellingPrice:"$8.00 USD",pointsUsed:"$0.00 USD",actualPaidUsd:"$8.00 USD",esim:"UNKNOWN",iccid:"SKTeSIM",saleId:"SALE-940120",supplyKrw:"₩7,100",supplyUsd:"$5.22",cancelStatus:"NOT_REQUESTED",cancelDate:"",creditStatus:"NA",creditKrw:"—",creditUsd:"—",creditDate:"",creditReference:""},
  {event:"ESIM_ISSUED_COST",eventDate:"2026-08-05 11:18",order:"ORD-260805-0731",orderStatus:"REFUNDED",created:"2026-08-05 11:12",paymentCompletedAt:"2026-08-05 11:14",issuedAt:"2026-08-05 11:18",cancelRequestedAt:"2026-09-11 09:30",product:"Japan 5GB · 30 Days",productGroup:"GLOBAL",customer:"@tokyowalk",payment:"Stars",paymentId:"stars-8050…0731",paymentAmount:"700 XTR",sellingPrice:"$10.00 USD",pointsUsed:"$0.00 USD",actualPaidUsd:"$10.00 USD",esim:"UNINSTALLED",iccid:"898821…7310",saleId:"SALE-905731",supplyKrw:"₩9,600",supplyUsd:"$7.06",cancelStatus:"COMPLETED",cancelDate:"2026-09-14",creditStatus:"PENDING",creditKrw:"₩9,600",creditUsd:"$7.06",creditDate:"",creditReference:""},
  {event:"SUPPLIER_CREDIT_APPLIED",eventDate:"2026-09-30 10:00",order:"ORD-260812-0874",orderStatus:"REFUNDED",created:"2026-08-12 08:55",paymentCompletedAt:"2026-08-12 08:57",issuedAt:"2026-08-12 09:01",cancelRequestedAt:"2026-09-18 14:20",product:"USA 10GB · 30 Days",productGroup:"GLOBAL",customer:"@businessfly",payment:"TON",paymentId:"ton-a812…4301",paymentAmount:"4.10 TON",sellingPrice:"$6.00 USD",pointsUsed:"$2.00 USD",actualPaidUsd:"$4.00 USD",esim:"UNINSTALLED",iccid:"898821…3068",saleId:"SALE-918430",supplyKrw:"₩12,400",supplyUsd:"$9.12",cancelStatus:"COMPLETED",cancelDate:"2026-09-21",creditStatus:"APPLIED",creditKrw:"−₩12,400",creditUsd:"−$9.12",creditDate:"2026-09-30",creditMonth:"2026-09",creditReference:"SKY-SET-2026-09",creditAdmin:"finance01",creditMemo:"9월 SkySIM 정산서 차감 확인"}
];

settlementRows.forEach(row=>{
  row.paymentStatus=row.paymentStatus||(row.orderStatus==="REFUNDED"?"REFUNDED":"COMPLETED");
  row.refund=row.refund||(row.orderStatus==="REFUNDED"?"COMPLETED":"—");
});

const paymentRows = [
  {paymentId:"stars-35a…308c",order:"ORD-260910-1422",created:"2026-09-10 09:03",paymentCompletedAt:"—",customer:"@newtraveler",product:"Japan 20GB · 30 Days",method:"Stars",amount:"3,820 XTR",usd:"$54.57",paymentStatus:"FAILED",refund:"—",verify:"CALLBACK_FAILED",issue:true,status:"PAYMENT_FAILED",pointsUsed:"$0.00 USD",esim:"NOT_ISSUED",iccid:"—",saleId:"—"},
  {paymentId:"ton-852b…4aa1",order:"ORD-260903-1261",created:"2026-09-03 18:28",paymentCompletedAt:"—",customer:"@coinroamer",product:"Europe 3GB · 15 Days",method:"TON",amount:"2.48 TON",usd:"$3.57",paymentStatus:"FAILED",refund:"—",verify:"RETURNED/BOUNCED",issue:true,status:"PAYMENT_FAILED",pointsUsed:"$0.00 USD",esim:"NOT_ISSUED",iccid:"—",saleId:"—"},
  {paymentId:"stars-361d…1cfe",order:"ORD-260824-1032",created:"2026-08-24 15:49",paymentCompletedAt:"2026-08-24 15:51",customer:"@summertrip",product:"Thailand 1GB · 7 Days",method:"Stars",amount:"60 XTR",usd:"$0.85",paymentStatus:"REFUNDED",refund:"COMPLETED",verify:"NORMAL",issue:false,status:"REFUNDED",pointsUsed:"$0.00 USD",esim:"UNINSTALLED",iccid:"898821…1129",saleId:"SALE-925011"},
  {paymentId:"ton-7718…3c28",order:"ORD-260822-0998",created:"2026-08-22 19:53",paymentCompletedAt:"2026-08-22 19:55",customer:"@onefundevops",product:"China 500MB · 1 Day",method:"TON",amount:"0.74 TON",usd:"$1.07",paymentStatus:"COMPLETED",refund:"—",verify:"NORMAL",issue:false,status:"PAYMENT_PAID",pointsUsed:"$0.00 USD",esim:"UNINSTALLED",iccid:"898821…6402",saleId:"SALE-911742"},
  {paymentId:"fp-a956…0844",order:"ORD-260819-0931",created:"2026-08-19 16:42",paymentCompletedAt:"2026-08-19 16:44",customer:"@forumtraveler",product:"USA 5GB · 15 Days",method:"ForumPay",amount:"10.04 USDT",usd:"$10.04",paymentStatus:"REFUNDED",refund:"COMPLETED",verify:"AMOUNT_MISMATCH",issue:true,status:"REFUNDED",pointsUsed:"$0.00 USD",esim:"UNINSTALLED",iccid:"898821…8841",saleId:"SALE-904844"},
  {paymentId:"fp-b583…5cc0",order:"ORD-260820-0955",created:"2026-08-20 16:27",paymentCompletedAt:"—",customer:"@globalnomad",product:"France 3GB · 15 Days",method:"ForumPay",amount:"4.57 USDT",usd:"$4.57",paymentStatus:"FAILED",refund:"—",verify:"ORDER_NOT_FOUND",issue:true,status:"PAYMENT_FAILED",pointsUsed:"$0.00 USD",esim:"NOT_ISSUED",iccid:"—",saleId:"—"}
];

const esimRows = [
  {esimId:"ESIM-260903-4401",order:"ORD-260903-1142",created:"2026-09-03 10:20",issuedAt:"2026-09-03 10:24",customer:"@traveler01",product:"Japan 5GB · 30 Days",destination:"Japan",productGroup:"GLOBAL",status:"PAYMENT_PAID",paymentStatus:"COMPLETED",method:"TON",paymentId:"ton-7fa9…ae20",amount:"7.23 TON",usd:"$7.00",pointsUsed:"$3.00 USD",fulfillment:"ISSUED",usageStatus:"ACTIVE",iccid:"898821…7641",saleId:"SALE-938294",usage:"1,240 / 5,120MB",installedAt:"2026-09-05 08:05",activatedAt:"2026-09-05 08:10",expiresAt:"2026-10-05 08:10",statusCheckedAt:"2026-09-15 09:10",activationCode:"LPA:1$sm-v4-010-a…",qrCode:"LPA payload available",check:"NORMAL",issue:false,refund:"—"},
  {esimId:"ESIM-260905-4520",order:"ORD-260905-1204",created:"2026-09-05 13:42",issuedAt:"2026-09-05 13:46",customer:"@seoultrip",product:"SKT Korea Unlimited",destination:"Korea",productGroup:"SKT",status:"PAYMENT_PAID",paymentStatus:"COMPLETED",method:"Stars",paymentId:"stars-91bd…a82c",amount:"560 XTR",usd:"$8.00",pointsUsed:"$0.00 USD",fulfillment:"ISSUED",usageStatus:"UNKNOWN",iccid:"SKTeSIM",saleId:"SALE-SKT-5204",usage:"—",installedAt:"—",activatedAt:"—",expiresAt:"2026-11-04",statusCheckedAt:"2026-09-15 09:08",activationCode:"LPA:1$skt…",qrCode:"LPA payload available",check:"NORMAL · SKT 사용상태 UNKNOWN",issue:false,refund:"—"},
  {esimId:"ESIM-260902-4350",order:"ORD-260902-1110",created:"2026-09-02 08:14",issuedAt:"2026-09-02 08:18",customer:"@tokyowalk",product:"Japan 3GB · 15 Days",destination:"Japan",productGroup:"GLOBAL",status:"PAYMENT_PAID",paymentStatus:"COMPLETED",method:"ForumPay",paymentId:"fp-9021…4310",amount:"$4.20 USD",usd:"$4.20",pointsUsed:"$0.00 USD",fulfillment:"ISSUED",usageStatus:"INSTALLED",iccid:"898821…7762",saleId:"SALE-933114",usage:"0 / 3,072MB",installedAt:"2026-09-03 10:10",activatedAt:"—",expiresAt:"2026-11-01",statusCheckedAt:"2026-09-15 09:06",activationCode:"LPA:1$sm-v4-010-b…",qrCode:"LPA payload available",check:"NORMAL",issue:false,refund:"—"},
  {esimId:"ESIM-260824-4102",order:"ORD-260824-1027",created:"2026-08-24 09:18",issuedAt:"2026-08-24 09:24",customer:"@summertrip",product:"Thailand Unlimited · 10 Days",destination:"Thailand",productGroup:"GLOBAL",status:"REFUNDED",paymentStatus:"REFUNDED",method:"Stars",paymentId:"stars-8d1e…38ab",amount:"840 XTR",usd:"$12.00",pointsUsed:"$0.00 USD",fulfillment:"ISSUED",usageStatus:"UNINSTALLED",iccid:"898821…1129",saleId:"SALE-925011",usage:"0 / Unlimited",installedAt:"—",activatedAt:"—",expiresAt:"2026-10-23",statusCheckedAt:"2026-09-15 09:04",activationCode:"LPA:1$sm-v4-010-c…",qrCode:"LPA payload available",check:"NORMAL",issue:false,refund:"COMPLETED"},
  {esimId:"ESIM-260906-4588",order:"ORD-260906-1240",created:"2026-09-06 16:05",issuedAt:"2026-09-06 16:09",customer:"@europass",product:"France 3GB · 15 Days",destination:"France",productGroup:"GLOBAL",status:"PAYMENT_FAILED",paymentStatus:"FAILED",method:"TON",paymentId:"ton-a041…bb19",amount:"2.15 TON",usd:"$3.10",pointsUsed:"$0.00 USD",fulfillment:"ISSUED",usageStatus:"ACTIVE",iccid:"898821…9934",saleId:"SALE-940588",usage:"420 / 3,072MB",installedAt:"2026-09-07 09:35",activatedAt:"2026-09-07 09:40",expiresAt:"2026-09-22 09:40",statusCheckedAt:"2026-09-15 09:02",activationCode:"LPA:1$sm-v4-010-d…",qrCode:"LPA payload available",check:"미결제 · eSIM 발급",issue:true,refund:"—"},
  {esimId:"ESIM-260911-4620",order:"ORD-260911-1440",created:"2026-09-11 11:05",issuedAt:"—",customer:"@newtraveler",product:"USA 5GB · 15 Days",destination:"USA",productGroup:"GLOBAL",status:"PAYMENT_PAID",paymentStatus:"COMPLETED",method:"ForumPay",paymentId:"fp-9114…4620",amount:"7.20 USDT",usd:"$7.20",pointsUsed:"$0.00 USD",fulfillment:"FAILED",usageStatus:"UNKNOWN",iccid:"—",saleId:"—",usage:"—",installedAt:"—",activatedAt:"—",expiresAt:"—",statusCheckedAt:"2026-09-15 09:00",activationCode:"—",qrCode:"—",check:"발급 실패 · 재시도 필요",issue:true,refund:"—"}
];

const body = document.querySelector("#ordersBody");
const statusTabs = [...document.querySelectorAll("#ordersView .status-tab[data-status]")];
let activeStatus = "ALL";
function showToast(message){const toast=document.querySelector("#toast");toast.textContent=message;toast.classList.add("open");setTimeout(()=>toast.classList.remove("open"),2400)}

const statusClass = status => status === "PAYMENT_PAID" ? "paid" : status === "REFUNDED" ? "refunded" : status === "PAYMENT_FAILED" ? "failed" : "pending";
const esimClass = status => status === "ACTIVE" || status === "ISSUED" ? "esim-active" : status === "NOT_ISSUED" || status === "UNKNOWN" ? "esim-none" : status === "FAILED" ? "failed" : "esim-neutral";
const orderStatusLabel = status => status;
const refundStatusLabel = status => status || "—";
const dateOnly = value => value && value !== "—" ? value.slice(0,10) : "";
const inDateRange = (value,start,end) => {
  if(!start&&!end)return true;
  const date=dateOnly(value);
  if(!date)return false;
  return (!start||date>=start)&&(!end||date<=end);
};

function renderOrders(){
  const query = document.querySelector("#searchInput").value.trim().toLowerCase();
  const fulfillment = document.querySelector("#fulfillmentFilter").value;
  const usageStatus = document.querySelector("#usageStatusFilter").value;
  const systemCheck = document.querySelector("#systemCheckFilter").value;
  const method = document.querySelector("#orderPaymentMethod").value;
  const start = document.querySelector("#orderStartDate").value;
  const end = document.querySelector("#orderEndDate").value;
  const filtered = orders.filter(row => {
    const statusMatch = activeStatus === "ALL" || row.status === activeStatus;
    const fulfillmentMatch = fulfillment === "ALL" || row.fulfillment === fulfillment;
    const usageMatch = usageStatus === "ALL" || row.usageStatus === usageStatus;
    const systemCheckMatch = systemCheck === "ALL" || (systemCheck === "CHECK_REQUIRED" ? row.issue : !row.issue);
    const methodMatch = method === "ALL" || row.method === method;
    const dateMatch = inDateRange(row.created,start,end);
    const searchMatch = !query || Object.values(row).join(" ").toLowerCase().includes(query);
    return statusMatch && fulfillmentMatch && usageMatch && systemCheckMatch && methodMatch && dateMatch && searchMatch;
  });
  body.innerHTML = filtered.map((row,index) => `<tr>
    <td><b>${row.order}</b><small>${row.paymentId}</small></td>
    <td>${row.created}</td>
    <td><b>${row.customer}</b><small>${row.product}</small></td>
    <td><span class="badge ${statusClass(row.status)}">${orderStatusLabel(row.status)}</span></td>
    <td><b>${row.method}</b><small>${row.paymentStatus}</small></td>
    <td><b>판매 ${row.sellingPrice}</b><small>포인트 ${row.pointsUsed}</small><small>실결제 ${row.amount} / ${row.usd}</small></td>
    <td>${row.paymentCompletedAt}</td>
    <td><span class="badge ${esimClass(row.fulfillment)}">${row.fulfillment}</span><small>사용 ${row.usageStatus}</small><small>${row.iccid}</small></td>
    <td>${row.issuedAt}</td>
    <td><span class="badge ${row.issue?"check-issue":"check-normal"}">${row.issue?"CHECK REQUIRED":"NORMAL"}</span></td>
    <td><button class="view-button" data-index="${orders.indexOf(row)}">View</button></td>
  </tr>`).join("") || `<tr><td colspan="11" style="text-align:center;padding:50px;color:#8a93a4">조건에 맞는 주문이 없습니다.</td></tr>`;
  document.querySelector("#visibleCount").textContent = filtered.length;
  document.querySelector("#showingCount").textContent = filtered.length;
  body.querySelectorAll(".view-button").forEach(button => button.addEventListener("click",()=>openDrawer(orders[Number(button.dataset.index)])));
}

function renderPayments(){
  const dateBasis=document.querySelector("#paymentDateBasis").value;
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
    const dateMatch=inDateRange(dateBasis==="COMPLETED"?row.paymentCompletedAt:row.created,start,end);
    const searchMatch=!query||`${row.paymentId} ${row.order}`.toLowerCase().includes(query);
    return methodMatch&&statusMatch&&verifyMatch&&dateMatch&&searchMatch;
  });
  document.querySelector("#paymentsBody").innerHTML=rows.map(row=>`<tr>
    <td><b>${row.paymentId}</b></td>
    <td><b>${row.order}</b></td>
    <td>${row.created}</td>
    <td>${row.method}</td>
    <td><b>${row.amount}</b></td>
    <td>${row.usd}</td>
    <td><span class="badge ${row.paymentStatus==="COMPLETED"?"paid":row.paymentStatus==="REFUNDED"?"refunded":row.paymentStatus==="FAILED"?"failed":"pending"}">${row.paymentStatus}</span></td>
    <td>${row.refund==="—"?"—":`<span class="badge refunded">${row.refund}</span>`}</td>
    <td>${row.paymentCompletedAt==="—"?"—":`${row.paymentCompletedAt}<small>Completed At</small>`}</td>
    <td><span class="badge ${row.issue?"check-issue":"check-normal"}">${row.verify}</span></td>
    <td><button class="view-button payment-view-button" data-index="${paymentRows.indexOf(row)}">View</button></td>
  </tr>`).join("")||`<tr><td colspan="11" style="text-align:center;padding:50px;color:#8a93a4">조건에 맞는 결제가 없습니다.</td></tr>`;
  document.querySelector("#paymentVisibleCount").textContent=rows.length;
  document.querySelector("#paymentNormalCount").textContent=rows.filter(row=>!row.issue).length;
  document.querySelector("#paymentIssueCount").textContent=rows.filter(row=>row.issue).length;
  document.querySelectorAll("#paymentsBody .payment-view-button").forEach(button=>button.addEventListener("click",()=>openDrawer(paymentRows[Number(button.dataset.index)])));
}

function renderEsims(){
  const fulfillment=document.querySelector("#esimFulfillmentFilter").value;
  const usageStatus=document.querySelector("#esimUsageStatusFilter").value;
  const product=document.querySelector("#esimProductFilter").value;
  const systemCheck=document.querySelector("#esimSystemCheckFilter").value;
  const query=document.querySelector("#esimManagerSearchInput").value.trim().toLowerCase();
  const start=document.querySelector("#esimStartDate").value;
  const end=document.querySelector("#esimEndDate").value;
  const rows=esimRows.filter(row=>{
    const fulfillmentMatch=fulfillment==="ALL"||row.fulfillment===fulfillment;
    const usageMatch=usageStatus==="ALL"||row.usageStatus===usageStatus;
    const productMatch=product==="ALL"||row.productGroup===product;
    const systemCheckMatch=systemCheck==="ALL"||(systemCheck==="CHECK_REQUIRED"?row.issue:!row.issue);
    const dateMatch=inDateRange(row.issuedAt==="—"?row.created:row.issuedAt,start,end);
    const searchMatch=!query||`${row.order} ${row.iccid} ${row.saleId} ${row.customer} ${row.product}`.toLowerCase().includes(query);
    return fulfillmentMatch&&usageMatch&&productMatch&&systemCheckMatch&&dateMatch&&searchMatch;
  });
  document.querySelector("#esimManagerBody").innerHTML=rows.map(row=>`<tr>
    <td><b>${row.esimId}</b><small>${row.order}</small></td>
    <td><b>${row.product}</b><small>${row.destination}</small></td>
    <td>${row.customer}</td>
    <td><span class="badge ${esimClass(row.fulfillment)}">${row.fulfillment}</span></td>
    <td><span class="badge ${esimClass(row.usageStatus)}">${row.usageStatus}</span></td>
    <td><b>${row.iccid}</b><small>${row.saleId}</small>${row.productGroup==="SKT"?"<small>SKT ICCID 예외</small>":""}</td>
    <td>${row.usage}</td>
    <td>${row.activatedAt}</td>
    <td>${row.expiresAt}</td>
    <td>${row.issuedAt}</td>
    <td>${row.statusCheckedAt||"—"}</td>
    <td><span class="badge ${row.issue?"check-issue":"check-normal"}">${row.issue?"CHECK REQUIRED":"NORMAL"}</span></td>
    <td><div class="row-actions"><button class="view-button esim-detail-button" data-index="${esimRows.indexOf(row)}">eSIM Detail</button><button class="mini-action esim-manager-view-button" data-index="${esimRows.indexOf(row)}">Order View</button>${row.fulfillment==="FAILED"?`<button class="mini-action esim-retry-button" data-retry-index="${esimRows.indexOf(row)}">Retry</button>`:""}</div></td>
  </tr>`).join("")||`<tr><td colspan="13" style="text-align:center;padding:50px;color:#8a93a4">조건에 맞는 eSIM이 없습니다.</td></tr>`;
  document.querySelector("#esimManagerVisibleCount").textContent=rows.length;
  document.querySelector("#esimManagerNormalCount").textContent=rows.filter(row=>!row.issue).length;
  document.querySelector("#esimManagerIssueCount").textContent=rows.filter(row=>row.issue).length;
  document.querySelectorAll("#esimManagerBody .esim-manager-view-button").forEach(button=>button.addEventListener("click",()=>openDrawer(esimRows[Number(button.dataset.index)])));
  document.querySelectorAll("#esimManagerBody .esim-detail-button").forEach(button=>button.addEventListener("click",()=>openEsimDetail(esimRows[Number(button.dataset.index)])));
  document.querySelectorAll("#esimManagerBody .esim-retry-button").forEach(button=>button.addEventListener("click",()=>{
    const row=esimRows[Number(button.dataset.retryIndex)];row.fulfillment="ISSUING";row.usageStatus="UNKNOWN";row.check="재발급 요청 접수";row.issue=false;renderEsims();showToast(`${row.order} eSIM 재발급을 요청했습니다.`);
  }));
}

let activeDrawerRow=null;
function openDrawer(row){
  activeDrawerRow=row;
  const settlementRow = Boolean(row.event);
  document.querySelector("#drawerOrder").textContent=row.order;
  document.querySelector("#detailOrderStatus").textContent=row.status||row.orderStatus||(row.refund==="COMPLETED"?"REFUNDED":"PAYMENT_PAID");
  const check=document.querySelector("#detailCheck");check.textContent=row.issue?`CHECK REQUIRED · ${row.check}`:"NORMAL";check.className=row.issue?"red":"green";
  document.querySelector("#detailCustomer").textContent=row.customer;
  document.querySelector("#detailProduct").textContent=row.product;
  document.querySelector("#detailCreatedAt").textContent=row.created||row.eventDate||"—";
  document.querySelector("#detailPaymentId").textContent=row.paymentId||"—";
  document.querySelector("#detailPayment").textContent=`${row.method||row.payment} · ${row.paymentStatus||"COMPLETED"}`;
  document.querySelector("#detailSellingPrice").textContent=row.sellingPrice||row.usd||row.paymentAmount||"—";
  document.querySelector("#detailPointsUsed").textContent=row.pointsUsed||(settlementRow?"—":"$3.00 USD");
  document.querySelector("#detailAmount").textContent=row.amount?`${row.amount} / ${row.usd}`:`${row.paymentAmount} / ${row.actualPaidUsd||"—"}`;
  document.querySelector("#detailCompletedAt").textContent=row.paymentCompletedAt||row.created||"—";
  const paymentAttempts=row.paymentAttempts||[{id:row.paymentId||"—",method:row.method||row.payment||"—",status:row.paymentStatus||"COMPLETED",amount:row.amount||row.paymentAmount||"—",completedAt:row.paymentCompletedAt||"—"}];
  const completedAttempts=paymentAttempts.filter(payment=>["COMPLETED","REFUNDED"].includes(payment.status));
  const ambiguousPayment=completedAttempts.length>1&&!row.purchasePaymentId;
  const resolvePaymentButton=document.querySelector("#resolvePurchasePayment");resolvePaymentButton.hidden=completedAttempts.length<2;resolvePaymentButton.textContent=row.purchasePaymentId?"대표 결제 변경":"대표 결제 지정";
  document.querySelector("#detailPaymentAttempts").innerHTML=paymentAttempts.map(payment=>{
    const selected=row.purchasePaymentId===payment.id;
    const successful=["COMPLETED","REFUNDED"].includes(payment.status);
    const warning=successful&&completedAttempts.length>1&&!selected;
    const label=selected?"구매 결제":warning?row.purchasePaymentId?"중복 결제":"대표 결제 지정 필요":payment.status==="FAILED"?"실패 시도":"결제 이력";
    const action=completedAttempts.length>1&&successful?`<label class="attempt-choice"><input type="radio" name="purchasePaymentChoice" value="${payment.id}" ${selected?"checked":""}><span>${selected?"구매 결제":"구매 결제 선택"}</span></label>`:`<em class="badge ${warning?"check-issue":selected?"paid":"esim-neutral"}">${label}</em>`;
    return `<div class="payment-attempt ${warning?"warning":""}"><div><b>${payment.id}</b><span>${payment.method} · ${payment.amount}</span></div><span>${payment.status}<br>${payment.completedAt||"—"}</span>${action}</div>`;
  }).join("");
  document.querySelector("#detailFulfillment").textContent=row.fulfillment||(row.issuedAt&&row.issuedAt!=="—"?"ISSUED":"NOT_ISSUED");
  document.querySelector("#detailUsageStatus").textContent=row.usageStatus||row.esim||"UNKNOWN";
  document.querySelector("#detailIccid").textContent=row.iccid;
  document.querySelector("#detailSaleId").textContent=row.saleId||"SALE-938294";
  document.querySelector("#detailIssuedAt").textContent=row.issuedAt||"—";
  const method=(row.method||row.payment||"").toUpperCase();
  const refundStatus=row.refund==="—"?"NONE":row.refund;
  document.querySelector("#detailRefundStatus").innerHTML=`<span class="badge ${refundStatus==="COMPLETED"?"refunded":refundStatus==="NONE"||refundStatus==="CANCELLED"?"esim-neutral":"pending"}">${refundStatusLabel(refundStatus)}</span>`;
  document.querySelector("#detailRefundSource").textContent=row.refundSource||"—";
  document.querySelector("#detailRefundStartedAt").textContent=row.refundStartedAt||"—";
  document.querySelector("#detailRefundAmount").textContent=row.refundAmount||(row.amount?`${row.amount} / ${row.usd}`:row.paymentAmount||"—");
  document.querySelector("#detailRefundType").textContent=method==="STARS"?"AUTOMATIC":"MANUAL";
  document.querySelector("#detailRefundCompletedAt").textContent=row.refundCompletedAt||"—";
  document.querySelector("#detailRefundReason").textContent=row.refundReason||"—";
  const paid=["COMPLETED","REFUNDED"].includes(row.paymentStatus||"COMPLETED");
  const refundable=paid&&refundStatus!=="COMPLETED"&&!ambiguousPayment;
  const refundButton=document.querySelector("#processRefund");refundButton.disabled=!refundable;refundButton.textContent=ambiguousPayment?"결제 지정 필요":refundStatus==="COMPLETED"?"Refund Completed":refundStatus==="REQUESTED"?"환불 완료 처리":"환불 처리 시작";
  const cancelRefundButton=document.querySelector("#cancelRefundProcess");cancelRefundButton.hidden=refundStatus!=="REQUESTED";
  document.querySelector("#refundActionGuide").textContent=ambiguousPayment?"성공 결제가 2건 이상입니다. 구매 성립 결제와 중복 결제를 먼저 구분하기 전에는 주문 환불을 시작할 수 없습니다.":refundStatus==="COMPLETED"?"환불이 완료되었습니다. 주문·결제는 REFUNDED이며 과거 결제 성공 이벤트와 완료일은 보존됩니다.":!paid?"결제가 완료되지 않아 환불을 실행할 수 없습니다.":refundStatus==="REQUESTED"?"환불 처리 중입니다. Stars는 자동환불 성공 후, TON·ForumPay는 외부 수동환불 증빙 확인 후 최종 완료합니다.":row.usageStatus==="ACTIVE"||row.usageStatus==="INSTALLED"?"사용·설치된 eSIM입니다. 환불과 eSIM·SkySIM 상태는 독립이며 관리자가 경고를 확인합니다.":"1차 확인 후 REFUND_REQUESTED(화면: 환불 처리 중)로 전환하며 이 단계에서는 실제 환불을 실행하지 않습니다.";
  document.querySelector("#supplierStatus").innerHTML=row.cancelStatus?`<span class="badge ${row.cancelStatus==="COMPLETED"?"paid":"pending"}">${cancelLabel(row.cancelStatus)}</span>`:`<span class="badge pending">NOT_RECORDED</span>`;
  document.querySelector("#supplierRequestedAt").textContent=row.cancelRequestedAt||"—";
  document.querySelector("#supplierCancelledAt").textContent=row.cancelDate||"—";
  document.querySelector("#supplierCredit").textContent=row.creditKrw&&row.creditKrw!=="—"?`${row.creditKrw}${row.creditUsd&&row.creditUsd!=="—"?` / ${row.creditUsd}`:""}`:"—";
  document.querySelector("#supplierCreditStatus").innerHTML=row.creditStatus==="APPLIED"?`<span class="badge paid">APPLIED</span><small>${row.creditDate||"—"}</small>`:row.creditStatus==="PENDING"?`<span class="badge pending">PENDING</span>`:"—";
  document.querySelector("#supplierCreditMeta").textContent=row.creditReference||"—";
  document.querySelector("#supplierAdmin").textContent=row.creditAdmin||(settlementRow?"admin01":"—");
  const timeline=document.querySelector("#detailTimeline");
  timeline.innerHTML=settlementRow?`${row.cancelDate?`<li><i></i><div><b>SkySIM 취소 완료</b><span>${row.cancelDate}</span></div></li>`:""}${row.refund==="COMPLETED"?`<li><i></i><div><b>관리자 환불 완료</b><span>${row.eventDate}</span></div></li>`:""}<li><i></i><div><b>eSIM 발급 완료</b><span>${row.issuedAt}</span></div></li><li><i></i><div><b>결제 완료</b><span>${row.paymentCompletedAt}</span></div></li><li><i></i><div><b>주문 생성</b><span>${row.created}</span></div></li>`:`${row.refund==="COMPLETED"?`<li><i></i><div><b>관리자 환불 완료</b><span>${row.refundCompletedAt||"—"}</span></div></li>`:row.refund==="REQUESTED"?`<li><i></i><div><b>환불 처리 시작</b><span>${row.refundStartedAt||"—"}</span></div></li>`:""}<li><i></i><div><b>eSIM 발급 ${row.fulfillment||"NOT_ISSUED"} · 사용 ${row.usageStatus||row.esim||"UNKNOWN"}</b><span>${row.issuedAt||"—"}</span></div></li>${row.paymentCompletedAt!=="—"?`<li><i></i><div><b>결제 완료</b><span>${row.paymentCompletedAt}</span></div></li>`:""}<li><i></i><div><b>주문 생성</b><span>${row.created}</span></div></li>`;
  document.querySelector("#orderDrawer").classList.add("open");
  document.querySelector("#drawerBackdrop").classList.add("open");
  document.querySelector("#orderDrawer").setAttribute("aria-hidden","false");
}
function closeDrawer(){document.querySelector("#orderDrawer").classList.remove("open");document.querySelector("#drawerBackdrop").classList.remove("open");document.querySelector("#orderDrawer").setAttribute("aria-hidden","true")}

function openRefundDialog(){
  if(!activeDrawerRow)return;
  const row=activeDrawerRow;const method=(row.method||row.payment||"").toUpperCase();
  const completing=row.refund==="REQUESTED";
  document.querySelector("#refundDialogTitle").textContent=completing?"환불 완료 확인":"환불 처리 시작 확인";
  document.querySelector("#refundDialogOrder").textContent=row.order;
  document.querySelector("#refundDialogMethod").textContent=method;
  document.querySelector("#refundDialogAmount").textContent=row.refundAmount||(row.amount?`${row.amount} / ${row.usd}`:row.paymentAmount||"—");
  document.querySelector("#refundDialogSource").textContent="ADMIN";
  document.querySelector("#refundReason").value=row.refundReason||"";
  const eligibility=document.querySelector("#refundEligibilityNotice");
  const usage=row.usageStatus||row.esim||"UNKNOWN";
  const fulfillment=row.fulfillment||(row.issuedAt&&row.issuedAt!=="—"?"ISSUED":"NOT_ISSUED");
  eligibility.innerHTML=(usage==="ACTIVE"||usage==="INSTALLED")?`<strong>eSIM 사용 상태 경고</strong><span>발급 ${fulfillment} · 사용 ${usage}입니다. 환불과 eSIM·SkySIM 처리는 독립이며 관리자가 확인합니다.</span>`:`<strong>eSIM 확인</strong><span>발급 ${fulfillment} · 사용 ${usage}입니다. SkySIM 취소 기록은 고객 환불을 자동 실행하지 않습니다.</span>`;
  document.querySelector("#refundConfirmed").checked=false;
  document.querySelector("#tonProofFields").hidden=!completing||method!=="TON";
  document.querySelector("#forumPayProofFields").hidden=!completing||method!=="FORUMPAY";
  const notice=document.querySelector("#refundMethodNotice");
  if(!completing)notice.innerHTML="<strong>1단계 · 환불 처리 시작</strong><span>확인 시 주문을 REFUND_REQUESTED(화면: 환불 처리 중)로 바꾸고 환불 원장을 생성합니다. 아직 실제 환불과 포인트 반환은 실행하지 않습니다.</span>";
  else if(method==="STARS")notice.innerHTML="<strong>2단계 · Stars 자동환불</strong><span>Telegram Stars 환불 API가 성공한 경우에만 주문·결제 REFUNDED, 환불 COMPLETED 및 포인트 1회 반환을 확정합니다.</span>";
  else if(method==="TON")notice.innerHTML="<strong>2단계 · TON 수동환불 완료</strong><span>관리자가 외부 송금을 끝낸 뒤 대상 지갑과 txHash를 입력하고 최종 완료합니다.</span>";
  else notice.innerHTML="<strong>2단계 · ForumPay 수동환불 완료</strong><span>외부 환불을 끝낸 뒤 포털 참조번호 또는 txid를 입력하고 최종 완료합니다.</span>";
  document.querySelector("#refundConfirmText").textContent=completing?`${method==="STARS"?"Stars 자동환불 실행":"외부 수동환불 완료와 증빙"}, 주문·결제 REFUNDED 및 포인트 1회 반환을 확인했습니다.`:"환불 처리 시작과 주문 REFUND_REQUESTED 전환을 확인했습니다. 실제 환불은 아직 실행되지 않습니다.";
  document.querySelector("#executeRefund").textContent=completing?"환불 완료 확정":"환불 처리 시작";
  document.querySelector("#refundDialog").classList.add("open");document.querySelector("#refundDialogBackdrop").classList.add("open");document.querySelector("#refundDialog").setAttribute("aria-hidden","false");
}
function closeRefundDialog(){document.querySelector("#refundDialog").classList.remove("open");document.querySelector("#refundDialogBackdrop").classList.remove("open");document.querySelector("#refundDialog").setAttribute("aria-hidden","true")}
function executeRefund(){
  if(!activeDrawerRow||!document.querySelector("#refundConfirmed").checked){showToast("환불 처리 확인 항목을 선택해 주세요.");return}
  const row=activeDrawerRow;const method=(row.method||row.payment||"").toUpperCase();
  const completing=row.refund==="REQUESTED";
  if(!completing){
    row.refund="REQUESTED";row.status="REFUND_REQUESTED";row.orderStatus="REFUND_REQUESTED";row.refundSource="ADMIN";row.refundStartedAt="2026-09-15 16:10";row.refundReason=document.querySelector("#refundReason").value.trim()||"관리자 환불 처리 시작";row.check="환불 처리 중";
    closeRefundDialog();openDrawer(row);renderOrders();renderPayments();showToast("환불 처리 중으로 전환했습니다. 이 단계에서는 실제 환불되지 않습니다.");return;
  }
  if(method==="TON"&&(!document.querySelector("#refundWalletAddress").value.trim()||!document.querySelector("#refundTxHash").value.trim())){showToast("TON 수신 지갑과 txHash가 모두 필요합니다.");return}
  if(method==="FORUMPAY"&&document.querySelector("#refundProofReference").value.trim().length<8){showToast("ForumPay 환불 증빙 참조번호를 8자 이상 입력해 주세요.");return}
  row.refund="COMPLETED";row.status="REFUNDED";row.orderStatus="REFUNDED";row.paymentStatus="REFUNDED";row.refundSource=row.refundSource&&row.refundSource!=="—"?row.refundSource:"ADMIN";row.refundStartedAt=row.refundStartedAt||"2026-09-15 16:10";row.refundCompletedAt="2026-09-15 16:12";row.refundAmount=row.refundAmount||(row.amount?`${row.amount} / ${row.usd}`:row.paymentAmount||"—");row.refundReason=document.querySelector("#refundReason").value.trim()||"관리자 환불 처리";row.refundEligible=false;row.check="환불 완료";
  closeRefundDialog();openDrawer(row);renderOrders();renderPayments();showToast(method==="STARS"?"Stars 자동환불이 완료되고 사용 포인트가 반환되었습니다.":`${method} 수동환불 증빙이 확인되어 완료 처리했습니다.`);
}

function cancelRefundProcess(){
  if(!activeDrawerRow||activeDrawerRow.refund!=="REQUESTED")return;
  const row=activeDrawerRow;row.refund="CANCELLED";row.status="PAYMENT_PAID";row.orderStatus="PAYMENT_PAID";row.refundCompletedAt="";row.refundReason="관리자 환불 처리 취소";row.check="환불 처리 취소";
  openDrawer(row);renderOrders();showToast("실제 환불 전 처리 단계를 취소했습니다. 결제 완료 상태로 복원했습니다.");
}

function openCancelDialog(){document.querySelector("#cancelDialog").classList.add("open");document.querySelector("#cancelDialogBackdrop").classList.add("open");document.querySelector("#cancelDialog").setAttribute("aria-hidden","false")}
function closeCancelDialog(){document.querySelector("#cancelDialog").classList.remove("open");document.querySelector("#cancelDialogBackdrop").classList.remove("open");document.querySelector("#cancelDialog").setAttribute("aria-hidden","true")}
const cancelLabel=status=>status||"NOT_RECORDED";
let selectedCreditRowIndex=null;
function syncCreditFields(){
  const applied=document.querySelector("#creditApplyStatus").value==="APPLIED";
  ["#creditAppliedDate","#creditSettlementMonth","#creditReference","#creditProcessedBy","#creditMemo"].forEach(selector=>document.querySelector(selector).disabled=!applied);
}
function openCreditDialog(index){
  selectedCreditRowIndex=index;
  const row=settlementRows[index];
  document.querySelector("#creditDialogOrder").textContent=row.order;
  document.querySelector("#creditDialogAmount").textContent=`${row.creditKrw&&row.creditKrw!=="—"?row.creditKrw:row.supplyKrw} / ${row.creditUsd&&row.creditUsd!=="—"?row.creditUsd:row.supplyUsd}`;
  document.querySelector("#creditApplyStatus").value=row.creditStatus==="APPLIED"?"APPLIED":"PENDING";
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
  row.creditStatus=applied?"APPLIED":"PENDING";
  row.creditDate=applied?date:"";
  row.creditMonth=applied?document.querySelector("#creditSettlementMonth").value:"";
  row.creditReference=applied?document.querySelector("#creditReference").value.trim():"";
  row.creditAdmin=applied?document.querySelector("#creditProcessedBy").value.trim():"";
  row.creditMemo=applied?document.querySelector("#creditMemo").value.trim():"";
  row.event=applied?"SUPPLIER_CREDIT_APPLIED":"ESIM_ISSUED_COST";
  row.eventDate=applied?date:row.issuedAt;
  if(applied){
    if(row.creditKrw&&row.creditKrw!=="—"&&!row.creditKrw.startsWith("−"))row.creditKrw=`−${row.creditKrw}`;
    if(row.creditUsd&&row.creditUsd!=="—"&&!row.creditUsd.startsWith("−"))row.creditUsd=`−${row.creditUsd}`;
  }else{
    row.creditKrw=(row.creditKrw||row.supplyKrw).replace(/^−/,"");
    row.creditUsd=(row.creditUsd||row.supplyUsd).replace(/^−/,"");
  }
  closeCreditDialog();renderSettlement();
  const toast=document.querySelector("#toast");toast.textContent=applied?"공급 크레딧을 정산 반영완료로 기록했습니다.":"공급 크레딧을 미반영 상태로 변경했습니다.";toast.classList.add("open");setTimeout(()=>toast.classList.remove("open"),2600);
}
function renderSettlement(){
  const basis=document.querySelector("#settlementDateBasis").value;
  const start=document.querySelector("#settlementStartDate").value;
  const end=document.querySelector("#settlementEndDate").value;
  const event=document.querySelector("#settlementEventFilter").value;
  const status=document.querySelector("#settlementCancelStatus").value;
  const credit=document.querySelector("#settlementCreditStatus").value;
  const product=document.querySelector("#settlementProductFilter").value;
  const query=document.querySelector("#settlementSearchInput").value.trim().toLowerCase();
  const dateOf=row=>basis==="CANCEL"?row.cancelDate:basis==="CREDIT"?row.creditDate:row.issuedAt;
  const rows=settlementRows.filter(row=>{
    const date=(dateOf(row)||"").slice(0,10);
    const dateMatch=Boolean(date)&&(!start||date>=start)&&(!end||date<=end);
    const eventMatch=event==="ALL"||row.event===event;
    const statusMatch=status==="ALL"||row.cancelStatus===status;
    const creditMatch=credit==="ALL"||row.creditStatus===credit;
    const productMatch=product==="ALL"||row.productGroup===product;
    const searchMatch=!query||`${row.order} ${row.iccid} ${row.saleId} ${row.product}`.toLowerCase().includes(query);
    return dateMatch&&eventMatch&&statusMatch&&creditMatch&&productMatch&&searchMatch;
  }).sort((a,b)=>(dateOf(b)||"").localeCompare(dateOf(a)||""));
  document.querySelector("#settlementBody").innerHTML=rows.map(row=>{
    const cancelText=row.cancelStatus||"NOT_REQUESTED";
    const creditText=row.creditStatus||"NA";
    return `<tr><td>${dateOf(row)||"—"}</td><td><span class="event ${row.event==="SUPPLIER_CREDIT_APPLIED"?"credit":"issue"}">${row.event}</span></td><td><b>${row.order}</b></td><td>${row.product}</td><td>${row.iccid}<small>${row.saleId}</small></td><td>${row.issuedAt}</td><td><b>${row.supplyKrw}</b></td><td>${row.supplyUsd}</td><td><span class="badge ${row.cancelStatus==="COMPLETED"?"paid":row.cancelStatus==="NOT_REQUESTED"?"esim-neutral":"pending"}">${cancelText}</span></td><td>${row.cancelDate||"—"}</td><td><span class="badge ${row.creditStatus==="APPLIED"?"paid":row.creditStatus==="PENDING"?"pending":"esim-neutral"}">${creditText}</span><small>${row.creditKrw||"—"}</small></td><td>${row.creditDate||"—"}</td><td>${row.creditReference||"—"}</td><td><div class="row-actions"><button class="view-button settlement-view-button" data-index="${settlementRows.indexOf(row)}">View</button>${row.cancelStatus==="COMPLETED"?`<button class="view-button credit-button" data-credit-index="${settlementRows.indexOf(row)}">${row.creditStatus==="APPLIED"?"Edit Credit":"Apply Credit"}</button>`:""}</div></td></tr>`;
  }).join("")||`<tr><td colspan="14" style="text-align:center;padding:50px;color:#8a93a4">조건에 맞는 공급사 정산 항목이 없습니다.</td></tr>`;
  document.querySelectorAll("#settlementBody .settlement-view-button").forEach(button=>button.addEventListener("click",()=>openDrawer(settlementRows[Number(button.dataset.index)])));
  document.querySelectorAll("#settlementBody .credit-button").forEach(button=>button.addEventListener("click",()=>openCreditDialog(Number(button.dataset.creditIndex))));
  const basisLabel=basis==="CANCEL"?"SkySIM 취소 완료일":basis==="CREDIT"?"공급 크레딧 반영일":"eSIM 발급일";
  document.querySelector(".settlement-scope").innerHTML=`<span class="pulse green-pulse"></span><strong>현재 조회:</strong> ${start}~${end} · ${basisLabel} 기준 · ${event==="ALL"?"전체 정산 이벤트":event} · ${credit==="ALL"?"전체 크레딧":credit}`;
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
      <section class="detail-section"><h3>Identifiers</h3><dl><div><dt>eSIM ID</dt><dd>${row.esimId}</dd></div><div><dt>Order</dt><dd>${row.order}</dd></div><div><dt>ICCID</dt><dd>${row.iccid}</dd></div><div><dt>SkySIM Sale ID</dt><dd>${row.saleId}</dd></div><div><dt>Activation Code</dt><dd>${row.activationCode}</dd></div><div><dt>Fulfillment</dt><dd>${row.fulfillment}</dd></div><div><dt>Usage Status</dt><dd>${row.usageStatus}</dd></div></dl></section>
      <section class="detail-section"><h3>QR / Install</h3><p class="section-note">${row.qrCode}</p></section>
      <section class="detail-section"><h3>Lifecycle & Usage</h3><dl><div><dt>Issued</dt><dd>${row.issuedAt}</dd></div><div><dt>Installed</dt><dd>${row.installedAt||"—"}</dd></div><div><dt>Activated</dt><dd>${row.activatedAt}</dd></div><div><dt>Expires</dt><dd>${row.expiresAt}</dd></div><div><dt>Usage</dt><dd>${row.usage}</dd></div><div><dt>Last Checked</dt><dd>${row.statusCheckedAt||"—"}</dd></div><div><dt>System Check</dt><dd>${row.issue?`CHECK REQUIRED · ${row.check}`:"NORMAL"}</dd></div></dl></section>
      <section class="detail-section"><h3>Technical Logs</h3><div class="key-value-list"><div><span>Usage Logs</span><strong>3 records</strong></div><div><span>Callback Logs</span><strong>2 valid / 0 invalid</strong></div><div><span>API Logs</span><strong>View latest supplier calls</strong></div></div></section>
    </div>
    <div class="action-strip"><button class="mini-action" data-preview-action="eSIM 사용량 로그를 조회합니다.">Usage Logs</button><button class="mini-action" data-preview-action="공급사 callback 로그를 조회합니다.">Callback Logs</button><button class="mini-action" data-preview-action="SkySIM API 호출 로그를 조회합니다.">API Logs</button>${row.fulfillment==="FAILED"?'<button class="mini-action" data-preview-action="eSIM 발급 재시도를 요청합니다.">Retry Issuance</button>':""}</div>`;
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
function openOrderStatusGuide(){document.querySelector("#orderStatusGuide").classList.add("open");document.querySelector("#orderStatusGuideBackdrop").classList.add("open");document.querySelector("#orderStatusGuide").setAttribute("aria-hidden","false");document.querySelector("#closeOrderStatusGuide").focus()}
function closeOrderStatusGuide(){document.querySelector("#orderStatusGuide").classList.remove("open");document.querySelector("#orderStatusGuideBackdrop").classList.remove("open");document.querySelector("#orderStatusGuide").setAttribute("aria-hidden","true")}
const operationalStatusGuides={
  payments:{title:"Payments 상태 가이드",eyebrow:"PAYMENTS REFERENCE",sections:[
    {title:"Payment Status",rows:[["PENDING","결제가 생성됐지만 아직 완료되지 않았습니다."],["PROOF_RECEIVED","클라이언트 결제 증빙을 수신했지만 서버 검증은 완료되지 않았습니다."],["ONCHAIN_PENDING","온체인 결제의 최종 확정을 기다리고 있습니다."],["TX_FOUND","결제 트랜잭션을 찾았지만 주문 귀속과 금액 검증이 완료되지 않았습니다."],["CONFIRMED","결제수단 검증은 통과했으며 완료 반영 단계입니다."],["COMPLETED","결제가 정상 완료되어 주문의 구매 성립 결제로 사용할 수 있습니다."],["FAILED","결제 검증 또는 처리에 실패했습니다."],["REFUNDED","해당 결제의 환불이 최종 완료되었습니다."]]},
    {title:"Refund Status",rows:[["—","해당 결제에 환불 기록이 없습니다."],["PROCESSING","관리자가 환불을 시작했으며 최종 완료 전입니다."],["COMPLETED","자동 또는 수동 환불 확인이 완료되었습니다."],["FAILED","환불 실행이나 외부 처리 확인에 실패했습니다."],["CANCELLED","진행 중이던 환불 처리를 취소하고 이력을 보존한 상태입니다."]]},
    {title:"Verification",rows:[["NORMAL","결제수단별 필수 검증을 모두 통과했습니다."],["CALLBACK_FAILED","결제 콜백의 서명·형식·처리에 문제가 있어 확인이 필요합니다."],["RETURNED/BOUNCED","TON 전송이 반송되었거나 수신 지갑에 최종 입금되지 않았습니다."],["AMOUNT_MISMATCH","주문 예상 금액과 실제 수령 금액이 일치하지 않습니다."],["ORDER_NOT_FOUND","결제 트랜잭션을 연결할 주문을 찾지 못했습니다."],["CHECK REQUIRED","NORMAL이 아닌 검증 결과를 묶어 조회하는 화면 필터입니다."]]}
  ]},
  esims:{title:"eSIM Management 상태 가이드",eyebrow:"ESIM REFERENCE",sections:[
    {title:"Fulfillment",rows:[["NOT_ISSUED","eSIM이 아직 생성되거나 발급되지 않았습니다."],["ISSUING","SkySIM 발급 요청이 처리 중입니다."],["ISSUED","eSIM 발급이 정상 완료되었습니다."],["FAILED","eSIM 발급에 실패해 관리자 확인 또는 재처리가 필요합니다."]]},
    {title:"Usage Status",rows:[["UNKNOWN","SkySIM 응답으로 사용 상태를 아직 판정할 수 없습니다."],["UNINSTALLED","사용자 기기에 eSIM 프로파일이 아직 설치되지 않았습니다."],["INSTALLED","프로파일은 설치됐지만 활성 사용은 확인되지 않았습니다."],["ACTIVE","eSIM이 활성화되어 사용 중인 상태입니다."],["EXPIRED","eSIM의 사용 가능 기간이 만료되었습니다."]]},
    {title:"System Check",rows:[["NORMAL","결제·발급·식별정보 대조에서 운영상 불일치가 발견되지 않았습니다."],["CHECK REQUIRED","결제와 발급 불일치, 발급 실패, 누락 식별정보 등 관리자가 상세 원인을 확인해야 합니다."]]}
  ]},
  settlement:{title:"Settlement 상태 가이드",eyebrow:"SETTLEMENT REFERENCE",sections:[
    {title:"Event",rows:[["ESIM_ISSUED_COST","eSIM 발급 성공으로 SkySIM 공급원가가 발생한 이벤트입니다."],["SUPPLIER_CREDIT_APPLIED","SkySIM 정산서에서 취소 공급 크레딧 차감이 실제 확인된 이벤트입니다."]]},
    {title:"SkySIM Cancel Status",rows:[["NOT_REQUESTED","SkySIM 취소 처리 기록이 없습니다."],["REQUESTED","관리자가 SkySIM 측에 취소를 요청한 것으로 기록했습니다."],["PROCESSING","SkySIM 취소 처리가 진행 중인 것으로 확인했습니다."],["COMPLETED","SkySIM에서 취소 완료를 확인하고 완료일을 기록했습니다."]]},
    {title:"Supply Credit Status",rows:[["NA","취소 공급 크레딧 대상이 아닙니다."],["PENDING","예상 공급 크레딧은 있으나 정산서 차감은 아직 확인되지 않았습니다."],["APPLIED","SkySIM 정산서에서 공급 크레딧 차감을 실제 확인했습니다."]]}
  ]}
};
function openOperationalStatusGuide(type){const guide=operationalStatusGuides[type];if(!guide)return;document.querySelector("#operationalStatusGuideTitle").textContent=guide.title;document.querySelector("#operationalStatusGuideEyebrow").textContent=guide.eyebrow;document.querySelector("#operationalStatusGuideBody").innerHTML=guide.sections.map(section=>`<section class="status-guide-section"><h3>${section.title}</h3>${section.rows.map(([status,description])=>`<div class="status-guide-row"><span class="status-token">${status}</span><p>${description}</p></div>`).join("")}</section>`).join("");document.querySelector("#operationalStatusGuide").classList.add("open");document.querySelector("#operationalStatusGuideBackdrop").classList.add("open");document.querySelector("#operationalStatusGuide").setAttribute("aria-hidden","false");document.querySelector("#closeOperationalStatusGuide").focus()}
function closeOperationalStatusGuide(){document.querySelector("#operationalStatusGuide").classList.remove("open");document.querySelector("#operationalStatusGuideBackdrop").classList.remove("open");document.querySelector("#operationalStatusGuide").setAttribute("aria-hidden","true")}

statusTabs.forEach(tab=>tab.addEventListener("click",()=>{statusTabs.forEach(x=>x.classList.remove("active"));tab.classList.add("active");activeStatus=tab.dataset.status;renderOrders()}));
document.querySelector("#searchButton").addEventListener("click",renderOrders);
document.querySelector("#searchInput").addEventListener("keydown",event=>{if(event.key==="Enter")renderOrders()});
document.querySelector("#fulfillmentFilter").addEventListener("change",renderOrders);
document.querySelector("#usageStatusFilter").addEventListener("change",renderOrders);
document.querySelector("#systemCheckFilter").addEventListener("change",renderOrders);
document.querySelectorAll("#orderStartDate,#orderEndDate,#orderPaymentMethod").forEach(element=>element.addEventListener("change",renderOrders));
document.querySelector("#openOrderStatusGuide").addEventListener("click",openOrderStatusGuide);
document.querySelector("#closeOrderStatusGuide").addEventListener("click",closeOrderStatusGuide);
document.querySelector("#orderStatusGuideDone").addEventListener("click",closeOrderStatusGuide);
document.querySelector("#orderStatusGuideBackdrop").addEventListener("click",closeOrderStatusGuide);
document.querySelectorAll("[data-status-guide]").forEach(button=>button.addEventListener("click",()=>openOperationalStatusGuide(button.dataset.statusGuide)));
document.querySelector("#closeOperationalStatusGuide").addEventListener("click",closeOperationalStatusGuide);
document.querySelector("#operationalStatusGuideDone").addEventListener("click",closeOperationalStatusGuide);
document.querySelector("#operationalStatusGuideBackdrop").addEventListener("click",closeOperationalStatusGuide);
document.querySelector("#paymentMethodFilter").addEventListener("change",renderPayments);
document.querySelector("#paymentStatusFilter").addEventListener("change",renderPayments);
document.querySelector("#paymentVerifyFilter").addEventListener("change",renderPayments);
document.querySelector("#paymentSearchButton").addEventListener("click",renderPayments);
document.querySelector("#paymentSearchInput").addEventListener("keydown",event=>{if(event.key==="Enter")renderPayments()});
document.querySelectorAll("#paymentStartDate,#paymentEndDate").forEach(element=>element.addEventListener("change",renderPayments));
document.querySelector("#esimFulfillmentFilter").addEventListener("change",renderEsims);
document.querySelector("#esimUsageStatusFilter").addEventListener("change",renderEsims);
document.querySelector("#esimProductFilter").addEventListener("change",renderEsims);
document.querySelector("#esimManagerSearchButton").addEventListener("click",renderEsims);
document.querySelector("#esimManagerSearchInput").addEventListener("keydown",event=>{if(event.key==="Enter")renderEsims()});
document.querySelectorAll("#esimStartDate,#esimEndDate").forEach(element=>element.addEventListener("change",renderEsims));
document.querySelector("#closeDrawer").addEventListener("click",closeDrawer);
document.querySelector("#drawerBackdrop").addEventListener("click",closeDrawer);
document.querySelector("#processRefund").addEventListener("click",openRefundDialog);
document.querySelector("#resolvePurchasePayment").addEventListener("click",()=>{
  if(!activeDrawerRow)return;
  const selectedId=document.querySelector('input[name="purchasePaymentChoice"]:checked')?.value;
  if(!selectedId){showToast("구매 성립 결제를 선택해 주세요.");return}
  const payment=activeDrawerRow.paymentAttempts?.find(item=>item.id===selectedId);
  if(!payment)return;
  activeDrawerRow.purchasePaymentId=payment.id;activeDrawerRow.paymentId=payment.id;activeDrawerRow.paymentStatus=payment.status;activeDrawerRow.method=payment.method;activeDrawerRow.amount=payment.amount;activeDrawerRow.usd=payment.usd||"—";activeDrawerRow.paymentCompletedAt=payment.completedAt;activeDrawerRow.check="중복 결제 1건 환불 필요";activeDrawerRow.issue=true;
  openDrawer(activeDrawerRow);renderOrders();showToast("프리뷰에서 구매 성립 결제를 지정했습니다. 실제 구현은 권한·감사로그·서버 검증을 적용합니다.");
});
document.querySelector("#cancelRefundProcess").addEventListener("click",cancelRefundProcess);
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
document.querySelector("#paymentDateBasis").addEventListener("change",renderPayments);
document.querySelector("#esimSystemCheckFilter").addEventListener("change",renderEsims);
document.querySelectorAll("#settlementDateBasis,#settlementStartDate,#settlementEndDate,#settlementEventFilter,#settlementCancelStatus,#settlementCreditStatus,#settlementProductFilter").forEach(element=>element.addEventListener("change",renderSettlement));
document.querySelector("#settlementSearchButton").addEventListener("click",renderSettlement);
document.querySelector("#settlementSearchInput").addEventListener("keydown",event=>{if(event.key==="Enter")renderSettlement()});
document.querySelectorAll("[data-admin-form]").forEach(item=>item.addEventListener("click",()=>openAdminActionDialog(item.dataset.adminForm)));
document.querySelector("#closeAdminActionDialog").addEventListener("click",closeAdminActionDialog);
document.querySelector("#adminActionCancel").addEventListener("click",closeAdminActionDialog);
document.querySelector("#adminActionDialogBackdrop").addEventListener("click",closeAdminActionDialog);
document.querySelector("#adminActionSave").addEventListener("click",()=>{const type=document.querySelector("#adminActionDialog").dataset.formType;closeAdminActionDialog();showToast(`${adminForms[type]?.title||"관리 항목"}을 저장했습니다.`)});
document.querySelector("#adminActionDelete").addEventListener("click",()=>{closeAdminActionDialog();showToast("삭제 확인 후 항목을 삭제하고 감사 로그를 남깁니다.")});
document.querySelectorAll(".status-tabs").forEach(group=>{if(group.closest("#ordersView"))return;group.querySelectorAll(".status-tab").forEach(tab=>tab.addEventListener("click",()=>{group.querySelectorAll(".status-tab").forEach(x=>x.classList.remove("active"));tab.classList.add("active");showToast(`${tab.textContent.trim()} 화면으로 전환했습니다.`)}))});
document.addEventListener("keydown",event=>{if(event.key==="Escape"){closeOperationalStatusGuide();closeOrderStatusGuide();closeAdminActionDialog();closeRefundDialog();closeCreditDialog();closeCancelDialog();closeDrawer()}});

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
