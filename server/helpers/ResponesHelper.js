const ResponseHelper = {
    sendResponse(res,statusCode,data){
        if (statusCode == 200) {
            res.status(statusCode).json({
                messages: 'Success! Login Successfully',
                data
            })
        }
        else if (statusCode == 401) {
            res.status(statusCode).json({
                messages: 'Failed! Wrong Password/Username'
            })
        }else if (statusCode == 404) {
            res.status(statusCode).json({
                messages: 'Failed! User not found'
            })
        }
    }
}

module.exports = ResponseHelper