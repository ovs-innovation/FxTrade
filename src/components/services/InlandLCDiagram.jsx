import React from 'react';
import { servicesData } from '../../data/services';

export const InlandLCDiagram = () => {
  return (
    <div className="diagram-container" aria-label="Inland Letter of Credit Transaction Architecture">
      <div className="diagram-header-bar">
        <h4 className="diagram-header-title">INLAND LETTER OF CREDIT TRANSACTION FLOW</h4>
        <p className="diagram-header-desc">
          Structured bank-to-bank settlement and immediate supplier discounting architecture
        </p>
      </div>

      <div style={{ overflowX: 'auto', padding: '10px 0' }}>
        <svg
          viewBox="0 0 850 480"
          className="lc-diagram-svg-box"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Background styling definitions */}
          <defs>
            <filter id="nodeShadow" x="-10%" y="-10%" width="125%" height="125%">
              <feDropShadow dx="0" dy="4" stdDeviation="6" floodOpacity="0.08" />
            </filter>
            <marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 1 L 10 5 L 0 9 z" fill="#0b2f5d" />
            </marker>
            <marker id="arrowRed" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 1 L 10 5 L 0 9 z" fill="#d00000" />
            </marker>
          </defs>

          {/* Flow Lines & Arrows */}
          {/* 1. Buyer to Seller (Contract & Purchase Order) */}
          <path d="M 190 145 L 190 315" stroke="#0b2f5d" strokeWidth="2.5" strokeDasharray="5,5" markerEnd="url(#arrow)" />
          
          {/* 2. Buyer to Issuing Bank (LC Application) */}
          <path d="M 285 95 L 565 95" stroke="#0b2f5d" strokeWidth="2.5" markerEnd="url(#arrow)" />
          
          {/* 3. Issuing Bank to Discounting Bank (Electronic LC / SFMS) */}
          <path d="M 660 145 L 660 315" stroke="#0b2f5d" strokeWidth="2.5" markerEnd="url(#arrow)" />
          
          {/* 4. Seller to Buyer (Goods Dispatched) */}
          <path d="M 215 315 L 215 145" stroke="#0b2f5d" strokeWidth="2.5" markerEnd="url(#arrow)" />
          
          {/* 5. Seller to Discounting Bank / FXTrade (Compliant Docs Submitted) */}
          <path d="M 285 365 L 565 365" stroke="#0b2f5d" strokeWidth="2.5" markerEnd="url(#arrow)" />
          
          {/* 6. Discounting Bank to Seller (Immediate Funds T+1) */}
          <path d="M 565 390 L 285 390" stroke="#d00000" strokeWidth="3" markerEnd="url(#arrowRed)" />

          {/* 7. Discounting Bank to Issuing Bank (Docs for Acceptance) */}
          <path d="M 635 315 L 635 145" stroke="#0b2f5d" strokeWidth="2.5" strokeDasharray="5,5" markerEnd="url(#arrow)" />

          {/* 8. Issuing Bank to Discounting Bank (Maturity Reimbursement) */}
          <path d="M 660 145 L 660 315" stroke="#237804" strokeWidth="2" strokeDasharray="4,4" />

          {/* Party Node 1: Applicant (Buyer) - Top Left */}
          <g transform="translate(90, 50)" filter="url(#nodeShadow)">
            <rect width="195" height="90" rx="8" fill="#ffffff" stroke="#0b2f5d" strokeWidth="2" />
            <rect width="195" height="28" rx="8" fill="#0b2f5d" />
            <text x="97" y="19" fill="#ffffff" fontSize="13" fontWeight="700" textAnchor="middle">APPLICANT (BUYER)</text>
            <text x="97" y="48" fill="#565b63" fontSize="11" textAnchor="middle">Applies for Inland LC</text>
            <text x="97" y="65" fill="#7b828d" fontSize="10.5" textAnchor="middle">Procures goods / raw materials</text>
          </g>

          {/* Party Node 2: Issuing Bank - Top Right */}
          <g transform="translate(565, 50)" filter="url(#nodeShadow)">
            <rect width="195" height="90" rx="8" fill="#ffffff" stroke="#0b2f5d" strokeWidth="2" />
            <rect width="195" height="28" rx="8" fill="#0b2f5d" />
            <text x="97" y="19" fill="#ffffff" fontSize="13" fontWeight="700" textAnchor="middle">ISSUING BANK</text>
            <text x="97" y="48" fill="#565b63" fontSize="11" textAnchor="middle">Issues Irrevocable Inland LC</text>
            <text x="97" y="65" fill="#7b828d" fontSize="10.5" textAnchor="middle">Guarantees maturity payment</text>
          </g>

          {/* Party Node 3: Beneficiary (Seller) - Bottom Left */}
          <g transform="translate(90, 320)" filter="url(#nodeShadow)">
            <rect width="195" height="95" rx="8" fill="#ffffff" stroke="#0b2f5d" strokeWidth="2" />
            <rect width="195" height="28" rx="8" fill="#0b2f5d" />
            <text x="97" y="19" fill="#ffffff" fontSize="13" fontWeight="700" textAnchor="middle">BENEFICIARY (SELLER)</text>
            <text x="97" y="48" fill="#565b63" fontSize="11" textAnchor="middle">Dispatches materials & invoice</text>
            <text x="97" y="66" fill="#d00000" fontSize="11" fontWeight="700" textAnchor="middle">Receives early T+1 funds</text>
          </g>

          {/* Party Node 4: Discounting Bank / FXTrade - Bottom Right */}
          <g transform="translate(565, 320)" filter="url(#nodeShadow)">
            <rect width="195" height="95" rx="8" fill="#ffffff" stroke="#d00000" strokeWidth="2.5" />
            <rect width="195" height="28" rx="8" fill="#d00000" />
            <text x="97" y="19" fill="#ffffff" fontSize="12" fontWeight="700" textAnchor="middle">DISCOUNTING BANK / FXTRADE</text>
            <text x="97" y="48" fill="#565b63" fontSize="11" textAnchor="middle">Verifies compliant documents</text>
            <text x="97" y="66" fill="#0b2f5d" fontSize="11" fontWeight="700" textAnchor="middle">Disburses non-recourse capital</text>
          </g>

          {/* Step Badges with Numbered Circles */}
          {/* Step 1 */}
          <circle cx="180" cy="230" r="14" fill="#0b2f5d" />
          <text x="180" y="235" fill="#ffffff" fontSize="11" fontWeight="800" textAnchor="middle">1</text>
          <text x="155" y="255" fill="#0b2f5d" fontSize="10" fontWeight="600" textAnchor="end">Contract / PO</text>

          {/* Step 2 */}
          <circle cx="425" cy="85" r="14" fill="#0b2f5d" />
          <text x="425" y="90" fill="#ffffff" fontSize="11" fontWeight="800" textAnchor="middle">2</text>
          <text x="425" y="70" fill="#0b2f5d" fontSize="10" fontWeight="600" textAnchor="middle">LC Application</text>

          {/* Step 3 */}
          <circle cx="670" cy="210" r="14" fill="#0b2f5d" />
          <text x="670" y="215" fill="#ffffff" fontSize="11" fontWeight="800" textAnchor="middle">3</text>
          <text x="695" y="215" fill="#0b2f5d" fontSize="10" fontWeight="600" textAnchor="start">SFMS / LC Transmit</text>

          {/* Step 4 */}
          <circle cx="225" cy="230" r="14" fill="#0b2f5d" />
          <text x="225" y="235" fill="#ffffff" fontSize="11" fontWeight="800" textAnchor="middle">4</text>
          <text x="250" y="255" fill="#0b2f5d" fontSize="10" fontWeight="600" textAnchor="start">Goods Shipped</text>

          {/* Step 5 */}
          <circle cx="425" cy="355" r="14" fill="#0b2f5d" />
          <text x="425" y="360" fill="#ffffff" fontSize="11" fontWeight="800" textAnchor="middle">5</text>
          <text x="425" y="345" fill="#0b2f5d" fontSize="10" fontWeight="600" textAnchor="middle">Docs Presented</text>

          {/* Step 6: Highlighted in Red (Payment) */}
          <circle cx="425" cy="405" r="14" fill="#d00000" />
          <text x="425" y="410" fill="#ffffff" fontSize="11" fontWeight="800" textAnchor="middle">6</text>
          <text x="425" y="425" fill="#d00000" fontSize="10.5" fontWeight="700" textAnchor="middle">Immediate Payment (T+1)</text>

          {/* Step 7 */}
          <circle cx="625" cy="250" r="14" fill="#0b2f5d" />
          <text x="625" y="255" fill="#ffffff" fontSize="11" fontWeight="800" textAnchor="middle">7</text>
          <text x="605" y="255" fill="#0b2f5d" fontSize="10" fontWeight="600" textAnchor="end">Acceptance</text>

          {/* Step 8 */}
          <circle cx="670" cy="270" r="14" fill="#237804" />
          <text x="670" y="275" fill="#ffffff" fontSize="11" fontWeight="800" textAnchor="middle">8</text>
          <text x="695" y="275" fill="#237804" fontSize="10" fontWeight="600" textAnchor="start">Due Date Settlement</text>
        </svg>
      </div>

      <div className="process-table-box">
        <div className="process-table-row" style={{ background: 'var(--primary-navy)', color: 'var(--white)', fontWeight: 700 }}>
          <span>Stage</span>
          <span>Parties Involved</span>
          <span>Transaction Description</span>
        </div>
        {servicesData.domesticTrade.processDiagram.stages.map((stage) => (
          <div key={stage.num} className="process-table-row">
            <span className="process-table-num">Step {stage.num}</span>
            <span className="process-table-actor">{stage.from} → {stage.to}</span>
            <span className="process-table-action">{stage.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InlandLCDiagram;
