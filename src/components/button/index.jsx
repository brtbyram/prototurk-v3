import classNames from 'classnames'
import PropTypes from 'prop-types'
import { createElement } from 'react'

function Button({children, as, variant, size, className, ...props }) {
  return createElement (as, {
    ...props, 
    className: classNames("rounded flex items-center justify-center", {
      " bg-primary dark:bg-blue-500 text-white " : variant === 'primary',
      " bg-white text-primary " : variant === 'light', 
      " bg-zinc-200 text-primary " : variant === 'gray', 
      "px-5 font-medium h-10 text-15" : size === 'normal',
      "px-4 font-medium h-8 text-sm" : size === 'small',
      [className] : !!className
    })
  },children )
}

Button.propTypes = {
    children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
    variant: PropTypes.oneOf(['primary','light','gray']),
    size: PropTypes.oneOf(['normal','large','small']),
    as: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    props: PropTypes.object,
    className: PropTypes.string
}
Button.defaultProps = {
    as: 'button',
    variant : 'primary',
    size: 'normal'
}

export default Button