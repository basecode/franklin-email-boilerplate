export default async function decorate(block) {
  const listItems = block.querySelectorAll('li');

  return `
    <mj-section mj-class="mj-footernav-section">
      <mj-group>
        ${[...listItems].map((item, i) => `
            <mj-column>
              <mj-text mj-class="mj-footernav-text ${(i === listItems.length - 1) ? 'mj-footernav-last-text' : ''}">${item.innerHTML}</mj-text>
            </mj-column>
          `
        )}
      </mj-group>
  </mj-section>
  `
}