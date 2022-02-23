import { by, element } from 'protractor';

export class ToolbarPage {
    linkHome = element(by.xpath('/html/body/app-root/app-toolbar/mat-toolbar/nav/a[1]'));
    linkReserva = element(by.xpath('/html/body/app-root/app-toolbar/mat-toolbar/nav/a[2]'));
    linkRestaurante = element(by.xpath('/html/body/app-root/app-toolbar/mat-toolbar/nav/a[3]'));

    async clickBotonReservas() {
        await this.linkReserva.click();
    }
    async clickBotonRestaurantes() {
      await this.linkRestaurante.click();
  }
}
