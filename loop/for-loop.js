/* জাভাস্ক্রিপ্ট এ ফর লুপ অন্যান্য কমন প্রোগ্রামিং ল্যাংগুয়েজের মতোই। ফর লুপ সাধারণত ইউজ করা হয় আপনি যদি কোন কাজ নির্দিষ্ট টাইম পর্যন্ত করতে চান। এখানে শুরুটা বলে দিবেন, তারপর কতক্ষন পর্যন্ত চলবে সেটা বলে দিবেন আর সবশেষে প্রতিটা স্টেপে কতটুকু যেতে চান

এখানে i এর ভ্যালু প্রথমে জিরো হিসেবে নিয়েছি তারপর একটা কন্ডিশন সেট করে দিয়েছি যে i এর ভ্যালু ১০ থেকে কম হতে হবে, তাহলেই ভিতরের স্টেটমেন্ট চলবে নাইলে যদি ১০ বা ১০ থেকে বেশী হয় তাহলে ভিতরের স্টেটমেন্ট আর চলবে না, এই লুপ থেকে বের হয়ে যাবে। তারপরে দিয়েছি i++ যার মানে হচ্ছে প্রতি স্টেপে ১ করে বাড়বে, মানেi = i + 1 অপারেটর সেকশনে নিশ্চয় এটা দেখেছেন। আর এখানে ধারাবাহিকতা মেইন্টেইন করতে হবে ঠিক যেভাবে একটার পর আরেকটা দেওয়া আছে। */

let array = [ 4, 34, 23, 64, 66, 32 ];

for (let i = 0; i < array.length; i++) {
    console.log('go ' + i + ' step');
}
