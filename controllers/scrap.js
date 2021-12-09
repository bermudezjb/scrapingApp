const search = (req, res) => {
    console.log(req.params.search)
    res.render('index', { title: 'Express' });
  }

module.exports = search