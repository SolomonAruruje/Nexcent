  import React from 'react' 
  import Pics from '../assets/Frame 35.svg'
  import Banner2 from '../Components/Banner2.jsx'


const BlogBanner = () => {
  const BannerD = [
    {
      Heading: "The unseen of spending three years at Pixelgrade",
      Content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.",
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

export default BlogBanner