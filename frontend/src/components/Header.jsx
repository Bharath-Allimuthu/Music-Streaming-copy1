import './Header.css'
import PropTypes from 'prop-types'

const Header = ({title}) => {
  return (
    <section>
        <p className="music-title">{title}</p>
    </section>
  )
}

Header.propTypes = {
    title: PropTypes.string
}

export default Header