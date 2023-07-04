import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [CommonModule],
  template: `
    <li class="p-4 shadow-md relative">
      <div class="flex gap-2">
        <p class="text-ellipsis overflow-hidden"><strong>Task 1</strong></p>
        <span class="inline-block text-green-400 ml-auto">DONE</span>
        <input type="checkbox" class="appearance-none relative before:content-[''] h-6 before:block before:w-12 before:h-6 before:rounded-full before:bg-white before:shadow-inner-lg before:align-middle after:content-[''] after:block after:w-5 after:h-5 after:bg-slate-200 after:rounded-full after:absolute after:top-[2px] after:left-[2px] checked:after:bg-green-600 checked:after:left-[1.6rem] checked:after:transition-all" />
      </div>
      <hr class="my-2">
      <p>Desciption Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, commodi error repellendus labore doloremque mollitia vitae!</p>
      <small class="text-gray-500 block mt-2 italic">2023/06/30 created</small>
      <!-- delete button -->
      <button class="absolute bottom-4 right-4 group/delete p-2 rounded-full bg-slate-200" aria-label="delete">
        <svg class="text-red" width="16" height="16" viewBox="0 0 61 71" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path class="text-red-300 group-hover/delete:text-red-500 transition-colors duration-300" fill="currentColor" d="M36.3954 56.9943H39.6546C40.0868 56.9943 40.5014 56.8226 40.807 56.517C41.1126 56.2114 41.2843 55.7968 41.2843 55.3646V26.0311C41.2843 25.5989 41.1126 25.1844 40.807 24.8787C40.5014 24.5731 40.0868 24.4014 39.6546 24.4014H36.3954C35.9631 24.4014 35.5486 24.5731 35.243 24.8787C34.9374 25.1844 34.7657 25.5989 34.7657 26.0311V55.3646C34.7657 55.7968 34.9374 56.2114 35.243 56.517C35.5486 56.8226 35.9631 56.9943 36.3954 56.9943ZM58.6671 11.3643H47.4756L42.8582 3.66422C42.2788 2.69868 41.4591 1.89972 40.479 1.34518C39.4989 0.79065 38.3919 0.499464 37.2659 0.500001H23.5741C22.4485 0.499934 21.3421 0.791342 20.3625 1.34585C19.383 1.90036 18.5637 2.69908 17.9845 3.66422L13.3644 11.3643H2.17286C1.59658 11.3643 1.0439 11.5932 0.636415 12.0007C0.228925 12.4082 0 12.9609 0 13.5371L0 15.71C0 16.2863 0.228925 16.839 0.636415 17.2464C1.0439 17.6539 1.59658 17.8829 2.17286 17.8829H4.34571V63.5129C4.34571 65.2417 5.03249 66.8997 6.25496 68.1222C7.47743 69.3447 9.13545 70.0314 10.8643 70.0314H49.9757C51.7045 70.0314 53.3626 69.3447 54.585 68.1222C55.8075 66.8997 56.4943 65.2417 56.4943 63.5129V17.8829H58.6671C59.2434 17.8829 59.7961 17.6539 60.2036 17.2464C60.6111 16.839 60.84 16.2863 60.84 15.71V13.5371C60.84 12.9609 60.6111 12.4082 60.2036 12.0007C59.7961 11.5932 59.2434 11.3643 58.6671 11.3643ZM23.3365 7.41376C23.4091 7.29288 23.5119 7.19292 23.6347 7.12365C23.7575 7.05438 23.8962 7.01818 24.0372 7.01857H36.8028C36.9436 7.01841 37.082 7.05473 37.2045 7.12399C37.3271 7.19325 37.4296 7.29308 37.5022 7.41376L39.8733 11.3643H20.9667L23.3365 7.41376ZM49.9757 63.5129H10.8643V17.8829H49.9757V63.5129ZM21.1854 56.9943H24.4446C24.8768 56.9943 25.2914 56.8226 25.597 56.517C25.9026 56.2114 26.0743 55.7968 26.0743 55.3646V26.0311C26.0743 25.5989 25.9026 25.1844 25.597 24.8787C25.2914 24.5731 24.8768 24.4014 24.4446 24.4014H21.1854C20.7531 24.4014 20.3386 24.5731 20.033 24.8787C19.7274 25.1844 19.5557 25.5989 19.5557 26.0311V55.3646C19.5557 55.7968 19.7274 56.2114 20.033 56.517C20.3386 56.8226 20.7531 56.9943 21.1854 56.9943Z"/>
        </svg>
      </button>
    </li>
  `,
  styles: [
  ]
})
export class TaskItemComponent {

}
