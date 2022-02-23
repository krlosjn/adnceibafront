import { by, element } from 'protractor';

export class RestaurantePage {

  private listaRestaurantes = element.all(by.id('restaurante-row'));
  private botonReservar = element.all(by.id('reservar')).get(0);

  async contarRestaurante(){
    return this.listaRestaurantes.count();
  }

  async clickBotonReservar() {
    await this.botonReservar.click();
  }

}
