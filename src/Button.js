import className from 'classnames';

function Button({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
  ...rest
}) { 
  const classes = className('flex items-center px-3 py-1.5 border', {
    'border-blue-600 bg-blue-400 text-slate-100': primary,
    'border-gray-900 bg-gray-900 text-slate-100': secondary,
    'border-green-500 bg-green-500 text-slate-100': success,
    'border-yellow-400 bg-yellow-400 text-slate-100': warning,
    'border-red-500 bg-red-500 text-slate-100': danger,
    'rounded-full': rounded,
    'bg-white': outline,
    'text-blue-500': outline && primary,
    'text-gray-500': outline && secondary,
    'text-green-500': outline && success,
    'text-yellow-500': outline && warning,
    'text-red-500': outline && danger,
  });

  // main function is wrapper -> <button> is underlying (or wrapped) element
  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  )
}

Button.propTypes = {
  checkVariationValue: ({primary, secondary, success, warning, danger}) => {
    const count = Number(!!primary) 
      + Number(!!secondary)
      + Number(!!success)
      + Number(!!warning)
      + Number(!!danger)

    if (count > 1) {
      return new Error('Only one of primary, secondary, success, warning, or danger can be true')
    }
  },
}

export default Button;
