export default async (context, locale) => {
  return await Promise.resolve({
    login: {
      title: 'авторизоваться'
    },
    register: {
      title: 'зарегистрироваться'
    },
    topBanner: {
      title1: 'Оперирует CAMINARO CENTRAL SHOE LTD.',
      title2: 'Для покупок более 250 NIS бесплатная доставка | Присоединяйтесь к клубу бесплатно при покупке на сайте'
    },
    hardcodedWords: {
      test: 'Тестовое слово',
      titleHere: 'Здесь может быть заголовок'
    },
    checkout: {
      billing_information: 'Информация о плательщике',
      first_name: 'Имя',
      last_name: 'Фамилия',
      id_number: 'ИНН',
      city: 'Город',
      street: 'Улица',
      apartment: 'Квартира',
      phone: 'Телефон',
      email_address: 'Электронная почта',
      country_region: 'Страна',
      shipping_to_another_address: 'Доставка в другой адрес',
      order_notes_optional: 'Примечания к заказу (необязательно)',
      order_notes_p: 'Примечания к заказу (например, специальные примечания к доставке)',
      order_details: 'Детали заказа',
      product: 'Товар',
      interim_amount: 'Временная сумма',
      shipping: 'Доставка',
      join_club_p: 'Присоединяйтесь к клубу бесплатно при покупке на сайте',
      pay_by_credit_card: 'Оплата кредитной картой',
      pay_securely_with_a_credit_card: 'Безопасная оплата с помощью кредитной карты',
      sending_an_order: 'Отправка заказа',
      address: 'Адрес',
      country: 'Страна',
      shipping_address: 'Адрес доставки',
      same_as_billing_address: 'Такой же как и плательщик',
      billing_address: 'Плательщик',
      yes: 'Да',
      no: 'Нет',
      address_line2: 'Адрес (продолжение)',
      postcode: 'Почтовый индекс',
      optional: 'Необязательно',
      cart_is_empty: 'Ваша корзина пуста, пожалуйста добавьте товары',
      payment_method: 'Способ оплаты',
      how_do_you_want_to_pay_for_your_order: 'Как вы хотите оплатить заказ?',
      credit_card: 'Кредитная карта',
      pay_with_your_credit_card: 'Оплатить с помощью кредитной карты',
      paypal: 'PayPal',
      pay_with_your_pay_pal: 'Оплатить с помощью PayPal',
      gift_card_payment: 'Оплата подарочной картой',
      how_do_you_want_your_order_delivered: 'Как вы хотите доставить заказ?',
      door_step_delivery: 'Доставка домой',
      deliver_my_order_to_my_door_step: 'Доставить заказ домой',
      pick_up: 'Самовывоз',
      i_will_pick_up_my_order_from_a_pick_up_location: 'Я буду забирать заказ со склада',
      proceed_to_payment: 'Перейти к оплате',
      error_while_purchasing_please_try_again: 'Ошибка при покупке, пожалуйста попробуйте еще раз'
    },
    utils: {
      color: 'Цвет',
      measure: 'Единица измерения',
      AddToCart: 'Добавить в корзину',
      AddToWishList: 'Добавить в список желаний',
      description: 'Описание',
      deliveryAndChipments: 'Доставка и комплектация',
      categories: 'Категории',
      relatedProducts: 'Похожие товары',
      sku: 'Артикул',
      relatedProductsTitle: 'Похожие товары',
      inStock: 'В наличии',
      searchForProducts: 'Поиск товаров',
      filter: 'Фильтр по',
      applyFilter: 'Применить фильтр',
      noDataAvailable: 'Нет данных',
      menu: 'Меню',
      field_required: 'Обязательное поле',
      input_not_valid: 'Поле не валидно',
      myAccount: 'Мой аккаунт'
    },
    cart: {
      shoppingCart: 'Корзина',
      beyondShoppingCart: 'Продолжить покупки',
      checkout: 'Оформить заказ',
      payment: 'Оплата',
      temporaryAmount: 'Временная сумма',
      product: 'Товар',
      price: 'Цена',
      amount: 'Количество',
      interim_amount: 'Временная сумма',
      total_in_shopping_cart: 'Общая сумма в корзине',
      interim: 'Временная сумма',
      shipping: 'Доставка',
      delivery_options_will_be_updated_during_payment_at_checkout: 'Выберите доставку в оформлении заказа',
      total: 'Итого',
      coupon_code: 'Купон',
      apply_a_coupon: 'Применить купон',
      update_shopping_cart: 'Обновить корзину',
      productAddedToCartSuccessfully: 'Товар добавлен в корзину',
      ErrorAddingProductToCart: 'Ошибка добавления товара в корзину'
    },
    auth: {
      firstName: 'Имя',
      lastName: 'Фамилия',
      username2: 'Логин',
      email: 'Электронная почта',
      password: 'Пароль',
      confirmPassword: 'Подтвердите пароль',
      registration: 'регистрация',
      p: 'регистрация на сайте позволяет получить доступ к статусу и истории заказов. Все что вам нужно - это заполнить почту и аккаунт в регистрации. Мы требуем только необходимые детали, чтобы быть легким и простым в использовании.',
      username: 'Имя пользователя или адрес электронной почты',
      password: 'Пароль',
      login: 'Войти',
      register: 'Зарегистрироваться',
      email: 'Электронная почта',
      passwordWillBeSentToYourEmailAddress: 'Пароль будет отправлен на ваш адрес электронной почты',
      rememberMe: 'Запомнить меня',
      forgotPassword: 'Забыли пароль?'
    },
    footer: {
      col1: {
        title: 'Политика конфиденциальности',
        OfficePhone: 'Телефон офиса',
        fax: 'Факс'
      },
      col2: {
        title: 'Обновления и предложения',
        p1: 'Для покупок более 250 NIS бесплатная доставка',
        p2: 'Присоединяйтесь к клубу бесплатно при покупке на сайте'
      },
      col3: {
        about: 'О нас',
        privacy: 'Отмена транзакции и политика возврата товара',
        delivery: 'Доставка и доставка',
        declaration: 'Объявление доступности',
        terms: 'Условия',
        contactUs: 'Связаться с нами',
        branchList: 'Список отделений'
      }
    },
    productCategory: {
      show: 'Показать',
      PriceForClubMembers: 'Цена для клубных клиентов',
      sort: {
        default: 'по умолчанию',
        popularity: 'популярности',
        mostUpToDate: 'самые новые',
        cheapestToLiqueur: 'дешевые к ликеру',
        expensiveToCheap: 'дорогие к дешевым'
      }
    },
    warning: 'Внимание',
    success: 'Успех'
  })
}
