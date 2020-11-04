import Yup from 'yup';
const year = new Date().getFullYear();

class Validation{
  productValidation: Yup.ObjectSchema<Yup.Shape<object | undefined, { name: string; quantity: number | undefined; date: number | undefined; category: any; marketplace: any; description: string | undefined; }>, object>;
  constructor(){
    /*this.userValidation = Yup.object().shape({
      name: Yup.string().required().min(1),
      email: Yup.string().email().required(),
      password: Yup.string().required().min(4)
    })*/

    this.productValidation = Yup.object().shape({
      name: Yup.string().required().trim(),
      quantity: Yup.number().positive(),
      date: Yup.number().positive().integer().max(year),
      category: Yup.string(),
      marketplace: Yup.string(),
      description: Yup.string().max(500),
    })
  }
}
const Validator = new Validation();

export default Validator;