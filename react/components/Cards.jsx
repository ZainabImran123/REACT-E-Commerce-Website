import React from 'react'
import Card from './Card'

const Cards = () => {
    const flowers = [
        {
            title: "Classic Red Rose",
            description: "A timeless symbol of love and romance, featuring deep velvety red petals.",
            price: 25.99,
            image: "https://thumbs.dreamstime.com/b/close-up-view-single-vibrant-red-rose-bloom-rose-illuminated-soft-natural-light-showcasing-its-dew-kissed-petals-375219623.jpg"
        },
        {
            title: "Golden Sunflower",
            description: "Bright and cheerful yellow petals that bring warmth and joy to any space.",
            price: 18.50,
            image: "https://images.stockcake.com/public/8/f/1/8f1aa0bf-5239-4cb3-a255-89f4a4e4bef1_large/sunlit-golden-sunflower-stockcake.jpg"
        },
        {
            title: "Spring Pink Tulip",
            description: "Elegant, smooth cups of soft pink that capture the fresh essence of spring.",
            price: 20.00,
            image: "https://cdn.pixabay.com/photo/2022/08/02/16/19/tulip-7360734_960_720.jpg"
        },
        {
            title: "White Orchid",
            description: "Exotic and sophisticated tropical blooms known for their long-lasting elegance.",
            price: 35.00,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP4mgHc7P16zG_21grvuawnro4gjYGJHM4ZIJAb-XB2N13vxXpTlFxLjUq&s=10"
        },
        {
            title: "Fresh White Daisy",
            description: "Charming and simple wildflowers with crisp white petals and a bright yellow center.",
            price: 12.99,
            image: "https://www.marthastewart.com/thmb/dYjRzPQbRAZgjasnv8swvEpU8Rw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-475366365-1353849116ed4dd2bbb79ddaed55457d.jpg"
        },
        {
            title: "Fragrant Stargazer Lily",
            description: "Striking pink and white petals with bold freckles and a rich, sweet fragrance.",
            price: 28.50,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNzG2pz5n3a9TUbc9O7ItG0N2noVadyTRlhIY6z5zEvWixszL4ZPwW1uU&s=10"
        },
        {
            title: "Blush Peony",
            description: "Lush, full-bodied ruffled blooms offering a delicate and romantic aesthetic.",
            price: 32.00,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7_Q1vr2yddLkvjfn8-h-Bmz3vfN0JI4FSlQje3Vc2_v-8Z0G5Vj3QuG0&s=10"
        },
        {
            title: "Calming Lavender Bundle",
            description: "Aromatic purple stems known for their soothing scent and rustic charm.",
            price: 15.00,
            image: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/10/23/12/lavender.jpg?width=1200"
        },
        {
            title: "Blue Hydrangea",
            description: "Voluminous clusters of rich blue and purple blossoms symbolizing gratitude.",
            price: 26.50,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0GLmvP9IqxBaH0dPYDqoiDzjF0SlfbUq999x8MYL5y3UwBcvxiGtkR0Sf&s=10"
        },
        {
            title: "Vibrant Marigold",
            description: "Fiery orange and deep yellow petals that add a pop of intense color.",
            price: 14.99,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUfb4wdud8rxkl5WFgRLDkNijL6GqouDjw6PMYZ9ZpoyEDHpKdq2rQ2ZrX&s=10"
        }
    ];
    return (
        <div className='container'>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                    flowers.map(function (flower) {
                        return <Card title={flower.title} image={flower.image} description={flower.description} price={flower.price} />
                    })
                }
            </div>
        </div>
    )

}

export default Cards