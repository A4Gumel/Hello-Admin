import "./largeWidget.css"

export default function LargeWidget() {

  const Button = ({type}) => {
    return <button className={"widgetLargeButton " + type}>{type}</button>
  }
  return (
      <div className="largeWidget">
          <h3 className="lgWigetTitle">Latest Transactions</h3>
          <table className="widgetLargeTable">
            <tr className="widgetLargetTr">
              <th className="widgetLargeTh">Customer</th>
              <th className="widgetLargeTh">Date</th>
              <th className="widgetLargeTh">Amount</th>
              <th className="widgetLargeTh">Status</th>
            </tr>
            <tr className="widgetLargeTr">
              <td className="widgetLargeUser">
                <img src="https://avatars.githubusercontent.com/u/71941098?v=4" alt="" className="widgetLargeImage" />
                <span className="widgetLargeName">A4Gumel</span>
              </td>
              <td className="widgetLargeDate">2 Jun 2020</td>
              <td className="widgetLargeAmount">$122.00</td>
              <td className="widgetLargeStatus"><Button type="Approved"/></td>
            </tr>

            <tr className="widgetLargeTr">
              <td className="widgetLargeUser">
                <img src="https://avatars.githubusercontent.com/u/71941098?v=4" alt="" className="widgetLargeImage" />
                <span className="widgetLargeName">A4Gumel</span>
              </td>
              <td className="widgetLargeDate">2 Jun 2020</td>
              <td className="widgetLargeAmount">$122.00</td>
              <td className="widgetLargeStatus"><Button type="Declined"/></td>
            </tr>

            <tr className="widgetLargeTr">
              <td className="widgetLargeUser">
                <img src="https://avatars.githubusercontent.com/u/71941098?v=4" alt="" className="widgetLargeImage" />
                <span className="widgetLargeName">A4Gumel</span>
              </td>
              <td className="widgetLargeDate">2 Jun 2020</td>
              <td className="widgetLargeAmount">$122.00</td>
              <td className="widgetLargeStatus"><Button type="Pending"/></td>
            </tr>

            <tr className="widgetLargeTr">
              <td className="widgetLargeUser">
                <img src="https://avatars.githubusercontent.com/u/71941098?v=4" alt="" className="widgetLargeImage" />
                <span className="widgetLargeName">A4Gumel</span>
              </td>
              <td className="widgetLargeDate">2 Jun 2020</td>
              <td className="widgetLargeAmount">$122.00</td>
              <td className="widgetLargeStatus"><Button type="Approved"/></td>
            </tr>

            <tr className="widgetLargeTr">
              <td className="widgetLargeUser">
                <img src="https://avatars.githubusercontent.com/u/71941098?v=4" alt="" className="widgetLargeImage" />
                <span className="widgetLargeName">A4Gumel</span>
              </td>
              <td className="widgetLargeDate">2 Jun 2020</td>
              <td className="widgetLargeAmount">$122.00</td>
              <td className="widgetLargeStatus"><Button type="Declined"/></td>
            </tr>
          </table>
      </div>
  )
}