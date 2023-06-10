import classNames from 'classnames'
import PropTypes from 'prop-types'
import { createElement } from 'react'

function Button({children, as, variant, size, ...props }) {
  return createElement (as, {...props, className: classNames("h-10 rounded", {"flex items-center justify-center bg-primary text-white font-medium" : variant === 'primary', "px-5" : size === 'normal' })}, children )
}

Button.propTypes = {
    children: PropTypes.element,
    variant: PropTypes.oneOf(['primary','light']),
    size: PropTypes.oneOf(['normal','large','small']),
    as: PropTypes.string,
    props: PropTypes.object
}
Button.defaultProps = {
    as: 'button',
    variant : 'primary',
    size: 'normal'
}

export default Button