import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NotificationsService } from 'angular2-notifications';

@Injectable()
export class NotifyService {

  constructor(private i18n: TranslateService, private _service: NotificationsService) { }

  info(msg) {
    this.showNotification('info', msg);
  }

  warning(msg) {
    this.showNotification('warning', msg);
  }

  error(msg) {
    this.showNotification('error', msg);
  }

  success(msg) {
    this.showNotification('success', msg);
  }

  private showNotification(type: string, message: string) {
    const options = {
      timeOut: 3000,
      showProgressBar: true,
      pauseOnHover: true,
      clickToClose: true,
      maxLength: 10,
      theClass: 'background-color: pink;'
    };

    switch (type) {
      case 'info':
        this._service.info('Info', message, options);
        break;
      case 'warning':
        this._service.warn('Attention', message, options);
        break;
      case 'error':
        this._service.error('Erreur', message, options);
        break;
      case 'success':
        this._service.success('Félicitation !', message, options);
        break;
    }
  }
}
