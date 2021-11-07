module.exports = async (db, id) => {
    
    try {

        console.log(db)
        
        const documentRef = await db.collection("users").doc(id.toString()).set({id: id.toString(), dbSelected: false})
        
    } catch (error) {
        
        console.log(error)
    }
}