/* Add this line to any question on a page to hide the "Powered by Qualtrics" footer on that page: */
document.getElementById("Plug").remove();

/* Add this in the header or footer (survey look) to remove "Powered by Qualtrics" from the whole survey: */
<script>
Qualtrics.SurveyEngine.addOnload(function()
{
  document.getElementById("Plug").remove();
});
</script>
