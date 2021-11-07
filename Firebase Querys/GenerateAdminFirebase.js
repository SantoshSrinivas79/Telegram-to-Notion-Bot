module.exports = () => {

    const admin = require("firebase-admin")
    const serviceAccount = require("../telegram-to-notion-bot-firebase-adminsdk-sf8wd-672f975040.json")

    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount)
    });
    
    const db = admin.firestore();   

    return db
}