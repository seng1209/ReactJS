import React from "react";
import {
  BrowserRouter as Routers,
  Routes,
  Route,
  Link,
} from "react-router-dom";

import HomePage from "../header/Home";
import Woman from "../categories/Woman";
import Man from "../categories/Man";
import Jewelry from "../categories/Jewelry";
import Electronic from "../categories/Electronic";
import Category from "../categories/Category";

const MenuPage = () => {
  return (
    <div>
      <div>
        <Routes>
          <Route path="/">
            <Route path="/" element={<HomePage />} />
            <Route path="categories" element={<Category />} />
            <Route path="woman" element={<Woman />} />
            <Route path="man" element={<Man />} />
            <Route path="jewelry" element={<Jewelry />} />
            <Route path="electronic" element={<Electronic />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
};

export default MenuPage;
