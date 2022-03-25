export default async (context, locale) => {
  return await Promise.resolve({
    login: {
      title: 'login'
    },
    register: {
      title: 'register'
    },
    topBanner: {
      title1: 'Operated by CAMINARO CENTRAL SHOE LTD.',
      title2: 'For purchases over 250 NIS free shipping | Join the club for free when purchasing on the website'
    },
    hardcodedWords: {
      test: 'test',
      titleHere: 'title here'
    },
    checkout: {
      billing_information: 'billing information',
      first_name: 'first name',
      last_name: 'last name',
      id_number: 'id number',
      city: 'city',
      street: 'street',
      apartment: 'apartment',
      phone: 'phone',
      email_address: 'email address',
      country_region: 'country region',
      shipping_to_another_address: 'shipping to another address',
      order_notes_optional: 'order notes (optional)',
      order_notes_p: 'order notes (for example, special delivery notes)',
      order_details: 'order details',
      product: 'product',
      interim_amount: 'interim amount',
      shipping: 'shipping',
      join_club_p:
        'join club members and get a 10% discount without double promotions and be the first to receive reports on promotions and benefits',
      pay_by_credit_card: 'pay by credit card',
      pay_securely_with_a_credit_card: 'pay securely with a credit card',
      sending_an_order: 'sending an order',
      address: 'address',
      country: 'country',
      shipping_address: 'shipping address',
      same_as_billing_address: 'same as billing address',
      billing_address: 'billing address',
      yes: 'yes',
      no: 'no',
      address_line2: 'address line 2',
      postcode: 'postcode',
      optional: 'optional',
      cart_is_empty: 'cart is empty, please add some products',
      payment_method: 'payment method',
      how_do_you_want_to_pay_for_your_order: 'how do you want to pay for your order?',
      credit_card: 'credit card',
      pay_with_your_credit_card: 'pay with your credit card',
      paypal: 'PayPal',
      pay_with_your_pay_pal: 'pay with your pay pal',
      gift_card_payment: 'gift card payment',
      how_do_you_want_your_order_delivered: 'how do you want your order delivered?',
      door_step_delivery: 'door step delivery',
      deliver_my_order_to_my_door_step: 'deliver my order to my door step',
      pick_up: 'pick up',
      i_will_pick_up_my_order_from_a_pick_up_location: 'i will pick up my order from a pick up location',
      proceed_to_payment: 'proceed to payment',
      error_while_purchasing_please_try_again: 'error while purchasing, please try again'
    },
    utils: {
      color: 'color',
      measure: 'measure',
      AddToCart: 'Add to cart',
      AddToWishList: 'Add to wish list',
      description: 'description',
      deliveryAndChipments: 'delivery and chipments',
      categories: 'categories',
      relatedProducts: 'related products',
      sku: 'sku',
      relatedProductsTitle: 'Related Products',
      inStock: 'in stock',
      searchForProducts: 'Search for products',
      filter: 'filter By',
      applyFilter: 'Apply filter',
      noDataAvailable: 'No data available',
      menu: 'menu',
      field_required: 'Field required',
      input_not_valid: 'Input not valid',
      myAccount: 'My Account'
    },
    cart: {
      shoppingCart: 'The Shopping Cart',
      beyondShoppingCart: 'Beyond the shopping cart',
      checkout: 'Checkout',
      payment: 'Payment',
      temporaryAmount: 'Temporary amount',
      product: 'Product',
      price: 'Price',
      amount: 'Amount',
      interim_amount: 'Interim amount',
      total_in_shopping_cart: 'Total in shopping cart',
      interim: 'Interim',
      shipping: 'Shipping',
      delivery_options_will_be_updated_during_payment_at_checkout: 'Delivery options will be updated during payment at checkout.',
      total: 'Total',
      coupon_code: 'Coupon code',
      apply_a_coupon: 'Apply a coupon',
      update_shopping_cart: 'Update shopping cart',
      productAddedToCartSuccessfully: 'Product added to cart successfully',
      ErrorAddingProductToCart: 'Error adding product to cart'
    },
    auth: {
      firstName: 'First name',
      lastName: 'Last name',
      username2: 'Username',
      email: 'Email',
      password: 'Password',
      confirmPassword: 'Confirm password',
      registration: 'Registration',
      p: 'Registration to the website enables access to the status and history of orders. All you need is to fill in the email and the account in the registration. We require only the essential details to make it easy and convenient to buy.',
      username: 'Username or Email Address',
      password: 'Password',
      login: 'Login',
      register: 'Register',
      email: 'Email Address',
      passwordWillBeSentToYourEmailAddress: 'The password will be sent to your email address.',
      rememberMe: 'Remember me',
      forgotPassword: 'Forgot password?'
    },
    footer: {
      col1: {
        title: 'Privacy Policy',
        OfficePhone: 'Office Phone',
        fax: 'Fax'
      },
      col2: {
        title: 'Updates and Offers',
        p1: 'For purchases over 250 NIS, free shipping',
        p2: 'Join the club for free with every purchase'
      },
      col3: {
        about: 'About',
        privacy: 'Cancellation of transaction and product return policy',
        delivery: 'Delivery and Shipping',
        declaration: 'Declaration of Accessibility',
        terms: 'Terms',
        contactUs: 'Contact Us',
        branchList: 'Branch List'
      }
    },
    productCategory: {
      show: 'show',
      PriceForClubMembers: 'Price for club members',
      sort: {
        default: 'default',
        popularity: 'popularity',
        mostUpToDate: 'most up to date',
        cheapestToLiqueur: 'cheapest to liqueur',
        expensiveToCheap: 'expensive to cheap'
      }
    },
    warning: 'Warning',
    success: 'Success'
  })
}
