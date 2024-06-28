import Image from 'next/image'
import './services.css'
import { datas } from './services_data'
import arrow from '../images/arrow.svg'


export default function Services(){
    return(
        <div className="service" id='services'>
            <div className="service-title">
                <h1>My Services</h1>
            </div>
            <div className="service-cont">
                    {datas.map((work,index)=>{
                        return <div key={index} className='service-format'>
                                <h3>{work.s_no}</h3>
                                <h2>{work.s_name}</h2>
                                <p>{work.s_desc}</p>
                                    <div className="service-readmore">
                                        <p>read more</p>
                                        <Image src={arrow} alt=''/>
                                    </div>
                            </div>
                    })}
            </div>
        </div>
    )
}