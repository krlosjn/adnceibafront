import { AppPage } from '../app.po';
import { ReservaPage } from '../page/reserva/reserva.po';
import { RestaurantePage } from '../page/restaurante/restaurante.po';
import { ToolbarPage } from '../page/toolbar/toolbar.po';

describe('workspace-project Reserva', () => {
  let page: AppPage;
  let toolbar: ToolbarPage;
  let reserva: ReservaPage;
  let restaurante: RestaurantePage;

  beforeEach(() => {
    page = new AppPage();
    toolbar = new ToolbarPage();
    reserva = new ReservaPage();
    restaurante = new RestaurantePage();
  });

  it('Deberia listar Reservas', () => {
    page.navigateTo();
    toolbar.clickBotonReservas();
    reserva.clickBotonListarReservas();

    expect(reserva.contarReservas()).toBe(4);
  });


  it('Deberia crear Reserva', async () => {
    page.navigateTo();
    toolbar.clickBotonReservas();
    reserva.clickBotonListarReservas();
    const reservasIniciales = await reserva.contarReservas();

    toolbar.clickBotonRestaurantes();
    restaurante.clickBotonReservar();

    reserva.ingresarMesa('mesa1');
    reserva.ingresarFecha('12/04/2021');
    reserva.ingresarCodigo('codigo');

    await reserva.clickBotonSubmitFormularioReserva();

    await reserva.clickBotonListarReservas();
    const enviosFinales = await reserva.contarReservas();

    expect(enviosFinales).toEqual(reservasIniciales + 1);
  });


});
