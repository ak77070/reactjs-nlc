import React from 'react'
import './style.css';

import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

// import { useTable } from 'react-table'
 
// class TokenomicTable extends Component {
//     constructor(props) {
//        super(props)
//        this.state = {
//           tokenomics: [
//              { Events: "SEED", TotalNLIFE: '250000', TGEDistribution: "10%", MonthlyDistribution: "15%" },
//              { Events: "PRIVATE SALE", TotalNLIFE: '1125000', TGEDistribution: "20%", MonthlyDistribution: "20%" },
//              { Events: "CASINO RESERVES", TotalNLIFE: '1500000', TGEDistribution: "100%", MonthlyDistribution: " " },
//              { Events: "LIQUIDITY", TotalNLIFE: '550000', TGEDistribution: "100%", MonthlyDistribution: " " },
//              { Events: "TOTAL MAX SUPPLY", TotalNLIFE: '3425000', TGEDistribution: " ", MonthlyDistribution: " " }
//           ]
//        }
//     }
 
//     renderTableHeader() {
//        let header = Object.keys(this.state.tokenomics[0])
//        return header.map((key, index) => {
//           return <th key={index}>{key.toUpperCase()}</th>
//        })
//     }
 
//     renderTableData() {
//        return this.state.tokenomics.map((tokenomic, index) => {
//           const { Events, TotalNLIFE, TGEDistribution, MonthlyDistribution } = tokenomic //destructuring
//           return (
//              <tr key={Events}>
//                 <td>{Events}</td>
//                 <td>{TotalNLIFE}</td>
//                 <td>{TGEDistribution}</td>
//                 <td>{MonthlyDistribution}</td>
//              </tr>
//           )
//        })
//     }
 
//     render() {
//        return (
//           <div>
//              <table id='tokenomics'>
//                 <tbody>
//                    <tr>{this.renderTableHeader()}</tr>
//                    {this.renderTableData()}
//                 </tbody>
//              </table>
//           </div>
//        )
//     }
//  }

//  export default Table1

export default function TokenomicTable(props) {
  return (
    <Table className="table">
      <Thead>
        <Tr>
          <Th className="text-left">Event</Th>
          <Th>Total NLIFE</Th>
          <Th>TGE Distribution</Th>
          <Th>Monthly Distribution</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td className="text-left">SEED<br></br><span>Initial Seed Sale</span></Td>
          <Td>250,000</Td>
          <Td>10%</Td>
          <Td>15%</Td>
        </Tr>
        <Tr>
          <Td className="text-left">PRIVATE SALE<br></br><span>Private Token Sale</span></Td>
          <Td>1,125,000</Td>
          <Td>20%</Td>
          <Td>20%</Td>
        </Tr>
        <Tr>
          <Td className="text-left">CASINO RESERVES<br></br><span>Held in Contract for Casino Payouts</span></Td>
          <Td>1,500,000</Td>
          <Td>100%</Td>
          <Td></Td>
        </Tr>
        <Tr>
          <Td className="text-left">LIQUIDITY<br></br><span>Initial Liquidity</span></Td>
          <Td>550,000</Td>
          <Td>100%</Td>
          <Td></Td>
        </Tr>
        <Tr>
          <Td className="text-left">TOTAL MAX SUPPLY</Td>
          <Td>3,425,000</Td>
          <Td></Td>
          <Td></Td>
        </Tr>
      </Tbody>
    </Table>
  );
}