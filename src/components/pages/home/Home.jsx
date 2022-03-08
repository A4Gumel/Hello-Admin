import Chart from "../../chart/Chart"
import FeaturedInfo from "../../featuredinfo/FeaturedInfo"
import "./home.css"
import { userData } from "../../../dummyData"
import LargeWidget from "../../largeWidget/LargeWidget"
import SmallWidget from "../../smallWidget/SmallWidget"

export default function Home() {
    return (
        <div className="home">
            <FeaturedInfo/>
            <Chart data={userData} title="User Analytic" grid dataKey={"Active Users"}/>
            <div className="homeWidgets">
                <SmallWidget/>
                <LargeWidget/>
            </div>
        </div>
    )
}
