import React from 'react'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { SectionWrapper } from '../hoc'
import { fadeIn, textVariant } from '../utils/motion'
import { testimonials } from '../constants'
import FeedbackCard from './FeedbackCard'

const Feedbacks = () => {
  return (
    <div className="mt-12 bg-black-100 rounded-[20px]">
      <div className={`${styles.padding} bg-tertiary roundedd-2xl min-h-[300px]`}>
        <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What Others say</p>
        <h2 className={styles.sectionHeadText}>Testimonials.</h2>
        </motion.div>
      </div>
      <div className={ `${styles.paddingX}-mt-20 pb-14 flex flex-wrap gap-7` }>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard 
            key={testimonial.name}
            index={index}
            testimonial={testimonial.testimonial}
            name={testimonial.name}
            designation={testimonial.designation}
            company={testimonial.company}
            image={testimonial.image}
          />
        ))}
      </div>
    </div>
  )
}

export default SectionWrapper(Feedbacks, "");