import React from "react";
import Header from "./Header";
import ScrollToTop from "./ui/Home/ScrollToTop";
import { Link } from "react-router-dom";

const TermAndCondition = () => {
  return (
    <>
      <Header />

      <div className="max-w-[900px] mx-auto text-justify  px-5">
        <div className="pt-30 verdanaWrapper">
          <h2 className="font-bold text-lg underline mb-3">MINIMUM STAKING</h2>
          <ol className="list-decimal list-outside pl-6 mb-6 space-y-3">
            <li className="leading-7">
              REGISTRATIONS START FROM A MINIMUM OF $10. HOWEVER, THE USER WILL
              BE CONSIDERED AN “INVALID USER” UNTIL A MINIMUM TOP-UP OF $100 IS
              COMPLETED. DURING THIS PERIOD, THE USER WILL EARN ROI, BUT WILL
              NOT BE COUNTED FOR ANY OTHER INCOMES OR VOLUME CALCULATIONS.
            </li>
          </ol>

          <h2 className="font-bold underline text-lg mb-3">
            STAKING & UN-STAKING
          </h2>
          <ol
            className="list-decimal list-outside pl-6 mb-6 space-y-3"
            start={2}
          >
            <li className="leading-7">USER CAN STAKE/UN-STAKE ANYTIME</li>
            <li className="leading-7">
              ANYTIME PRINCIPAL UNSTAKE:USERS MAY WITHDRAW THEIR PRINCIPAL AMOUNT AT ANY TIME AT THE LIVE TOKEN PRICE. HOWEVER, A FLAT 15% DEDUCTION WILL BE APPLIED ON THE PRINCIPAL, ALONG WITH DEDUCTION OF ALL INCOMES/PROFITS EARNED ON THAT STAKE.

            </li>
            <li className="leading-7">
             UPON UN-STAKING, THE SYSTEM WILL VERIFY CAPPING AND APPLY THE FORMULA FOR NEW TOP-UP ELIGIBILITY: PRINCIPAL – INCOME/ROI – 15% DEDUCTION
            </li>
            <li className="leading-7">
              NOW, AFTER UN-STAKE, USER CAN DO RE-STAKE BUT WITH A FEE OF 10% & IT’LL GOES TO REWARD POOL OR BURN POOL
            </li>
            {/* <li className="leading-7">
              IF YOU UN-STAKE, THE RELEASED FUNDS WILL FIRST BE TRANSFERRED TO
              YOUR WITHDRAWAL WALLET, FROM WHERE YOU MUST INITIATE THE FINAL
              WITHDRAWAL.
            </li> */}
            {/* <li className="leading-7">
              IF YOU UN-STAKE, YOUR ACCOUNT WILL BE PERMANENTLY DEACTIVATED AND
              CANNOT BE REACTIVATED.
            </li> */}
          </ol>

          <h2 className="font-bold underline text-lg mb-3">TRIAL BONUS</h2>

          <ol
            className="list-decimal list-outside pl-6 mb-6 space-y-3"
            start={6}
          >
            <li className="leading-7">
              $100 TRIAL BONUS  VALID FOR 5 DAYS ONLY  NOT WITHDRAWABLE  BUT
              YOU CAN WITHDRAW DAILY REWARDS IF YOU ARE AN ACTIVE USER.
            </li>
          </ol>

          <h2 className="font-bold underline text-lg mb-3">
            FREE $QRA AIRDROP ON EVERY ACTIVE STAKING
          </h2>

          <ol
            className="list-decimal list-outside pl-6 mb-6 space-y-3"
            start={7}
          >
            <li className="leading-7">
              THE $QRA AIRDROP WILL BE DISTRIBUTED ON A FIRST-COME, FIRST-SERVED
              (FCFS) BASIS, AND USERS MUST CLAIM THEIR TOKENS ACCORDING TO THE
              DEFINED VESTING SCHEDULES. THE LAST DATE TO EARN MORE $QRA IS 15TH
              OF JAN’2026.
            </li>
          </ol>
          <h2 className="font-bold underline text-lg mb-3">
            DIRECT REFERRAL REWARD ON TOP-UP
          </h2>

          <ol
            className="list-decimal list-outside pl-6 mb-6 space-y-3"
            start={8}
          >
            <li className="leading-7">
              WHENEVER A USER PERFORMS A TOP-UP, THE SPONSOR WILL RECEIVE A 5%
              DIRECT REFERRAL BONUS, ALONG WITH ALL APPLICABLE ADDITIONAL
              INCOMES. THE TOP-UP VOLUME WILL ALSO BE COUNTED FOR ALL OTHER
              ELIGIBLE INCOME CALCULATIONS.
            </li>
          </ol>

          <h2 className="font-bold underline text-lg mb-3">
            BOOSTX WITHIN 96 HOURS
          </h2>

          <ol
            className="list-decimal list-outside pl-6 mb-6 space-y-3"
            start={9}
          >
            <li className="leading-7">
              REFER 3 USERS WITHIN 96 HOURS, EACH WITH A MINIMUM STAKE OF $100,
              AND EARN A ONE TIME BOOSTER BONUS OF 3% OF THE TOTAL DIRECT
              STAKING AMOUNT.
            </li>
          </ol>

          <h2 className="font-bold underline text-lg mb-3">
            5% WITHDRAWAL FEE
          </h2>

          <ol
            className="list-decimal list-outside pl-6 mb-6 space-y-3"
            start={10}
          >
            <li className="leading-7">
              A 5% WITHDRAWAL FEE WILL BE APPLIED AND ALLOCATED TO THE REWARD
              POOL.
            </li>
          </ol>

          <h2 className="font-bold underline text-lg mb-3">
            P2P FREE & UNLIMITED
          </h2>

          <ol
            className="list-decimal list-outside pl-6 mb-6 space-y-3"
            start={11}
          >
            <li className="leading-7">
              P2P TRANSFERS ARE FREE AND UNLIMITED. USER CAN DO P2P FOR MIN $10
              FOR ANY USER ACTIVATION
            </li>
          </ol>

          <h2 className="font-bold underline text-lg mb-3">COMPOUNDING</h2>

          <ol
            className="list-decimal list-outside pl-6 mb-6 space-y-3"
            start={12}
          >
            <li className="leading-7">
              USERS CAN COMPOUND USING THEIR WITHDRAWAL BALANCE, WITH A MINIMUM
              REQUIREMENT OF $10.
            </li>
          </ol>

          <h2 className="font-bold underline text-lg mb-3">
            AUTO BURNING MECHANISM
          </h2>

          <ol
            className="list-decimal list-outside pl-6 mb-6 space-y-3"
            start={13}
          >
            <li className="leading-7">
              1% OF EVERY TRANSACTION WILL BE ALLOCATED TO THE AUTO BURN
              MECHANISM TO REDUCING THE SUPPLY.
            </li>
          </ol>

          <h2 className="font-bold underline text-lg mb-3">
            STAKING REWARDS SETTLEMENTS
          </h2>

          <ol
            className="list-decimal list-outside pl-6 mb-6 space-y-3"
            start={14}
          >
            <li className="leading-7">
              DAILY ONE-TIME SETTLEMENT IN USD AT THE LIVE MARKET PRICE WILL BE
              PROCESSED AT 3:00 AM IST (GMT +7:00)
            </li>
            <li className="leading-7">
              ALL INCOMES WILL BE SETTLED IN USDT, AND DURING WITHDRAWAL, THE
              AMOUNT WILL BE CONVERTED INTO TOKENS.
            </li>
          </ol>

          <h2 className="font-bold underline text-lg mb-3">CAPPING</h2>

          <ol
            className="list-decimal list-outside pl-6 mb-6 space-y-3"
            start={16}
          >
            <li className="leading-7">CAPPING RANGES FROM 2X TO 3X</li>
            <li className="leading-7">
              ALL INCOMES WILL BE SUBJECT TO THE CAPPING LIMITS.
            </li>
            <li className="leading-7">
              ONCE THE CAPPING LIMIT IS REACHED, ALL INCOMES WILL IMMEDIATELY
              STOP UNTIL A NEW TOP-UP OR P2P TRANSACTION IS MADE.
            </li>
            <li className="leading-7">
              ER HITTING THE CAPPING LIMIT, THE USER CANNOT DOWNGRADE THEIR RANK
              DURING A TOP-UP.
            </li>
          </ol>

          <h2 className="font-bold underline text-lg mb-3">TRADING FEATURES</h2>

          <ol
            className="list-decimal list-outside pl-6 mb-6 space-y-3"
            start={20}
          >
            <li className="leading-7">
              <strong>
                DYNAMIC ORACLE / PRICE GATING  ADVANCED VALUE-PROTECTION SYSTEM
                INTEGRATED IN THE $PANDX TOKEN{" "}
              </strong>
            </li>
            <ul className="list-disc list-inside ml-6 space-y-1">
              <li className="leading-7">
                ON EVERY SELLS, ADDITIONAL TAX & 100% ALLOCATE TO BURN IF THE
                PRICE GOES DOWN BY MORE THAN A CERTAIN % IN A DAY
              </li>
              <li className="leading-7">4% TO 6.99% – 15% BURN TAX</li>
              <li className="leading-7">7% TO 9.99% – 25% BURN TAX</li>
              <li className="leading-7">10% OR ABOVE – 50% BURN TAX
</li>
            </ul>
          </ol>

          <h2 className="font-bold underline text-lg mb-3">
            RANK UPGRADE & DOWNGRADE
          </h2>

          <ol
            className="list-decimal list-outside pl-6 mb-6 space-y-3"
            start={21}
          >
            <li className="leading-7">
              IF YOU ACHIEVE A RANK BASED ON YOUR TEAM SIZE AND YOUR USERS LATER
              BEGIN TO UN-STAKE, YOUR RANK WILL BE AUTOMATICALLY DOWNGRADED
              ACCORDINGLY.
            </li>
          </ol>

          <h2 className="font-bold underline text-lg mb-3">
            BONANZA OR REWARDS
          </h2>

          <ol
            className="list-decimal list-outside pl-6 mb-6 space-y-3"
            start={22}
          >
            <li className="leading-7">
              IN ALL BONANZAS, YOUR VOLUME WILL BE CALCULATED USING A 40:60
              RATIO WHERE 40% OF THE TOTAL VOLUME WILL BE COUNTED FROM YOUR
              STRONGEST TEAM, AND THE REMAINING 60% WILL BE CALCULATED FROM THE
              COMBINED VOLUME OF ALL YOUR OTHER TEAMS.
            </li>
            <li className="leading-7">
              WHENEVER YOU WIN A BONANZA, YOUR GIFT WILL BE DELIVERED WITHIN 15
              DAYS IN THE FORM OF $PANDX AT LIVE.
            </li>
          </ol>

          <h2 className="font-bold underline text-lg mb-3">
            ON-CHAIN SELF WALLET WALLET
          </h2>

          <ol
            className="list-decimal list-outside pl-6 mb-6 space-y-3"
            start={24}
          >
            <li className="leading-7">
              <strong>WALLET UPDATE CONTRACT:</strong>
              <br />A CUSTOMIZABLE CONTRACT UPGRADE FEE, PAYABLE IN $PANDX,
              RANGING FROM $25 TO $100, WILL BE APPLIED. ONCE A WALLET UPDATE
              REQUEST IS SUBMITTED, THE WITHDRAWAL FUNCTION WILL BE HELD FOR 96
              HOURS AS PART OF THE CONTRACT’S SECURITY PROTOCOL. ALL FUNDS
              REMAIN WITHDRAWABLE DIRECTLY FROM THE SMART CONTRACT AFTER THE
              96-HOUR COOLING PERIOD IS COMPLETED.
            </li>
            <li className="leading-7">
              ALL STAKING AND REWARDS IN THE $PANDX STAKING PROJECT ARE STRICTLY
              CONDUCTED IN $PANDX TOKENS ONLY. THERE IS NO MENTION, PROMISE, OR
              GUARANTEE OF ANY RETURN IN USD ($) OR ANY FIAT CURRENCY.
            </li>
            <li className="leading-7">
              THE LIVE MARKET PRICE OF $PANDX MAY VARY AT THE TIME OF STAKING
              AND AT THE TIME OF RECEIVING REWARDS. TOKEN PRICES ARE ENTIRELY
              MARKET-DRIVEN AND BEYOND THE CONTROL OF THE PROJECT OR ITS TEAM.
            </li>
            <li className="leading-7">
              ALL STAKING REWARDS, ROI, BONUSES, OR ANY OTHER BENEFITS WILL BE
              DISTRIBUTED EXCLUSIVELY IN $PANDX TOKENS, REGARDLESS OF THE LIVE
              TOKEN PRICE AT THE TIME OF DISTRIBUTION.
            </li>
            <li className="leading-7">
              $PANDX IS A CRYPTOCURRENCY TOKEN, AND ITS VALUE IS SUBJECT TO
              MARKET VOLATILITY. USERS ACKNOWLEDGE AND ACCEPT THAT
              CRYPTOCURRENCY PARTICIPATION INVOLVES INHERENT RISKS.
            </li>
            <li className="leading-7">
              THE PROJECT DOES NOT GUARANTEE ANY FIXED RETURNS, FIXED PRICES, OR
              ASSURED PROFITS. ALL RETURNS ARE GENERATED AND DISTRIBUTED
              STRICTLY ACCORDING TO THE SMART CONTRACT LOGIC AND PROTOCOL RULES.
            </li>
            <li className="leading-7">
              IT IS THE USER’S RESPONSIBILITY TO CAREFULLY READ AND UNDERSTAND
              ALL RULES, TERMS, AND PROJECT DETAILS BEFORE PARTICIPATING IN
              STAKING. THE PROJECT SHALL NOT BE HELD LIABLE FOR ANY
              MISUNDERSTANDING OR MISINTERPRETATION AFTER STAKING.
            </li>
            <li className="leading-7">
              PARTICIPATION IN STAKING IS ENTIRELY VOLUNTARY AND UNDERTAKEN AT
              THE USER’S OWN RISK. THE PROJECT DOES NOT PROVIDE FINANCIAL,
              INVESTMENT, OR TRADING ADVICE.
            </li>
            <li className="leading-7">
              BY STAKING $PANDX TOKENS, THE USER CONFIRMS FULL ACCEPTANCE OF ALL
              THE ABOVE TERMS AND CONDITIONS.
            </li>
          </ol>
           <Link className="justify-center flex" to={"/"}>
               <button className="btn-primary px-4 py-2 mb-7">I Understand Back to Home</button>
               </Link>
          <ScrollToTop/>
        </div>
      </div>
    </>
  );
};

export default TermAndCondition;
