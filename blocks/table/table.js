export default function decorate(block) {
  const filteredClassList = [...block.classList]
  .filter((cls) => cls !== 'table' && cls !== 'block');
  const type = filteredClassList.length ? `-${filteredClassList[0]}` : ''; 

  let mjml = `
    <mj-section>
      <mj-column>
        <mj-table css-class="table table${type}">
`;
  const rows = [...block.children];
  rows.forEach((row, i) => {
    mjml += '<tr>';
    const cells = [...row.children];
    cells.forEach((cell, index) => {
      if (i === 0) {
        mjml += `<th class="table${type}-row-${i} table${type}-row-${i%2 ? 'odd' : 'even'} table${type}-col-${index}">${cell.innerHTML}</th>`;
      } else {
        mjml += `<td class="table${type}-row-${i} table${type}-row-${i%2 ? 'odd' : 'even'} table${type}-col-${index}">${cell.innerHTML}</td>`;
      }
    });
    mjml += '</tr>';
  });
  mjml += `
        </mj-table>
      </mj-column>
    </mj-section>
`;
  return mjml;
}
