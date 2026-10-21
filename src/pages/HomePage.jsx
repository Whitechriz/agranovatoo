import React from 'react'
import Hero from '../component/Hero'
import FeaturedProducts from '../component/FeaturedProducts'
import ProductCategories from '../component/ProductCategories'
import ScrollStats from '../component/ScrollStats'
import MobileScrollStats from '../component/MobileScrollStats'

function HomePage() {
  return (
    <div>
      <Hero />

      <ProductCategories />

      <FeaturedProducts />

      <div className="hidden md:block">
        <ScrollStats />
      </div>

      <MobileScrollStats />

    </div>
  )
}

export default HomePage