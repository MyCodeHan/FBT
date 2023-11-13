
<script>
   $(document).ready(function () {
      $('nav a').on('click', function (event) {
         event.preventDefault(); // Prevent the default behavior

         var target = $(this).attr('href'); // Get the target section from the href attribute

         // Scroll to the target section
         $('html, body').animate({
            scrollTop: $(target).offset().top
         }, 1000); // Adjust the animation speed as needed
      })
   });
</script>
