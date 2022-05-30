import { Router } from 'express';
import { productService } from '../services';
import { adminRequired } from '../middlewares';

const productRouter = Router();

//상품 추가
productRouter.post('/productAdd', adminRequired, async (req, res, next) => {
  try {
    const { name, price, company, category, img, description } = req.body;

    const product = await productService.addProduct({
      name,
      price,
      company,
      category,
      img,
      description,
    });

    res.status(201).json(product);
  } catch (error) {
    next(error);
  }
});

//전체 상품 조회
productRouter.get('/productListAll', async (req, res, next) => {
  try {
    const products = await productService.getAllProducts();
    res.status(200).json(products);
  } catch (error) {
    next(error);
  }
});

//카테고리별 상품 조회
productRouter.get('/productListCategory/:category', async (req, res, next) => {
  try {
    const category = req.params.category;

    const products = await productService.getProductsByCategory(category);
    res.status(200).json(products);
  } catch (error) {
    next(error);
  }
});

//상품명으로 조회
productRouter.get('/productListName/:name', async (req, res, next) => {
  try {
    const name = req.params.name;

    const products = await productService.getProductByName(name);
    res.status(200).json(products);
  } catch (error) {
    next(error);
  }
});

//상품ID값으로 조회
productRouter.get('/productListId/:productId', async (req, res, next) => {
  try {
    const productId = req.params.productId;

    const product = await productService.getProductById(productId);
    res.status(200).json(product);
  } catch (error) {
    next(error);
  }
});

//상품 수정
productRouter.patch('/productUpdate/:productId', adminRequired, async (req, res, next) => {
  try {
    const productId = req.params.productId;
    const updatelist = req.body;

    const updateResult = await productService.updateProduct(productId, updatelist);
    res.status(200).json(updateResult);
  } catch (error) {
    next(error);
  }
});

//상품 삭제
productRouter.delete('/productDelete/:productId', adminRequired, async (req, res, next) => {
  try {
    const productId = req.params.productId;

    const deleteResult = await productService.deleteProduct(productId);
    res.status(200).json(deleteResult);
  } catch (error) {
    next(error);
  }
  d;
});

export { productRouter };
