import "./Cart.css";
const Cart = (props) => {
  const { imgSrc, brandName, detail, price } = props;
  return (
    <article className="card">
      <img src={imgSrc} alt="product1" />
      <div className="card-desc">
        <h3>{brandName}</h3>
        <p>{detail}</p>
        <span>{price}</span>
      </div>
    </article>
  );
};

export default Cart;
