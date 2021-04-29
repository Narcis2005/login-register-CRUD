 const resStatus= {
    succes(message, token = null) {
        return {
            status: "SUCCES",
            message: message,
            token
        }
    },
    fail(message) {
        return {
            status: "FAILED",
            message: message
        }
    }
}   
export default resStatus;