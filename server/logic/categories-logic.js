let categoriesDal = require("../dal/categories-dal");

async function getAllCategories() {
  try {
    
    let categories = await categoriesDal.getCategoriesFromDB();
    return categories; 
  } catch (error) {
    throw new Error("Failed to retrieve categories: " + error.message);
  }
}

async function getSubCategory(categoryId) {
    try {
        let subCategory = await categoriesDal.getSubCategory(categoryId);
        return subCategory; 
    } catch (error) {
        throw new Error("Failed to retrieve sub category: " + error.message);
    }
}

module.exports = {
  getAllCategories,
  getSubCategory
};
