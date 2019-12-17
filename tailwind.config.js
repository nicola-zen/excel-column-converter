module.exports = {
  theme: {
    extend: {},
    customForms: theme => ({
      default: {
        input: {
          "&:focus": {
            boxShadow: null
          }
        }
      }
    })
  },
  variants: {},
  plugins: [require("@tailwindcss/custom-forms")]
};
