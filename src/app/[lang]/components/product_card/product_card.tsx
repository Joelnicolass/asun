'use client';
import {
    Accordion,
    AccordionItem,
    Card,
    CardBody,
    CardHeader,
    Image,
} from '@nextui-org/react';
import { Product } from '../../_interfaces/product_interface';
import { Reveal } from '../reveal/reveal';
export const ProductCard = ({ title, description, category }: Product) => {
  return (
      
      <Card className='py-4'>
      <CardHeader className='pb-0 pt-2 px-4 flex-col items-start'>
        <Reveal slideColor=''>
        <h4 className='font-bold text-large'>{title}</h4>
          </Reveal>
          <Reveal slideColor=''>
        <small className='text-default-500'>{category}</small>
          </Reveal>
      </CardHeader>
      <CardBody className='overflow-visible py-2'>
      <Reveal slideColor=''>
        <Image
          alt='Card background'
          className='object-cover rounded-xl'
          src='/assets/logs.jpg'
          />
          </Reveal>
        <Accordion>
          <AccordionItem key='1' aria-label='Accordion 1' title="More information">
            {description}
          </AccordionItem>
        </Accordion>
        {/* <p className="text-default-500">{description}</p> */}
      </CardBody>
    </Card>
  );
};
