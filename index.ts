interface myData{
  userId : number;
  id:number;
  title:string;
  completed:boolean;
}

async function myfetchApiFunc(): Promise<void> {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await response.json();

    data.forEach((element:myData ) => {
      const markup: string = `<td class="border border-dark p-1">${element.userId}</td>
          <td class="border border-dark p-1">${element.id}</td>
          <td class="border border-dark p-1">${element.title}</td>
          <td class="border border-dark p-1">${element.completed}</td>
       <td class="border border-dark p-1">
       <button class="btn btn-dark" type="button"  onclick="showData(${element.id})" data-toggle="modal" data-target="#exampleModal">view</button>
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
async function showData(i:number): Promise<void>{
const response= await fetch(`https://jsonplaceholder.typicode.com/todos/${i}`);
const data=await response.json();
let myDatashow:string = `
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Data listing</h5>
        <button onclick="refreshPage()" type="button" class="close border-none" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <table class="text-center m-auto border border-dark">
      <tr class="border-collapse">
      <th class="border border-dark">Id<th/>
      <th class="border border-dark">Data no.<th>
      <th class="border border-dark">Data Name<th>
      <th class="border border-dark">Get or not<th>
      </tr>
      <tr class="border-collapse">
      <td class="border border-dark p-1">${data.userId}<td/>
      <td class="border border-dark p-1">${data.id}<td/>
      <td class="border border-dark p-1">${data.title}<td/>
      <td class="border border-dark p-1">${data.completed}<td/>
      <tr/>
      </table>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>`

let getData : HTMLElement | null=document.querySelector(".popupopen");  
if(getData){
  getData.insertAdjacentHTML("beforeend",myDatashow)
}

}
function refreshPage() :void{
  window.location.reload();
} 