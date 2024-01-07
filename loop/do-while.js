/* ডু হোয়াইল এ আপনার লুপ এ কোনোরকম কন্ডিশন যাচাই না করেই প্রথম একবার ভিতরের স্টেটমেন্ট এক্সিকিউট করা হবে তারপর আপনার কন্ডিশন চ্যাক করা হবে। যদি কন্ডিশন সত্য হয় তাহলে আবার লুপের ভিতরের জিনিস এক্সিকিউট হবে আর এভাবে চলতে থাকবে যতক্ষন না আপনার কন্ডিশন মিথ্যা না হবে। কন্ডিশন মিথ্যা হলে লুপ আর চলবে না। */

function hudai(params) {
    console.log(params);
}

// var num;
// do {
//     console.log('Inside the loop');
//     num = prompt('Enter the number');
// } while (num < 10);
// {
//     console.log('from while');
// }
// console.log('outside the number');

hudai(55);
