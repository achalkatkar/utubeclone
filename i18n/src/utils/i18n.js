
import languageConfig from "./lang.json";

const i18n =(keyword, placholder, value) => {
    const lang = localStorage.getItem('lang') ||'en';

    const text = languageConfig[lang][keyword];


   if(placholder && value){
    return text.replace(placholder, value);
   }
   return text;
}
export default i18n