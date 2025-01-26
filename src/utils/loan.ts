const loans = [
    // Wedding Loan
    {
      initialDeposit: 20000,
      category: 'Wedding Loan',
      loanAmount: 50000,
      loanPeriod: '5 years',
      monthlyPayment: 1000,
      name: 'Ali Khan',
      nic: '12345-6789012-3',
      subcategory: 'Valima',
      totalLoan: 70000,
      totalPayment: 60000,
      pending: false,
      guarantors: [
        {
          name: 'Ahmed Khan',
          email: 'ahmed.khan@example.com',
          location: 'Karachi',
          cnic: '12345-1111111-1',
        },
        {
          name: 'Sara Ali',
          email: 'sara.ali@example.com',
          location: 'Lahore',
          cnic: '12345-2222222-2',
        },
      ],
    },
    
    // Education Loan
    {
      initialDeposit: 5000,
      category: 'Education Loan',
      loanAmount: 30000,
      loanPeriod: '3 years',
      monthlyPayment: 1200,
      name: 'John Smith',
      nic: '22345-6789012-3',
      subcategory: 'Masters',
      totalLoan: 40000,
      totalPayment: 36000,
      pending: false,
      guarantors: [
        {
          name: 'Sara Javed',
          email: 'sara.javed@example.com',
          location: 'Karachi',
          cnic: '22345-3333333-3',
        },
        {
          name: 'Tariq Ali',
          email: 'tariq.ali@example.com',
          location: 'Islamabad',
          cnic: '22345-4444444-4',
        },
      ],
    },
    
    // Personal Loan
    {
      initialDeposit: 10000,
      category: 'Personal Loan',
      loanAmount: 20000,
      loanPeriod: '2 years',
      monthlyPayment: 1000,
      name: 'Fahad Ali',
      nic: '32345-6789012-3',
      subcategory: 'Home Renovation',
      totalLoan: 25000,
      totalPayment: 22000,
      pending: true,
      guarantors: [
        {
          name: 'Ayesha Rehman',
          email: 'ayesha.rehman@example.com',
          location: 'Karachi',
          cnic: '32345-5555555-5',
        },
        {
          name: 'Nadeem Khan',
          email: 'nadeem.khan@example.com',
          location: 'Lahore',
          cnic: '32345-6666666-6',
        },
      ],
    },
    
    // Business Loan
    {
      initialDeposit: 50000,
      category: 'Business Loan',
      loanAmount: 200000,
      loanPeriod: '10 years',
      monthlyPayment: 2500,
      name: 'Usman Ali',
      nic: '42345-6789012-3',
      subcategory: 'Small Business',
      totalLoan: 250000,
      totalPayment: 240000,
      pending: false,
      guarantors: [
        {
          name: 'Zara Akram',
          email: 'zara.akram@example.com',
          location: 'Rawalpindi',
          cnic: '42345-7777777-7',
        },
        {
          name: 'Hassan Shah',
          email: 'hassan.shah@example.com',
          location: 'Islamabad',
          cnic: '42345-8888888-8',
        },
      ],
    },
    
    // Wedding Loan (Another Example)
    {
      initialDeposit: 25000,
      category: 'Wedding Loan',
      loanAmount: 70000,
      loanPeriod: '6 years',
      monthlyPayment: 1200,
      name: 'Sara Ahmed',
      nic: '52345-6789012-3',
      subcategory: 'Jahez',
      totalLoan: 90000,
      totalPayment: 88000,
      pending: true,
      guarantors: [
        {
          name: 'Ali Raza',
          email: 'ali.raza@example.com',
          location: 'Lahore',
          cnic: '52345-9999999-9',
        },
        {
          name: 'Kiran Malik',
          email: 'kiran.malik@example.com',
          location: 'Karachi',
          cnic: '52345-1010101-1',
        },
      ],
    },
  
    // Education Loan (Another Example)
    {
      initialDeposit: 8000,
      category: 'Education Loan',
      loanAmount: 35000,
      loanPeriod: '4 years',
      monthlyPayment: 1400,
      name: 'Ibrahim Khan',
      nic: '62345-6789012-3',
      subcategory: 'Bachelor’s',
      totalLoan: 45000,
      totalPayment: 42000,
      pending: false,
      guarantors: [
        {
          name: 'Nazia Shah',
          email: 'nazia.shah@example.com',
          location: 'Karachi',
          cnic: '62345-2020202-2',
        },
        {
          name: 'Fawad Ahmad',
          email: 'fawad.ahmad@example.com',
          location: 'Islamabad',
          cnic: '62345-3030303-3',
        },
      ],
    },
  
    // Personal Loan (Another Example)
    {
      initialDeposit: 15000,
      category: 'Personal Loan',
      loanAmount: 50000,
      loanPeriod: '5 years',
      monthlyPayment: 1200,
      name: 'Fatima Zahra',
      nic: '72345-6789012-3',
      subcategory: 'Medical Expenses',
      totalLoan: 70000,
      totalPayment: 66000,
      pending: true,
      guarantors: [
        {
          name: 'Hassan Ali',
          email: 'hassan.ali@example.com',
          location: 'Rawalpindi',
          cnic: '72345-4444444-4',
        },
        {
          name: 'Amna Tariq',
          email: 'amna.tariq@example.com',
          location: 'Lahore',
          cnic: '72345-5555555-5',
        },
      ],
    },
  
    // Business Loan (Another Example)
    {
      initialDeposit: 30000,
      category: 'Business Loan',
      loanAmount: 100000,
      loanPeriod: '7 years',
      monthlyPayment: 1500,
      name: 'Rashid Mehmood',
      nic: '82345-6789012-3',
      subcategory: 'New Venture',
      totalLoan: 130000,
      totalPayment: 125000,
      pending: false,
      guarantors: [
        {
          name: 'Sana Shah',
          email: 'sana.shah@example.com',
          location: 'Karachi',
          cnic: '82345-6666666-6',
        },
        {
          name: 'Shahid Raza',
          email: 'shahid.raza@example.com',
          location: 'Lahore',
          cnic: '82345-7777777-7',
        },
      ],
    },
  ];

  export default loans