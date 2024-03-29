import React from "react";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

const languageMap = {
  en: { label: "English", dir: "ltr", active: true },
  sp: { label: "Espanol", dir: "ltr", active: false },
  fr: { label: "Français", dir: "ltr", active: false }
};

const LanguageSelect = () => {
  const selected = localStorage.getItem("i18nextLng") || "en";
  const { t } = useTranslation();

  const [menuAnchor, setMenuAnchor] = React.useState(null);

  React.useEffect(() => {
    console.log(selected);
    if (selected === "en-US"){
        document.body.dir = languageMap["en"].dir;
    }  else if (selected === "es-ES"){
      document.body.dir = languageMap["sp"].dir;
  } 
    else{
        document.body.dir = languageMap[selected].dir;
    }
  }, [menuAnchor, selected]);

  function changeLang(value) {
    //alert(value);
    i18next.changeLanguage(value);

  }
  return (
    <div>
          <select name="select" 
                    onChange={e => changeLang(e.target.value)}>

	  {Object.keys(languageMap)?.map(item => (
              <option value={item}  key={item}>
                {languageMap[item].label}
              </option>
            ))}

	  </select>

    </div>
  );
};

export default LanguageSelect;
