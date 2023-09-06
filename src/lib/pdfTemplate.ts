export const pdfTemplate = ({
  firstName,
  lastName,
  description,
}: {
  firstName: string;
  lastName: string;
  description: string;
}) => {
  return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous">
          
            <title>Document</title>
        </head>
        
        <body>
            <style>
                @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap");
                * {
                   font-family: "Poppins", "sans-serif" !important ;
                 }
                 html {
                    -webkit-print-color-adjust: exact;
                  }
                 @media print {
                     body {
                       font-size: 16px;
                        color: lightgrey;
                     }
        
                      .no-break-inside {
                          /* apply this class to every component that shouldn't be cut off between two pages of your PDF */
                          break-inside: avoid;
                     }
        
                    .break-before {
                    /* apply this class to every component that should always display on the next page */
                    break-before: always;
          }
        }
              
        
    </style>
    <main class="w-[800px] mx-auto  p-[20px] ">
     
        <!-- introdection  -->
        <div class="w-full min-h-[70px] h-fit pt-1 mb-4 flex justify-between  border-b ">
              <div class="w-[50%] flex items-start h-full flex-col justify-start p-4">
                        <h1 class=" font-semibold leading-6 text-xl text-red-500">PDF DOCUMENT</h1>
                    
                        <h3  class=" font-semibold leading-6 text-sm text-gray-900" > your name : <span class="font-normal"> ${firstName} ${""} ${lastName}  </span> </h3>
              </div>
              
        </div>
      
      
       
        <div class="w-full  min-h-[20px] my-2  pt-1 flex justify-start items-start px-4   ">
            <h2 class="  font-bold  leading-6 text-lg text-gray-900 text-start">Project objectives</h2>
        </div>
 
<div class="w-full  min-h-[20px] my-2  pt-1 flex justify-start items-start px-4  no-break-inside ">
    <h2 class="  font-bold  leading-6 text-lg text-gray-900 text-start">Project Mile stones</h2>
</div>





<div class="w-full  min-h-[20px] my-2  pt-1 flex justify-start items-start px-4  no-break-inside ">
    <h2 class="  font-bold  leading-6 text-lg text-gray-900 text-start">stakeholders :</h2>
</div>

    </main>
</body>
<script src="https://cdn.tailwindcss.com" ></script>

</html>
        `;
};
