require ('custom-env').env(true, './env');
console.log(process.env.NODE_ENV)
console.log(process.env.PORT)
console.log(process.env.MONGODB_URI)
console.log(process.env.JWT_SECRET)
console.log(process.env.PAGINATION_LIMIT)
console.log(process.env.FCM_SERVER_KEY)
