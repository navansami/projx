
import '../../css/button.css'

const Button = ({ text, customize, mode }) => {

    return (

        <button className={ customize +" "+ mode }>
            { text }
        </button>
    )
}

export default Button