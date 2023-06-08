const serveFirstPage = (req, res) => {
    res.render('firstPage')
}


const serveSecondPage = (req, res) => {
    res.render('secondPage')
}

module.exports = { serveFirstPage, serveSecondPage}