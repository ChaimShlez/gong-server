const router = require("express").Router();
let categoriesLogic = require("../logic/categories-logic");

router.get("/", async (request, response, next) => {
  try {
    // Fetch categories from logic layer
    let categories = await categoriesLogic.getAllCategories();
    response.send(categories);
  } catch (error) {
    return next(error);
  }
});


router.get("/subCategory/:id", async (request, response, next) => {
    try {
        let categoryId = request.params.id;  // :id is a URL parameter
        let subCategory = await categoriesLogic.getSubCategory(categoryId);
        
        response.json(subCategory);
    } catch (error) {
        return next(error); 
    }
});



module.exports = router;
