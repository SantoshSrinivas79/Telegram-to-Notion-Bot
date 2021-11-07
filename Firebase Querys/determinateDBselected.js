module.exports = async (db, id) => {
    
    try {
        
        const docRef = db.collection('users').doc(id.toString())
        const doc = await docRef.get()

        const data = doc.data().dbSelected

        return data

    } catch (error) {
        
        console.log(error)
    }
}