
// styles
import '../../css/business.css'
import BusinessCards from './BusinessCards'

const Business = () => {
    const businessDetailsColOne = [
        { 
            _id: 1,
            icon: 'images/business/customers.png', 
            count: '32000', 
            text: 'satisfied customers' 
        },
        { 
            _id: 2,
            icon: 'images/business/speeches.png', 
            count: '500+', 
            text: 'satisfied customers' 
        }
    ]
    const businessDetailsColTwo = [
        { 
            _id: 3,
            icon: 'images/business/projects.png', 
            count: '15', 
            text: 'projects tackled' 
        },
        { 
            _id: 4,
            icon: 'images/business/b-search.png', 
            count: '30+', 
            text: 'Years of Experience' 
        }
    ]

    return (
        <div className='business'>
            <div className="dots-left">
                <img src={'images/business/dots-left.png'} alt="layered dots" />
            </div>
            <div className="business-title">
                <h1>My Business</h1>
                <img src={'images/business/line.png'} alt="line" className='line' />
            </div>
            <div className="business-col1">
                <BusinessCards cardDetails={businessDetailsColOne} />
            </div>
            <div className="business-col2">
                <BusinessCards cardDetails={businessDetailsColTwo} />
            </div>
            <div className="dots-right">
            <img src={'images/business/dots-right.png'} alt="layered dots" />
            </div>
        </div>
    )
}

export default Business