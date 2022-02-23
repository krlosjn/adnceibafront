import { AppPage } from '../app.po';
import { RestaurantePage } from '../page/restaurante/restaurante.po';
import { ToolbarPage } from '../page/toolbar/toolbar.po';


describe('workspace-project Restaurante', () => {
    let page: AppPage;
    let toolbar: ToolbarPage;
    let restaurante: RestaurantePage;

    beforeEach(() => {
        page = new AppPage();
        toolbar = new ToolbarPage();
        restaurante = new RestaurantePage();
    });

    it('Deberia listar Restaurantes', () => {
      page.navigateTo();
      toolbar.clickBotonRestaurantes();

      expect(restaurante.contarRestaurante()).toBe(2);
    });
});
