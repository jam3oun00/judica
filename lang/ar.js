export default async (context, locale) => {
  return await Promise.resolve({
    login: {
      title: 'تسجيل الدخول'
    },
    register: {
      title: 'انشاء حساب'
    },
    topBanner: {
      title1: 'تنفيذ بواسطة CAMINARO CENTRAL SHOE LTD.',
      title2: 'للشراء أكثر من 250 د.ك. شحن مجاني | الانضمام إلى المجموعة بدون تكاليف عند الشراء على الموقع'
    },
    hardcodedWords: {
      test: 'كلمة التجربة',
      titleHere: 'يمكن أن يكون هنا عنوان'
    },
    checkout: {
      billing_information: 'معلومات الدفع',
      first_name: 'الاسم الاول',
      last_name: 'الاسم الاخير',
      id_number: 'رقم الهوية',
      city: 'المدينة',
      street: 'الشارع',
      apartment: 'الشقة',
      phone: 'رقم الهاتف',
      email_address: 'البريد الالكتروني',
      country_region: 'الدولة',
      shipping_to_another_address: 'الشحن إلى عنوان آخر',
      order_notes_optional: 'ملاحظات الطلب (اختياري)',
      order_notes_p: 'ملاحظات الطلب (مثل توصيل خاص)',
      order_details: 'تفاصيل الطلب',
      product: 'المنتج',
      interim_amount: 'المبلغ المؤقت',
      shipping: 'الشحن',
      join_club_p:
        'انضم الى مجموعة العضوية واحصل على 10% خصم بدون تكاليف مزدوجة وكن أول من الأشخاص الذين يحصلون على تقارير عن الترويجات والمستحقات',
      pay_by_credit_card: 'دفع بطاقة الائتمان',
      pay_securely_with_a_credit_card: 'دفع بطاقة الائتمان',
      sending_an_order: 'إرسال الطلب',
      address: 'العنوان',
      country: 'الدولة',
      shipping_address: 'العنوان الشحن',
      same_as_billing_address: 'نفس العنوان',
      billing_address: 'العنوان البيليزي',
      yes: 'نعم',
      no: 'لا',
      address_line2: 'العنوان الثاني',
      postcode: 'الرمز البريدي',
      optional: 'اختياري',
      cart_is_empty: 'السلة فارغة ، يرجى إضافة بعض المنتجات',
      payment_method: 'طريقة الدفع',
      how_do_you_want_to_pay_for_your_order: 'كيف تريد دفع طلبك؟',
      credit_card: 'بطاقة ائتمان',
      pay_with_your_credit_card: 'دفع ببطاقة الائتمان',
      paypal: 'باي بال',
      pay_with_your_pay_pal: 'دفع بباي بال',
      gift_card_payment: 'دفع ببطاقة الهدية',
      how_do_you_want_your_order_delivered: 'كيف تريد تسليم طلبك؟',
      door_step_delivery: 'توصيل بالباب',
      deliver_my_order_to_my_door_step: 'توصيل طلبي إلى بابي',
      pick_up: 'اختيار',
      i_will_pick_up_my_order_from_a_pick_up_location: 'سوف أخذ طلبي من موقع اختياري',
      proceed_to_payment: 'اتمام الدفع',
      error_while_purchasing_please_try_again: 'حدث خطأ أثناء الشراء ، يرجى المحاولة مرة أخرى'
    },
    utils: {
      color: 'اللون',
      measure: 'القياس',
      AddToCart: 'أضف إلى السلة',
      AddToWishList: 'أضف إلى قائمة الامنيات',
      description: 'الوصف',
      deliveryAndChipments: 'التوصيل والأكواد',
      categories: 'الفئات',
      relatedProducts: 'المنتجات المتعلقة',
      sku: 'SKU',
      relatedProductsTitle: 'المنتجات المتعلقة',
      inStock: 'متوفر',
      searchForProducts: 'ابحث عن منتجات',
      filter: 'فلترة حسب',
      applyFilter: 'تطبيق الفلتر',
      noDataAvailable: 'لا توجد بيانات متاحة',
      menu: 'القائمة',
      field_required: 'هذا الحقل مطلوب',
      input_not_valid: 'الحقل غير صحيح',
      myAccount: 'حسابي'
    },
    cart: {
      shoppingCart: 'سلة التسوق',
      beyondShoppingCart: 'أكثر من سلة التسوق',
      checkout: 'الدفع',
      payment: 'الدفع',
      temporaryAmount: 'المبلغ المؤقت',
      product: 'المنتج',
      price: 'السعر',
      amount: 'الكمية',
      interim_amount: 'المبلغ المؤقت',
      total_in_shopping_cart: 'المجموع الكلي في سلة التسوق',
      interim: 'المبلغ المؤقت',
      shipping: 'الشحن',
      delivery_options_will_be_updated_during_payment_at_checkout:
        'سيتم تحديث خيارات التوصيل أثناء الدفع في عملية الدفع في الدفع',
      total: 'المجموع',
      coupon_code: 'كود الكوبون',
      apply_a_coupon: 'تطبيق كوبون',
      update_shopping_cart: 'تحديث سلة التسوق',
      productAddedToCartSuccessfully: 'تمت إضافة المنتج بنجاح',
      ErrorAddingProductToCart: 'خطأ في إضافة المنتج إلى سلة التسوق'
    },
    auth: {
      firstName: 'الاسم الاول',
      lastName: 'الاسم الاخير',
      username2: 'اسم المستخدم',
      email: 'البريد الالكتروني',
      password: 'كلمة المرور',
      confirmPassword: 'تأكيد كلمة المرور',
      registration: 'التسجيل',
      p: 'يتيح التسجيل في الموقع الوصول إلى الحالة وسجل الطلبات. كل ما عليك فعله هو ملء البريد الإلكتروني وإنشاء الحساب. سنطلب فقط التفاصيل الضرورية حتى نتمكن من اختصار تجربة التسوق وتبسيطها.',
      username: 'اسم المستخدم أو البريد الإلكتروني',
      password: 'كلمة المرور',
      login: 'تسجيل الدخول',
      register: 'انشاء حساب جديد',
      email: 'البريد الإلكتروني',
      passwordWillBeSentToYourEmailAddress: 'سيتم إرسال كلمة المرور إلى عنوان البريد الإلكتروني الخاص بك.',
      rememberMe: 'تذكرني',
      forgotPassword: 'هل نسيت كلمة المرور؟'
    },
    footer: {
      col1: {
        title: 'سياسة الخصوصية',
        OfficePhone: 'هاتف المكتب',
        fax: 'فاكس'
      },
      col2: {
        title: 'التحديثات والعروض',
        p1: 'للشراء أكثر من 250 د.ك. شحن مجاني',
        p2: 'الانضمام إلى المجموعة بدون تكاليف عند الشراء على الموقع'
      },
      col3: {
        about: 'حول',
        privacy: 'إلغاء الشراء وإعادة توزيع المنتج',
        delivery: 'التوصيل والشحن',
        declaration: 'تعريف الوصول',
        terms: 'الشروط',
        contactUs: 'اتصل بنا',
        branchList: 'قائمة الفروع'
      }
    },
    productCategory: {
      show: 'عرض',
      PriceForClubMembers: 'السعر للأعضاء النادي',
      sort: {
        default: 'الافتراضي',
        popularity: 'الشعبية',
        mostUpToDate: 'الأكثر تحديثا',
        cheapestToLiqueur: 'الأقل سعرا',
        expensiveToCheap: 'الأعلى سعرا'
      }
    },
    warning: 'تحذير',
    success: 'نجاح'
  })
}
