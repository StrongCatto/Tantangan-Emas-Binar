exports.getUser = (req, res, next) => {
    console.log(req.query, '<<<< QUERY');
  
    res.status(200).json({
      id: '00001',
      name: 'First User',
      email: 'firstUser@mail.com'
    })
  }
  
  exports.getUserByID = (req, res) => {
    res.status(200).json({
      id: req.params.id,
      name: 'First User',
      email: 'firstUser@mail.com'
    })
  }