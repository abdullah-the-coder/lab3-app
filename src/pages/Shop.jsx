import { Link, Routes, Route } from "react-router-dom";

function ShopAll() {
  return <h2>You are now in All Products</h2>;
}

function ShopMens() {
  return <h2>You are now in Mens Section</h2>;
}

function ShopWomens() {
  return <h2>You are now in Womens Section</h2>;
}

export default function Shop() {
  return (
    <div>
      <h1>Shop Page</h1>
      <nav>
        <Link to="all">All</Link> |{" "}
        <Link to="mens">Mens</Link> |{" "}
        <Link to="womens">Womens</Link>
      </nav>
      <hr />
      <Routes>
        <Route path="all" element={<ShopAll />} />
        <Route path="mens" element={<ShopMens />} />
        <Route path="womens" element={<ShopWomens />} />
      </Routes>
    </div>
  );
}
