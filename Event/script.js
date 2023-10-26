   document.querySelector(".list2").addEventListener('click', function(e){
       console.log("list 2 is clicked");  
   }, false)  // default false for bubling ( child to parent )

   document.querySelector("#lists").addEventListener('click', function(e){
       console.log("lists is clicked...");
       e.stopPropagation()
   }, true)   // true 

   document.querySelector(".list3").addEventListener('click', function(e){
       console.log("list 3 is clicked");
       e.stopPropagation()
   }, true)

   document.querySelector("#google").addEventListener('click', function(e) {
      e.preventDefault()
   })


   // remove list item after clicked this
   document.querySelector("#lists").addEventListener('click', function(e){
       const item = e.target
       console.log(item)
       item.remove()
   })
