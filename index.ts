// const myModal : any = new bootstrap.Modal(document.getElementById('modalId'), options)
async function myfetchApiFunc(): Promise<any> {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await response.json();

    data.forEach((element: any) => {
      const markup: string = `<td class="border border-dark p-1">${element.userId}</td>
          <td class="border border-dark p-1">${element.id}</td>
          <td class="border border-dark p-1">${element.title}</td>
          <td class="border border-dark p-1">${element.completed}</td>
       <td class="border border-dark p-1">
       <button class="btn btn-dark" type="button"  onclick="showData(${element.id})"  data-bs-toggle="modal" data-bs-target="#modalId">view</button>
       </td>`;
      const table: HTMLTableElement | null = document.querySelector("table");
      if (table) {
        table.insertAdjacentHTML("beforeend", markup);
      }
    });
  } catch (error) {
    console.log("Please check code, there is an error:", error);
  }
}

myfetchApiFunc();

async function showData(i:number): Promise<any>{
const response= await fetch(`https://jsonplaceholder.typicode.com/todos/${i}`);
const data=await response.json();
let myDatashow=`
<div class="modal fade" id="modalId" tabindex="-1" data-bs-backdrop="static" data-bs-keyboard="false" role="dialog" aria-labelledby="modalTitleId" aria-hidden="true">
  <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-sm" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="modalTitleId">Modal title</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        Body
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save</button>
      </div>
    </div>
  </div>
</div>`
let popup:HTMLElement | null =document.querySelector(".popupopen");
if(popup){
  popup.insertAdjacentHTML("afterbegin",myDatashow);
}

}
