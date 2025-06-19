$(document).ready(function() {
  $(document).on('click', 'a[id^="reflink1"]', function() {
    $(this).attr("href", "https://link.totalaffiliates.com/c/504863");
  });

  $(document).on('click', '[id="reflink"]', function() {
    const url = 'https://link.totalaffiliates.com/c/504863';
    window.open(url, '_blank');
  });
});