import Cart from "./Cart";
import "./Cart.css";

const Products = () => {
  const shoes = [
    {
      id: 1,
      imgSrc:
        "https://images.pexels.com/photos/12010216/pexels-photo-12010216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      brandName: "Nike",
      detail: "This is Nike shoes it's been Uploaded on May 3rd, 2022",
      price: "149$",
    },
    {
      id: 2,
      imgSrc:
        "https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      brandName: "Addidas",
      detail: "This is Nike shoes it's been Uploaded on May 3rd, 2022",
      price: "135$",
    },
    {
      id: 3,
      imgSrc:
        "https://images.pexels.com/photos/6748330/pexels-photo-6748330.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      brandName: "Puma",
      detail: "This is Nike shoes it's been Uploaded on May 3rd, 2022",
      price: "125$",
    },
    {
      id: 4,
      imgSrc:
        "https://images.pexels.com/photos/1461048/pexels-photo-1461048.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      brandName: "addidas",
      detail: "This is Nike shoes it's been Uploaded on May 3rd, 2022",
      price: "125$",
    },
    {
      id: 5,
      imgSrc:
        "https://images.pexels.com/photos/1456706/pexels-photo-1456706.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      brandName: "Nike",
      detail: "This is Nike shoes it's been Uploaded on May 3rd, 2022",
      price: "125$",
    },
    {
      id: 6,
      imgSrc:
        "https://images.pexels.com/photos/6748330/pexels-photo-6748330.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      brandName: "Nike",
      detail: "This is Nike shoes it's been Uploaded on May 3rd, 2022",
      price: "125$",
    },
  ];
  // const filterShoes = shoes.filter((fs) => {
  //   return fs.brandName === "Nike";
  // });
  return (
    <div className="container">
      {shoes.map((product) => {
        return <Cart Key={product.id} {...product} />;
      })}
    </div>
  );
};

export default Products;
