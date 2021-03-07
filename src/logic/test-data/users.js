export const userLoginResponse = {
  data: {
    status: 200,
    message: {
      mention_queries: [],
      user_data: {
        id: 2,
        user: 5,
        name: 'Pepe',
        surname: 'Perez',
        email: 'pepe@mail.com',
        phone_number: null,
        is_dashboard_administrator: false,
        history_days: 7,
        last_seen: '2021-03-14T10:42:53.819698+00:00',
        last_info: 2,
        language: {
          id: 2,
          language: 'English',
          code: 'en',
          available_for_app: true
        },
        timezone: 'Europe/Madrid',
        principal_mention_query: {},
        has_access_to_consultancy: false,
        free_account: false,
        can_request_mention_query: true,
        can_edit_strings_dashboard: false,
        contract_type: null,
        billing_type: null,
        billing_periodicity: null,
        notifications_enabled: true,
        activity_notifications_enabled: true,
        username: 'pepe_perez',
        date_joined: '2021-03-14T10:08:45.609999+00:00',
        groups: [],
        sources: [],
        country: {
          country_code: 'CO',
          name: 'Colombia',
          phone_prefix: '+57',
          country_flag: 'http://dev.naveler.com:8007/static/img/flags/CO_gxm9iFj.png',
          name_es: 'Colombia',
          name_en: 'Colombia',
          name_ca: 'Colòmbia',
          is_latino: true
        },
        default_source: 'news'
      },
      brand: 0
    },
    user_id: 2,
    username: 'pepe_perez',
    email: 'pepe@mail.com'
  }
}

export const userLoginErrorResponse = {
  status: 422,
  message: 'Incorrect username/password'
}
