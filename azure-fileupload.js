
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').load();
}

var azure = require('azure-storage');
var blobService = azure.createBlobService();

var startDate = new Date();
var expiryDate = new Date(startDate);
expiryDate.setMinutes(startDate.getMinutes() + 100);
startDate.setMinutes(startDate.getMinutes() - 100);

var sharedAccessPolicy = {
  AccessPolicy: {
    Permissions: azure.BlobUtilities.SharedAccessPermissions.WRITE,
    Start: startDate,
    Expiry: expiryDate
  }
};
console.log(`sharedAccessPolicy ${sharedAccessPolicy}`);

const containerName = `uploads`;
const blobName = `abc.jpeg`;
var token = blobService.generateSharedAccessSignature(containerName, blobName, sharedAccessPolicy);
var sasUrl = blobService.getUrl(containerName, blobName, token);

console.log(`token ${token}`);
console.log(`sasUrl ${sasUrl}`);


// x-ms-version: 2018-03-28
// x-ms-date: Tue, 12 Sep 2018 23:38:35 GMT 
// Authorization: SharedKey myaccount:Z1lTLDwtq5o1UYQluucdsXk6/iB7YxEu0m6VofAEkUE=  
// Host: myaccount.blob.core.windows.net

// PUT https://myaccount.blob.core.windows.net/pictures/photo.jpg?sv=2015-02-21&st=2015-07-01T08%3a49Z&se=2015-07-02T08%3a49Z&  
// sr=c&sp=w&si=YWJjZGVmZw%3d%3d&sig=Rcp6gQRfV7WDlURdVTqCa%2bqEArnfJxDgE%2bKH3TCChIs%3d HTTP/1.1  
// Host: myaccount.blob.core.windows.net  

// Content-Length: 12  

// Hello World.


// curl -X PUT "https://filestoragefms.blob.core.windows.net/uploads/abc.jpeg?sv=2018-03-28&ss=bfqt&srt=sco&sp=rwdlacup&se=2019-02-20T16:26:54Z&st=2019-02-20T08:26:54Z&spr=https&sig=C%2FGbcA1m4ETSdh%2FmF29WPTUChjECjFeiD64Uac4l020%3D" -F 'file=@/home/ag/Pictures/jitu.jpeg' -H "x-ms-blob-type: Blockblob"
// curl -X PUT "https://filestoragefms.blob.core.windows.net/uploads/abc.jpeg?sv=2018-03-28&ss=bfqt&srt=sco&sp=rwdlacup&se=2019-02-20T16:26:54Z&st=2019-02-20T08:26:54Z&spr=https&sig=C%2FGbcA1m4ETSdh%2FmF29WPTUChjECjFeiD64Uac4l020%3D" --data-binary "/home/ag/Pictures/jitu.jpeg" -H "x-ms-blob-type: Blockblob" -H "Content-Type: application/octet-stream"
