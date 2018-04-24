'use strict';
import I18n from 'react-native-i18n';

I18n.fallbacks = true;
I18n.translations = {
    'en': require('../translations/en'),
    'sw': require('../translations/sw')
};

export default I18n;