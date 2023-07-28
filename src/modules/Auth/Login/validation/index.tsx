import * as Yup from "yup";

export const schemaResolver = Yup.object().shape({
  email: Yup
    .string()
    .required("Informe se email")
    .email('Informe um email válido!'),
  password: Yup.string().required('Informe sua senha'),
});