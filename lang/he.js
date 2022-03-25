export default async (context, locale) => {
  return await Promise.resolve({
    login: {
      title: 'כניסה'
    },
    register: {
      title: 'הרשמה'
    },
    topBanner: {
      title1: 'מופעל ע"י קמינרו סנטרל שוז בע"מ ח.פ 512019472(CAMINARO CENTRAL SHOE LTD.)',
      title2: 'ברכישה מעל 250 ש"ח משלוח חינם | הצטרפות למועדון חינם ברכישה באתר'
    },
    hardcodedWords: {
      test: 'מבחן',
      titleHere: 'כאן יהיה כותרת'
    },
    checkout: {
      billing_information: 'מידע חיוב',
      first_name: 'שם פרטי',
      last_name: 'שם משפחה',
      id_number: 'מספר ת.ז',
      city: 'עיר',
      street: 'רחוב',
      apartment: 'דירה',
      phone: 'טלפון',
      email_address: 'כתובת דוא"ל',
      country_region: 'ארץ',
      shipping_to_another_address: 'חזרה לכתובת אחרת',
      order_notes_optional: 'הערות להזמנה (אופציונלי)',
      order_notes_p: 'הערות להזמנה (לדוגמה, הערות למשלוח מיוחד)',
      order_details: 'פרטי הזמנה',
      product: 'מוצר',
      interim_amount: 'סכום חלקי',
      shipping: 'משלוח',
      join_club_p: 'הצטרפות לקבוצת חברים וקבלת הנחה בסך 10% ללא הפצה כפולה וקבלת דוחות על הפצות והתוספות',
      pay_by_credit_card: 'תשלום באמצעות כרטיס אשראי',
      pay_securely_with_a_credit_card: 'תשלום באמצעות כרטיס אשראי',
      sending_an_order: 'שליחת הזמנה',
      address: 'כתובת',
      country: 'ארץ',
      shipping_address: 'כתובת למשלוח',
      same_as_billing_address: 'כתובת למשלוח זהה לכתובת החיוב',
      billing_address: 'כתובת לחיוב',
      yes: 'כן',
      no: 'לא',
      address_line2: 'כתובת שולחנית',
      postcode: 'מיקוד',
      optional: 'אופציונלי',
      cart_is_empty: 'עגלת הקניות ריקה, אנא הוסיפו מוצרים',
      payment_method: 'שיטת תשלום',
      how_do_you_want_to_pay_for_your_order: 'איך ברצונכם לתשלם עבור הזמנה זו?',
      credit_card: 'כרטיס אשראי',
      pay_with_your_credit_card: 'תשלום באמצעות כרטיס אשראי',
      paypal: 'PayPal',
      pay_with_your_pay_pal: 'תשלום באמצעות PayPal',
      gift_card_payment: 'תשלום באמצעות כרטיס מתנה',
      how_do_you_want_your_order_delivered: 'איך ברצונכם למשלוח את הזמנה שלכם?',
      door_step_delivery: 'משלוח בדרך',
      deliver_my_order_to_my_door_step: 'משלוח את הזמנה שלי בדרך',
      pick_up: 'לקחתי',
      i_will_pick_up_my_order_from_a_pick_up_location: 'אני מקבל את הזמנה שלי ממקום לקחתי',
      proceed_to_payment: 'להמשיך לתשלום',
      error_while_purchasing_please_try_again: 'אירעה שגיאה בעת הזמנתכם, אנא נסו שוב'
    },
    utils: {
      color: 'צבע',
      measure: 'מדידה',
      AddToCart: 'הוסף לסל',
      AddToWishList: 'הוסף לרשימת המשאלות',
      description: 'תיאור',
      deliveryAndChipments: 'משלוח וחבילות',
      categories: 'קטגוריות',
      relatedProducts: 'מוצרים נלווים',
      sku: 'קוד מוצר',
      relatedProductsTitle: 'מוצרים נלווים',
      inStock: 'במלאי',
      searchForProducts: 'חפש מוצרים',
      filter: 'סנן לפי',
      applyFilter: 'הפעל סינון',
      noDataAvailable: 'אין נתונים זמינים',
      menu: 'תפריט',
      field_required: 'שדה חובה',
      input_not_valid: 'נא למלא את השדה',
      myAccount: 'החשבון שלי'
    },
    cart: {
      shoppingCart: 'עגלת קניות',
      beyondShoppingCart: 'על העגלת הקניות',
      checkout: 'עדכון הזמנה',
      payment: 'תשלום',
      temporaryAmount: 'סכום זמני',
      product: 'מוצר',
      price: 'מחיר',
      amount: 'כמות',
      interim_amount: 'סכום זמני',
      total_in_shopping_cart: 'סך הכל בעגלת הקניות',
      interim: 'סכום זמני',
      shipping: 'משלוח',
      delivery_options_will_be_updated_during_payment_at_checkout: 'אפשרויות משלוח יעודכנו בזמן תשלום בעגלת הקניות',
      total: 'סך הכל',
      coupon_code: 'קוד קופון',
      apply_a_coupon: 'החל קופון',
      update_shopping_cart: 'עדכן עגלת קניות',
      productAddedToCartSuccessfully: 'המוצר נוסף לעגלת הקניות בהצלחה',
      ErrorAddingProductToCart: 'המוצר לא נוסף לעגלת הקניות בהצלחה'
    },
    auth: {
      firstName: 'שם פרטי',
      lastName: 'שם משפחה',
      username2: 'שם משתמש',
      email: 'דוא"ל',
      password: 'סיסמה',
      confirmPassword: 'אימות סיסמה',
      registration: 'הרשמה',
      p: 'רישום לאתר מאפשר גישה לסטטוס והיסטורית הזמנות. כל שצריך זה למלא אימייל והחשבון בהקמה. אנו נבקש רק את הפרטים ההכרחיים בכדי שנוכל לקצר ולייעל את חווית הקנייה.',
      username: 'שם משתמש או כתובת דוא"ל',
      password: 'סיסמה',
      login: 'כניסה',
      register: 'הרשמה',
      email: 'כתובת דוא"ל',
      passwordWillBeSentToYourEmailAddress: 'הסיסמה תישלח לכתובת הדוא"ל שלך.',
      rememberMe: 'זכור אותי',
      forgotPassword: 'שכחת סיסמה?'
    },
    footer: {
      col1: {
        title: 'פלייפוט בע”מ נעלי נוחות',
        OfficePhone: 'טלפון המשרד',
        fax: 'פקס'
      },
      col2: {
        title: 'עדכונים והטבות בלעדיות',
        p1: 'בקניה מעל 250 שח משלוח חינם',
        p2: 'הצטרפות למועדון חינם על כל רכישה'
      },
      col3: {
        about: 'אודות',
        privacy: 'ביטול עסקה ומדיניות החזרת מוצרים',
        delivery: 'אספקה ומשלוחים',
        declaration: 'הצהרת נגישות',
        terms: 'תקנון',
        contactUs: 'צור קשר',
        branchList: 'רשימת סניפים'
      }
    },
    productCategory: {
      show: 'הצג',
      PriceForClubMembers: 'מחיר לחברי הקמינרו',
      sort: {
        default: 'סדר כברירת מחדל',
        popularity: 'סדר לפי הצפיות',
        mostUpToDate: 'סדר לפי הגדרות אחרונות',
        cheapestToLiqueur: 'סדר מחמיר לפי מחיר לקוח',
        expensiveToCheap: 'סדר מחמיר לפי מחיר לקוח'
      }
    },
    warning: 'אזהרה',
    success: 'הצלחה'
  })
}
