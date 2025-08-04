"use client"
import type { FC } from 'react';
import ProductCard from './ProductCard';
import {motion} from "framer-motion"

const productList = [
    {
    imageSrc : "/product1.jpg",
    description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, deserunt.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, deserunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, deserunt.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, deserunt.",
    path : "/product"
    },
    {
    imageSrc : "/product2.jpg",
    description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, deserunt.",
    path : "/product"
    },
    {
    imageSrc : "/hero-bg.jpg",
    description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, deserunt.",
    path : "/product"
    },
    {
    imageSrc : "/hero-bg.jpg",
    description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, deserunt.",
    path : "/product"
    },
    {
    imageSrc : "/hero-bg.jpg",
    description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, deserunt.",
    path : "/product"
    },
]

const ProductList: FC = () => {
        return (
            <section className='my-5 sm:my-20 py-10' id='products' >
                <div className=' text-center'>
                    <motion.h2 className='text-center py-5 my-5  text-3xl sm:py-10 font-bold sm:text-4xl '
                    initial= {{ opacity:0, y: 40 }}
              
                transition={{ duration:1, delay:0.3}}
                whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.03 }}
          viewport={{ once: true }}
                    >Portfolio</motion.h2>
                    <motion.p className='text-xl px-5 text-[var(--text-element-small-black)]'
                    initial= {{ opacity:0, y: 40 }}
              
                transition={{ duration:1, delay:0.3}}
                whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.03 }}
          viewport={{ once: true }}
                    >Lorem, ipsum dolor sit amet consectetur adipisicing elit.</motion.p>
                </div>
                {/* list  */}
                <div className='mt-20 grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5  sm:px-20  justify-items-center'>

                
                {productList.map((product,index) => (
                    <ProductCard key={ index} imageSrc={product.imageSrc} description={product.description} path={product.path} />
                ))

                }
                </div>
            </section>
        );
}
export default ProductList;