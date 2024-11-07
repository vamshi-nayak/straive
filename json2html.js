export default function json2html(data) {
  let html = '<table data-user="kethavathvamshinayak02@gmail.com">';
  const columns = Array.from(new Set(data.flatMap(item => Object.keys(item))));
  html += '<thead><tr>';
  columns.forEach(column => {
    html += `<th>${column}</th>`;
  });
  html += '</tr></thead>';
  html += '<tbody>';
  data.forEach(row => {
    html += '<tr>';
    columns.forEach(column => {
      html += `<td>${row[column] !== undefined ? row[column] : ''}</td>`;
    });
    html += '</tr>';
  });
  html += '</tbody></table>';

  return html;
}
