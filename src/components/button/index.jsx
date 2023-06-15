import classNames from 'classnames'
import PropTypes from 'prop-types'
import { createElement } from 'react'

function Button({children, as, variant, size, ...props }) {
  return createElement (as, {
    ...props, 
    className: classNames("h-10 rounded flex items-center justify-center", {
      " bg-primary dark:bg-blue-500 text-white " : variant === 'primary',
      " bg-white text-primary " : variant === 'light', 
      " bg-zinc-200 text-primary " : variant === 'gray', 
      "px-5 font-medium" : size === 'normal' 
    })
  },children )
}

Button.propTypes = {
    children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
    variant: PropTypes.oneOf(['primary','light','gray']),
    size: PropTypes.oneOf(['normal','large','small']),
    as: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    props: PropTypes.object
}
Button.defaultProps = {
    as: 'button',
    variant : 'primary',
    size: 'normal'
}

export default Button