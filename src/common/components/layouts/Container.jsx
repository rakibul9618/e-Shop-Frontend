
const Container = ({ py = true, Class = '', children, className }) => {
  return (
    <div className={`flex_container ${Class ? Class : ""}`}>
      <div className={`${py ? "container" : "container padding_0"} ${className ? className : ""}`}>
        {children}
      </div>
    </div>
  )
}

export default Container;