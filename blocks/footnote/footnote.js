export default async function decorate(block) {
    return `
      <mj-section mj-class="mj-footnote-section">
        <mj-column mj-class="mj-footnote-column">
          <mj-text mj-class="mj-content-text mj-footnote-text"><p>${block.textContent.trim()}</p></mj-text>
        </mj-column>
    </mj-section>
    `
  }