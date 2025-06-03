  import React from 'react' 
  import Pics from '../assets/pana.svg'
  import Banner2 from '../Components/Banner2.jsx'


const Blog2 = () => {
  const BannerD = [
    {
      Heading: "How to design your site footer like we did",
      Content: "Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.",
      ButtonText: "Learn More",
      Picture: Pics,
      reverseOrder: true,
    }
  ]
  return (
    <div className=''>
            {BannerD?.map((details) => (
                
                <div>
                    <Banner2
                        Content={details?.Content}
                        Heading={details?.Heading}
                        ButtonText={details?.ButtonText}
                        Picture={details?.Picture}
                        reverseOrder={details?.reverseOrder}
                    />
                </div>
                
            ))}
        </div>
  )
}

export default Blog2