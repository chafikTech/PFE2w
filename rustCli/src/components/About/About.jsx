import imgFin from "../../assets/backBm.jpg";
import "./About.css";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const variants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <div className="about">
            <motion.div
                ref={ref}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{ duration: 0.5 }}
                className="about-cont"
            >
                <motion.h1>About Us</motion.h1>
                <motion.div
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="about-content"
                >
                    <div className="about-img">
                        <img
                            src="https://toohotel.com/wp-content/uploads/2022/09/TOO_restaurant_Panoramique_vue_Paris_nuit_v2-scaled.jpg"
                            alt="s"
                        />
                        <img
                            src="https://media.admagazine.fr/photos/6336c0b659db943f3d291303/master/w_1600%2Cc_limit/TOO%2520Restaurant%25203.jpg"
                            alt="s"
                        />
                        <img
                            src="https://bonjourparis.com/wp-content/uploads/2015/05/Georges1.jpg"
                            alt="s"
                        />
                        <img
                            src="https://assets.cntraveller.in/photos/6517a5aa2f98f695fe4e5cdc/16:9/w_1024%2Cc_limit/GIGI%2520001.jpg"
                            alt="s"
                        />
                    </div>
                    <p>
                        Since our modest beginnings in 2005 with a little space in Souk
                        sebt, DenJi’s development has been enlivened with the energy to cook
                        and serve solid, takeout food. In contrast to other eateries, DenJi
                        was made with the explicit intention to appear as something else. We
                        realize numerous individuals love sustenance, yet a large number of
                        them loathe or are unconscious of the regularly unfortunate fixings
                        that make run-of-the-mill Indian nourishment taste so good. Our menu
                        features items that use the sound and fragrant flavors, but forget
                        the stuffing ghee, butter, oil, and heavy cream. DenJi has grown to
                        include four superb takeout locations in Toronto, with more to come
                        soon. Our team takes pride in the fact that we can provide our new
                        and loyal customers with great tasting inspired food that is unlike
                        any other restaurants you visit. We recognize that some people are
                        still looking for typical Indian food, and that’s fine with us. Our
                        disclaimer is that if you’re expecting heavy, greasy, unhealthy
                        Indian food, DenJi isn’t the place for you.
                    </p>
                </motion.div>
            </motion.div>
            <motion.div
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{ duration: 0.5, delay: 1 }}
                className="find-us"
            >
                <h1>Where you can find us</h1>
                <div className="content-find">
                    <ul>
                        <li>
                            <span>Beni Mellal</span>
                        </li>
                        <li>
                            <span>Rabat</span>
                        </li>
                        <li>
                            <span>Casablanca</span>
                        </li>
                        <li>
                            <span>Marrakech</span>
                        </li>
                    </ul>
                    <div className="img-find-us">
                        <img src={imgFin} alt="img" />
                    </div>
                </div>
            </motion.div>
            <motion.div
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{ duration: 0.5, delay: 1.5 }}
                className="review-se"
            >
                <h1>Our Clients Say!!!</h1>
                <div className="testimonial-box-container">
                    <div className="testimonial-box">
                        <div className="box-top">
                            <div className="profile">
                                <div className="profile-img">
                                    <img src="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg" />
                                </div>
                                <div className="name-user">
                                    <strong>Liam Mendes</strong>
                                    <span>@liammendes</span>
                                </div>
                            </div>
                            <div className="reviews">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="far fa-star"></i>
                            </div>
                        </div>
                        <div className="client-comment">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Exercitationem, quaerat quis? Provident temporibus architecto
                                asperiores nobis maiores nisi a. Quae doloribus ipsum aliquam
                                tenetur voluptates incidunt blanditiis sed atque cumque.
                            </p>
                        </div>
                    </div>
                    <div className="testimonial-box">
                        <div className="box-top">
                            <div className="profile">
                                <div className="profile-img">
                                    <img src="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg" />
                                </div>
                                <div className="name-user">
                                    <strong>Liam Mendes</strong>
                                    <span>@liammendes</span>
                                </div>
                            </div>
                            <div className="reviews">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="far fa-star"></i>
                            </div>
                        </div>
                        <div className="client-comment">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Exercitationem, quaerat quis? Provident temporibus architecto
                                asperiores nobis maiores nisi a. Quae doloribus ipsum aliquam
                                tenetur voluptates incidunt blanditiis sed atque cumque.
                            </p>
                        </div>
                    </div>
                    <div className="testimonial-box">
                        <div className="box-top">
                            <div className="profile">
                                <div className="profile-img">
                                    <img src="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg" />
                                </div>
                                <div className="name-user">
                                    <strong>Liam Mendes</strong>
                                    <span>@liammendes</span>
                                </div>
                            </div>
                            <div className="reviews">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="far fa-star"></i>
                            </div>
                        </div>
                        <div className="client-comment">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Exercitationem, quaerat quis? Provident temporibus architecto
                                asperiores nobis maiores nisi a. Quae doloribus ipsum aliquam
                                tenetur voluptates incidunt blanditiis sed atque cumque.
                            </p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default About;
