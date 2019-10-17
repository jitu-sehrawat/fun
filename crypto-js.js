const CryptoJS = require('crypto-js');
const key = 'ASDFGHJKLASDFGHJ';
// const key = '%D*G-KaPdSgVkYp3s6v9y$B?E(H+MbQeThWmZq4t7w!z%C*F)J@NcRfUjXn2r5u8';
//const data = {
//   searchData: '',
//   pageNumber: '1',
//   limit: '10'
// };

// const data = {
//	"email": "msil@gmail.com",
//	"password": "pass123"
//};
const data = {
	"mobileNumber": "8564024871",
	"deviceId": "deviceTokenString"
};
 
 const ciphertext = CryptoJS.AES.encrypt(JSON.stringify(data), key);

 console.log(`Login: `,ciphertext.toString());
	


const myData = {
    "encryptData": "Am6iCSBKPbeVJuTjXKHXw2mNri50VsG+QJ+FdCp5WWhhNmXcwqRoeuskRGW8xKJ1w/IHD0jKgko4t/P/GJbVLg=="
}	

 
 const bytes = CryptoJS.AES.decrypt(myData.encryptData.toString(), key);
 const plaintext = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

 console.log(`plaintext: `,JSON.stringify(plaintext));
