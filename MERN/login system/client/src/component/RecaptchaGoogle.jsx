import ReCAPTCHA from "react-google-recaptcha";

const RecaptchaGoogle = ({ refRecaptcha }) => {
  return (
    <div>
      <ReCAPTCHA
        sitekey="6Lf0KCUmAAAAAEd4nE3jN-P3q6kk604hqXPvJnlZ"
        ref={refRecaptcha}
      />
    </div>
  );
};

export default RecaptchaGoogle;
