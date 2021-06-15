function errorHandler(err, req, res, next) {
    if(err.name === 'Invalid token') {
        res.status(401).json({ message: 'Invalid token' })
    } else if(err.name === 'Please Login first') {
        res.status(401).json({ message: 'Please Login first' })
    } else if(err.name === 'Error not found') {
        res.status(404).json({ message: 'Error not found' })
    } else if(err.name === 'Unauthorized') {
        res.status(401).json({ message: 'Unauthorized' })
    } else if(err.name === 'Invalid Password or Email') {
        res.status(400).json({ message: 'Invalid Password or Email' })
    } else if(err.name === 'SequelizeValidationError') {
        let listError = []

        err.errors.forEach(element => {
            listError.push(element.message)
        })
        res.status(400).json({ message: listError })

    } else {
        res.status(500).json({ message: err.message || 'Internal Server Error' })
    }
}

module.exports = errorHandler