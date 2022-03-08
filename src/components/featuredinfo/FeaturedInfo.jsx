import "./featuredinfo.css"
import {ArrowDownwardRounded, ArrowUpwardRounded} from "@material-ui/icons";

export default function FeaturedInfo() {
    return (
        <div>
            <div className="featured">
                <div className="featuredItem">
                    <span className="featuredTitle">Revenue</span>
                    <div className="feturedMoneyContainer">
                        <span className="featuredMoney">$8,998</span>
                        <span className="featuredMoneyRate">-45.0 
                        <ArrowDownwardRounded className="featuredIcon negative"/>
                        </span>
                    </div>
                    <span className="featuredSub">Compared to last month</span>
                </div>

                <div className="featuredItem">
                    <span className="featuredTitle">Sales</span>
                    <div className="feturedMoneyContainer">
                        <span className="featuredMoney">$78,998</span>
                        <span className="featuredMoneyRate">+25.0
                         <ArrowUpwardRounded className="featuredIcon"/></span>
                    </div>
                    <span className="featuredSub">Compared to last month</span>
                </div>

                <div className="featuredItem">
                    <span className="featuredTitle">Cost</span>
                    <div className="feturedMoneyContainer">
                        <span className="featuredMoney">$79,998</span>
                        <span className="featuredMoneyRate">+11<ArrowUpwardRounded className="featuredIcon"/></span>
                    </div>
                    <span className="featuredSub">Compared to last month</span>
                </div>
            </div>
        </div>
    )
}
