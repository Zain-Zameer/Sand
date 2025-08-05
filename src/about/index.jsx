import React from 'react'

function About() {
  return (
    <div className='mt-20'>
        <div className='relative'>
            <img src="/family4.jpg" alt="" className='w-full object-cover h-150 opacity-[0.7]'/>

            <div className='w-full h-150 bg-black absolute top-0 opacity-[0.4]'></div>

             <div className="absolute inset-0 w-full flex flex-col items-center justify-center text-center px-6">
                <h3 className="text-4xl text-white font-bold mb-4">About Us</h3>
                <p className="text-white text-lg max-w-3xl">
                    At <span className="font-semibold">SAND</span>, we believe that every journey begins with a feeling —
                    the warmth of connection, the excitement of discovery, and the peace of
                    being in the right place at the right time. Our mission is to help you
                    find meaningful spots nearby, making each day a little more memorable.
                </p>
                </div>

        </div>

            <div className='px-100 py-10 flex items-center justify-center gap-10'>
                <img src="/aboutF.jpg" alt="" className='rounded-xl opacity-[0.6] hover:opacity-[1] w-100'/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quia vitae hic, voluptates animi sequi consectetur, facere placeat ea debitis molestiae labore aperiam sint eum autem sunt ipsum, unde eveniet expedita adipisci quis eos voluptatum saepe tempora? Dolorum est aliquid reiciendis ex neque nobis ab dolores. Porro enim velit ullam atque aut magni, minus illo ad rem veniam voluptates iste? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi animi, alias ex, officia eius placeat aliquid voluptate quam architecto tempora porro fuga inventore dolorem. Magnam cum aliquid quos sit autem aliquam iste distinctio ducimus illo iusto molestiae aut perferendis fugit, ad officia repellendus adipisci expedita harum architecto quas illum ea. Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis unde quibusdam incidunt facere in nisi minus, ex dicta quisquam sit ut nam modi vitae, fuga labore. Nam quasi ullam aperiam officiis nesciunt omnis, laudantium dolores aliquid placeat cum cupiditate animi at adipisci! Vero quos repudiandae ea quo excepturi. Adipisci hic mollitia nostrum nihil iste accusamus quia vitae, aut incidunt recusandae! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora rem voluptatibus explicabo. Praesentium beatae fugit quam, iure nam sint facilis?</p>
            </div>

           

    </div>
  )
}

export default About
