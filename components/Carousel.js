import React, { useState } from 'react'
import { useSpring, useTransition, animated } from 'react-spring'
import { useMeasure } from 'lib/helpers'
import CarouselButtons from 'styles/CarouselButtons'

const CarouselContent = ({ activeIndex, prev, next, direction, items }) => {
  const transitions = useTransition(items[activeIndex], i => i, {
    initial: {
      x: 0
    },
    from: {
      opacity: 0,
      x: direction === 'left' ? 20 : -20
    },
    enter: {
      opacity: 1,
      x: 0
    },
    leave: {
      opacity: 0,
      x: direction === 'right' ? 20 : -20,
      position: 'absolute',
      pointerEvents: 'none'
    }
  })
  const [ref, measure] = useMeasure(activeIndex)
  const springStyles = useSpring({
    from: { height: 'auto' },
    to: { height: measure && measure.height !== 0 ? measure.height : 'auto' }
  })
  return (
    <>
      <animated.div style={springStyles}>
        {transitions.map(
          ({ item: Component, props: { x, ...styles }, key }) => (
            <animated.div
              ref={ref}
              style={{
                transform: x.interpolate(val => `translateX(${val}rem)`),
                ...styles
              }}
            >
              <Component key={key} />
            </animated.div>
          )
        )}
      </animated.div>
      <CarouselButtons>
        <button type="button" className="prev" onClick={prev} />
        <button type="button" className="next" onClick={next} />
      </CarouselButtons>
    </>
  )
}

const Carousel = ({ index, items }) => {
  const maxIndex = items.length - 1
  const [activeIndex, setActiveIndex] = useState(index)
  const [direction, setDirection] = useState('left')
  const prev = () => {
    setDirection('left')
    if (activeIndex - 1 < 0) setActiveIndex(maxIndex)
    else setActiveIndex(activeIndex - 1)
  }
  const next = () => {
    setDirection('right')
    if (activeIndex + 1 > maxIndex) setActiveIndex(0)
    else setActiveIndex(activeIndex + 1)
  }
  return (
    <CarouselContent
      activeIndex={activeIndex}
      prev={prev}
      next={next}
      direction={direction}
      items={items}
    />
  )
}

export default Carousel
