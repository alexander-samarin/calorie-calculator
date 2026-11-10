import { useParams, useLocation, useNavigate } from "@solidjs/router";
import {
  type ParentProps,
  Match,
  Switch,
  Suspense,
  createEffect,
  createSignal,
  onMount,
} from "solid-js";
import Head from "~/components/Head";
import NotFound from "~/components/NotFound";
import {
  LocaleProvider,
  isValidLocale,
  detectLocale,
  DEFAULT_LOCALE,
  type Locale,
} from "~/i18n";
import { storage } from "~/helpers";
import { LOCALE_STORAGE_KEY } from "~/constants";

/**
 * Every non-root URL goes through this layout, including all 404s
 * (unknown language or extra path segments). Rendering 404 here — instead of
 * in a separate catch-all route — keeps one component tree for every 404 URL,
 * so the prerendered 404.html (served by GitHub Pages for any unknown path)
 * hydrates without mismatches.
 */
export default function LangLayout(props: ParentProps) {
  const params = useParams<{ lang: string }>();
  const location = useLocation();
  const navigate = useNavigate();

  // "/ru" is not prerendered, so GitHub Pages serves 404.html for it. Render
  // the same 404 tree (to hydrate cleanly) and redirect to "/" after mount.
  const isDefaultLocalePath = () => params.lang === DEFAULT_LOCALE;
  const hasExtraSegments = () =>
    location.pathname.split("/").filter(Boolean).length > 1;

  const isNotFound = () =>
    !isValidLocale(params.lang) || isDefaultLocalePath() || hasExtraSegments();

  // 404 page starts in the default locale (same as prerendered HTML),
  // then switches to the visitor's language after hydration.
  const [notFoundLocale, setNotFoundLocale] = createSignal<Locale>(DEFAULT_LOCALE);
  onMount(() => {
    if (isDefaultLocalePath() && !hasExtraSegments()) {
      navigate("/", { replace: true });
      return;
    }
    setNotFoundLocale(isValidLocale(params.lang) ? params.lang : detectLocale());
  });

  const locale = (): Locale =>
    isNotFound() ? notFoundLocale() : (params.lang as Locale);

  // Save locale preference for real language pages
  createEffect(() => {
    if (!isNotFound()) storage.set(LOCALE_STORAGE_KEY, params.lang);
  });

  return (
    <LocaleProvider locale={locale}>
      <Switch>
        <Match when={isNotFound()}>
          <NotFound />
        </Match>
        <Match when={true}>
          <Head />
          {/* Own boundary: the lazy child route must not re-render this
              layout during SSR (that duplicated Head's <link> tags) */}
          <Suspense>{props.children}</Suspense>
        </Match>
      </Switch>
    </LocaleProvider>
  );
}
