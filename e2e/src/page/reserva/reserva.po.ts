import { by, element } from 'protractor';

export class ReservaPage {

  private linkListarReserva = element(by.id('linkListarReserva'));

  private listaReservas = element.all(by.id('reserva-row'));

  private selectMesaReserva = element(by.id('mesa'));
  private inputFechaReserva = element(by.id('fecha'));
  private inputCodigoEnvio = element(by.id('codigo'));

  private botonSubmitReserva = element(by.id('submit-reserva'));

  async clickBotonListarReservas() {
    await this.linkListarReserva.click();
  }

  async contarReservas() {
    return this.listaReservas.count();
  }

  async limpiarMesa() {
    await this.selectMesaReserva.clear();
  }

  async ingresarMesa(mesa) {
    await this.selectMesaReserva.sendKeys(mesa);
  }

  async limpiarFecha() {
    await this.inputFechaReserva.clear();
  }

  async ingresarFecha(fecha) {
    await this.inputFechaReserva.sendKeys(fecha);
  }

  async ingresarCodigo(codigo) {
    await this.inputCodigoEnvio.sendKeys(codigo);
  }

  async clickBotonSubmitFormularioReserva() {
    await this.botonSubmitReserva.click();
  }

}
