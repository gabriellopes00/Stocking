import * as Yup from 'yup';
import Slugify from 'slugify';

class Validation{  
  clientsValidation: Yup.ObjectSchema<Yup.Shape<object | undefined, { clientName: string; email: string; phone: number; cep: number; }>, object>;
  providersValidation: Yup.ObjectSchema<Yup.Shape<object | undefined, { providerName: string; email: string; phone: number; cep: number; cnpj: string; websiteLink: string | undefined; }>, object>;
  categoriesValidation: Yup.ObjectSchema<Yup.Shape<object | undefined, { categoryName: string; }>, object>;
  suppliesValidation: Yup.ObjectSchema<Yup.Shape<object | undefined, { supplyDate: string; quantity: number; price: number; paymentMethod: string; description: string | undefined; providerId: number; productId: number; }>, object>;
  salesValidation: Yup.ObjectSchema<Yup.Shape<object | undefined, { saleDate: string; quantity: number; price: number; paymentMethod: string; description: string | undefined; clientId: number; productId: number; }>, object>;
  productValidation: Yup.ObjectSchema<Yup.Shape<object | undefined, { productName: string; quantity: number; price: number; categoryName: unknown; productDescription: string | undefined; }>, object>;
  idParamValidation: Yup.ObjectSchema<Yup.Shape<object | undefined, { id: unknown; }>, object>;
  categoryUrlValidation: Yup.ObjectSchema<Yup.Shape<object | undefined, { categoryUrl: string; }>, object>;
  


  constructor(){
    /*this.userValidation = Yup.object().shape({
      name: Yup.string().required().min(1),
      email: Yup.string().email().required(),
      password: Yup.string().required().min(4)
    })*/

    this.productValidation = Yup.object().shape({
      productName: Yup.string().required().trim(),
      quantity: Yup.number().min(0).required(),
      price: Yup.number().positive().required(),
      categoryName: Yup.string().lowercase().required(),
      productDescription: Yup.string().max(500).optional(),
    })
    this.clientsValidation = Yup.object().shape({
      clientName: Yup.string().required().trim(),
      email: Yup.string().email().required().trim(),
      phone: Yup.number().positive().required(),
      cep: Yup.number().required()
    })
    this.providersValidation = Yup.object().shape({
      providerName: Yup.string().required().trim(),
      email: Yup.string().email().required().trim(),
      phone: Yup.number().positive().required(),
      cep: Yup.number().required(),
      cnpj: Yup.string().required(),
      websiteLink: Yup.string().url().optional(),
    })
    this.categoriesValidation = Yup.object().shape({
      categoryName: Yup.string().required().lowercase().trim()
    })
    this.suppliesValidation = Yup.object().shape({
      supplyDate: Yup.string().required().trim(),
      quantity: Yup.number().positive().required(),
      price: Yup.number().positive().required(),
      paymentMethod: Yup.string().required(),
      description: Yup.string().max(500).optional(),
      providerId: Yup.number().positive().required(),
      productId: Yup.number().positive().required(),
    })
    this.salesValidation = Yup.object().shape({
      saleDate: Yup.string().required().trim(),
      quantity: Yup.number().positive().required(),
      price: Yup.number().positive().required(),
      paymentMethod: Yup.string().required(),
      description: Yup.string().max(500).optional(),
      clientId: Yup.number().positive().required(),
      productId: Yup.number().positive().required(),
    })
    this.idParamValidation = Yup.object().shape({
      id: Yup.string().required()
    })
    this.categoryUrlValidation = Yup.object().shape({
      categoryUrl: Yup.string().required()
    })
  }
}
const Validator = new Validation();

export default Validator;