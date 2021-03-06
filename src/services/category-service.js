import { categoryModel } from '../db';

class CategoryService {
  constructor(categoryModel) {
    this.categoryModel = categoryModel;
  }

  //카테고리 추가
  async addCategory(category) {
    return await this.categoryModel.createCategory(category);
  }

  //카테고리 전체 조회
  async getAllCategories() {
    return await this.categoryModel.findAll();
  }

  //카테고리명으로 조회
  async getCategoryByName(name) {
    return await this.categoryModel.findByName(name);
  }

  //카테고리 수정
  async updateCategory(name, updatelist) {
    return await this.categoryModel.updateCategory(name, updatelist);
  }

  //카테고리 삭제
  async deleteCategory(name) {
    return await this.categoryModel.deleteCategory(name);
  }
}

const categoryService = new CategoryService(categoryModel);

export { categoryService };
