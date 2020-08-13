import React from "react";
import "./index.css";
function Header() {
  return (
    <div className="header">
      <div className="headerLeft">
        <div className="logo">logo</div>
        <div className="link1">Преимущества</div>
        <div className="link2">Сравнение</div>
        <div className="link3">Виды плёнки</div>
        <div className="link4">Инструкция</div>
      </div>
      <div className="headerRight">
        <div className="phone">8-965-765-64-65</div>
        <div className="callme">Заказать звонок</div>
      </div>
    </div>
  );
}

export default Header;
