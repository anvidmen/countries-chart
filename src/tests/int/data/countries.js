export const retrieveCountriesResponse = {
  data: {
    status: 200,
    message: [{
      name: 'Brasil',
      phone_prefix: '+55',
      country_flag: 'img/flags/BR_5WOC99m.png',
      is_latino: false
    }, {
      name: 'Canada',
      phone_prefix: '+1',
      country_flag: 'img/flags/CA_JIMLNc3.png',
      is_latino: false
    }, {
      name: 'Colombia',
      phone_prefix: '+57',
      country_flag: 'img/flags/CO_gxm9iFj.png',
      is_latino: true
    }]
  }
}

export const retrieveCountriesErrorResponse = {
  status: 500,
  message: 'Internal Error'
}
