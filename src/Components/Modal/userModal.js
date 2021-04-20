import React from 'react';
import './style.css';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';


const DepositModal = () => {
    const [open, setOpen] = React.useState(false);
  
    return (
        <>
            <button className="button acc2btn text-uppercase" onClick={() => setOpen(true)}>
                Deposit NLIFE
            </button>
    
            <Modal
            open={open}
            onClose={() => setOpen(false)}
            center
            classNames= {{
                overlay: 'customOverlay',
                modal: 'customModal',
            }}
            >
                <div>
                    <h2 className="txt1 text-uppercase text-center"> Deposit </h2>
                </div>
                <div className="modalsec1 mb-4">
                    <p>Your Deposit Address: XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</p>
                </div>
                <p className="mtxt1 text-uppercase">
                    Important Note
                </p>
                <p className="mtxt2 mb-3">
                    Deposit address are one time use only and will expire after you have been credited<br></br>
                    (or after 72 hours if it remains unused)
                </p>
                <p className="mtxt2 mb-4">
                    Using the same deposit address for multiple depositsmay result in loss of tokens
                </p>
                <p className="mtxt2">
                    If you experience any issues, please contact support.
                </p>
            </Modal>
        </>
    );
};

const WithdrawModal = () => {
    const [open, setOpen] = React.useState(false);
  
    return (
        <>
            <button className="button acc2btn text-uppercase" onClick={() => setOpen(true)}>
                Withdraw NLIFE
            </button>
    
            <Modal
            open={open}
            onClose={() => setOpen(false)}
            center
            classNames= {{
                overlay: 'customOverlay',
                modal: 'customModal',
            }}
            >
                <div>
                    <h2 className="txt1 text-uppercase text-center"> Withdraw </h2>
                </div>
                <div className="modalsec1 mb-2 ">
                    <p>Recipient: <input className="modalinput"/></p>
                </div>
                <div className="modalsec1 mb-4">
                    <p>Amount: <input className="modalinput"/></p>
                </div>
                <p className="mtxt1 text-uppercase">
                    Gateway fee: XX.XXX NLIFE
                </p>
                <p className="mtxt2 mb-5">
                    We have detected a Binance Smart Chain address and will send your funds via a gateway to this address<br></br>
                    The minimum amount is X.XXX NLIFE
                </p>
                <p className="mtxt2">
                    If you experience any issues, please contact support.
                </p>
            </Modal>
        </>
    );
};

export {WithdrawModal}
export default DepositModal;