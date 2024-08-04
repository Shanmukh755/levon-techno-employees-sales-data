import Header from '../Header'
import { useState, useEffect } from 'react'
import Sidebar from '../Sidebar'
import Footer from '../Footer'
import axios from 'axios'
import Overview from '../Overview'
import './index.css'

const Home = () => {
    const [isClickToggle, setIsClickToggle] = useState(false)
    const [isClickArrow, setIsClickArrow] = useState(false)
    const [employeeData, setEmployeeData] = useState([])

    useEffect(() => {
        axios.get('https://66ad29feb18f3614e3b49471.mockapi.io/user-activity')
        .then(response => setEmployeeData(response.data))
    }, [])

    const onClickToggleBtn = () => {
        setIsClickToggle(!isClickToggle)
    }

    const onClickArrowBtn = () => {
        setIsClickArrow(!isClickArrow)
    }

    console.log(employeeData)

    const homeBg = isClickToggle ? "home-container dark" : "home-container light"
    const dashboardBg = isClickToggle ? "dashboard-cont dark" : "dashboard-cont light"
    const darkT = isClickToggle ? "pp1" : "pp2"

    return (
        <div className={homeBg}>
            <Header onClickToggleBtn={onClickToggleBtn} isClickToggle={isClickToggle} onClickArrowBtn={onClickArrowBtn} />
            <div className="home-body-container" id='home'>
                <Sidebar isClickToggle={isClickToggle} isClickArrow={isClickArrow}/>
                <div className={dashboardBg}>
                    {employeeData.length !== 0 ? (
                        <Overview employeeData={employeeData} isClickToggle={isClickToggle} />
                    ) : (
                        <p className={darkT}>Dashboard Loading or Technical Error</p>
                    )}
                </div>
            </div>
            <Footer isClickToggle={isClickToggle} />
        </div>
    )
}

export default Home
