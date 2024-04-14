export const trialsData = [
    {
      name: "Free Trial",
      type: "Basic",
      attach: "Online",
      trial: "30 days"
    },
    {
      name: "Extended Trial",
      type: "Premium",
      attach: "In-person",
      trial: "60 days"
    },
    {
      name: "Yearly Trial",
      type: "Enterprise",
      attach: "Hybrid",
      trial: "1 year"
    }
  ];
  
  export const rewardsData = [
    {
      name: "Discount on Next Purchase",
      earn: {
        purchaseAmount: 50,
        points: 10,
        referralPoints: 5
      },
      redeem: {
        redeemPoints: 100,
        cashValue: 10,
        minPoints: 50,
        displayMode: "Percentage"
      }
    },
    {
      name: "Referral Bonus",
      earn: {
        purchaseAmount: 0,
        points: 0,
        referralPoints: 50
      },
      redeem: {
        redeemPoints: 200,
        cashValue: 20,
        minPoints: 100,
        displayMode: "Fixed Amount"
      }
    }
  ];
  
  export const couponsData = [
    {
      name: "Summer Sale",
      description: "Get discounts on summer products.",
      effectiveDate: "2024-06-01",
      expiryDate: "2024-08-31",
      couponCode: "SUMMER2024",
      type: "Percentage",
      discount: 20
    },
    {
      name: "Back to School",
      description: "Special discounts for back-to-school items.",
      effectiveDate: "2024-08-01",
      expiryDate: "2024-09-15",
      couponCode: "BTS2024",
      type: "Fixed Amount",
      discount: 10
    }
  ];
  