function handleImageClick(imageSrc, description) {
  document.getElementById('modalImage').src = imageSrc;
  document.getElementById('modalDescription').innerText = description;
  $('#imageModal').modal('show');
}
lightbox.option({
  'resizeDuration': 200,
  'wrapAround': true
});