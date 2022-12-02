// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');
const { belongsTo } = require('./Product');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'catagory_id'
})
// Categories have many Products
Category.belongsToMany(Product , {
  foreignKey: 'product_id'
})
// Products belongToMany Tags (through ProductTag)
ProductTag.belongsToMany(Tag, {
  foreignKey: 'tag_id'
})
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(ProductTag, {
  foreignKey: 'prodcuct_id'
})
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
