const insert = document.querySelector("#insert")

window.addEventListener('keydown',function(e){
  insert.innerHTML = `
   <table>
            <tr>
                <th>Event Key</th>
                <td>${e.key === ' ' ? 'Space' : e.key}</td>
            </tr>
            <tr>
                <th>Event KeyCode</th>
                <td>${e.keyCode}</td>
            </tr>
            <tr>
                <th>Event Code</th>
                <td>${e.code}</td>
            </tr>
        </table>
  `
})


  