import './company.css'
import Com1 from '../../assets/company1.png'
import Com2 from '../../assets/company2.png'
import Com3 from '../../assets/company3.png'
import Com4 from '../../assets/company4.png'

const Company = () => {
  return (
    <div>
        <div className="company">
            <img src={Com1} alt="imagess" />
            <img src={Com2} alt="imagess" />
            <img src={Com3} alt="imagess" />
            <img src={Com4} alt="imagess" />
        </div>
    </div>
  )
}

export default Company