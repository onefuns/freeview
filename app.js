const orders = [
  {order:"ORD-260903-1142",created:"2026-09-03 10:20",customer:"@traveler01",product:"Japan 5GB · 30 Days",status:"PAYMENT_PAID",paymentStatus:"COMPLETED",method:"TON",paymentId:"ton-7fa9…ae20",sellingPrice:"$10.00",pointsUsed:"$3.00",amount:"7.23 TON",usd:"$7.00",paymentCompletedAt:"2026-09-03 10:22",fulfillment:"ISSUED",usageStatus:"ACTIVE",iccid:"898821…7641",saleId:"SALE-938294",issuedAt:"2026-09-03 10:24",refund:"—",refundSource:"—",refundStartedAt:"",refundAmount:"",refundCompletedAt:"",refundReason:"",refundEligible:true,check:"NORMAL",issue:false},
  {order:"ORD-260904-1188",created:"2026-09-04 09:18",customer:"@globalnomad",product:"Europe 10GB · 30 Days",status:"PAYMENT_PAID",paymentStatus:"COMPLETED",method:"ForumPay",paymentId:"fp-4ca2…9011",sellingPrice:"$20.00",pointsUsed:"$0.00",amount:"20.00 USDT",usd:"$20.00",paymentCompletedAt:"2026-09-04 09:20",fulfillment:"NOT_ISSUED",usageStatus:"UNKNOWN",iccid:"—",saleId:"—",issuedAt:"—",refund:"—",refundSource:"—",refundStartedAt:"",refundAmount:"",refundCompletedAt:"",refundReason:"",refundEligible:true,check:"결제 완료 · 미발급",issue:true},
  {order:"ORD-260905-1204",created:"2026-09-05 13:42",customer:"@seoultrip",product:"SKT Korea Unlimited",status:"PAYMENT_PAID",paymentStatus:"COMPLETED",method:"Stars",paymentId:"stars-91bd…a82c",sellingPrice:"$8.00",pointsUsed:"$0.00",amount:"560 XTR",usd:"$8.00",paymentCompletedAt:"2026-09-05 13:44",fulfillment:"ISSUED",usageStatus:"UNKNOWN",iccid:"SKTeSIM",saleId:"SALE-940120",issuedAt:"2026-09-05 13:47",refund:"—",refundSource:"—",refundStartedAt:"",refundAmount:"",refundCompletedAt:"",refundReason:"",refundEligible:true,check:"NORMAL · SKT 사용상태 확인불가",issue:false},
  {order:"ORD-260824-1027",created:"2026-08-24 09:18",customer:"@summertrip",product:"Thailand Unlimited · 10 Days",status:"REFUNDED",paymentStatus:"REFUNDED",method:"Stars",paymentId:"stars-8d1e…38ab",sellingPrice:"$12.00",pointsUsed:"$0.00",amount:"840 XTR",usd:"$12.00",paymentCompletedAt:"2026-08-24 09:20",fulfillment:"ISSUED",usageStatus:"UNINSTALLED",iccid:"898821…1129",saleId:"SALE-925011",issuedAt:"2026-08-24 09:24",refund:"COMPLETED",refundSource:"ADMIN",refundStartedAt:"2026-09-04 12:10",refundAmount:"840 XTR / $12.00",refundCompletedAt:"2026-09-05 15:30",refundReason:"관리자 환불 처리",refundEligible:false,check:"환불 완료 · SkySIM 미취소",issue:true},
  {order:"ORD-260901-1091",created:"2026-09-01 08:45",customer:"@tokyowalk",product:"Japan 3GB · 15 Days",status:"REFUND_REQUESTED",paymentStatus:"COMPLETED",method:"TON",paymentId:"ton-9011…3114",sellingPrice:"$4.20",pointsUsed:"$0.00",amount:"2.75 TON",usd:"$4.20",paymentCompletedAt:"2026-09-01 08:47",fulfillment:"ISSUED",usageStatus:"UNINSTALLED",iccid:"898821…7762",saleId:"SALE-933114",issuedAt:"2026-09-01 08:51",refund:"MANUAL_PENDING",refundSource:"ADMIN",refundStartedAt:"2026-09-04 12:10",refundAmount:"2.75 TON / $4.20",refundCompletedAt:"",refundReason:"관리자 수동환불 처리 중",refundEligible:true,check:"수동 환불 완료 증빙 대기",issue:true},
  {order:"ORD-260906-1240",created:"2026-09-06 16:05",customer:"@europass",product:"France 3GB · 15 Days",status:"PAYMENT_FAILED",paymentStatus:"FAILED",method:"TON",paymentId:"ton-a041…bb19",sellingPrice:"$3.10",pointsUsed:"$0.00",amount:"2.15 TON",usd:"$3.10",paymentCompletedAt:"—",fulfillment:"ISSUED",usageStatus:"ACTIVE",iccid:"898821…9934",saleId:"SALE-941240",issuedAt:"2026-09-06 16:12",refund:"—",refundSource:"—",refundStartedAt:"",refundAmount:"",refundCompletedAt:"",refundReason:"",refundEligible:false,check:"미결제 · eSIM 발급",issue:true},
  {order:"ORD-260907-1278",created:"2026-09-07 11:12",customer:"@latepayer",product:"USA 5GB · 15 Days",status:"PAYMENT_FAILED",paymentStatus:"COMPLETED",method:"Stars",paymentId:"stars-a112…91bc",sellingPrice:"$6.00",pointsUsed:"$1.00",amount:"350 XTR",usd:"$5.00",paymentCompletedAt:"2026-09-07 12:21",fulfillment:"NOT_ISSUED",usageStatus:"UNKNOWN",iccid:"—",saleId:"—",issuedAt:"—",refund:"—",refundSource:"—",refundStartedAt:"",refundAmount:"",refundCompletedAt:"",refundReason:"",refundEligible:false,check:"LATE_PAYMENT_AFTER_ORDER_FAILED · 자동 발급 차단",issue:true,latePayment:true}
];

const settlementRows = [
  {event:"PAYMENT",eventDate:"2026-09-05 13:44",order:"ORD-260905-1204",product:"SKT Korea Unlimited",customer:"@seoultrip",payment:"STARS",paymentId:"stars-91bd…a82c",amountUsd:"$8.00",nativeAmount:"560 XTR",esim:"UNINSTALLED",refundStatus:"—",iccid:"SKTeSIM"},
  {event:"PAYMENT",eventDate:"2026-09-04 09:20",order:"ORD-260904-1188",product:"Europe 10GB · 30 Days",customer:"@globalnomad",payment:"FORUMPAY",paymentId:"fp-4ca2…9011",amountUsd:"$20.00",nativeAmount:"20.00 USDT",esim:"—",refundStatus:"—",iccid:"—"},
  {event:"PAYMENT",eventDate:"2026-09-03 10:22",order:"ORD-260903-1142",product:"Japan 5GB · 30 Days",customer:"@traveler01",payment:"TON",paymentId:"ton-7fa9…ae20",amountUsd:"$7.00",nativeAmount:"7.23 TON",esim:"ACTIVE",refundStatus:"—",iccid:"898821…7641"},
  {event:"REFUND",eventDate:"2026-09-05 15:30",order:"ORD-260824-1027",product:"Thailand Unlimited · 10 Days",customer:"@summertrip",payment:"STARS",paymentId:"stars-8d1e…38ab",amountUsd:"$12.00",nativeAmount:"840 XTR",esim:"—",refundStatus:"COMPLETED",iccid:"898821…1129"},
  {event:"REFUND",eventDate:"2026-08-24 15:51",order:"ORD-260824-1032",product:"Thailand 1GB · 7 Days",customer:"@summertrip",payment:"STARS",paymentId:"stars-361d…1cfe",amountUsd:"$0.85",nativeAmount:"60 XTR",esim:"—",refundStatus:"COMPLETED",iccid:"898821…1129"}
];

const defaultRateSnapshot = row => {
  const method=(row.method||row.payment||"").toUpperCase();
  if(method==="STARS")return {rateSnapshot:"1 USD = 70 XTR",rateMeta:`SYSTEM SETTING · ${(row.created||row.eventDate||"—").slice(0,16)} UTC`};
  if(method==="TON")return {rateSnapshot:"1 TON = $0.9682 USD",rateMeta:`AUTO · ${(row.created||row.eventDate||"—").slice(0,16)} UTC`};
  if(method==="FORUMPAY")return {rateSnapshot:"1 USD = 1.0000 USDT",rateMeta:`FORUMPAY QUOTE · ${(row.created||row.eventDate||"—").slice(0,16)} UTC`};
  return {rateSnapshot:"—",rateMeta:"—"};
};

const paymentRows = [
  {paymentId:"stars-35a…308c",order:"ORD-260910-1422",created:"2026-09-10 09:03",paymentCompletedAt:"—",customer:"@newtraveler",product:"Japan 20GB · 30 Days",method:"Stars",amount:"3,820 XTR",usd:"$54.57",paymentStatus:"FAILED",refund:"—",verify:"CALLBACK_FAILED",issue:true,status:"PAYMENT_FAILED",pointsUsed:"$0.00 USD",esim:"NOT_ISSUED",iccid:"—",saleId:"—"},
  {paymentId:"ton-852b…4aa1",order:"ORD-260903-1261",created:"2026-09-03 18:28",paymentCompletedAt:"—",customer:"@coinroamer",product:"Europe 3GB · 15 Days",method:"TON",amount:"2.48 TON",usd:"$3.57",paymentStatus:"FAILED",refund:"—",verify:"RETURNED/BOUNCED",issue:true,status:"PAYMENT_FAILED",pointsUsed:"$0.00 USD",esim:"NOT_ISSUED",iccid:"—",saleId:"—"},
  {paymentId:"stars-361d…1cfe",order:"ORD-260824-1032",created:"2026-08-24 15:49",paymentCompletedAt:"2026-08-24 15:51",customer:"@summertrip",product:"Thailand 1GB · 7 Days",method:"Stars",amount:"60 XTR",usd:"$0.85",paymentStatus:"REFUNDED",refund:"COMPLETED",verify:"NORMAL",issue:false,status:"REFUNDED",pointsUsed:"$0.00 USD",esim:"UNINSTALLED",iccid:"898821…1129",saleId:"SALE-925011"},
  {paymentId:"ton-7718…3c28",order:"ORD-260822-0998",created:"2026-08-22 19:53",paymentCompletedAt:"2026-08-22 19:55",customer:"@onefundevops",product:"China 500MB · 1 Day",method:"TON",amount:"0.74 TON",usd:"$1.07",paymentStatus:"COMPLETED",refund:"—",verify:"NORMAL",issue:false,status:"PAYMENT_PAID",pointsUsed:"$0.00 USD",esim:"UNINSTALLED",iccid:"898821…6402",saleId:"SALE-911742"},
  {paymentId:"fp-a956…0844",order:"ORD-260819-0931",created:"2026-08-19 16:42",paymentCompletedAt:"2026-08-19 16:44",customer:"@forumtraveler",product:"USA 5GB · 15 Days",method:"ForumPay",amount:"10.04 USDT",usd:"$10.04",paymentStatus:"REFUNDED",refund:"COMPLETED",verify:"AMOUNT_MISMATCH",issue:true,status:"REFUNDED",pointsUsed:"$0.00 USD",esim:"UNINSTALLED",iccid:"898821…8841",saleId:"SALE-904844"},
  {paymentId:"fp-b583…5cc0",order:"ORD-260820-0955",created:"2026-08-20 16:27",paymentCompletedAt:"—",customer:"@globalnomad",product:"France 3GB · 15 Days",method:"ForumPay",amount:"4.57 USDT",usd:"$4.57",paymentStatus:"FAILED",refund:"—",verify:"ORDER_NOT_FOUND",issue:true,status:"PAYMENT_FAILED",pointsUsed:"$0.00 USD",esim:"NOT_ISSUED",iccid:"—",saleId:"—"},
  {paymentId:"stars-a112…91bc",order:"ORD-260907-1278",created:"2026-09-07 11:13",paymentCompletedAt:"2026-09-07 12:21",customer:"@latepayer",product:"USA 5GB · 15 Days",method:"Stars",amount:"350 XTR",usd:"$5.00",paymentStatus:"COMPLETED",refund:"—",verify:"LATE_PAYMENT_AFTER_ORDER_FAILED",issue:true,status:"PAYMENT_FAILED",pointsUsed:"$1.00 USD",esim:"NOT_ISSUED",iccid:"—",saleId:"—",latePayment:true}
];

[...orders,...paymentRows].forEach(row=>Object.assign(row,{notes:row.notes||[],roamingNumber:row.roamingNumber||null,...defaultRateSnapshot(row)}));
orders[2].roamingNumber="010-1234-5678";
orders[0].notes=[{category:"PAYMENT",text:"TON 결제와 발급 결과를 확인했습니다.",admin:"admin01",createdAt:"2026-09-03 10:30 UTC"}];

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
  document.querySelector("#drawerOrder").textContent=row.order;
  document.querySelector("#detailOrderStatus").textContent=row.status||row.orderStatus||(row.refund==="COMPLETED"?"REFUNDED":"PAYMENT_PAID");
  const check=document.querySelector("#detailCheck");check.textContent=row.issue?`CHECK REQUIRED · ${row.check}`:"NORMAL";check.className=row.issue?"red":"green";
  document.querySelector("#detailCustomer").textContent=row.customer;
  document.querySelector("#detailProduct").textContent=row.product;
  document.querySelector("#detailCreatedAt").textContent=row.created||row.eventDate||"—";
  document.querySelector("#detailPaymentId").textContent=row.paymentId||"—";
  document.querySelector("#detailPayment").textContent=`${row.method||row.payment} · ${row.paymentStatus||"COMPLETED"}`;
  document.querySelector("#detailSellingPrice").textContent=row.sellingPrice||row.usd||row.paymentAmount||"—";
  document.querySelector("#detailPointsUsed").textContent=row.pointsUsed||"$0.00 USD";
  document.querySelector("#detailAmount").textContent=row.amount?`${row.amount} / ${row.usd}`:`${row.paymentAmount} / ${row.actualPaidUsd||"—"}`;
  const rate=defaultRateSnapshot(row);
  document.querySelector("#detailRateSnapshot").textContent=row.rateSnapshot||rate.rateSnapshot;
  document.querySelector("#detailRateMeta").textContent=row.rateMeta||rate.rateMeta;
  document.querySelector("#detailCompletedAt").textContent=row.paymentCompletedAt||row.created||"—";
  const paymentAttempts=row.paymentAttempts||[{id:row.paymentId||"—",method:row.method||row.payment||"—",status:row.paymentStatus||"COMPLETED",amount:row.amount||row.paymentAmount||"—",completedAt:row.paymentCompletedAt||"—"}];
  const legacyMultiplePayment=paymentAttempts.length>1;
  document.querySelector("#detailPaymentAttempts").innerHTML=paymentAttempts.map(payment=>{
    const label=legacyMultiplePayment?"LEGACY PAYMENT HISTORY":payment.status==="FAILED"?"FAILED SESSION":"ORDER PAYMENT SESSION";
    const warning=legacyMultiplePayment||row.latePayment;
    const action=`<em class="badge ${warning?"check-issue":payment.status==="COMPLETED"?"paid":"esim-neutral"}">${label}</em>`;
    return `<div class="payment-attempt ${warning?"warning":""}"><div><b>${payment.id}</b><span>${payment.method} · ${payment.amount}</span></div><span>${payment.status}<br>${payment.completedAt||"—"}</span>${action}</div>`;
  }).join("");
  document.querySelector("#detailFulfillment").textContent=row.fulfillment||(row.issuedAt&&row.issuedAt!=="—"?"ISSUED":"NOT_ISSUED");
  document.querySelector("#detailUsageStatus").textContent=row.usageStatus||row.esim||"UNKNOWN";
  document.querySelector("#detailIccid").textContent=row.iccid;
  document.querySelector("#detailRoamingNumber").textContent=row.roamingNumber||"—";
  document.querySelector("#detailSaleId").textContent=row.saleId||"SALE-938294";
  document.querySelector("#detailIssuedAt").textContent=row.issuedAt||"—";
  const method=(row.method||row.payment||"").toUpperCase();
  const refundStatus=row.refund==="—"?"NONE":row.refund;
  document.querySelector("#detailRefundStatus").innerHTML=`<span class="badge ${refundStatus==="COMPLETED"?"refunded":refundStatus==="NONE"?"esim-neutral":"pending"}">${refundStatusLabel(refundStatus)}</span>`;
  document.querySelector("#detailRefundSource").textContent=row.refundSource||"—";
  document.querySelector("#detailRefundStartedAt").textContent=row.refundStartedAt||"—";
  document.querySelector("#detailRefundAmount").textContent=row.refundAmount||(row.amount?`${row.amount} / ${row.usd}`:row.paymentAmount||"—");
  document.querySelector("#detailRefundType").textContent=method==="STARS"?"AUTOMATIC":"MANUAL";
  document.querySelector("#detailRefundCompletedAt").textContent=row.refundCompletedAt||"—";
  document.querySelector("#detailRefundReason").textContent=row.refundReason||"—";
  const paid=["COMPLETED","REFUNDED"].includes(row.paymentStatus||"COMPLETED");
  const refundable=paid&&refundStatus!=="COMPLETED"&&!legacyMultiplePayment&&!row.latePayment;
  const refundInProgress=["REQUESTED","AUTO_PROCESSING","MANUAL_PENDING","FAILED"].includes(refundStatus);
  const refundButton=document.querySelector("#processRefund");refundButton.disabled=!refundable;refundButton.textContent=legacyMultiplePayment?"레거시 결제 확인 필요":row.latePayment?"지연 결제 대조 필요":refundStatus==="COMPLETED"?"Refund Completed":refundInProgress?(method==="STARS"?"Retry Stars Refund":"Complete Manual Refund"):"Process Refund";
  document.querySelector("#refundActionGuide").textContent=legacyMultiplePayment?"레거시 복수 결제 이력입니다. 자동 대표 결제 지정 없이 결제 대조 절차에서 실제 수령 건을 먼저 확인합니다.":row.latePayment?"실패 주문에 뒤늦게 수신된 결제입니다. 주문을 되살리거나 eSIM을 자동 발급하지 않고 결제 대조에서 처리합니다.":refundStatus==="COMPLETED"?"환불이 완료되었습니다. 주문·결제는 REFUNDED이며 과거 결제 성공 이벤트와 완료일은 보존됩니다. 완료 상태는 취소하거나 결제 완료로 복원할 수 없습니다.":!paid?"결제가 완료되지 않아 환불을 실행할 수 없습니다.":refundInProgress?"환불 처리 중입니다. Stars는 같은 환불 원장으로 자동환불을 재시도하고, TON·ForumPay는 외부 수동환불 증빙 확인 후 최종 완료합니다. 시작된 환불은 취소할 수 없습니다.":row.usageStatus==="ACTIVE"||row.usageStatus==="INSTALLED"?"사용·설치된 eSIM입니다. 환불과 eSIM·SkySIM 상태는 독립이며 관리자가 경고를 확인합니다. Process Refund에서 2단계 확인 후 진행합니다.":"Process Refund에서 주문·금액·eSIM 상태를 확인하고 2차 비가역 실행을 확인합니다. Stars는 즉시 자동환불하고 TON·ForumPay는 수동환불 대기로 전환합니다.";
  document.querySelector("#supplierStatus").innerHTML=row.cancelStatus?`<span class="badge ${row.cancelStatus==="COMPLETED"?"paid":"pending"}">${cancelLabel(row.cancelStatus)}</span>`:`<span class="badge pending">NOT_RECORDED</span>`;
  document.querySelector("#supplierRequestedAt").textContent=row.cancelRequestedAt||"—";
  document.querySelector("#supplierCancelledAt").textContent=row.cancelDate||"—";
  document.querySelector("#supplierCredit").textContent=row.creditKrw&&row.creditKrw!=="—"?`${row.creditKrw}${row.creditUsd&&row.creditUsd!=="—"?` / ${row.creditUsd}`:""}`:"—";
  document.querySelector("#supplierCreditStatus").innerHTML=row.creditStatus==="APPLIED"?`<span class="badge paid">APPLIED</span><small>${row.creditDate||"—"}</small>`:row.creditStatus==="PENDING"?`<span class="badge pending">PENDING</span>`:"—";
  document.querySelector("#supplierCreditMeta").textContent=row.creditReference||"—";
  document.querySelector("#supplierAdmin").textContent=row.creditAdmin||"—";
  renderOrderNotes();
  document.querySelector("#orderDrawer").classList.add("open");
  document.querySelector("#drawerBackdrop").classList.add("open");
  document.querySelector("#orderDrawer").setAttribute("aria-hidden","false");
}
function closeDrawer(){document.querySelector("#orderDrawer").classList.remove("open");document.querySelector("#drawerBackdrop").classList.remove("open");document.querySelector("#orderDrawer").setAttribute("aria-hidden","true")}

function escapeHtml(value){return String(value??"").replace(/[&<>"']/g,char=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"})[char])}
function renderOrderNotes(){
  const notes=activeDrawerRow?.notes||[];
  document.querySelector("#detailOrderNotes").innerHTML=notes.length?notes.map(note=>`<article class="order-note"><header><span class="status-token">${escapeHtml(note.category)}</span><small>${escapeHtml(note.admin)} · ${escapeHtml(note.createdAt)}</small></header><p>${escapeHtml(note.text)}</p></article>`).join(""):`<div class="empty-note">등록된 관리자 메모가 없습니다.</div>`;
}
function openOrderNoteDialog(){
  if(!activeDrawerRow)return;
  document.querySelector("#orderNoteText").value="";
  document.querySelector("#orderNoteCategory").value="GENERAL";
  document.querySelector("#orderNoteDialog").classList.add("open");document.querySelector("#orderNoteDialogBackdrop").classList.add("open");document.querySelector("#orderNoteDialog").setAttribute("aria-hidden","false");
}
function closeOrderNoteDialog(){document.querySelector("#orderNoteDialog").classList.remove("open");document.querySelector("#orderNoteDialogBackdrop").classList.remove("open");document.querySelector("#orderNoteDialog").setAttribute("aria-hidden","true")}
function saveOrderNote(){
  if(!activeDrawerRow)return;
  const text=document.querySelector("#orderNoteText").value.trim();
  if(!text){showToast("메모 내용을 입력해 주세요.");return}
  activeDrawerRow.notes=activeDrawerRow.notes||[];
  activeDrawerRow.notes.unshift({category:document.querySelector("#orderNoteCategory").value,text,admin:"admin01",createdAt:"2026-09-17 10:30 UTC"});
  closeOrderNoteDialog();renderOrderNotes();showToast("주문 메모를 저장했습니다. 주문 상태는 변경되지 않았습니다.");
}

function openRefundDialog(){
  if(!activeDrawerRow)return;
  const row=activeDrawerRow;const method=(row.method||row.payment||"").toUpperCase();
  const completing=["REQUESTED","AUTO_PROCESSING","MANUAL_PENDING","FAILED"].includes(row.refund);
  document.querySelector("#refundDialogTitle").textContent=completing?(method==="STARS"?"Stars 자동환불 재시도":"수동환불 완료 확인"):"Process Refund";
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
  if(!completing&&method==="STARS")notice.innerHTML="<strong>1차 정보 확인 → 2차 비가역 실행 확인</strong><span>최종 확인 시 환불 원장을 생성하고 AUTO_PROCESSING으로 전환한 뒤 Telegram Stars 환불 API를 즉시 실행합니다. 성공 응답 후에만 REFUNDED와 포인트 반환을 확정합니다.</span>";
  else if(!completing)notice.innerHTML=`<strong>1차 정보 확인 → 2차 처리 시작 확인</strong><span>최종 확인 시 주문을 REFUND_REQUESTED, 환불 원장을 MANUAL_PENDING으로 전환합니다. ${method} 실제 환불은 외부에서 수행하고 증빙 입력 후 완료합니다.</span>`;
  else if(method==="STARS")notice.innerHTML="<strong>Stars 자동환불 재시도</strong><span>기존 환불 원장을 재사용합니다. Telegram Stars 환불 API가 성공한 경우에만 주문·결제 REFUNDED, 환불 COMPLETED 및 포인트 1회 반환을 확정합니다.</span>";
  else if(method==="TON")notice.innerHTML="<strong>TON 수동환불 완료</strong><span>관리자가 외부 송금을 끝낸 뒤 대상 지갑과 txHash를 입력하고 최종 완료합니다.</span>";
  else notice.innerHTML="<strong>ForumPay 수동환불 완료</strong><span>외부 환불을 끝낸 뒤 포털 참조번호 또는 txid를 입력하고 최종 완료합니다.</span>";
  document.querySelector("#refundConfirmText").textContent=completing?`${method==="STARS"?"기존 원장의 Stars 자동환불 재시도":"외부 수동환불 완료와 증빙"}, 성공 시 주문·결제 REFUNDED 및 포인트 1회 반환을 확인했습니다.`:method==="STARS"?"주문·금액·eSIM 상태를 확인했으며 Stars 자동환불을 실제 실행합니다.":`${method} 수동환불 대기 전환과 이후 증빙 완료 절차를 확인했습니다.`;
  document.querySelector("#executeRefund").textContent=completing?(method==="STARS"?"Retry Stars Refund":"환불 완료 확정"):method==="STARS"?"Stars 자동환불 실행":"환불 처리 시작";
  document.querySelector("#refundDialog").classList.add("open");document.querySelector("#refundDialogBackdrop").classList.add("open");document.querySelector("#refundDialog").setAttribute("aria-hidden","false");
}
function closeRefundDialog(){document.querySelector("#refundDialog").classList.remove("open");document.querySelector("#refundDialogBackdrop").classList.remove("open");document.querySelector("#refundDialog").setAttribute("aria-hidden","true")}
function executeRefund(){
  if(!activeDrawerRow||!document.querySelector("#refundConfirmed").checked){showToast("환불 처리 확인 항목을 선택해 주세요.");return}
  const row=activeDrawerRow;const method=(row.method||row.payment||"").toUpperCase();
  const completing=["REQUESTED","AUTO_PROCESSING","MANUAL_PENDING","FAILED"].includes(row.refund);
  if(!completing){
    row.refund=method==="STARS"?"AUTO_PROCESSING":"MANUAL_PENDING";row.status="REFUND_REQUESTED";row.orderStatus="REFUND_REQUESTED";row.refundSource="ADMIN";row.refundStartedAt="2026-09-15 16:10";row.refundReason=document.querySelector("#refundReason").value.trim()||"관리자 환불 처리 시작";row.check=method==="STARS"?"Stars 자동환불 처리 중":"수동 환불 완료 증빙 대기";
    if(method!=="STARS"){closeRefundDialog();openDrawer(row);renderOrders();renderPayments();showToast(`${method} 수동환불 대기로 전환했습니다. 외부 환불 완료 후 증빙을 입력해 주세요.`);return}
  }
  if(method==="TON"&&(!document.querySelector("#refundWalletAddress").value.trim()||!document.querySelector("#refundTxHash").value.trim())){showToast("TON 수신 지갑과 txHash가 모두 필요합니다.");return}
  if(method==="FORUMPAY"&&document.querySelector("#refundProofReference").value.trim().length<8){showToast("ForumPay 환불 증빙 참조번호를 8자 이상 입력해 주세요.");return}
  row.refund="COMPLETED";row.status="REFUNDED";row.orderStatus="REFUNDED";row.paymentStatus="REFUNDED";row.refundSource=row.refundSource&&row.refundSource!=="—"?row.refundSource:"ADMIN";row.refundStartedAt=row.refundStartedAt||"2026-09-15 16:10";row.refundCompletedAt="2026-09-15 16:12";row.refundAmount=row.refundAmount||(row.amount?`${row.amount} / ${row.usd}`:row.paymentAmount||"—");row.refundReason=document.querySelector("#refundReason").value.trim()||"관리자 환불 처리";row.refundEligible=false;row.check="환불 완료";
  closeRefundDialog();openDrawer(row);renderOrders();renderPayments();showToast(method==="STARS"?"Stars 자동환불이 완료되고 사용 포인트가 반환되었습니다.":`${method} 수동환불 증빙이 확인되어 완료 처리했습니다.`);
}

function openCancelDialog(){document.querySelector("#cancelDialog").classList.add("open");document.querySelector("#cancelDialogBackdrop").classList.add("open");document.querySelector("#cancelDialog").setAttribute("aria-hidden","false")}
function closeCancelDialog(){document.querySelector("#cancelDialog").classList.remove("open");document.querySelector("#cancelDialogBackdrop").classList.remove("open");document.querySelector("#cancelDialog").setAttribute("aria-hidden","true")}
const cancelLabel=status=>status||"NOT_RECORDED";
function renderSettlement(){
  const start=document.querySelector("#settlementStartDate").value;
  const end=document.querySelector("#settlementEndDate").value;
  const event=document.querySelector("#settlementEventFilter").value;
  const method=document.querySelector("#settlementMethodFilter").value;
  const esim=document.querySelector("#settlementEsimFilter").value;
  const product=document.querySelector("#settlementProductInput").value.trim().toLowerCase();
  const sort=document.querySelector("#settlementSort").value;
  const query=document.querySelector("#settlementSearchInput").value.trim().toLowerCase();
  const rows=settlementRows.filter(row=>{
    const date=(row.eventDate||"").slice(0,10);
    const dateMatch=Boolean(date)&&(!start||date>=start)&&(!end||date<=end);
    const eventMatch=event==="ALL"||row.event===event;
    const methodMatch=method==="ALL"||row.payment===method;
    const esimMatch=esim==="ALL"||row.esim===esim;
    const productMatch=!product||row.product.toLowerCase().includes(product);
    const searchMatch=!query||`${row.order} ${row.customer} ${row.paymentId} ${row.iccid} ${row.product}`.toLowerCase().includes(query);
    return dateMatch&&eventMatch&&methodMatch&&esimMatch&&productMatch&&searchMatch;
  }).sort((a,b)=>{
    if(sort==="DATE_ASC")return (a.eventDate||"").localeCompare(b.eventDate||"");
    if(sort==="AMOUNT_DESC"||sort==="AMOUNT_ASC"){
      const av=Number(String(a.amountUsd).replace(/[^0-9.-]/g,""));const bv=Number(String(b.amountUsd).replace(/[^0-9.-]/g,""));
      return sort==="AMOUNT_DESC"?bv-av:av-bv;
    }
    if(sort==="ORDER_ASC")return a.order.localeCompare(b.order);
    return (b.eventDate||"").localeCompare(a.eventDate||"");
  });
  document.querySelector("#settlementBody").innerHTML=rows.map(row=>{
    return `<tr><td><span class="event ${row.event==="REFUND"?"credit":"issue"}">${row.event}</span></td><td><b>${row.order}</b><small>${row.paymentId}</small></td><td>${row.product}</td><td>${row.customer}</td><td>${row.payment}</td><td><b>${row.amountUsd}</b><small>${row.nativeAmount}</small></td><td>${row.esim}</td><td>${row.eventDate}</td><td>${row.refundStatus}</td></tr>`;
  }).join("")||`<tr><td colspan="9" style="text-align:center;padding:50px;color:#8a93a4">조건에 맞는 정산 이벤트가 없습니다.</td></tr>`;
  document.querySelector(".settlement-scope").innerHTML=`<span class="pulse green-pulse"></span><strong>현재 조회:</strong> ${start}~${end} · ${method==="ALL"?"전체 결제수단":method} · ${event==="ALL"?"전체 이벤트":event}`;
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
    {title:"Refund Status",rows:[["—","해당 결제에 환불 기록이 없습니다."],["REQUESTED","관리자가 2단계 확인 후 환불 처리를 시작했습니다."],["UNDER_REVIEW","환불 가능 여부와 결제 정보를 검토 중입니다."],["AUTO_PROCESSING","Stars 자동환불 결과를 기다리고 있습니다."],["MANUAL_PENDING","TON 또는 ForumPay 외부 수동환불 완료 증빙을 기다리고 있습니다."],["PARTIALLY_COMPLETED","일부 금액만 환불되어 추가 처리가 필요합니다."],["FAILED","환불 실행이나 외부 처리 확인에 실패해 재검토가 필요합니다."],["COMPLETED","자동 또는 수동 환불 확인이 완료된 종단 상태입니다."]]},
    {title:"Verification",rows:[["NORMAL","결제수단별 필수 검증을 모두 통과했습니다."],["CALLBACK_FAILED","결제 콜백의 서명·형식·처리에 문제가 있어 확인이 필요합니다."],["RETURNED/BOUNCED","TON 전송이 반송되었거나 수신 지갑에 최종 입금되지 않았습니다."],["AMOUNT_MISMATCH","주문 예상 금액과 실제 수령 금액이 일치하지 않습니다."],["ORDER_NOT_FOUND","결제 트랜잭션을 연결할 주문을 찾지 못했습니다."],["LATE_PAYMENT_AFTER_ORDER_FAILED","실패 종단 주문에서 뒤늦게 확인된 결제입니다. 주문 복원과 eSIM 자동 발급 없이 결제 대조가 필요합니다."],["CHECK REQUIRED","NORMAL이 아닌 검증 결과를 묶어 조회하는 화면 필터입니다."]]}
  ]},
  esims:{title:"eSIM Management 상태 가이드",eyebrow:"ESIM REFERENCE",sections:[
    {title:"Fulfillment",rows:[["NOT_ISSUED","eSIM이 아직 생성되거나 발급되지 않았습니다."],["ISSUING","SkySIM 발급 요청이 처리 중입니다."],["ISSUED","eSIM 발급이 정상 완료되었습니다."],["FAILED","eSIM 발급에 실패해 관리자 확인 또는 재처리가 필요합니다."]]},
    {title:"Usage Status",rows:[["UNKNOWN","SkySIM 응답으로 사용 상태를 아직 판정할 수 없습니다."],["UNINSTALLED","사용자 기기에 eSIM 프로파일이 아직 설치되지 않았습니다."],["INSTALLED","프로파일은 설치됐지만 활성 사용은 확인되지 않았습니다."],["ACTIVE","eSIM이 활성화되어 사용 중인 상태입니다."],["EXPIRED","eSIM의 사용 가능 기간이 만료되었습니다."]]},
    {title:"System Check",rows:[["NORMAL","결제·발급·식별정보 대조에서 운영상 불일치가 발견되지 않았습니다."],["CHECK REQUIRED","결제와 발급 불일치, 발급 실패, 누락 식별정보 등 관리자가 상세 원인을 확인해야 합니다."]]}
  ]},
  settlement:{title:"Settlement 상태 가이드",eyebrow:"SETTLEMENT REFERENCE",sections:[
    {title:"Event",rows:[["PAYMENT","성공 또는 환불된 결제 원장의 결제 완료 이벤트이며 Event Date는 결제 완료일입니다."],["REFUND","완료된 환불 결제 항목이며 Event Date는 환불 완료일입니다."]]},
    {title:"Totals",rows:[["PAYMENT TOTAL","선택한 조건의 결제 이벤트 USD 합계입니다."],["REFUND TOTAL","완료된 환불 USD 합계를 음수로 표시합니다."],["NET CASH","Payment Total + Refund Total입니다."],["NET MARGIN","Net Cash - Supply Cost + Supply Credit입니다."]]}
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
document.querySelector("#closeRefundDialog").addEventListener("click",closeRefundDialog);
document.querySelector("#refundDialogCancel").addEventListener("click",closeRefundDialog);
document.querySelector("#refundDialogBackdrop").addEventListener("click",closeRefundDialog);
document.querySelector("#executeRefund").addEventListener("click",executeRefund);
document.querySelector("#recordSupplierCancel").addEventListener("click",openCancelDialog);
document.querySelector("#closeCancelDialog").addEventListener("click",closeCancelDialog);
document.querySelector("#cancelDialogCancel").addEventListener("click",closeCancelDialog);
document.querySelector("#cancelDialogBackdrop").addEventListener("click",closeCancelDialog);
document.querySelector("#saveSupplierCancel").addEventListener("click",saveSupplierCancellation);
document.querySelector("#addOrderNote").addEventListener("click",openOrderNoteDialog);
document.querySelector("#closeOrderNoteDialog").addEventListener("click",closeOrderNoteDialog);
document.querySelector("#orderNoteDialogCancel").addEventListener("click",closeOrderNoteDialog);
document.querySelector("#orderNoteDialogBackdrop").addEventListener("click",closeOrderNoteDialog);
document.querySelector("#saveOrderNote").addEventListener("click",saveOrderNote);
document.querySelector("#paymentDateBasis").addEventListener("change",renderPayments);
document.querySelector("#esimSystemCheckFilter").addEventListener("change",renderEsims);
document.querySelectorAll("#settlementStartDate,#settlementEndDate,#settlementMethodFilter,#settlementEsimFilter,#settlementEventFilter,#settlementSort").forEach(element=>element.addEventListener("change",renderSettlement));
document.querySelector("#settlementSearchButton").addEventListener("click",renderSettlement);
document.querySelector("#settlementSearchInput").addEventListener("keydown",event=>{if(event.key==="Enter")renderSettlement()});
document.querySelector("#settlementProductInput").addEventListener("keydown",event=>{if(event.key==="Enter")renderSettlement()});
document.querySelectorAll("[data-admin-form]").forEach(item=>item.addEventListener("click",()=>openAdminActionDialog(item.dataset.adminForm)));
document.querySelector("#closeAdminActionDialog").addEventListener("click",closeAdminActionDialog);
document.querySelector("#adminActionCancel").addEventListener("click",closeAdminActionDialog);
document.querySelector("#adminActionDialogBackdrop").addEventListener("click",closeAdminActionDialog);
document.querySelector("#adminActionSave").addEventListener("click",()=>{const type=document.querySelector("#adminActionDialog").dataset.formType;closeAdminActionDialog();showToast(`${adminForms[type]?.title||"관리 항목"}을 저장했습니다.`)});
document.querySelector("#adminActionDelete").addEventListener("click",()=>{closeAdminActionDialog();showToast("삭제 확인 후 항목을 삭제하고 감사 로그를 남깁니다.")});
document.querySelectorAll(".status-tabs").forEach(group=>{if(group.closest("#ordersView"))return;group.querySelectorAll(".status-tab").forEach(tab=>tab.addEventListener("click",()=>{group.querySelectorAll(".status-tab").forEach(x=>x.classList.remove("active"));tab.classList.add("active");showToast(`${tab.textContent.trim()} 화면으로 전환했습니다.`)}))});
document.addEventListener("keydown",event=>{if(event.key==="Escape"){closeOperationalStatusGuide();closeOrderStatusGuide();closeAdminActionDialog();closeRefundDialog();closeOrderNoteDialog();closeCancelDialog();closeDrawer()}});

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
