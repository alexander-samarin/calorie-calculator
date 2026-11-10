// Matches /<lang>/<anything>. The 404 page itself is rendered by the
// [lang] layout (see src/routes/[lang].tsx), so this route renders nothing.
export default function CatchAll() {
  return null;
}
