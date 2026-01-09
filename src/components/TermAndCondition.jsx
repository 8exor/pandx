import React from "react";
import Header from "./Header";
import ScrollToTop from "./ui/Home/ScrollToTop";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const TermAndCondition = () => {
  const headers = [
    "24H PRICE DROP",
    "ADDITIONAL SELL BURN TAX",
    "ALLOCATION",
    "supply",
    "sustainability",
  ];

  const rows = [
    {
      drop: "3% TO 4.99%",
      tax: "15%",
      allocation: "100% → BURN",
      supply: "SUPPLY ↓",
      sustainability: "PRICE STABILITY ↑",
    },
    {
      drop: "5% TO 9.99%",
      tax: "30%",
      allocation: "100% → BURN",
      supply: "SUPPLY ↓",
      sustainability: "PRICE STABILITY ↑",
    },
    {
      drop: "10% & above",
      tax: "50%",
      allocation: "100% → BURN",
      supply: "SUPPLY ↓",
      sustainability: "PRICE STABILITY ↑",
    },
  ];

  const AirdropHeader = ["AIRDROP ON FCFS", "SELF SIGNUP", "REFERRALS"];

  const airdroprows = [
    {
      AIRDROP: "1 TO 2000",
      signup: "50 $QRA ",
      REFERRALS: "50 $QRA ",
    },
    {
      AIRDROP: "2001 TO 7500",
      signup: "25 $QRA ",
      REFERRALS: "25 $QRA ",
    },
    {
      AIRDROP: "7501 TO 20,000",
      signup: "10 $QRA ",
      REFERRALS: "10 $QRA ",
    },
  ];
  return (
    <>
      <Header />
      <div className="max-w-[900px] mx-auto text-justify  px-5">
        <div className="pt-30 verdanaWrapper">
          <h2 className="mb-3 text-lg font-bold underline">MINIMUM STAKING</h2>
          <ol className="pl-6 mb-6 space-y-3 list-decimal list-outside">
            <li className="leading-7">
              REGISTRATIONS START FROM A MINIMUM OF $10. HOWEVER, THE USER WILL
              BE CONSIDERED AN “INVALID USER” UNTIL A MINIMUM TOP-UP OF $100 IS
              COMPLETED. DURING THIS PERIOD, THE USER WILL EARN ROI, BUT WILL
              NOT BE COUNTED FOR ANY OTHER INCOMES OR VOLUME CALCULATIONS.
            </li>
          </ol>

          <h2 className="mb-3 text-lg font-bold underline">
            STAKING & UN-STAKING
          </h2>
          <ol
            className="pl-6 mb-6 space-y-3 list-decimal list-outside"
            start={2}
          >
            <li className="leading-7">USER CAN STAKE/UN-STAKE ANYTIME</li>
            <li className="leading-7">
              ANYTIME PRINCIPAL UNSTAKE: USERS MAY WITHDRAW THEIR PRINCIPAL
              AMOUNT AT ANY TIME AT THE LIVE TOKEN PRICE. HOWEVER, A FLAT 25%
              DEDUCTION WILL BE APPLIED ON THE PRINCIPAL, ALONG WITH DEDUCTION
              OF ALL INCOMES/PROFITS EARNED ON THAT STAKE.
            </li>
            <li className="leading-7">
              UPON UN-STAKING, THE SYSTEM WILL VERIFY CAPPING AND APPLY THE
              FORMULA FOR NEW TOP-UP ELIGIBILITY: PRINCIPAL – INCOME/ROI – 25%
              DEDUCTION
            </li>
            {/* <li className="leading-7">
              NOW, AFTER UN-STAKE, USER CAN DO RE-STAKE BUT WITH A FEE OF 10% & IT’LL GOES TO REWARD POOL OR BURN POOL
            </li> */}
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

          <h2 className="mb-3 text-lg font-bold underline">TRIAL BONUS</h2>

          <ol
            className="pl-6 mb-6 space-y-3 list-decimal list-outside"
            start={5}
          >
            <li className="leading-7">
              $100 TRIAL BONUS VALID FOR 5 DAYS ONLY NOT WITHDRAWABLE BUT YOU
              CAN WITHDRAW DAILY REWARDS IF YOU ARE AN ACTIVE USER.
            </li>
          </ol>

          <h2 className="mb-3 text-lg font-bold underline">
            $QRA AIRDROP FOR ACTIVE STAKERS ON FCFS TOP-UP
          </h2>

          <ol className="pl-6 space-y-3 list-decimal list-outside" start={6}>
            <li className="leading-7">
              THE $QRA AIRDROP WILL BE DISTRIBUTED ON A FCFS (FIRST COME — FIRST
              SERVED) TOP-UP BASIS, AND USERS MUST CLAIM THEIR $QRA TOKENS
              ACCORDING TO THE DEFINED VESTING SCHEDULES (10 MONTHS VESTING
              SCHEDULE WITH 15 DAYS CLIFF — MEANS CLAIM 10% EACH MONTH & NEXT
              CLAIM AFTER 30 DAYS OF FIRST/LAST CLAIM). THE LAST DATE TO EARN
              MORE $QRA IS 31ST OF JANUARY 2026. TO CLAIM THE AIRDROP, AN ACTIVE
              ACCOUNT IS NECESSARY.
            </li>
          </ol>
          <div className="overflow-x-auto">
            <table
              className="min-w-[320px] sm:w-full"
              style={{
                borderCollapse: "collapse",
                width: "100%",
                textAlign: "center",
                fontWeight: "400",
                margin: "40px 0px",
              }}
            >
              <thead>
                <tr>
                  {AirdropHeader.map((AirdropHeader) => (
                    <th
                      key={AirdropHeader}
                      style={{
                        border: "1px solid #999",
                        padding: "12px 16px",
                        width: `${100 / AirdropHeader.length}%`,
                        fontWeight: "400",
                        backgroundColor: "#f9f9f9",
                      }}
                    >
                      {AirdropHeader}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {airdroprows.map(({ AIRDROP, signup, REFERRALS }, i) => (
                  <tr key={i}>
                    {[AIRDROP, signup, REFERRALS].map((cell, idx) => (
                      <td
                        key={idx}
                        style={{
                          border: "1px solid #999",
                          padding: "12px 16px",
                          width: `${100 / AirdropHeader.length}%`,
                        }}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <h2 className="mb-10 font-bold">
            NOTE: Users who Stake earlier, as per the table below, will be
            eligible to receive the airdrop in accordance with the specified
            allocation in the same table
          </h2>
          <h2 className="mb-3 text-lg font-bold underline">
            DIRECT REFERRAL REWARD ON TOP-UP
          </h2>

          <ol
            className="pl-6 mb-6 space-y-3 list-decimal list-outside"
            start={7}
          >
            <li className="leading-7">
              WHENEVER A USER PERFORMS A TOP-UP, THE SPONSOR WILL RECEIVE A 5%
              DIRECT REFERRAL BONUS, ALONG WITH ALL APPLICABLE ADDITIONAL
              INCOMES. THE TOP-UP VOLUME WILL ALSO BE COUNTED FOR ALL OTHER
              ELIGIBLE INCOME CALCULATIONS.
            </li>
          </ol>

          <h2 className="mb-3 text-lg font-bold underline">
            BOOSTX WITHIN 96 HOURS
          </h2>

          <ol
            className="pl-6 mb-6 space-y-3 list-decimal list-outside"
            start={8}
          >
            <li className="leading-7">
              REFER 3 USERS WITHIN 96 HOURS, EACH WITH A MINIMUM STAKE OF $100,
              AND EARN A ONE TIME BOOSTER BONUS OF 3% OF THE TOTAL DIRECT
              STAKING AMOUNT.
            </li>
          </ol>

          <h2 className="mb-3 text-lg font-bold underline">
            5% WITHDRAWAL FEE
          </h2>

          <ol
            className="pl-6 mb-6 space-y-3 list-decimal list-outside"
            start={9}
          >
            <li className="leading-7">
              A 5% WITHDRAWAL FEE WILL BE APPLIED AND ALLOCATED TO THE REWARD
              POOL.
            </li>
          </ol>

          <h2 className="mb-3 text-lg font-bold underline">
            P2P FREE & UNLIMITED
          </h2>

          <ol
            className="pl-6 mb-6 space-y-3 list-decimal list-outside"
            start={10}
          >
            <li className="leading-7">
              P2P TRANSFERS ARE FREE AND UNLIMITED. USER CAN DO P2P FOR MIN $10
              FOR ANY USER ACTIVATION
            </li>
          </ol>

          <h2 className="mb-3 text-lg font-bold underline">COMPOUNDING</h2>

          <ol
            className="pl-6 mb-6 space-y-3 list-decimal list-outside"
            start={11}
          >
            <li className="leading-7">
              USERS CAN COMPOUND USING THEIR WITHDRAWAL BALANCE, WITH A MINIMUM
              REQUIREMENT OF $10.
            </li>
          </ol>

          <h2 className="mb-3 text-lg font-bold underline">
            AUTO BURNING MECHANISM
          </h2>

          <ol
            className="pl-6 mb-6 space-y-3 list-decimal list-outside"
            start={12}
          >
            <li className="leading-7">
              1% OF EVERY TRANSACTION WILL BE ALLOCATED TO THE AUTO BURN
              MECHANISM TO REDUCING THE SUPPLY.
            </li>
          </ol>

          <h2 className="mb-3 text-lg font-bold underline">
            STAKING REWARDS SETTLEMENTS
          </h2>

          <ol
            className="pl-6 mb-6 space-y-3 list-decimal list-outside"
            start={13}
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

          <h2 className="mb-3 text-lg font-bold underline">CAPPING</h2>

          <ol
            className="pl-6 mb-6 space-y-3 list-decimal list-outside"
            start={15}
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

          <h2 className="mb-3 text-lg font-bold underline">TRADING FEATURES</h2>

          <ol
            className="pl-6 mb-6 space-y-3 list-decimal list-outside"
            start={19}
          >
            <li className="leading-7">
              <strong>DYNAMIC ORACLE / PRICE GATING (ADVANCED)</strong>
            </li>
            <ul className="ml-6 space-y-1 list-disc list-inside">
              <li className="leading-7">
                If $PANDX token’s price declines by more than a predefined
                percentage within a 24-hour period, an additional dynamic burn
                tax will be applied to every sell transaction. This mechanism is
                specifically designed to prevent whale-driven dumping and
                abnormal selling pressure.
              </li>
              <li className="leading-7">
                Under this model, 100% of the burn tax is permanently allocated
                to burning, resulting in a reduction of the circulating supply
                and the elimination of artificial sell-side pressure.
              </li>
              <li className="leading-7">
                As a result, the $PANDX token’s price remains more stable over
                the long term, unhealthy volatility is reduced, and community
                confidence and participation are naturally strengthened.
              </li>
              <li className="leading-7">
                Users can use the #P2P model to save this burn tax.
              </li>
            </ul>
            <div className="overflow-x-auto">
              <table
                className="min-w-[320px] sm:w-full"
                style={{
                  borderCollapse: "collapse",
                  width: "100%",
                  textAlign: "center",
                  fontWeight: "400",
                  margin: "50px 0px",
                }}
              >
                <thead>
                  <tr>
                    {headers.map((header) => (
                      <th
                        key={header}
                        style={{
                          border: "1px solid #999",
                          padding: "12px 16px",
                          width: `${100 / headers.length}%`,
                          fontWeight: "400",
                          backgroundColor: "#f9f9f9",
                        }}
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {rows.map(
                    ({ drop, tax, allocation, supply, sustainability }, i) => (
                      <tr key={i}>
                        {[drop, tax, allocation, supply, sustainability].map(
                          (cell, idx) => (
                            <td
                              key={idx}
                              style={{
                                border: "1px solid #999",
                                padding: "12px 16px",
                                width: `${100 / headers.length}%`,
                              }}
                            >
                              {cell}
                            </td>
                          )
                        )}
                      </tr>
                    )
                  )}
                </tbody>
              </table>
            </div>
          </ol>

          <h2 className="mb-3 text-lg font-bold underline">
            RANK UPGRADE & DOWNGRADE
          </h2>

          <ol
            className="pl-6 mb-6 space-y-3 list-decimal list-outside"
            start={20}
          >
            <li className="leading-7">
              IF YOU ACHIEVE A RANK BASED ON YOUR TEAM SIZE AND YOUR USERS LATER
              BEGIN TO UN-STAKE, YOUR RANK WILL BE AUTOMATICALLY DOWNGRADED
              ACCORDINGLY.
            </li>
          </ol>

          <h2 className="mb-3 text-lg font-bold underline">
            BONANZA OR REWARDS
          </h2>

          <ol
            className="pl-6 mb-6 space-y-3 list-decimal list-outside"
            start={21}
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

          <h2 className="mb-3 text-lg font-bold underline">
            ON-CHAIN SELF WALLET WALLET
          </h2>

          <ol
            className="pl-6 mb-6 space-y-3 list-decimal list-outside"
            start={23}
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

          <h2 className="mb-3 text-lg font-bold underline">
            USER ACKNOWLEDGMENT OF VOLUNTARY PARTICIPATION, RISK ACCEPTANCE &
            LIABILITY WAIVER
          </h2>

          <ol
            className="pl-6 mb-6 space-y-3 list-decimal list-outside"
            start={32}
          >
            <li className="leading-7">
              The user expressly acknowledges and agrees that any investment
              made in this platform/project is entirely voluntary, and is
              undertaken without any pressure, coercion, inducement, or undue
              influence from any individual or entity.
            </li>
            <li className="leading-7">
              The user further confirms that the investment decision has been
              made solely based on their own independent research, analysis, and
              due diligence, and that they fully understand the potential risks,
              market volatility, and possible outcomes associated with such
              investment.
            </li>
            <li className="leading-7">
              The user agrees that they shall not make any claim, demand,
              complaint, or initiate any legal action against any individual,
              organization, platform, team member, or system in relation to any
              loss, profit, delay, price fluctuation, or outcome arising from
              the investment.
            </li>
            <li className="leading-7">
              These terms shall be deemed to have been read, understood, and
              fully accepted by the user prior to making any investment.
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

          <Link className="flex justify-center" to={"/"}>
            <button className="px-4 py-2 btn-primary mb-7">
              I Understand, Back to Home.
            </button>
          </Link>
          <ScrollToTop />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TermAndCondition;
