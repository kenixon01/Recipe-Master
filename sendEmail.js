import { EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_PUBLIC_KEY } from '@env'
import emailjs, { init } from '@emailjs/browser'
import code from "./validationCode";

init(EMAILJS_PUBLIC_KEY)
export default sendEmail = (email) => {
  const validationCode = code()
  let templateParams = {
    email: `${email}`,
    message: validationCode,
  };
  console.log('PARAMS: ', JSON.stringify(templateParams));
  emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams).then(
    function (response) {
      console.log('SUCCESS!', response.status, response.text);
    },
    function (error) {
      console.log('FAILED...', error);
    }
  );
  return validationCode
}