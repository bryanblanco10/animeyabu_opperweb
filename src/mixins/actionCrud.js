export default {
  methods: {
    messageValidation(error) {
      let text = null;

      if (error.email == false) {
        text = "Email Inválido";
      } else if (error.numeric == false) {
        text = "Ingrese solo números"
      } else if (error.minLength == false) {
        text = `El campo debe tener mínimo ${error.$params.minLength.min} dígitos.`
      } else if (error.maxLength == false) {
        text = `El campo debe tener máximo ${error.$params.maxLength.max} dígitos.`
      } else if (error.sameAsPassword == false) {
        text = "Las contraseñas no coinciden";
      }

      return text;
    }
  }
}