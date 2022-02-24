import * as yup from 'yup';

export const schema = yup.object({
  name: yup.string().required('Sem o nome não da parça'),
  email: yup.string().email().required('Mano coloca o email ai'),
  phone: yup.string().required('Cara eu juro que não vou te chamar no zap'),
  address: yup.string().required('Ta com vergonha de onde vc mora?'),
}).required();
