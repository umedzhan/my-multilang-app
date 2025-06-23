import React from "react";
import { useTranslation } from "react-i18next";
import "./i18n";

function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        maxWidth: 700,
        margin: "auto",
        padding: "2rem",
      }}
    >
      <h1>{t("title")}</h1>
      <p>{t("description")}</p>

      <div style={{ margin: "1rem 0" }}>
        <button onClick={() => changeLanguage("en")}>English</button>
        <button onClick={() => changeLanguage("uz")} style={{ marginLeft: 10 }}>
          O‘zbekcha
        </button>
        <button onClick={() => changeLanguage("tj")} style={{ marginLeft: 10 }}>
          Тоҷикӣ
        </button>
      </div>

      <ul>
        <li>✅ {t("features.f1")}</li>
        <li>🤝 {t("features.f2")}</li>
        <li>📝 {t("features.f3")}</li>
      </ul>

      <button
        style={{
          marginTop: "1rem",
          padding: "10px 20px",
          fontSize: "16px",
        }}
      >
        {t("button")}
      </button>

      <footer style={{ marginTop: "2rem", fontSize: "12px", color: "#888" }}>
        {t("footer")}
      </footer>
    </div>
  );
}

export default App;
