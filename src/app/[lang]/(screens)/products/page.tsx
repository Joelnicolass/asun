import { Product } from '../../_interfaces/product_interface';
import { SwiperComponent } from '../../components/swiper/swiper';

const products: Product[] = [
    {
      title: "Producto 1",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem consequuntur facilis perspiciatis placeat. Consectetur maxime, rerum harum laudantium corporis distinctio adipisci earum nobis dolores quas dolorem deleniti impedit omnis excepturi expedita non magnam perferendis veniam. Repellat odit ipsa quia quisquam. 1",
      category: "Categoría 1",
    },
    {
      title: "Producto 2",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem consequuntur facilis perspiciatis placeat. Consectetur maxime, rerum harum laudantium corporis distinctio adipisci earum nobis dolores quas dolorem deleniti impedit omnis excepturi expedita non magnam perferendis veniam. Repellat odit ipsa quia quisquam. 2",
      category: "Categoría 2",
    },
    {
      title: "Producto 3",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem consequuntur facilis perspiciatis placeat. Consectetur maxime, rerum harum laudantium corporis distinctio adipisci earum nobis dolores quas dolorem deleniti impedit omnis excepturi expedita non magnam perferendis veniam. Repellat odit ipsa quia quisquam. 3",
      category: "Categoría 1",
    },
    {
      title: "Producto 4",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem consequuntur facilis perspiciatis placeat. Consectetur maxime, rerum harum laudantium corporis distinctio adipisci earum nobis dolores quas dolorem deleniti impedit omnis excepturi expedita non magnam perferendis veniam. Repellat odit ipsa quia quisquam. 4",
      category: "Categoría 3",
    },
    {
      title: "Producto 5",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem consequuntur facilis perspiciatis placeat. Consectetur maxime, rerum harum laudantium corporis distinctio adipisci earum nobis dolores quas dolorem deleniti impedit omnis excepturi expedita non magnam perferendis veniam. Repellat odit ipsa quia quisquam. 5",
      category: "Categoría 2",
    },
  ];


const Products = () => {
  return (
    <>
    <SwiperComponent productList={products} />
    <SwiperComponent productList={products} />
    <SwiperComponent productList={products} />
    </>
  );
};


export default Products;
