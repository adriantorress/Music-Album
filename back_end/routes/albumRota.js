const router = require('express').Router();
const Album = require('../models/Album')

router.post('/', async (req, res) => {

  const { href, title_alt, img_src, div2_name, span } = req.body

  const album = [
    {
      href,
      title_alt,
      img_src,
      div2_name,
      span
    }
  ]
  const findTitleAlt = await Album.findOne({ title_alt: title_alt });
  const findImgSrc = await Album.findOne({ img_src: img_src });
  const findDivName = await Album.findOne({ div2_name: div2_name });
  const findSpan = await Album.findOne({ span: span });


  if (!href || !img_src || !title_alt || !div2_name || !span) {
    res.status(422).json({ error: 'é obrigatório o preenchimento de todos os dados!' })
    return
  }

  else if (findImgSrc) {
    res.status(422).json({ error: 'Caminho de imagem já cadastrado!' });
    return
  }
  else if (findDivName && findSpan) {
    res.status(422).json({ error: 'Este album já existe!' })
    return
  }
  else if (findTitleAlt) {
    res.status(422).json({ error: 'Este titulo de album já existe!' })
    return
  }

  try {
    await Album.create(album);
    res.status(201).json({ message: 'Album criado com sucesso!' })
  }
  catch (err) {
    res.status(500).json({ error: err })
  }
})

module.exports = router
