import { InjectionToken } from '@angular/core';
import { HashMap, TranslationCb } from './types';
import { TranslocoConfig } from './transloco.config';

export const TRANSLOCO_MISSING_HANDLER = new InjectionToken('TRANSLOCO_MISSING_HANDLER');

export interface TranslocoMissingHandler {
  handle(key: string | TranslationCb<any>, params: HashMap, config: TranslocoConfig): any;
}

export class DefaultHandler implements TranslocoMissingHandler {
  handle(key: string | TranslationCb<any>, params: HashMap, config: TranslocoConfig) {
    if (!config.prodMode) {
      const msg =
        typeof key === 'function' ? `Missing value from translation callback` : `Missing translation for '${key}'`;
      console.warn(`%c ${msg} 🤔🕵🏻‍♀`, 'font-size: 12px; color: red');
    }
    return '';
  }
}
