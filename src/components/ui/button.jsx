export const Button = ({ children, variant, size, className, style, ...props }) => (
  <button 
    className={`inline-flex items-center justify-center rounded-md font-medium ${className}`}
    style={style}
    {...props}
  >
    {children}
  </button>
);