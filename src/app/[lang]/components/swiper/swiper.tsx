'use client';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import { useMediaQuery } from '../../_hooks/useMediaQuery';
import { Product } from '../../_interfaces/product_interface';
import { ProductCard } from '../product_card/product_card';

interface SwiperComponentProps {
  productList: Product[];
}

export const SwiperComponent = ({ productList }: SwiperComponentProps) => {

    const isSM = useMediaQuery(576)
    const isMD = useMediaQuery(780)
    const isLG = useMediaQuery(1024)


  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={!isSM ? 1 : isMD ? 2 : 3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper: any) => console.log(swiper)}
    >
      {productList.map((product, index: number) => 
          <SwiperSlide key={product.title + index}>
            
            <ProductCard
              title={product.title}
              description={product.description}
              category={product.category}
            />
          </SwiperSlide>
        )}
    </Swiper>
  );
};
