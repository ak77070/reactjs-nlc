import React from 'react'
import './style.css';

import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

// import { useTable } from 'react-table'
 
// class PayoutTable extends Component {
//     constructor(props) {
//        super(props)
//        this.state = {
//           tokenomics: [
//              { LIQUIDITYPAIR: "SEED", sellordertaken: '2.5%' },
//              { LIQUIDITYPAIR: "PRIVATE SALE", sellordertaken: '0.1%' },
//              { LIQUIDITYPAIR: "CASINO RESERVES", sellordertaken: '0.1%' },
//              { LIQUIDITYPAIR: "LIQUIDITY", sellordertaken: '0.1%'},
//              { LIQUIDITYPAIR: "TOTAL MAX SUPPLY", sellordertaken: '0.1%' },
//              { LIQUIDITYPAIR: "TOTAL MAX SUPPLY", sellordertaken: '0.1%' }
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
//           const { LIQUIDITYPAIR, sellordertaken} = tokenomic //destructuring
//           return (
//              <tr key={LIQUIDITYPAIR}>
//                 <td>{LIQUIDITYPAIR}</td>
//                 <td> {sellordertaken}</td>
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

//  export default PayoutTable


export default function PayoutTable(props) {
  return (
    <Table className="table">
      <Thead>
        <Tr>
          <Th>LIQUIDITY PAIR</Th>
          <Th>% of transfer taken</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>NLIFE/BNB<br></br><span>Primary Pair</span></Td>
          <Td>1.5%</Td>
        </Tr>
        {/* <Tr>
          <Td>RDNC/BNB<br></br><span>Rain Dance LP Staking</span></Td>
          <Td>0.1%</Td>
        </Tr> */}
        {/* <Tr>
          <Td>PARTNER 2 TBD<br></br><span>Partner LP Staking</span></Td>
          <Td>0.1%</Td>
        </Tr>
        <Tr>
          <Td>PARTNER 3 TBD<br></br><span>Partner LP Staking</span></Td>
          <Td>0.1%</Td>
        </Tr>
        <Tr>
          <Td>PARTNER 4 TBD<br></br><span>Partner LP Staking</span></Td>
          <Td>0.1%</Td>
        </Tr>
        <Tr>
          <Td>PARTNER 5 TBD<br></br><span>Partner LP Staking</span></Td>
          <Td>0.1%</Td>
        </Tr> */}
      </Tbody>
    </Table>
  );
}