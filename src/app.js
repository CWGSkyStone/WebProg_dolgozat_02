/*
* File: app.js
* Author: Szabó József
* Copyright: 2026, Szabó József
* Group: Szoft I/N
* Date: 2026-04-30
* Github: https://github.com/CWGSkyStone/
* Licenc: MIT
*/

import * as bootstrap from 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'
import Swal from 'sweetalert2'

const doc = {
    aboutButton: document.querySelector('#aboutButton'),
    tbody: document.querySelector('#tbody')
}

const etlap = [
  { nev: 'Gulyásleves', kategoria: 'Leves', ar: 1890, vega: false },
  { nev: 'Lazacfilé', kategoria: 'Főétel', ar: 4500, vega: false },
  { nev: 'Csokoládétorta', kategoria: 'Desszert', ar: 1200, vega: true },
  { nev: 'Cézársaláta', kategoria: 'Főétel', ar: 2900, vega: false },
  { nev: 'Paradicsomleves', kategoria: 'Leves', ar: 1400, vega: true },
  { nev: 'Sajttorta', kategoria: 'Desszert', ar: 1100, vega: true },
  { nev: 'Marhapörkölt', kategoria: 'Főétel', ar: 3800, vega: false },
  { nev: 'Zöldségkrémleves', kategoria: 'Leves', ar: 1550, vega: true }
];

function render() {
    var rows = ''
    etlap.forEach(item => {
        if (item.ar > 3000) {
            item.nev +=  '<span class="badge bg-danger">Nagy</span>'
        }
            var row = `
            <tr class="${item.vega ? 'table-success' : ''}">
                <td>${item.nev}</td>
                <td>${item.kategoria}</td>
                <td>${item.ar}</td>
                <td>${item.vega ? 'Igen' : 'Nem'}</td>
            </tr>
        `
        rows += row
    })
    doc.tbody.innerHTML = rows
}

doc.aboutButton.addEventListener('click', () => {
    Swal.fire({
        title: 'Ettermenu',
        text: 'Szabó József, SZOFT I/N, 2026-04-30'
    })
})

render()
