import './Horizontal.scss'
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/all';
import { useEffect, useRef } from 'react';
import project1 from '../../assets/interion-desing/project-img-1.jpg'
import project2 from '../../assets/interion-desing/project-img-2.jpg'
import project3 from '../../assets/interion-desing/project-img-3.jpg'
import project4 from '../../assets/interion-desing/project-img-4.jpg'
import FifthButton from '../Buttons/Btn-5/FifthButton';
import icon from '../../assets/Logo/logo3.png'

function Horizontal() {
    const sectionRef =useRef(null);
    const triggerRef =useRef(null);

    gsap.registerPlugin(ScrollTrigger);

    useEffect(()=>{

        const pin = gsap.fromTo(
          sectionRef.current,
          {
            translateX: 0,
          },
          {
            translateX: "-370vw",
            ease: "none",
            duration: 1,
            scrollTrigger: {
              trigger: triggerRef.current,
              start: "top top",
              end: "2000 top",
              scrub: 0.6,
              pin: true,
            },
          }
        );
        return () => {
          {
            /* A return function for killing the animation on component unmount */
          }
          pin.kill();
        };
    },[])
  return (
    <div className="scroll-section-outer">
      <div ref={triggerRef}>
        <div ref={sectionRef} className="scroll-section-inner">
          <div className="scroll-section">
            {/* <img src={project1} />
            <div className="scroll-section-desc">
              <h3>First Project</h3>
              <p>
                When the Falkbuilt San Diego Branch started talking with Genuine
                McCarthy Enterprises about renovating their Newport Beach space,
                the construction company was primarily interested in hearing
                about glass fronts for offices. But in no time, McCarthy
                realized Digital Component Construction could do much more for
                them, their schedule, and their space. From a custom timber
                ceiling and stunning millwork to a Zero Gravity wall and another
                emblazoned with a vintage corporate photo, McCarthy is thrilled
                with the result.
              </p>
              <FifthButton title={"Read More"} />
            </div> */}
            <img src={icon}/>
          </div>
          <div className="scroll-section">
            <img src={project2} />
            <div className="scroll-section-desc">
              <h3>First Project</h3>
              <p>
                When the Falkbuilt San Diego Branch started talking with Genuine
                McCarthy Enterprises about renovating their Newport Beach space,
                the construction company was primarily interested in hearing
                about glass fronts for offices. But in no time, McCarthy
                realized Digital Component Construction could do much more for
                them, their schedule, and their space. From a custom timber
                ceiling and stunning millwork to a Zero Gravity wall and another
                emblazoned with a vintage corporate photo, McCarthy is thrilled
                with the result.
              </p>
              <FifthButton title={"Read More"} />
            </div>
          </div>
          <div className="scroll-section">
            <img src={project3} />
            <div className="scroll-section-desc">
              <h3>First Project</h3>
              <p>
                When the Falkbuilt San Diego Branch started talking with Genuine
                McCarthy Enterprises about renovating their Newport Beach space,
                the construction company was primarily interested in hearing
                about glass fronts for offices. But in no time, McCarthy
                realized Digital Component Construction could do much more for
                them, their schedule, and their space. From a custom timber
                ceiling and stunning millwork to a Zero Gravity wall and another
                emblazoned with a vintage corporate photo, McCarthy is thrilled
                with the result.
              </p>
              <FifthButton title={"Read More"} />
            </div>
          </div>
          <div className="scroll-section">
            <img src={project4} />
            <div className="scroll-section-desc">
              <h3>First Project</h3>
              <p>
                When the Falkbuilt San Diego Branch started talking with Genuine
                McCarthy Enterprises about renovating their Newport Beach space,
                the construction company was primarily interested in hearing
                about glass fronts for offices. But in no time, McCarthy
                realized Digital Component Construction could do much more for
                them, their schedule, and their space. From a custom timber
                ceiling and stunning millwork to a Zero Gravity wall and another
                emblazoned with a vintage corporate photo, McCarthy is thrilled
                with the result.
              </p>
              <FifthButton title={"Read More"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Horizontal