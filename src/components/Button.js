const Button = ({ text }) => {
  return (
    <button 
    type="button" 
    style={{  borderRadius: '10%', maxWidth: 'auto', width: '80px', height: '30px'}} >
        {text}
    </button>
  )
}

export default Button