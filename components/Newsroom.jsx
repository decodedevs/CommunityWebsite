import React, { useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useAnimation, useInView, motion } from "framer-motion";


const articles = [
  {
    id: 1,
    content: "Begin your Git journey: A comprehensive guide for newcomers, demystifying version control and collaboration with simplicity.",
    date: "A Beginners Guide To Git",
    link: "https://decodedevs.hashnode.dev/a-beginners-guide-to-git",
    image: "https://cdn.hashnode.com/res/hashnode/image/upload/v1691093007592/f50daa66-e187-4073-bfdd-5d3cd02265af.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp"
  },
  {
    id: 2,
    content: "Embark on a journey into the realm of Computer Networks: An in-depth beginner's handbook, unraveling the magic that interconnects us all",
    date: "Computer Network Part-2",
    link: "https://decodedevs.hashnode.dev/computer-network-part-2",
    image: "https://cdn.hashnode.com/res/hashnode/image/upload/v1687349439186/3144b18a-2a01-4064-9f79-fdf6b03642d6.jpeg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp"
  },
  {
    id: 3,
    content: "Unlock the mysteries of Computer Networks: A comprehensive guide for beginners, unraveling the magic that connects us all",
    date: "Computer Network Part-1",
    link: "https://decodedevs.hashnode.dev/computer-network-part-1",
    image: "https://cdn.hashnode.com/res/hashnode/image/upload/v1686256815362/98db3f7d-73e4-4617-91d6-4059159606ec.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp"
  },
  {
    id: 4,
    content: "Venture into the realm of YAML: A beginner's guide unveiling the simplicity behind structuring data with elegance",
    date: "A Beginner's Guide To YAML",
    link: "https://decodedevs.hashnode.dev/a-beginners-guide-to-yaml",
    image: "https://cdn.hashnode.com/res/hashnode/image/upload/v1686460306935/8d4f40ab-7364-4d5f-9825-e63938366111.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp"
  },
  {
    id: 5,
    content: "Embark on your coding journey: A beginner's roadmap to diving into programming, laying the foundation for your tech dreams.",
    date: "How To Start Coding As a Beginner",
    link: "https://decodedevs.hashnode.dev/how-to-start-coding-as-a-beginner",
    image: "https://cdn.hashnode.com/res/hashnode/image/upload/v1670936215171/1rv1mftXf.jpg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp"
  }
];

const Newsroom = () => {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const ref = useRef(null) ;
  const isInView = useInView(ref, {amount: 0.4, once:true }) ;
  const animateSlider = useAnimation() ;
  const animateH2 = useAnimation() ;

  useEffect(() => {
    if(isInView){
      animateSlider.start({
        x: 0,
        transition: {
          duration: 0.4
        }
      })
      animateH2.start({
        opacity: 1,
        transition: {
          duration: 0.4
        }
      })
    } 
    if (!isInView){
      animateSlider.start({
        x: '-100vw'
      })
      animateH2.start({
        opacity: 0
      })
    }
  }, [isInView]) ;

  return (
    <div id="newsroom" className="bg-gradient-to-l from-gray-700 via-gray-900 to-black sm:py-5" ref={ref}>
      <div className="max-w-screen-lg mx-auto px-4 py-5 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
        <motion.span className="text-3xl p-4 font-bold text-center tracking-tight bg-gradient-to-r from-cyan-300 to-blue-500 text-transparent bg-clip-text sm:text-4xl" animate={animateH2}>Newsroom</motion.span>
        </div>

        <motion.div className="w-[90%] mx-auto" animate={animateSlider}>
          <Slider {...settings}>
            {articles.map(article => (
              <div
                key={article.id}
                className=" bg-gradient-to-r from-slate-300 to-slate-500 p-4 rounded-lg shadow-md"
                style={{ width: "100%", maxWidth: 400 }}
              >

                <h3 className="font-bold mb-2">{article.title}</h3>
                <img src={article.image} alt={article.title} />
                <p className="text-black text-sm mb-4 font-bold mt">
                  {article.date}
                </p>

                <p className="text-gray-800 text-sm">
                  {article.content}
                </p>

                <a
                  href={article.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-500 text-sm font-bold hover:underline"
                >
                  Read More
                </a>
              </div>
            ))}
          </Slider>
        </motion.div>
      </div>
    </div>
  );
};

export default Newsroom;
