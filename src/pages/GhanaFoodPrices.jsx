import { useRef } from 'react';
import { Link } from 'react-router-dom';

export default function GhanaFoodPrices() {
  const frameRef = useRef(null);

  const fitHeight = () => {
    const frame = frameRef.current;
    const doc = frame && frame.contentDocument;
    if (!doc) return;
    frame.style.height = doc.documentElement.offsetHeight + 'px';
  };

  const handleLoad = () => {
    fitHeight();
    const win = frameRef.current.contentWindow;
    const doc = frameRef.current.contentDocument;
    if (win && doc && win.ResizeObserver) {
      new win.ResizeObserver(fitHeight).observe(doc.documentElement);
    }
  };

  return (
    <div>
      <div style={{ maxWidth: 960, margin: '0 auto', padding: '24px 16px 0' }}>
        <Link to="/data" className="article-back">← Back to portfolio</Link>
      </div>
      <iframe
        ref={frameRef}
        src="/ghana-food-prices-page.html"
        title="Ghana staple food prices, 2006 to 2023"
        onLoad={handleLoad}
        style={{ display: 'block', width: '100%', height: '80vh', border: 'none' }}
      />
    </div>
  );
}