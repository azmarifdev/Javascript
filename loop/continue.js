/* এটাও এরকম লুপকে কন্ট্রোল করতে ব্যবহার করা হয়। কিন্তু এক্ষেত্ত্রে লুপ থেকে পুরোপুরি বের হয়ে না এসে জাস্ট সেই লুপটা স্কিপ করে যায়ঃ */

for (let i = 0; i < 10; i++) {
    if (i === 5) {
        console.log(i + ' is skipped');
        continue;
    }
    console.log('i is now at ' + i);
}
