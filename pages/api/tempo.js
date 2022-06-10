function tempo(request, response) {
    const dynamicDate = new Date()

    return response.json({
        date: dynamicDate.toGMTString()
    })
}