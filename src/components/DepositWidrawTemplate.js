import { Dropdown } from "react-bootstrap";
import React from "react";
import { useAuth } from "../contexts/AuthContext";
import styles from "./DepositWithdrawTemplate.module.css";

export default function DepositWithdrawTemplate(props) {
  const { user } = useAuth();
  return (
    <>
      <div className={styles.card}>
        <div className={styles.title}>How much would you like to deposit?</div>
        <div className={styles.amountContainer}>
          <div className={styles.amountDropdown}>
            <select className={styles.cardDropdown} id="plan">
              <option value="USD" selected>
                USD
              </option>
              <option value="EUR">EUR</option>
            </select>
            <input
              className={styles.input}
              placeholder="Add an amount"
              type="number"
              ref={props.amount}
              required
            ></input>
          </div>
          <div className={styles.errorDisplay}>{props.err}</div>
        </div>
        <button className={styles.button}
        onClick={()=>props.handleFunction()}> Deposit</button>
      </div>
    </>
  );
}