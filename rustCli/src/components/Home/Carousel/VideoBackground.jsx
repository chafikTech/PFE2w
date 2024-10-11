import { Link } from "react-router-dom";
import logo from "../../../assets/Logo.png";
import chef1 from "../../../assets/chef1.jpg";
import chef2 from "../../../assets/chef3.jpg";
import chef3 from "../../../assets/chef4.jpg";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import "./VideoBackground.css";

const VideoBackground = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        console.log(isInView);
    }, [isInView]);

    const variants = {
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <div ref={ref} className="container-wra">
            <motion.div
                variants={variants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="container-home"
            >
                <motion.div
                    animate={{ y: [0, -20, 0] }}
                    transition={{
                        duration: 2,
                        ease: "easeInOut",
                        repeat: Infinity,
                        repeatType: "loop",
                    }}
                    className="img-home"
                >
                    <img src={logo} alt="imgg" />
                </motion.div>
                <div className="content-home">
                    <motion.h1
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 3.5, ease: "linear" }}
                        className="typing"
                    >
                        Why Us
                    </motion.h1>
                    <p>
                        At The Modern, enjoy exquisite cuisine made from fresh, locally
                        sourced ingredients in a warm, inviting atmosphere. Our friendly
                        staff provides exceptional service, perfect for any occasion. Savor
                        our innovative, seasonal menu alongside award-winning wines and
                        cocktails. Visit us today to experience dining that delights and
                        satisfies.
                    </p>
                </div>
            </motion.div>
            <motion.div
                variants={variants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="card-ser"
            >
                <div className="card-item-se">
                    <i className="fa-solid fa-user-tie"></i>
                    <h3>Master Chefs</h3>
                    <p>
                        We have master chefs and they have an experience with the spices.
                    </p>
                </div>
                <div className="card-item-se">
                    <i className="fa-solid fa-utensils"></i>
                    <h3>Quality Food</h3>
                    <p>We have the best vegetables and fruits and the fine spices.</p>
                </div>
                <div className="card-item-se">
                    <i className="fa-solid fa-cart-shopping"></i>
                    <h3>Online Order</h3>
                    <p>You can reserve your food online.</p>
                </div>
                <div className="card-item-se">
                    <i className="fa-solid fa-blender-phone"></i>
                    <h3>24/7 Service</h3>
                    <p>We open all the time for your happy and the best enjoy with us.</p>
                </div>
            </motion.div>
            <motion.div
                variants={variants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{ duration: 0.5, delay: 0.75 }}
                className="btn-ser"
            >
                <Link to="/service">
                    <button>View all</button>
                </Link>
            </motion.div>
            <motion.div
                variants={variants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{ duration: 0.5, delay: 1 }}
                className="img-cont-h"
            >
                <div className="img-c">
                    <img
                        src="https://www.crazymasalafood.com/wp-content/images/2017/07/Lasagne.jpeg.webp"
                        alt="img"
                    />
                    <img
                        src="https://img.buzzfeed.com/buzzfeed-static/static/2016-12/12/14/campaign_images/buzzfeed-prod-fastlane03/heres-the-ultimate-fast-food-chicken-bucket-list-2-478-1481571225-0_dblbig.jpg?resize=1200:*"
                        alt="img"
                    />
                    <img
                        src="https://qph.cf2.quoracdn.net/main-qimg-7b36fb4055cb7a40acb7173d75c37e57-lq"
                        alt="img"
                    />
                    <img
                        src="https://media.cnn.com/api/v1/images/stellar/prod/130614114257-malaysia-food.jpg?q=w_1110,c_fill"
                        alt="mig"
                    />
                </div>
                <div className="cont-c">
                    <motion.h1
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 3.5, ease: "linear" }}
                        className="typing"
                    >
                        Welcome to The Modern
                    </motion.h1>
                    <p>
                        We make the best food with the fine spices and we have the best
                        chefs.
                    </p>
                    <div className="num-con">
                        <div className="num-1">
                            <span> 15 </span>
                            <div className="num-cont">
                                <p>Years of</p>
                                <span> Experience</span>
                            </div>
                        </div>
                        <div className="num-1">
                            <span> 50 </span>
                            <div className="num-cont">
                                <p>Popular</p>
                                <span>Master Chefs</span>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
            <motion.div
                variants={variants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{ duration: 0.5, delay: 1.25 }}
                className="food-con"
            >
                <h1>Most Popular Food in Our Restaurant</h1>
                <div className="flag-con-h">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/2/2c/Flag_of_Morocco.svg"
                        alt="s"
                    />
                    <img
                        src="https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Flag_of_Italy.svg/1200px-Flag_of_Italy.svg.png"
                        alt="s"
                    />
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Mexico.svg/1200px-Flag_of_Mexico.svg.png"
                        alt="s"
                    />
                    <img
                        src="https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/255px-Flag_of_France.svg.png"
                        alt="s"
                    />
                    <img
                        src="https://upload.wikimedia.org/wikipedia/en/9/9a/Flag_of_Spain.svg"
                        alt="s"
                    />
                </div>
                <div className="food-items">
                    <div className="article-card">
                        <div className="content">
                            <p className="date">Jan 1, 2022</p>
                            <p className="title">Article Title Goes Here</p>
                        </div>
                        <img
                            src="https://img.delicious.com.au/EOaHDWOO/del/2016/04/crispy-sweet-potato-paleo-nachos-41916-2.jpg"
                            alt="article-cover"
                        />
                    </div>
                    <div className="article-card">
                        <div className="content">
                            <p className="date">Jan 1, 2022</p>
                            <p className="title">Article Title Goes Here</p>
                        </div>
                        <img
                            src="https://curd-nerd.com/wp-content/uploads/2019/12/cheesiest-fast-food-meals.jpg"
                            alt="article-cover"
                        />
                    </div>
                    <div className="article-card">
                        <div className="content">
                            <p className="date">Jan 1, 2022</p>
                            <p className="title">Article Title Goes Here</p>
                        </div>
                        <img
                            src="https://www.allrecipes.com/thmb/8qa8hE_pH_X4ehPZi0rgsHgVE2k=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/ar-taste-test-fast-food-tacos-4x3.0145-0a9f947e1e9c4bad84d0f553db784789.jpg"
                            alt="article-cover"
                        />
                    </div>
                    <div className="article-card">
                        <div className="content">
                            <p className="date">Jan 1, 2022</p>
                            <p className="title">Article Title Goes Here</p>
                        </div>
                        <img
                            src="https://www.seasonalcravings.com/wp-content/uploads/2024/02/Depositphotos_44924451_S.jpg"
                            alt="article-cover"
                        />
                    </div>
                    <div className="article-card">
                        <div className="content">
                            <p className="date">Jan 1, 2022</p>
                            <p className="title">Article Title Goes Here</p>
                        </div>
                        <img
                            src="https://www.eatthis.com/wp-content/uploads/sites/4/2018/08/carls-jr-crisscut-fries.jpg"
                            alt="article-cover"
                        />
                    </div>
                    <div className="article-card">
                        <div className="content">
                            <p className="date">Jan 1, 2022</p>
                            <p className="title">Article Title Goes Here</p>
                        </div>
                        <img
                            src="https://post.healthline.com/wp-content/uploads/2021/07/Starbucks_Food_Spinach_Feta_Wrap-1296x728-header.jpg"
                            alt="article-cover"
                        />
                    </div>
                    <div className="article-card">
                        <div className="content">
                            <p className="date">Jan 1, 2022</p>
                            <p className="title">Article Title Goes Here</p>
                        </div>
                        <img
                            src="https://images.ladepeche.fr/api/v1/images/view/635a7a0a5c78bc02710fb73a/large/image.jpg?v=1"
                            alt="article-cover"
                        />
                    </div>
                    <div className="article-card">
                        <div className="content">
                            <p className="date">Jan 1, 2022</p>
                            <p className="title">Article Title Goes Here</p>
                        </div>
                        <img
                            src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/109095000/original/15e6ca667e41ff6a964cba76ca5b1d2300afe04b/tagin-marocain-avec-abdo.jpg"
                            alt="article-cover"
                        />
                    </div>
                </div>
            </motion.div>
            <motion.div
                variants={variants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{ duration: 0.5, delay: 1.5 }}
                className="chef-cont"
            >
                <h1>Our Master Chefs</h1>
                <div className="container">
                    <img src={chef1} alt="ss" />
                    <img src={chef2} alt="ss" />
                    <img src={chef3} alt="ss" />
                </div>
            </motion.div>
        </div>
    );
};

export default VideoBackground;
