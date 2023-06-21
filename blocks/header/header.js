import { decorateButtons, decorateBlocks, decorateSections } from '../../scripts/lib-franklin.js';

export default async function decorate(block, { fetch }) {
  const resp = await fetch('/header.plain.html');

  if (resp.ok) {
    block.innerHTML = await resp.text();
    block.querySelectorAll('a[href="http://view-as-webpage.marketo"]').forEach((a) => a.href = '{{system.viewAsWebpageLink:default=edit me}}');
    
    const elements = block.querySelectorAll('p');
    return `
    <mj-section mj-class="mj-header-section">
      <mj-group mj-class="mj-header-group">
        <mj-column mj-class="mj-header-column">
          <mj-image mj-class="mj-header-image" src="${elements[0].querySelector('img')?.src || ''}" />
        </mj-column>
        <mj-column mj-class="mj-header-column">
          <mj-text mj-class="mj-header-text">${elements[1]?.innerHTML || ''}</mj-text>
        </mj-column>
      </mj-group>
  </mj-section>`;
  }
  return [];
}