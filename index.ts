async function myfetchApiFunc(): Promise<void> {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/todos");
      const data = await response.json();
      
      data.forEach((element: any) => {
        const markup: string = `<td class="border border-dark p-1">${element.userId}</td>
          <td class="border border-dark p-1">${element.id}</td>
          <td class="border border-dark p-1">${element.title}</td>
          <td class="border border-dark p-1">${element.completed}</td>`;
        
        const table : HTMLTableElement | null = document.querySelector('table');
        if (table) {
          table.insertAdjacentHTML('beforeend', markup);
        }
      });
    } catch (error) {
      console.log("Please check code, there is an error:", error);
    }
  }
  
  myfetchApiFunc();
  