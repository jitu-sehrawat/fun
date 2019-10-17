const crypto = require('crypto');
const encryptionConfig = {
  algorithm: 'aes-128-cbc',
  key: 'S#j9}rF1gMv-?c-g',
  iv: Buffer.alloc(16, 0)
};

const decrypt = data => {
  const decipher = crypto.createDecipheriv(
    encryptionConfig.algorithm,
    encryptionConfig.key,
    encryptionConfig.iv.fill(0)
  );
  let decrypted = decipher.update(data.encryptData, 'base64', 'utf8');

  decrypted += decipher.final('utf8');
  console.log(data.encryptData);
  console.log(decrypted);
};

const encrypt = data => {
  if (typeof data === 'object') {
    data = JSON.stringify(data);
  }

  const cipher = crypto.createCipheriv(
    encryptionConfig.algorithm,
    encryptionConfig.key,
    encryptionConfig.iv.fill(0)
  );
  let encrypted = cipher.update(data, 'utf8', 'base64');

  encrypted += cipher.final('base64');
  console.log(encrypted);
  decrypt({
    "encryptData": "PhyutGPssyAAOIyXvbs8BTAFnKgMunXHtkWMi7BL6cO6GwSyPFZDVJClo/WyHFcPhbLRG/dOZMFDDGmsKsaasWCTFk+oM4dxOEExta5BlRmEB5aIflgRnnQUMWbMEZa1jmpsVx+UfFnyXHRHullws5SHSpZmNaMy7JiEiLVhGXb9wT5QHXiT7i4Nfh3KyoUMm9mkAjf2NCZoadW948+DaomYhmXmGEaLTrOZWQmtwkHcirGvkLX7kGjwy+bNGDI/7TN5GN3UjYnwP25ys/JAclHYK/NOd9VNuq7BUYFJIo96AgRMZuiYLBv19kqG2BvtqEbk2iCXPcR5hz7XKiQiAvDdH/N6ZeXe1dpsGbg3tQRJjdU4BaIh3FMfrVqXzmGl9GRmmlHEZHtLnLhokKx05/EEqEQsUnE46ZX7uE5JqYcYSWy0mTk1ztlOnUH19jXj1HuTQ8RBM19cbZkvXTWjwQtr+ohoyiBYw5fV/KA/EkllWyUUlLEeHU98Unvhxhv5oNznryUP6c1S4OAOfGgphq17IsGFy3iKL55/+Fl22N/8EFyESWQewGUojkfYw4zMy9/TqUmugzdSe++NDfakcAXtRLoUgMpaos2nzMfSVp3K4NLUsHnKTB12J/NJoNweVhE+b3idKak0AKkIPEyFIOBAClJpw08DsyOxXIpRlm68ZjAVGg7ABTIzfaamZiah"
});
};

encrypt({
	"mobileNumber": "8586879257",
	"deviceId": "mobiledeviceId"
});
