import { ThemeProvider } from '@/components';
import * as pages from '@/pages';
import { PageRoute, PagesProvider } from '@/router';

// TODO: Пока настраиваем роутинг так. В дальнейшем можно будет расширить
// `PagesProvider`, чтобы он понимал структуру импортов из `@/pages` и по ней
// формировал `path`
const routes: PageRoute[] = [{ path: '/main', component: pages.main.home }];

export function App() {
  return (
    <ThemeProvider>
      <PagesProvider
        startRouteName={pages.main.home.routeName}
        routes={routes}
      />
    </ThemeProvider>
  );
}

export default App;
