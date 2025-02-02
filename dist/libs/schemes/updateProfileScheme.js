// import {z} from "zod";
var validatePassword = function validatePassword(password, oldPassword) {
  if (!password) return 'Katasandi tidak boleh kosong';
  if (password !== oldPassword) return 'Katasandi lama tidak sesuai';
  return undefined;
};
var validatePasswordNew = function validatePasswordNew(passwordNew) {
  if (!passwordNew) return 'Katasandi baru tidak boleh kosong';
  if (passwordNew.length < 8) return 'Panjang katasandi baru tidak boleh kurang dari 8 karakter';
  return undefined;
};
var validatePasswordConfirmation = function validatePasswordConfirmation(passwordNew, passwordConfirmation) {
  if (!passwordConfirmation) return 'Konfirmasi katasandi baru tidak boleh kosong';
  if (passwordConfirmation.length < 8) return 'Panjang konfirmasi katasandi baru tidak boleh kurang dari 8 karakter';
  if (passwordNew !== passwordConfirmation) return 'Katasandi baru tidak sama dengan katasandi konfirmasi';
  return undefined;
};
export var updateProfileScheme = function updateProfileScheme() {
  return {
    parse: function parse(obj, oldPassword) {
      var password = obj.password;
      var password_new = obj.password_new;
      var password_confirmation = obj.password_confirmation;
      return {
        password: password,
        password_new: password_new,
        password_confirmation: password_confirmation,
        errors: {
          password: validatePassword(password, oldPassword),
          password_new: validatePasswordNew(password_new),
          password_confirmation: validatePasswordConfirmation(password_new, password_confirmation)
        }
      };
    }
  };
};