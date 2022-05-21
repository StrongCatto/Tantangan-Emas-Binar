exports.getProduct = (req, res) => {
    res.status(200).json({
      id: '0002',
      name: 'Playstation 6'
    })
  }
  
  exports.getProductDetail = (req, res) => {
    res.status(200).json({
      id: '0002',
      name: 'Playstation 6',
      price: 1000000
    })
  }