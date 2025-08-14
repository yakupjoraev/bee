import { screens } from './screens'

export default function AllPages() {
  return (
    <div style={{ padding: 20 }}>
      <h2 style={{ marginBottom: 12 }}>Bee Gallery</h2>
      <div style={{ marginBottom: 12 }}>
        <div style={{ fontWeight: 600, marginBottom: 6 }}>Core pages</div>
        <ul style={{ display: 'grid', gap: 6, maxWidth: 520, margin: 0, paddingLeft: 18 }}>
          <li><a href="/page/welcome">Welcome</a></li>
          <li><a href="/page/signin">Sign In</a></li>
          <li><a href="/page/home">Home</a></li>
          <li><a href="/modals">Modals Gallery</a></li>
        </ul>
      </div>
      <ul style={{ display: 'grid', gap: 8, maxWidth: 520 }}>
        {screens.map(({ name, slug }) => (
          <li key={slug}><a href={`/page/${slug}`}>{name}</a></li>
        ))}
      </ul>
    </div>
  );
}


