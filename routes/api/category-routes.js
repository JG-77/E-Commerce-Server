const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

// Finds all categories and includes associated products
router.get('/', async (req, res) => {
  try {
    const data = await Category.findAll({
    include: [{
      model: Product,
      attributes: [
        "id",
        "product_name",
        "price",
        "stock"
      ]
    }]
    });
    if (!data) {
      res.status(404).json({ message: 'ERROR 404' });
      return;
    }
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
}); 



// find one category by its `id` value and includes its associated Products
router.get('/:id', async (req, res) => { 
  try {
    const data = await Category.findByPk(req.params.id, { 
    include: [{
      model: Product,
      attributes: [
        "id",
        "product_name",
        "price",
        "stock"
      ]
    }]
    });
    if (!data) {
      res.status(404).json({ message: 'No category with this id' });
      return;
    }
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }


});

router.post('/', (req, res) => {
  // create a new category
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
