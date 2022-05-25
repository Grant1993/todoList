const Button = ({ text, ...rest }) => {
  return (
    <button 
    {...rest}
    type="button" 
    style={{  borderRadius: '10%', maxWidth: 'auto', width: '80px', height: '30px'}} >
        {text}
    </button>
  )
}

export default Button